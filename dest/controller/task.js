import { loadTasks, saveTasks } from "../repository/localStore.js";
import { addTask, clearTaskList } from "../service/task.js";
var taskForm = document.querySelector("#new-task-form");
var taskInput = document.getElementById("new-task-title");
var tasks = loadTasks();
tasks.forEach(addTask);
function taskSubmit(event) {
    event.preventDefault();
    if ((taskInput === null || taskInput === void 0 ? void 0 : taskInput.value.trim()) === "" || (taskInput === null || taskInput === void 0 ? void 0 : taskInput.value) === null)
        return;
    var newTask = {
        title: taskInput === null || taskInput === void 0 ? void 0 : taskInput.value,
        id: Math.random(),
        dateAdded: Date.now(),
        order: 0
    };
    tasks.push(newTask);
    saveTasks(tasks);
    addTask(newTask);
    taskInput.value = "";
}
taskForm === null || taskForm === void 0 ? void 0 : taskForm.addEventListener("submit", taskSubmit);
function clear(event) {
    event.preventDefault();
    clearTaskList();
}
taskForm === null || taskForm === void 0 ? void 0 : taskForm.addEventListener("reset", clear);
//# sourceMappingURL=task.js.map