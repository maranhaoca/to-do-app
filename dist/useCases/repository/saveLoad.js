function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
    var taskJson = localStorage.getItem("tasks");
    if (taskJson == null)
        return [];
    return JSON.parse(taskJson);
}
export { saveTasks, loadTasks };
//# sourceMappingURL=saveLoad.js.map