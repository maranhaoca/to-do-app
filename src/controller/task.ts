import { Task } from "../domain/task.js";
import { loadTasks, saveTasks } from "../repository/localStore.js";
import { addTask, clearTaskList, removeTask } from "../service/task.js";

const taskForm = document.querySelector<HTMLUListElement>("#new-task-form")
const taskInput = document.getElementById("new-task-title") as HTMLFormElement
const taskList = document.querySelector<HTMLInputElement>("#list")

const tasks: Task[] = loadTasks()
tasks.forEach(addTask);

function taskSubmit(event: Event) {
    event.preventDefault()

    if (taskInput?.value.trim() === "" || taskInput?.value === null) return

    const newTask: Task = {
        title: taskInput?.value,
        id: Math.ceil(Math.random() * 1000),
        dateAdded: Date.now(),
        order: 0
    }

    tasks.push(newTask)

    saveTasks(tasks)

    addTask(newTask)
    taskInput.value = ""
}

taskForm?.addEventListener("submit", taskSubmit)

export function remove(event: Event) {
    event.preventDefault()

    const taskId: number = event.currentTarget?.id

    removeTask(taskId)
}

function clear(event: Event) {
    event.preventDefault()

    clearTaskList();
}

taskForm?.addEventListener("reset", clear)
