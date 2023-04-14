"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const save_1 = require("./useCases/saveTask/save");
const taskApp = document.querySelector(".task-app");
const taskInput = document.querySelector('.task');
taskApp === null || taskApp === void 0 ? void 0 : taskApp.addEventListener('clik', (e) => {
    //    e.preventDefault();
    if (taskInput === null || taskInput === void 0 ? void 0 : taskInput.nodeValue) {
        const task = {
            title: taskInput.nodeValue,
            id: Math.random(),
            dateAdded: Date.now(),
            order: 0
        };
        (0, save_1.save)(task);
    }
});
