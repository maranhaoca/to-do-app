import { Task } from "./domain/task";
import { loadTasks, saveTasks } from "./repository/saveLoad.js";

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
        id: Math.random(),
        dateAdded: Date.now(),
        order: 0,
    }

    tasks.push(newTask)
    
    saveTasks(tasks)

    addTask(newTask)
    taskInput.value = ""
}

taskForm?.addEventListener("submit", taskSubmit)

function addTask(task: Task) {
    const item = document.createElement("li")
    const label = document.createElement("label")

    label.append(task.title)
    item.append(label)
    taskList?.appendChild(item)
}
