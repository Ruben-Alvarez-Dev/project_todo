window.addEventListener("load", () => {
  // DOM elements reference
  const formCreate = document.querySelector("#form-create");
  const taskList = document.querySelector("#todo-list");
  const inputCreate = document.querySelector("#create");
  const inputSearch = document.querySelector("#search");

  // PROCEDURE: New task
  formCreate.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(inputCreate.value);
    catchValue();
    inputCreate.value = "";
  });

  const catchValue = () => {
    const taskName = inputCreate.value.trim();
    taskName.length ? showTaskHtml(taskName) : alert("Must enter a task");
  };

  const showTaskHtml = (taskName) => {
    const liHtml = `<li><strong>${taskName}</strong><i class="fa-solid fa-trash-can"></i></li>`;
    taskList.innerHTML += liHtml;
  };

  // PROCEDURE: Search task
  inputSearch.addEventListener("keyup", (e) => {
    const character = inputSearch.value.trim();
    search(character);
  });

  const search = (character) => {
    /* console.log(taskList.children); */
    let charactersArray = Array.from(taskList.children);
    charactersArray
      .filter(
        (text) => !text.textContent.toLocaleLowerCase().includes(character)
      )
      .forEach((filteredString) => {
        filteredString.classList.add("filteredText");
      });

    charactersArray
      .filter((text) =>
        text.textContent.toLocaleLowerCase().includes(character)
      )
      .forEach((filteredString) => {
        filteredString.classList.remove("filteredText");
      });
  };

  // PROCEDURE: Delete task
  taskList.addEventListener("click", (e) => {
    /* if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove();
    } */
    e.target.parentElement.remove();
    inputSearch.value = "";
  });
});
