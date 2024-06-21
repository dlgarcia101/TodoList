



//*** toDo List code below ***/

// toDo array
let todoList = [];

const pushTodoInput = () => {
    var getUserTaskInput = document.getElementById('Task').value.toLowerCase();
    const checkTodoList = todoList.includes(getUserTaskInput);

    if(checkTodoList) {
        alert('Duplicate Entry: Please enter unique values.');
    }
    else {
        console.log('no dups exists')
        todoList.push(getUserTaskInput);
    let lastElement = todoList.length -1;
    let todoLast = todoList[lastElement];


console.log(todoList);
console.log(todoLast);

    // insert to html
    var getList = document.getElementById('UlList');

        // add elements to html doc 'li'
        let li = document.createElement('li');
        li.id = todoLast.toLowerCase();
        li.innerHTML = todoLast.toLowerCase();
        getList.appendChild(li);


        // add button to each added element
        let btnDone = document.createElement('button');
        btnDone.innerHTML = "Done";
        btnDone.id = `btn${todoLast}`;
        li.appendChild(btnDone);


        const deleteTodoTask = () =>{
            const indexToDelete = todoList.indexOf(li.id);
            console.log(`index to delete: ${indexToDelete}`);

            todoList.splice(indexToDelete,1);
            console.log(`after splice: ${todoList}`);


            // remove the element from html
            li.remove();
            
        };

        var getDeleteBnt = document.getElementById(`btn${todoLast}`).addEventListener('click',deleteTodoTask);
    }


};


var getTodoListBnt = document.getElementById('btnTaskInput').addEventListener('click',pushTodoInput);
