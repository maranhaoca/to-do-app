import { Task } from "./domain/task";
import { save } from "./useCases/saveTask/save";

const taskApp = document.querySelector(".task-app");
const taskInput = document.querySelector('.task')
const taskList = document.querySelector('.task-list')

const list: Task[] = JSON.parse(localStorage.getItem('tasks') || '{}')

list.forEach(item => {

})


taskApp?.addEventListener('clik', (e) => {
    //    e.preventDefault();

    if (taskInput?.nodeValue) {

        const task: Task = {
            title: taskInput.nodeValue,
            id: Math.random(),
            dateAdded: Date.now(),
            order: 0
        }

        save(task);
    }
})