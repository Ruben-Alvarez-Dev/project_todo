window.addEventListener("load", () => {
  // DOM elements reference
  const formCreate = document.querySelector("#form-create");
  const taskList = document.querySelector("#todo-list");
  const inputCreate = document.querySelector("#create");
  const inputSearch = document.querySelector("#search");

  // New Item task procedure
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

  // Search task procedure
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
});
