import { remove } from "../controller/task.js";
import { removeAllTasks, removeTaskStore } from "../repository/localStore.js";
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
    item.id = task.id.toString();
    item === null || item === void 0 ? void 0 : item.addEventListener("click", remove);
    taskList === null || taskList === void 0 ? void 0 : taskList.appendChild(item);
}
export function removeTask(taskId) {
    var task = document.getElementById(taskId.toString());
    task.remove();
    removeTaskStore(taskId);
}
export function clearTaskList() {
    while (taskList === null || taskList === void 0 ? void 0 : taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    removeAllTasks();
}
//# sourceMappingURL=task.js.map