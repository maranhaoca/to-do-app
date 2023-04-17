import { Task } from "../domain/task.js";

export function saveTasks(tasks: Task[]): void {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

export function loadTasks(): Task[] {
    const tasks = localStorage.getItem("tasks")

    if (tasks == null) return []

    return JSON.parse(tasks)
}

function removeTask(task:Task) {
    
}

export function removeAllTasks(): void {
    localStorage.setItem("tasks", JSON.stringify([]))
}
