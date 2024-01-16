window.addEventListener("load", () => {
  // DOM elements reference
  const formCreate = document.querySelector("#form-create");
  const taskList = document.querySelector("#todo-list");
  const inputCreate = document.querySelector("#create");
  const inputSearch = document.querySelector("#search");

  // New task procedure
  formCreate.addEventListener("submit", (e) => {
    e.preventDefault();
    catchValue();
  });

  const catchValue = () => {
    const taskName = inputCreate.value.trim();
    taskName.length ? showTaskHtml(taskName) : alert("Must enter a task");
  };

  const showTaskHtml = (taskName) => {
    const liHtml = `<li><strong>${taskName}</strong><i class="fa-solid fa-trash-can delete"></i></li>`;
    taskList.innerHTML += liHtml;
  };
});
