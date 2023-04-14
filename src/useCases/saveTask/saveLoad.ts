import { Task } from "../../domain/task";

function saveTasks(tasks: Task[]): void {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function loadTasks(): Task[] {
    const taskJson = localStorage.getItem("tasks")

    if (taskJson == null) return []

    return JSON.parse(taskJson)
}

export {saveTasks, loadTasks}
 