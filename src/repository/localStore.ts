import { Task } from "../domain/task.js";

export function saveTasks(tasks: Task[]): void {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

export function loadTasks(): Task[] {
    const taskJson = localStorage.getItem("tasks")

    if (taskJson == null) return []

    return JSON.parse(taskJson)
}

export function removeAllTasks(): void {
    localStorage.setItem("tasks", JSON.stringify([]))
}
