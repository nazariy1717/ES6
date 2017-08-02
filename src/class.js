class Task {
    constructor(title = Task.getDefaultTitle()){
        this.title = title;
        this._done = false;

        Task.count += 1;
        console.log('constructor');
    }

    get done(){
        return this._done === true ? `Done` : `Not done`;
    }

    set done(value){
        if(value  !== undefined && typeof value ==`boolean`){
            this._done = value;
        }else{
            console.error(`error`);
        }
    }

    complete(){
        this.done = 1;
        console.log(`task "${this.title}" done`);
    }

    static getDefaultTitle(){
        return 'task';
    }
}

Task.count = 0;

let task = new Task('new task');
let task2 = new Task('new task 2 ');
let task3 = new Task();





task.complete();
console.log(task.done, task._done);
