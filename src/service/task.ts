import { remove } from "../controller/task.js"
import { Task } from "../domain/task.js"
import { removeAllTasks, removeTaskStore } from "../repository/localStore.js"

let taskList = document.querySelector<HTMLInputElement>("#list")

export function addTask(task: Task) {
    const item = document.createElement("li") as HTMLLIElement
    const label = document.createElement("label") as HTMLLabelElement
    const deleteButton = document.createElement("button") as HTMLButtonElement

    label.append(task.title)

    deleteButton.innerText = 'Delete'
    deleteButton.type = 'reset'

    item.append(label)
    item.append(deleteButton)
    item.id = task.id.toString()
    item?.addEventListener("click", remove)

    taskList?.appendChild(item)
}

export function removeTask(taskId: number) {
    let task = document.getElementById(taskId.toString()) as HTMLLIElement

    task.remove()

    removeTaskStore(taskId)
}

export function clearTaskList() {
    while (taskList?.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
    removeAllTasks()
}