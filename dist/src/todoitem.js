"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoItem {
    // public id: number;
    // public task: string;
    // public complete: boolean;
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        // this.id = id;
        // this.complete = complete;
        // this.task = task;
    }
    printDetails() {
        console.log(`${this.id}\t ${this.task} ${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.TodoItem = TodoItem;
