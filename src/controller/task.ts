import { Task } from "../domain/task.js";
import { loadTasks, saveTasks } from "../repository/localStore.js";
import { addTask, clearTaskList } from "../service/task.js";

const taskForm = document.querySelector<HTMLUListElement>("#new-task-form")
const taskInput = document.getElementById("new-task-title") as HTMLFormElement

const tasks: Task[] = loadTasks()
tasks.forEach(addTask);

function taskSubmit(event: Event) {
    event.preventDefault()

    if (taskInput?.value.trim() === "" || taskInput?.value === null) return
    
    const newTask: Task = {
        title: taskInput?.value,
        id: Math.random(),
        dateAdded: Date.now(),
        order: 0
    }

    tasks.push(newTask)
    
    saveTasks(tasks)

    addTask(newTask)
    taskInput.value = ""
}

taskForm?.addEventListener("submit", taskSubmit)

function clear(event: Event) {
    event.preventDefault()
    
    clearTaskList();
}

taskForm?.addEventListener("reset", clear)
