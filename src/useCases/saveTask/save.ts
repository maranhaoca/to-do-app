import { Task, taskList } from "../../domain/task";


export function save(task:Task): void {
    let payload = [...taskList, task];

    localStorage.setItem('tasks', JSON.stringify(payload));


}