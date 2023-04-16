export function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
export function loadTasks() {
    var taskJson = localStorage.getItem("tasks");
    if (taskJson == null)
        return [];
    return JSON.parse(taskJson);
}
export function removeAllTasks() {
    localStorage.setItem("tasks", JSON.stringify([]));
}
//# sourceMappingURL=localStore.js.map