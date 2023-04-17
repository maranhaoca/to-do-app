import { Task } from "../domain/task.js";

export function saveTasks(tasks: Task[]): void {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

export function loadTasks(): Task[] {
    const tasks = localStorage.getItem("tasks")

    if (tasks == null) return []

    return JSON.parse(tasks)
}

export function removeTaskStore(taskId: number) {
    const tasks: string | null = localStorage?.getItem("tasks")

    if (!tasks) {
        return
    }

    let jsonTasks: Task[] = JSON.parse(tasks)
    jsonTasks = jsonTasks.filter(element => element.id != taskId)

    localStorage.setItem("tasks", JSON.stringify(jsonTasks))
}

export function removeAllTasks(): void {
    localStorage.setItem("tasks", JSON.stringify([]))
}
