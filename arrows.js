class TaskCollection {
    
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    log() {
        // normal function
        // this.tasks.forEach(function(task) {
        //     console.log(task);
        // })

        // es6 arrow functions
        // this.tasks.forEach((task) => {
        //     console.log(task);
        // });

        // we can remove curly braces for one line of code, 
        // and this keyword refers to current object, 
        // finally for single line code return statement is implicite 

        this.tasks.forEach((task) => console.log(task));
    }
}

class Task {}

new TaskCollection([new Task(), new Task(), new Task()]).log();   
