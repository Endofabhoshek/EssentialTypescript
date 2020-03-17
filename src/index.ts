import { ToDoCollection } from "./todocollection";
import { TodoItem } from "./todoitem";

let todos : TodoItem[] = [
    new TodoItem(1, "Task 1"),
    new TodoItem(2, "Task 2"),
    new TodoItem(3, "Task 3"),
    new TodoItem(4, "Task 4"),
    new TodoItem(5, "Task 5", true),
    new TodoItem(6, "Task 6")
];

let collection : ToDoCollection = new ToDoCollection("Abhishek", todos);

console.clear();
console.log(`${collection.userName}'s ToDo List`);

let newId : number = collection.addTodo("Go For It");
let todoItem : TodoItem = collection.getTodoById(newId);
console.log(JSON.stringify(todoItem));

collection.removeComplete();
collection.getTodoItems(true).forEach(x => x.printDetails());

// collection.addTodo(todoItem);
