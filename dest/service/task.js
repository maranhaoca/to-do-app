import { removeAllTasks } from "../repository/localStore.js";
var taskList = document.querySelector("#list");
export function addTask(task) {
    var item = document.createElement("li");
    var label = document.createElement("label");
    var deleteButton = document.createElement("button");
    label.append(task.title);
    deleteButton.innerText = 'Delete';
    deleteButton.type = 'reset';
    item.append(label);
    item.append(deleteButton);
    taskList === null || taskList === void 0 ? void 0 : taskList.appendChild(item);
    console.log(localStorage.getItem("tasks"));
}
export function clearTaskList() {
    while (taskList === null || taskList === void 0 ? void 0 : taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    removeAllTasks();
}
//# sourceMappingURL=task.js.map