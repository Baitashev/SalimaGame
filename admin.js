const ADMIN_PASSWORD = "Beknazar2026!";
const SESSION_KEY = "love-admin-authenticated";
const DB_NAME = "beknazar-love-admin";
const DB_VERSION = 1;
const STORE_NAME = "responses";

const state = { responses: [], selectedId: null };

const elements = {
  adminLogin: document.querySelector("#adminLogin"),
  adminDashboard: document.querySelector("#adminDashboard"),
  loginForm: document.querySelector("#loginForm"),
  adminPassword: document.querySelector("#adminPassword"),
  loginError: document.querySelector("#loginError"),
  logoutButton: document.querySelector("#logoutButton"),
  importButton: document.querySelector("#importButton"),
  importInput: document.querySelector("#importInput"),
  adminNotice: document.querySelector("#adminNotice"),
  responseCount: document.querySelector("#responseCount"),
  answerCount: document.querySelector("#answerCount"),
  categoryCount: document.querySelector("#categoryCount"),
  fileCount: document.querySelector("#fileCount"),
  responsesList: document.querySelector("#responsesList"),
  emptyResponses: document.querySelector("#emptyResponses"),
  responsePlaceholder: document.querySelector("#responsePlaceholder"),
  responseDetail: document.querySelector("#responseDetail"),
  detailDate: document.querySelector("#detailDate"),
  detailTitle: document.querySelector("#detailTitle"),
  responseSummary: document.querySelector("#responseSummary"),
  answersContainer: document.querySelector("#answersContainer"),
  filesSection: document.querySelector("#filesSection"),
  filesContainer: document.querySelector("#filesContainer"),
  deleteResponseButton: document.querySelector("#deleteResponseButton"),
};

function setAuthenticated(isAuthenticated) {
  elements.adminLogin.classList.toggle("hidden", isAuthenticated);
  elements.adminDashboard.classList.toggle("hidden", !isAuthenticated);
  if (isAuthenticated) sessionStorage.setItem(SESSION_KEY, "yes");
  else sessionStorage.removeItem(SESSION_KEY);
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) db.createObjectStore(STORE_NAME, { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function withStore(mode, operation) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, mode);
    const store = transaction.objectStore(STORE_NAME);
    const request = operation(store);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
    transaction.oncomplete = () => db.close();
    transaction.onerror = () => reject(transaction.error);
  });
}

const getAllResponses = () => withStore("readonly", (store) => store.getAll());
const saveResponse = (response) => withStore("readwrite", (store) => store.put(response));
const removeResponse = (id) => withStore("readwrite", (store) => store.delete(id));

function showNotice(message, isError = false) {
  elements.adminNotice.textContent = message;
  elements.adminNotice.classList.remove("hidden");
  elements.adminNotice.classList.toggle("error", isError);
  window.clearTimeout(showNotice.timer);
  showNotice.timer = window.setTimeout(() => elements.adminNotice.classList.add("hidden"), 5500);
}

function validatePackage(data) {
  if (!data || data.format !== "beknazar-love-response") throw new Error("Это не файл ответов сайта.");
  if (![1, 2].includes(Number(data.version))) throw new Error("Версия файла не поддерживается.");
  if (!data.id || !Array.isArray(data.answers) || !Array.isArray(data.files)) throw new Error("Файл повреждён или неполный.");
  return data;
}

async function importFiles(fileList) {
  const files = Array.from(fileList || []);
  if (!files.length) return;
  let imported = 0;
  let failed = 0;

  for (const file of files) {
    try {
      const data = validatePackage(JSON.parse(await file.text()));
      data.importedAt = new Date().toISOString();
      await saveResponse(data);
      imported += 1;
    } catch (error) {
      console.error(error);
      failed += 1;
    }
  }

  elements.importInput.value = "";
  await loadResponses();
  showNotice(failed ? `Импортировано: ${imported}. Не удалось: ${failed}.` : `Импортировано файлов: ${imported} ♥`, failed > 0);
}

async function loadResponses() {
  state.responses = (await getAllResponses()).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  renderDashboard();
}

function uniqueCategories(response) {
  const fromCompleted = Array.isArray(response.completedCategories) ? response.completedCategories : [];
  const fromAnswers = (response.answers || []).map((item) => item.categoryId || item.category).filter(Boolean);
  return new Set([...fromCompleted, ...fromAnswers]);
}

function renderDashboard() {
  const totalAnswers = state.responses.reduce((sum, response) => sum + (response.answers?.length || 0), 0);
  const totalFiles = state.responses.reduce((sum, response) => sum + (response.files?.length || 0), 0);
  const totalCategories = state.responses.reduce((sum, response) => sum + uniqueCategories(response).size, 0);
  elements.responseCount.textContent = String(state.responses.length);
  elements.answerCount.textContent = String(totalAnswers);
  elements.fileCount.textContent = String(totalFiles);
  elements.categoryCount.textContent = String(totalCategories);

  elements.responsesList.replaceChildren();
  elements.emptyResponses.classList.toggle("hidden", state.responses.length > 0);
  state.responses.forEach((response) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "response-list-item";
    button.classList.toggle("active", response.id === state.selectedId);

    const title = document.createElement("strong");
    title.textContent = response.respondentName || "Салима";
    const date = document.createElement("span");
    date.textContent = formatDate(response.createdAt);
    const badge = document.createElement("em");
    badge.textContent = `${response.answers?.length || 0} ответов • ${uniqueCategories(response).size} тем`;
    button.append(title, date, badge);
    button.addEventListener("click", () => selectResponse(response.id));
    elements.responsesList.append(button);
  });

  if (state.selectedId && !state.responses.some((item) => item.id === state.selectedId)) state.selectedId = null;
  if (state.selectedId) renderSelectedResponse();
}

function selectResponse(id) {
  state.selectedId = id;
  renderDashboard();
  elements.responsePlaceholder.classList.add("hidden");
  elements.responseDetail.classList.remove("hidden");
  renderSelectedResponse();
}

function renderSelectedResponse() {
  const response = state.responses.find((item) => item.id === state.selectedId);
  if (!response) {
    elements.responsePlaceholder.classList.remove("hidden");
    elements.responseDetail.classList.add("hidden");
    return;
  }

  elements.detailDate.textContent = formatDate(response.createdAt);
  elements.detailTitle.textContent = `Ответы: ${response.respondentName || "Салима"}`;
  elements.responseSummary.replaceChildren();
  [
    `${response.answers?.length || 0} ответов`,
    `${uniqueCategories(response).size} категорий`,
    `${response.files?.length || 0} вложений`,
    response.version === 2 ? "Мини-игра v2" : "Первая анкета",
  ].forEach((text) => {
    const chip = document.createElement("span");
    chip.className = "summary-chip";
    chip.textContent = text;
    elements.responseSummary.append(chip);
  });

  const groups = new Map();
  (response.answers || []).forEach((item) => {
    const key = item.category || "Ответы";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  });

  elements.answersContainer.replaceChildren();
  groups.forEach((items, categoryName) => {
    const section = document.createElement("section");
    section.className = "answer-category-section";
    const heading = document.createElement("h3");
    heading.className = "answer-category-title";
    heading.textContent = `${items[0]?.emoji || "♥"} ${categoryName}`;
    section.append(heading);

    items.forEach((item, index) => {
      const card = document.createElement("article");
      card.className = "answer-card";
      const number = document.createElement("span");
      number.textContent = `Вопрос ${index + 1}`;
      const title = document.createElement("h3");
      title.textContent = item.question || item.id;
      const answer = document.createElement("p");
      answer.textContent = String(item.answer ?? "—") || "—";
      card.append(number, title, answer);
      section.append(card);
    });
    elements.answersContainer.append(section);
  });

  const files = response.files || [];
  elements.filesContainer.replaceChildren();
  elements.filesSection.classList.toggle("hidden", files.length === 0);
  files.forEach((file) => {
    const link = document.createElement("a");
    link.className = "file-card";
    link.href = file.dataUrl;
    link.download = file.name || "attachment";
    link.target = "_blank";
    link.rel = "noopener";
    const name = document.createElement("strong");
    name.textContent = file.name || "Файл";
    const meta = document.createElement("span");
    meta.textContent = `${file.type || "файл"} · ${formatBytes(file.size)}`;
    const action = document.createElement("span");
    action.textContent = "Открыть / скачать →";
    link.append(name, meta, action);
    elements.filesContainer.append(link);
  });
}

function formatDate(value) {
  try {
    return new Intl.DateTimeFormat("ru-RU", { dateStyle: "long", timeStyle: "short" }).format(new Date(value));
  } catch {
    return value || "Дата неизвестна";
  }
}

function formatBytes(bytes) {
  if (!bytes) return "0 Б";
  const units = ["Б", "КБ", "МБ", "ГБ"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / (1024 ** index)).toFixed(index ? 1 : 0)} ${units[index]}`;
}

async function deleteSelectedResponse() {
  const response = state.responses.find((item) => item.id === state.selectedId);
  if (!response) return;
  if (!window.confirm(`Удалить ответы «${response.respondentName || "Салима"}» с этого устройства?`)) return;
  await removeResponse(response.id);
  state.selectedId = null;
  elements.responseDetail.classList.add("hidden");
  elements.responsePlaceholder.classList.remove("hidden");
  await loadResponses();
  showNotice("Ответы удалены с этого устройства.");
}

elements.loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (elements.adminPassword.value === ADMIN_PASSWORD) {
    elements.loginError.textContent = "";
    setAuthenticated(true);
    await loadResponses();
  } else {
    elements.loginError.textContent = "Неверный пароль.";
  }
});
elements.logoutButton.addEventListener("click", () => { setAuthenticated(false); elements.adminPassword.value = ""; });
elements.importButton.addEventListener("click", () => elements.importInput.click());
elements.importInput.addEventListener("change", () => importFiles(elements.importInput.files));
elements.deleteResponseButton.addEventListener("click", deleteSelectedResponse);

if (sessionStorage.getItem(SESSION_KEY) === "yes") {
  setAuthenticated(true);
  loadResponses().catch((error) => { console.error(error); showNotice("Не удалось открыть локальное хранилище браузера.", true); });
} else {
  setAuthenticated(false);
}
