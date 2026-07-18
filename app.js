import { categories, questions } from "./questions.js";
import { loveQuotes, photoSources } from "./content.js";

const STORAGE_KEY = "beknazar-love-mini-game-v2";
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_TOTAL_FILE_SIZE = 30 * 1024 * 1024;
const ALLOWED_TYPES = ["image/", "video/", "application/pdf"];

const savedState = loadSavedState();
const state = {
  respondentName: savedState.respondentName || "Салима",
  answers: savedState.answers || {},
  completedCategories: new Set(savedState.completedCategories || []),
  activeCategoryId: null,
  categoryQuestions: [],
  index: 0,
  files: {},
  lastMood: savedState.lastMood || null,
  responseFile: null,
  quoteIndex: Math.floor(Math.random() * loveQuotes.length),
  photoIndex: 0,
  activePhotoLayer: "a",
};

const elements = {
  homeScreen: document.querySelector("#homeScreen"),
  gameScreen: document.querySelector("#gameScreen"),
  completeScreen: document.querySelector("#completeScreen"),
  sendingScreen: document.querySelector("#sendingScreen"),
  categoriesGrid: document.querySelector("#categoriesGrid"),
  respondentName: document.querySelector("#respondentName"),
  moodMessage: document.querySelector("#moodMessage"),
  loveQuote: document.querySelector("#loveQuote"),
  nextQuoteButton: document.querySelector("#nextQuoteButton"),
  exportAllButton: document.querySelector("#exportAllButton"),
  resetProgressButton: document.querySelector("#resetProgressButton"),
  exitCategoryButton: document.querySelector("#exitCategoryButton"),
  saveExitButton: document.querySelector("#saveExitButton"),
  categoryEyebrow: document.querySelector("#categoryEyebrow"),
  categoryTitle: document.querySelector("#categoryTitle"),
  currentQuestionNumber: document.querySelector("#currentQuestionNumber"),
  totalQuestionCount: document.querySelector("#totalQuestionCount"),
  progressBar: document.querySelector("#progressBar"),
  questionForm: document.querySelector("#questionForm"),
  questionEmoji: document.querySelector("#questionEmoji"),
  questionKind: document.querySelector("#questionKind"),
  questionTitle: document.querySelector("#questionTitle"),
  questionHint: document.querySelector("#questionHint"),
  answerArea: document.querySelector("#answerArea"),
  validationMessage: document.querySelector("#validationMessage"),
  backButton: document.querySelector("#backButton"),
  nextButton: document.querySelector("#nextButton"),
  completeTitle: document.querySelector("#completeTitle"),
  completeCopy: document.querySelector("#completeCopy"),
  completeQuote: document.querySelector("#completeQuote"),
  shareResponseButton: document.querySelector("#shareResponseButton"),
  chooseAnotherButton: document.querySelector("#chooseAnotherButton"),
  shareStatus: document.querySelector("#shareStatus"),
  sendingStatus: document.querySelector("#sendingStatus"),
  floatingHearts: document.querySelector("#floatingHearts"),
  photoLayerA: document.querySelector("#photoLayerA"),
  photoLayerB: document.querySelector("#photoLayerB"),
  railPhotoOne: document.querySelector("#railPhotoOne"),
  railPhotoTwo: document.querySelector("#railPhotoTwo"),
  railPhotoThree: document.querySelector("#railPhotoThree"),
  railPhotoFour: document.querySelector("#railPhotoFour"),
};

function loadSavedState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") || {};
  } catch {
    return {};
  }
}

function saveState() {
  const serializable = {
    respondentName: state.respondentName,
    answers: state.answers,
    completedCategories: Array.from(state.completedCategories),
    lastMood: state.lastMood,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
}

function showOnly(target) {
  [elements.homeScreen, elements.gameScreen, elements.completeScreen, elements.sendingScreen]
    .forEach((section) => section.classList.toggle("hidden", section !== target));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function normalizeAnswer(value) {
  return typeof value === "string" ? value.trim() : value;
}

function answered(question) {
  if (question.type === "file") return Boolean(state.files[question.id]?.length);
  const value = normalizeAnswer(state.answers[question.id]);
  return value !== undefined && value !== null && value !== "";
}

function categoryQuestions(categoryId) {
  return questions.filter((question) => question.categoryId === categoryId);
}

function categoryProgress(categoryId) {
  const list = categoryQuestions(categoryId);
  const required = list.filter((question) => question.required);
  const answeredCount = required.filter(answered).length;
  return { answeredCount, total: required.length, percent: required.length ? Math.round((answeredCount / required.length) * 100) : 0 };
}

function renderCategories() {
  elements.categoriesGrid.replaceChildren();
  categories.forEach((category) => {
    const progress = categoryProgress(category.id);
    const card = document.createElement("article");
    card.className = "category-card glass-card";
    if (state.completedCategories.has(category.id)) card.classList.add("completed");

    const top = document.createElement("div");
    top.className = "category-top";
    const emoji = document.createElement("span");
    emoji.className = "category-emoji";
    emoji.textContent = category.emoji;
    const badge = document.createElement("span");
    badge.className = "category-badge";
    badge.textContent = state.completedCategories.has(category.id)
      ? "Пройдено"
      : progress.answeredCount > 0 ? `${progress.answeredCount}/${progress.total}` : `${category.questionCount} вопросов`;
    top.append(emoji, badge);

    const title = document.createElement("h3");
    title.textContent = category.title;
    const description = document.createElement("p");
    description.textContent = category.description;

    const track = document.createElement("div");
    track.className = "category-progress-track";
    const bar = document.createElement("div");
    bar.className = "category-progress-bar";
    bar.style.width = `${progress.percent}%`;
    track.append(bar);

    const button = document.createElement("button");
    button.className = "category-open-button";
    button.type = "button";
    button.textContent = progress.answeredCount > 0 && !state.completedCategories.has(category.id)
      ? "Продолжить →"
      : state.completedCategories.has(category.id) ? "Пройти ещё раз →" : "Начать игру →";
    button.addEventListener("click", () => openCategory(category.id));

    card.append(top, title, description, track, button);
    elements.categoriesGrid.append(card);
  });

  const answeredTotal = questions.filter(answered).length;
  elements.exportAllButton.disabled = answeredTotal === 0;
  elements.exportAllButton.textContent = answeredTotal
    ? `Отправить сохранённые ответы (${answeredTotal}) 💌`
    : "Отправить сохранённые ответы 💌";
}

function openCategory(categoryId) {
  const category = categories.find((item) => item.id === categoryId);
  if (!category) return;

  state.activeCategoryId = categoryId;
  state.categoryQuestions = categoryQuestions(categoryId);
  const firstUnanswered = state.categoryQuestions.findIndex((question) => question.required && !answered(question));
  state.index = firstUnanswered >= 0 ? firstUnanswered : 0;
  elements.categoryEyebrow.textContent = `${category.emoji} Мини-игра`;
  elements.categoryTitle.textContent = category.title;
  renderQuestion();
  showOnly(elements.gameScreen);
}

function renderQuestion() {
  const question = state.categoryQuestions[state.index];
  if (!question) return;

  elements.questionForm.style.animation = "none";
  void elements.questionForm.offsetHeight;
  elements.questionForm.style.animation = "cardIn .35s ease";

  elements.currentQuestionNumber.textContent = String(state.index + 1);
  elements.totalQuestionCount.textContent = String(state.categoryQuestions.length);
  elements.progressBar.style.width = `${((state.index + 1) / state.categoryQuestions.length) * 100}%`;
  elements.questionEmoji.textContent = question.emoji;
  elements.questionKind.textContent = question.required ? "Ответ обязателен в этой категории" : "Можно пропустить";
  elements.questionTitle.textContent = question.title;
  elements.questionHint.textContent = question.hint || defaultHint(question.type);
  elements.validationMessage.textContent = "";
  elements.backButton.disabled = state.index === 0;
  elements.nextButton.textContent = state.index === state.categoryQuestions.length - 1 ? "Завершить категорию ♥" : "Дальше →";
  elements.answerArea.replaceChildren(buildAnswerControl(question));
}

function defaultHint(type) {
  if (type === "choice") return "Выбери вариант, который ближе всего сейчас.";
  if (type === "scale") return "Здесь нет правильной оценки — важна только честность.";
  if (type === "file") return "Фото, видео или PDF. Прикреплять файл необязательно.";
  return "Можно ответить коротко или написать целую историю.";
}

function buildAnswerControl(question) {
  switch (question.type) {
    case "text": return buildTextInput(question);
    case "textarea": return buildTextarea(question);
    case "choice": return buildChoice(question);
    case "scale": return buildScale(question);
    case "runaway": return buildRunaway(question);
    case "file": return buildFile(question);
    default: throw new Error(`Неизвестный тип вопроса: ${question.type}`);
  }
}

function bindTextChange(control, question) {
  control.addEventListener("input", () => {
    state.answers[question.id] = control.value;
    saveState();
    elements.validationMessage.textContent = "";
  });
}

function buildTextInput(question) {
  const input = document.createElement("input");
  input.className = "text-input";
  input.type = "text";
  input.maxLength = 700;
  input.placeholder = question.placeholder || "Напиши короткий ответ…";
  input.value = state.answers[question.id] || "";
  input.autocomplete = "off";
  bindTextChange(input, question);
  window.setTimeout(() => input.focus(), 120);
  return input;
}

function buildTextarea(question) {
  const textarea = document.createElement("textarea");
  textarea.className = "textarea-input";
  textarea.maxLength = 4000;
  textarea.placeholder = question.placeholder || "Напиши то, что чувствуешь…";
  textarea.value = state.answers[question.id] || "";
  bindTextChange(textarea, question);
  window.setTimeout(() => textarea.focus(), 120);
  return textarea;
}

function buildChoice(question) {
  const wrapper = document.createElement("div");
  wrapper.className = "options-grid";
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = option;
    button.classList.toggle("selected", state.answers[question.id] === option);
    button.addEventListener("click", () => {
      state.answers[question.id] = option;
      saveState();
      wrapper.querySelectorAll(".option-button").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      elements.validationMessage.textContent = "";
    });
    wrapper.append(button);
  });
  return wrapper;
}

function buildScale(question) {
  const wrapper = document.createElement("div");
  wrapper.className = "scale-wrap";
  const value = Number(state.answers[question.id] ?? 5);
  if (state.answers[question.id] === undefined) {
    state.answers[question.id] = value;
    saveState();
  }

  const output = document.createElement("div");
  output.className = "scale-value";
  output.textContent = String(value);

  const input = document.createElement("input");
  input.className = "scale-input";
  input.type = "range";
  input.min = question.min;
  input.max = question.max;
  input.value = value;
  input.addEventListener("input", () => {
    state.answers[question.id] = Number(input.value);
    output.textContent = input.value;
    saveState();
    elements.validationMessage.textContent = "";
  });

  const labels = document.createElement("div");
  labels.className = "scale-labels";
  const left = document.createElement("span");
  left.textContent = question.minLabel;
  const right = document.createElement("span");
  right.textContent = question.maxLabel;
  labels.append(left, right);
  wrapper.append(output, input, labels);
  return wrapper;
}

function buildRunaway(question) {
  const wrapper = document.createElement("div");
  const zone = document.createElement("div");
  zone.className = "runaway-zone";

  const yesButton = document.createElement("button");
  yesButton.type = "button";
  yesButton.className = "primary-button runaway-button yes-button";
  yesButton.textContent = state.answers[question.id] ? "Я так и знал ♥" : question.yesText;

  const noButton = document.createElement("button");
  noButton.type = "button";
  noButton.className = "runaway-button no-button";
  noButton.textContent = question.noText;

  const note = document.createElement("p");
  note.className = "runaway-note";
  note.textContent = state.answers[question.id]
    ? "Ответ принят. Но я всё равно люблю слышать это ещё раз ♥"
    : "Попробуй поймать кнопку «Нет» — она очень пугливая 😌";

  let isAdvancing = false;
  const selectYes = () => {
    if (isAdvancing) return;
    isAdvancing = true;
    state.answers[question.id] = question.yesText;
    saveState();
    yesButton.textContent = "Я так и знал ♥";
    yesButton.disabled = true;
    yesButton.classList.add("accepted");
    noButton.disabled = true;
    noButton.style.opacity = "0";
    note.textContent = "Я тоже тебя очень люблю. Идём дальше вместе… ♥";
    elements.validationMessage.textContent = "";
    createHeartBurst(28);
    window.setTimeout(() => {
      if (state.categoryQuestions[state.index]?.id !== question.id) return;
      if (state.index < state.categoryQuestions.length - 1) {
        state.index += 1;
        renderQuestion();
      } else {
        completeCategory();
      }
    }, 1100);
  };

  const moveNo = () => {
    const maxX = Math.max(8, zone.clientWidth - noButton.offsetWidth - 8);
    const maxY = Math.max(8, zone.clientHeight - noButton.offsetHeight - 8);
    noButton.style.left = `${Math.random() * maxX}px`;
    noButton.style.top = `${Math.random() * maxY}px`;
  };

  yesButton.addEventListener("click", selectYes);
  noButton.addEventListener("pointerenter", moveNo);
  noButton.addEventListener("pointerdown", (event) => { event.preventDefault(); moveNo(); });
  noButton.addEventListener("focus", moveNo);
  zone.append(yesButton, noButton);
  wrapper.append(zone, note);
  return wrapper;
}

function buildFile(question) {
  const wrapper = document.createElement("div");
  const drop = document.createElement("label");
  drop.className = "file-drop";
  drop.innerHTML = "<strong>Нажми или перетащи файлы сюда</strong><span>Фото, видео или PDF — до 10 МБ каждый</span>";

  const input = document.createElement("input");
  input.type = "file";
  input.accept = question.accept || "*/*";
  input.multiple = Boolean(question.multiple);

  const list = document.createElement("div");
  list.className = "file-list";

  const renderFiles = () => {
    list.replaceChildren();
    const files = state.files[question.id] || [];
    files.forEach((file) => {
      const chip = document.createElement("div");
      chip.className = "file-chip";
      chip.textContent = `${file.name} · ${formatBytes(file.size)}`;
      list.append(chip);
    });
  };

  input.addEventListener("change", () => {
    const selected = Array.from(input.files || []);
    const invalid = selected.find((file) => !ALLOWED_TYPES.some((type) => file.type.startsWith(type)));
    const oversized = selected.find((file) => file.size > MAX_FILE_SIZE);
    const currentOtherFiles = Object.entries(state.files)
      .filter(([id]) => id !== question.id)
      .flatMap(([, files]) => files);
    const total = [...currentOtherFiles, ...selected].reduce((sum, file) => sum + file.size, 0);

    if (invalid) {
      elements.validationMessage.textContent = `Файл «${invalid.name}» имеет неподдерживаемый формат.`;
      input.value = "";
      return;
    }
    if (oversized) {
      elements.validationMessage.textContent = `Файл «${oversized.name}» больше 10 МБ.`;
      input.value = "";
      return;
    }
    if (total > MAX_TOTAL_FILE_SIZE) {
      elements.validationMessage.textContent = "Общий размер всех вложений не должен превышать 30 МБ.";
      input.value = "";
      return;
    }

    state.files[question.id] = selected;
    elements.validationMessage.textContent = "";
    renderFiles();
  });

  drop.append(input);
  wrapper.append(drop, list);
  renderFiles();
  return wrapper;
}

function formatBytes(bytes) {
  if (!bytes) return "0 Б";
  const units = ["Б", "КБ", "МБ", "ГБ"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / (1024 ** index)).toFixed(index ? 1 : 0)} ${units[index]}`;
}

function validateCurrentQuestion() {
  const question = state.categoryQuestions[state.index];
  if (!question.required) return true;
  if (!answered(question)) {
    elements.validationMessage.textContent = "Чтобы завершить эту тему, ответь на вопрос ♥";
    elements.questionForm.classList.remove("shake");
    void elements.questionForm.offsetHeight;
    elements.questionForm.classList.add("shake");
    return false;
  }
  return true;
}

function nextQuestion() {
  if (!validateCurrentQuestion()) return;
  if (state.index < state.categoryQuestions.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    completeCategory();
  }
}

function completeCategory() {
  const missingIndex = state.categoryQuestions.findIndex((question) => question.required && !answered(question));
  if (missingIndex >= 0) {
    state.index = missingIndex;
    renderQuestion();
    elements.validationMessage.textContent = "В этой категории остался обязательный вопрос.";
    return;
  }

  const category = categories.find((item) => item.id === state.activeCategoryId);
  state.completedCategories.add(state.activeCategoryId);
  saveState();
  elements.completeTitle.textContent = `«${category.title}» пройдена`;
  elements.completeCopy.textContent = `Ты ответила на ${state.categoryQuestions.length} вопросов. Всё сохранено на этом устройстве — можно выбрать новую тему или отправить ответы Бекназару.`;
  elements.completeQuote.textContent = randomItem(loveQuotes);
  elements.shareStatus.textContent = "";
  showOnly(elements.completeScreen);
  createHeartBurst(36);
}

function returnHome(message = "") {
  state.activeCategoryId = null;
  state.categoryQuestions = [];
  state.index = 0;
  renderCategories();
  if (message) elements.moodMessage.textContent = message;
  showOnly(elements.homeScreen);
}

function chooseByMood(mood) {
  const pool = mood === "random"
    ? categories
    : categories.filter((category) => category.moods.includes(mood));
  const notCompleted = pool.filter((category) => !state.completedCategories.has(category.id));
  const selected = randomItem(notCompleted.length ? notCompleted : pool);
  state.lastMood = mood;
  saveState();

  const messages = {
    sad: "Я выбрал для тебя мягкую тему. Здесь можно отвечать медленно и без правильных слов ♥",
    bored: "Сейчас будет что-то лёгкое и весёлое. Готова?",
    close: "Эта тема поможет нам услышать друг друга немного глубже.",
    random: "Судьба выбрала тему за тебя 🎲",
  };
  elements.moodMessage.textContent = messages[mood];
  window.setTimeout(() => openCategory(selected.id), 450);
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function showQuote(next = false) {
  if (next) state.quoteIndex = (state.quoteIndex + 1) % loveQuotes.length;
  elements.loveQuote.classList.remove("quote-pop");
  void elements.loveQuote.offsetHeight;
  elements.loveQuote.textContent = loveQuotes[state.quoteIndex];
  elements.loveQuote.classList.add("quote-pop");
}

function cycleBackground() {
  const nextIndex = (state.photoIndex + 1) % photoSources.length;
  const nextSource = photoSources[nextIndex];
  const incoming = state.activePhotoLayer === "a" ? elements.photoLayerB : elements.photoLayerA;
  const outgoing = state.activePhotoLayer === "a" ? elements.photoLayerA : elements.photoLayerB;
  incoming.style.backgroundImage = `url("${nextSource}")`;
  incoming.classList.add("visible");
  outgoing.classList.remove("visible");
  state.activePhotoLayer = state.activePhotoLayer === "a" ? "b" : "a";
  state.photoIndex = nextIndex;
}

function setupPhotos() {
  elements.photoLayerA.style.backgroundImage = `url("${photoSources[0]}")`;
  elements.photoLayerA.classList.add("visible");
  [elements.railPhotoOne, elements.railPhotoTwo, elements.railPhotoThree, elements.railPhotoFour]
    .forEach((img, index) => { img.src = photoSources[(index + 1) % photoSources.length]; });
  window.setInterval(cycleBackground, 11000);
}

function createHeartBurst(count = 20) {
  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.3 ? "♥" : "♡";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${14 + Math.random() * 24}px`;
    heart.style.animationDuration = `${3.8 + Math.random() * 4}s`;
    heart.style.animationDelay = `${Math.random() * 0.55}s`;
    elements.floatingHearts.append(heart);
    window.setTimeout(() => heart.remove(), 8500);
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error || new Error(`Не удалось прочитать ${file.name}`));
    reader.readAsDataURL(file);
  });
}

async function buildResponseFile() {
  const answeredQuestions = questions.filter((question) => answered(question));
  if (!answeredQuestions.length) throw new Error("Нет сохранённых ответов");

  const relevantFiles = Object.entries(state.files).flatMap(([questionId, files]) =>
    files.map((file) => ({ questionId, file }))
  );
  const encodedFiles = [];
  for (let index = 0; index < relevantFiles.length; index += 1) {
    const { questionId, file } = relevantFiles[index];
    elements.sendingStatus.textContent = `Добавляю файл ${index + 1} из ${relevantFiles.length}: ${file.name}`;
    encodedFiles.push({
      questionId,
      name: file.name,
      type: file.type || "application/octet-stream",
      size: file.size,
      dataUrl: await readFileAsDataUrl(file),
    });
  }

  const packageData = {
    format: "beknazar-love-response",
    version: 2,
    id: crypto.randomUUID ? crypto.randomUUID() : `love-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
    respondentName: state.respondentName || "Салима",
    completedCategories: Array.from(state.completedCategories),
    totalAvailableQuestions: questions.length,
    answers: answeredQuestions.map((question) => ({
      id: question.id,
      categoryId: question.categoryId,
      category: question.category,
      emoji: question.emoji,
      question: question.title,
      answer: question.type === "file"
        ? `Прикреплено файлов: ${state.files[question.id]?.length || 0}`
        : state.answers[question.id],
    })),
    files: encodedFiles,
  };

  const date = new Date().toISOString().slice(0, 10);
  return new File([JSON.stringify(packageData)], `otvety-salimy-${date}.love`, { type: "application/json" });
}

function downloadFile(file) {
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");

  link.href = url;
  link.download = file.name;

  document.body.append(link);
  link.click();
  link.remove();

  window.setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 2000);
}

async function shareSavedAnswers(clickedButton) {
  const isCompleteScreen =
    !elements.completeScreen.classList.contains("hidden");

  const statusTarget = isCompleteScreen
    ? elements.shareStatus
    : elements.moodMessage;

  const button = clickedButton || elements.exportAllButton;
  const originalButtonText = button.textContent;

  statusTarget.textContent = "";
  button.disabled = true;
  button.textContent = "Собираю ответы… 💌";

  try {
    state.respondentName =
      elements.respondentName.value.trim() || "Салима";

    saveState();

    // Сначала создаём файл с ответами
    state.responseFile = await buildResponseFile();

    button.textContent = "Готово! Отправляю… 💌";

    const shareData = {
      files: [state.responseFile],
      title: "Мои ответы для Бекназара",
      text: "Я ответила на наши вопросы ♥"
    };

    let sharedSuccessfully = false;

    // Пробуем открыть системное меню отправки
    if (
      navigator.share &&
      navigator.canShare &&
      navigator.canShare(shareData)
    ) {
      try {
        await navigator.share(shareData);

        sharedSuccessfully = true;

        statusTarget.textContent =
          "Ответы отправлены через выбранное приложение ♥";
      } catch (shareError) {
        console.warn(
          "Системная отправка недоступна, скачиваю файл:",
          shareError
        );

        // Если пользователь сам закрыл меню отправки
        if (shareError?.name === "AbortError") {
          statusTarget.textContent =
            "Отправка отменена. Сейчас файл будет скачан на устройство.";
        }
      }
    }

    // Если системная отправка не сработала — скачиваем файл
    if (!sharedSuccessfully) {
      downloadFile(state.responseFile);

      statusTarget.textContent =
        "Файл с ответами скачан ♥ Отправь его Бекназару через Telegram или WhatsApp.";
    }
  } catch (error) {
    console.error("Ошибка создания файла с ответами:", error);

    statusTarget.textContent =
      `Не удалось собрать ответы: ${error?.message || "неизвестная ошибка"}`;
  } finally {
    button.disabled = false;
    button.textContent = originalButtonText;
  }
}

function resetProgress() {
  const approved = window.confirm("Сбросить все сохранённые ответы и прогресс на этом устройстве?");
  if (!approved) return;
  state.answers = {};
  state.files = {};
  state.completedCategories.clear();
  localStorage.removeItem(STORAGE_KEY);
  renderCategories();
  elements.moodMessage.textContent = "Прогресс очищен. Можно начать новую историю ♥";
}

// Events
elements.respondentName.value = state.respondentName;
elements.respondentName.addEventListener("input", () => {
  state.respondentName = elements.respondentName.value.trim() || "Салима";
  saveState();
});

document.querySelectorAll("[data-mood]").forEach((button) => {
  button.addEventListener("click", () => chooseByMood(button.dataset.mood));
});

elements.nextQuoteButton.addEventListener("click", () => showQuote(true));
elements.nextButton.addEventListener("click", nextQuestion);
elements.backButton.addEventListener("click", () => {
  if (state.index > 0) {
    state.index -= 1;
    renderQuestion();
  }
});
elements.exitCategoryButton.addEventListener("click", () => returnHome("Ответы сохранены. Возвращайся к этой теме в любой момент ♥"));
elements.saveExitButton.addEventListener("click", () => returnHome("Черновик сохранён. Продолжить можно с первого неотвеченного вопроса."));
elements.chooseAnotherButton.addEventListener("click", () => returnHome("Выбирай следующую тему по настроению."));
elements.shareResponseButton.addEventListener("click", (event) => {
  shareSavedAnswers(event.currentTarget);
});
elements.exportAllButton.addEventListener("click", (event) => {
  shareSavedAnswers(event.currentTarget);
});
elements.resetProgressButton.addEventListener("click", resetProgress);

// Initial render
setupPhotos();
showQuote();
renderCategories();
showOnly(elements.homeScreen);
window.setInterval(() => showQuote(true), 9000);
window.setTimeout(() => createHeartBurst(14), 800);
