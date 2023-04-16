import { Task } from "../domain/task.js"
import { removeAllTasks } from "../repository/localStore.js"

let taskList = document.querySelector<HTMLInputElement>("#list")

export function addTask(task: Task) {
    const item = document.createElement("li")
    const label = document.createElement("label")

    label.append(task.title)
    item.append(label)
    taskList?.appendChild(item)
}

export function clearTaskList() {
    while (taskList?.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
    removeAllTasks()
}