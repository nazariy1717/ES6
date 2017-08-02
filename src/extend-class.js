class Task {
    constructor(title){
        this._title = title;
        this.done = false;
        Task.count++;
        console.log('Task create');
    }

    get title( ){
        return this._title;
    }

    set title(value){
        return this._title = value;
    }

    static getDefaultTitle() {
        return ' Task';
    }

    complete(){
        this.done = true;
        console.log(`Task "${this.title}"complete`);

    }
}

Task.count = 0;


class SubTask extends Task{
    constructor(title,parent){
        super(title); // використувуємо для батьківського конструктора
        this.parent = parent;
        console.log('SubTask create');
    }

    complete(){
        //this.done = true;
        super.complete(); //використовуємо для того щоб не писати ще раз this.done = true;
        console.log(`SubTask "${this.title}" complete`);

    }
}

let task = new Task('learn js');
let subtask = new SubTask('learn es6',task);


console.log(task);
console.log(subtask);


console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);



task.complete();
subtask.complete();