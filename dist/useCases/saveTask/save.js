"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.save = void 0;
const task_1 = require("../../domain/task");
function save(task) {
    let payload = [...task_1.taskList, task];
    localStorage.setItem('tasks', JSON.stringify(payload));
}
exports.save = save;
