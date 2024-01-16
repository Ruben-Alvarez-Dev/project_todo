window.addEventListener("load", () => {
  // DOM elements reference
  const formCreate = document.querySelector("#form-create");
  const todoList = document.querySelector("#todo-list");
  const inputCreate = document.querySelector("#create");
  const inputSearch = document.querySelector("#search");

  // New task procedure
  formCreate.addEventListener("submit", (e) => {
    e.preventDefault();
    catchValue();
  });

  const catchValue = () => {
    const taskName = inputCreate.value.trim();
    tareaNomre.length ? showTaskHtml(taskName) : alert("Must enter a task");
  };
});
