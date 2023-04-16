import { removeAllTasks } from "../repository/localStore.js";
var taskList = document.querySelector("#list");
export function addTask(task) {
    var item = document.createElement("li");
    var label = document.createElement("label");
    label.append(task.title);
    item.append(label);
    taskList === null || taskList === void 0 ? void 0 : taskList.appendChild(item);
}
export function clearTaskList() {
    while (taskList === null || taskList === void 0 ? void 0 : taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    removeAllTasks();
}
//# sourceMappingURL=task.js.map