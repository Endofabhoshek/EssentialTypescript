export class TodoItem {
    // public id: number;
    // public task: string;
    // public complete: boolean;

    constructor(public id: number,public task: string,public complete: boolean = false) { // removed public keyword
        // this.id = id;
        // this.complete = complete;
        // this.task = task;
    }

    printDetails() : void {
        console.log(`${this.id}\t ${this.task} ${this.complete ? "\t(complete)" : ""}`);
    }
}