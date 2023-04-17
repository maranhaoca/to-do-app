export function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
export function loadTasks() {
    var tasks = localStorage.getItem("tasks");
    if (tasks == null)
        return [];
    return JSON.parse(tasks);
}
export function removeTaskStore(taskId) {
    var tasks = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem("tasks");
    if (!tasks) {
        return;
    }
    var jsonTasks = JSON.parse(tasks);
    jsonTasks = jsonTasks.filter(function (element) { return element.id != taskId; });
    localStorage.setItem("tasks", JSON.stringify(jsonTasks));
}
export function removeAllTasks() {
    localStorage.setItem("tasks", JSON.stringify([]));
}
//# sourceMappingURL=localStore.js.map