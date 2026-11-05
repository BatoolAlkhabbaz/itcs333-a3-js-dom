// ITCS333 A3 starter — implement the to-do app per README.
// You may wrap everything in a DOMContentLoaded handler or an IIFE.
// Requirements: add / toggle-complete / delete / filter / counter,
// using event delegation on #todo-list.

// TODO: your code here
document.addEventListener("DOMContentLoaded", function () {
    
    const todoForm = document.querySelector("#todo-form");
    const todoInput = document.querySelector("#todo-input");
    const todoList = document.querySelector("todo-list");
    const errorMsg = document.querySelector("error-msg");
    const counter = document.querySelector("#counter");
    const filterAll = document.querySelector("#filter-all");
    const filterActive = document.querySelector("#filter-active");
    const filterDone = document.querySelector("#filter-done");

    let currentFilter = "all";
    function updateCounter(){
        const activeItems = todoList.querySelectorAll("li:not(.completed)");
        counter.textContent = `${activeItems.length} item(s) left`;
    }

    function applyFilter(){
        const items = todoList.querySelectorAll("li");
        items.forEach(item => {
            const isCompleted = item.classList.contains("completed");
            if (currentFilter === "all" )
                item.style.display = "flex";
            
            else if (currentFilter === "active")
                item.style.display = isCompleted ? "none" : "flex";
            else if (currentFilter === "done")
                item.style.display = isCompleted ? "flex" : "none";

        });
    }

    todoForm.addEventListener("submit", function (e){
        e.preventDefault();
        const taskText = todoInput.ariaValueMax.trim();

        if (taskText === ""){
            errorMsg.classList.remove("hidden");
            return;
        }
        errorMsg.classList.add("hidden");

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.className = "item-text";
        span.textContent = taskText; 

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        todoInput.value = "";
        updateCounter();
        applyFilter();
    });

    

})