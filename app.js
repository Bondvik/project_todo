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

  //7. Ищем ul, куда будем добавлять фрагмент с li
  const listContainer = document.querySelector(
    ".tasks-list-section .list-group"
  );

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

    return li;
  }
})(tasks);