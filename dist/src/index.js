"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todocollection_1 = require("./todocollection");
const todoitem_1 = require("./todoitem");
let todos = [
    new todoitem_1.TodoItem(1, "Task 1"),
    new todoitem_1.TodoItem(2, "Task 2"),
    new todoitem_1.TodoItem(3, "Task 3"),
    new todoitem_1.TodoItem(4, "Task 4"),
    new todoitem_1.TodoItem(5, "Task 5"),
    new todoitem_1.TodoItem(6, "Task 6")
];
let collection = new todocollection_1.ToDoCollection("Abhishek", todos);
console.clear();
console.log(`${collection.userName}'s ToDo List`);
let newId = collection.addTodo("Go For It");
let todoItem = collection.getTodoById(newId);
console.log(JSON.stringify(todoItem));
todoItem.printDetails();
// collection.addTodo(todoItem);
