"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoitem_1 = require("./todoitem");
class ToDoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoItems.push(new todoitem_1.TodoItem(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id) {
        return this.todoItems.find(x => x.id == id);
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.ToDoCollection = ToDoCollection;
