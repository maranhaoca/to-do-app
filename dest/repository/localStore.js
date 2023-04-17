export function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
export function loadTasks() {
    var tasks = localStorage.getItem("tasks");
    if (tasks == null)
        return [];
    return JSON.parse(tasks);
}
function removeTask(task) {
}
export function removeAllTasks() {
    localStorage.setItem("tasks", JSON.stringify([]));
}
//# sourceMappingURL=localStore.js.map