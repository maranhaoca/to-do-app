export interface Task {
    title: string,
    id: number,
    dateAdded: number,
    order: number
}

export let taskList: Task[] = [];
