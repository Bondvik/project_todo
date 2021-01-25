//Список задач

const tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: true,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095c1288e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
  {
    _id: "5d2ca9e2e03d40b3232496aa7",
    completed: true,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095564788e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
];

(function (arrOfTasks) {
  //1. Делаем из массива объектов задач объект объектов задач
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  const themes = {
    default: {
      "--base-text-color": "#212529",
      "--header-bg": "#007bff",
      "--header-text-color": "#fff",
      "--default-btn-bg": "#007bff",
      "--default-btn-text-color": "#fff",
      "--default-btn-hover-bg": "#0069d9",
      "--default-btn-border-color": "#0069d9",
      "--danger-btn-bg": "#dc3545",
      "--danger-btn-text-color": "#fff",
      "--danger-btn-hover-bg": "#bd2130",
      "--danger-btn-border-color": "#dc3545",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#80bdff",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(0, 123, 255, 0.25)",
    },
    dark: {
      "--base-text-color": "#212529",
      "--header-bg": "#343a40",
      "--header-text-color": "#fff",
      "--default-btn-bg": "#58616b",
      "--default-btn-text-color": "#fff",
      "--default-btn-hover-bg": "#292d31",
      "--default-btn-border-color": "#343a40",
      "--default-btn-focus-box-shadow":
        "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
      "--danger-btn-bg": "#b52d3a",
      "--danger-btn-text-color": "#fff",
      "--danger-btn-hover-bg": "#88222c",
      "--danger-btn-border-color": "#88222c",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#78818a",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
    },
    light: {
      "--base-text-color": "#212529",
      "--header-bg": "#fff",
      "--header-text-color": "#212529",
      "--default-btn-bg": "#fff",
      "--default-btn-text-color": "#212529",
      "--default-btn-hover-bg": "#e8e7e7",
      "--default-btn-border-color": "#343a40",
      "--default-btn-focus-box-shadow":
        "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
      "--danger-btn-bg": "#f1b5bb",
      "--danger-btn-text-color": "#212529",
      "--danger-btn-hover-bg": "#ef808a",
      "--danger-btn-border-color": "#e2818a",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#78818a",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
    },
  };

  //Переключение темы
  const themeSelect = document.querySelector("#themeSelect");

  //Переключение темы. Тема по дефолту
  let lastSelectedTheme = localStorage.getItem("app_theme") || "default";

  //Переключение темы. Вешаем обработчик события
  themeSelect.addEventListener("change", onThemeSelectHandler);

  //Переключение темы. Обработчик события select
  function onThemeSelectHandler(e) {
    const selectedTheme = themeSelect.value;
    const isConfirmed = confirm(
      `Вы точно хотите сменить тему: ${selectedTheme}?`
    );
    if (!isConfirmed) {
      themeSelect.value = lastSelectedTheme;
      return;
    }
    setTheme(selectedTheme);
    lastSelectedTheme = selectedTheme;
    localStorage.setItem("app_theme", selectedTheme);
  }

  //Переключение темы. Ф-я, устанавливающая тему
  function setTheme(name) {
    const selectedThemeObj = themes[name];
    Object.entries(selectedThemeObj).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }

  //Добавление новой задачи через форму
  //9. Ищем форму
  const form = document.forms.addTask;

  //10. Ищем input
  const inputTitle = form.elements.title;
  const inputBody = form.elements.body;

  //11. Вешаем событие на форму
  form.addEventListener("submit", onFormSubmitHandler);

  //12. Создаем ф-ю обработчик события
  function onFormSubmitHandler(event) {
    event.preventDefault();
    //Вытаскиваем, что пришло в поля
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;
    //Проверяем на пустую строку, перед тем как сделать новую задачу
    if (!titleValue || !bodyValue) {
      console.error("Введите значение");
      return;
    }
    const task = createNewTask(titleValue, bodyValue);
    //14. Формируем DOM-element (li) через ф-ю
    const listItem = listItemTemplate(task);
    //15. Добавляем новую задачу в listContainer
    listContainer.insertAdjacentElement("afterbegin", listItem);
    //16. Очищаем форму
    form.reset();
  }

  //13. Создаем объект задачи и добавляем в список задач
  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`,
    };
    objOfTasks[newTask._id] = newTask;
    //Возвращаем копию задачи
    return { ...newTask };
  }

  //7. Ищем ul, куда будем добавлять фрагмент с li
  const listContainer = document.querySelector(
    ".tasks-list-section .list-group"
  );

  //Переключение темы. Применение темы из localStorage
  setTheme(lastSelectedTheme);

  //2. Вывести все задачи на странице
  renderAllTasks(objOfTasks);

  function renderAllTasks(taskList) {
    if (!taskList) {
      console.error("Передеайте список задач!");
      return;
    }

    //5. Формируем контенер, куда будем складывать li
    const fragment = document.createDocumentFragment();

    Object.values(taskList).forEach((task) => {
      //4.Формируем на каждой итерации DOM-объект li из объекта task, используя ф-ю listItemTemplate
      const li = listItemTemplate(task);

      //6.Складываем li в контенер fragment
      fragment.appendChild(li);
    });

    //8.Вставляем li в ul
    listContainer.appendChild(fragment);
  }

  //3. Пишем ф-ю для формирования DOM-объекта, т.е. li
  function listItemTemplate({ _id, title, body }) {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );

    const span = document.createElement("span");
    span.textContent = title;
    span.style.fontWeight = "bold";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");
    deleteBtn.textContent = "Delete";

    const article = document.createElement("p");
    article.classList.add("mt-2", "w-100");
    article.textContent = body;

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(article);

    li.setAttribute("data-task-id", _id);
    return li;
  }

  //Удаление задачи

  //17. Вешаем событие на родителя, т.е. на ul
  listContainer.addEventListener("click", onDeleteHandler);

  //18. Создаем обработчик события onDeleteHandler
  function onDeleteHandler(event) {
    if (event.target.classList.contains("delete-btn")) {
      const parent = event.target.closest("[data-task-id]"); //ищем родителя(li) с атрибутом
      const id = parent.dataset.taskId;
      const confirmed = deleteTask(id);
      deleteTaskFromHtml(confirmed, parent);
    }
  }

  //19. Удаление задачи
  function deleteTask(id) {
    const isConfirm = confirm("Точно вы хотите удалить задачу?");
    if (!isConfirm) {
      return isConfirm;
    }
    delete objOfTasks[id];
    return isConfirm;
  }

  //20. Удаление задачи из разметки
  function deleteTaskFromHtml(confirmed, el) {
    if (!confirmed) {
      return;
    }
    el.remove();
  }
})(tasks);
