import { Task } from "../domain/task.js"
import { removeAllTasks } from "../repository/localStore.js"

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

    taskList?.appendChild(item)

    console.log(localStorage.getItem("tasks"))
}

export function clearTaskList() {
    while (taskList?.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
    removeAllTasks()
}