const container = document.getElementById("container");
const inputData = document.getElementById("input-todo");
const inputBtn = document.getElementById("input-btn");
const contTodo = document.getElementById("todo-list");

inputBtn.addEventListener("click", function () {
  inputUser = inputData.value;
  if (inputUser === "") {
    alert("Please write your to do");
  } else {
    const lists = document.createElement("li");
    lists.classList.add("items");
    lists.innerHTML = `<i class="bx bx-circle"></i> <span class="content-list">${inputUser}</span> <i class="bx bx-x close"></i>`;
    contTodo.append(lists);
  }
  inputData.value = "";
});

contTodo.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("bx-circle") ||
    e.target.classList.contains("bxs-check-circle")
  ) {
    e.target.classList.toggle("bxs-check-circle");
    e.target.classList.toggle("bx-circle");

    const contentList = e.target.nextElementSibling;
    contentList.classList.toggle("line-through");
  }

  if (e.target.classList.contains("close")) {
    e.target.parentElement.remove();
  }
});
