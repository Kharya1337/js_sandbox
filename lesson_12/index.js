let todoList = document.getElementById('todo-list');
let deleteSelectedButton = document.getElementById('delete-selected');
let localStorageMetod = document.getElementById('lockal-sorage');
let jsonBinMetod = document.getElementById('json-bin');
let selectAll = document.getElementById('select-all');
let data = [];
let allChecked = false;
// console.log(todoList);
selectAll.addEventListener('change', () => {
    loadMetod().then(() => {
        let done = document.getElementsByClassName('done');
        for(let i = 0; i < done.length; i++) {
            // console.log(done[i].checked);
            if(!done[i].checked){
                allChecked = false;
                break;
            } else {
                allChecked = true;
            };
            // data[i].completed = true
            // console.log(data[i].completed);
        }
        // console.log(allChecked);
        if(!allChecked) {
            for(let i = 0; i < done.length; i++) {
                done[i].checked = true;
                data[i].completed = true;
            }
        } else {
            for(let i = 0; i < done.length; i++) {
                done[i].checked = '';
                data[i].completed = false;
            }
        }
        saveMetod();
    // // localStorage.data = JSON.stringify(data);
    //     if(data.length === 0) {
    //         todoList.innerHTML = '<h2>Список пуст</h2>';
    //         deleteSelectedButton.style.display = 'none';
    //     }
    }); 
});

localStorageMetod.addEventListener('change', () => {
    todoList.innerHTML = '';
    deleteSelectedButton.style.display = 'none';
    localStorage.method = 'localStorage';
    jsonBinMetod.setAttribute('disabled', 'true');
    loadToDo().then(() => {jsonBinMetod.removeAttribute('disabled')});
});
jsonBinMetod.addEventListener('change', () => {
    todoList.innerHTML = '';
    deleteSelectedButton.style.display = 'none';
    localStorage.method = 'jsonBin';
    localStorageMetod.setAttribute('disabled', 'true');
    loadToDo().then(() => {
        localStorageMetod.removeAttribute('disabled')
    });

})

function loadMetod() {
    if(localStorageMetod.checked) {
        if(localStorage.hasOwnProperty('data')) {
            return new Promise(resolve => {
                data = JSON.parse(localStorage.data);
                resolve();
            });
        }else {
            return new Promise(resolve => {
                localStorage.data = JSON.stringify([]);
                resolve();
            });
        }
    } else if(jsonBinMetod.checked) {
        return fetch('https://api.jsonbin.io/b/5d1a3aa02c39867519ddd80c/latest', {
        method: 'GET',
        headers: {
            'secret-key': '$2a$10$Q4B3ec1dH1buWOe7HF2pzecf2lxBsAbgqH09PtURTUsROpITIFgcW'
        }
        }).then(res => res.json())
          .then(res => {
            // console.log(res['data']);
            data = res['data'];
        });
    }
    // console.log(data);
}
// window.data = data;
function saveMetod() {
    if(localStorageMetod.checked) {
        localStorage.data = JSON.stringify(data);
    } else if(jsonBinMetod.checked) {
        // console.log(data);
        fetch('https://api.jsonbin.io/b/5d1a3aa02c39867519ddd80c', {
           method: 'PUT',
           headers: {
               'Content-Type': 'application/json',
               'secret-key': '$2a$10$Q4B3ec1dH1buWOe7HF2pzecf2lxBsAbgqH09PtURTUsROpITIFgcW'
           },
           body: JSON.stringify({"data": data}) 
        });
    }
}

window.addEventListener('load', () => {
    if(localStorage.method == 'localStorage') {
        localStorageMetod.checked = true;
    } else if(localStorage.method == 'jsonBin') {
        jsonBinMetod.checked = true;
    }
    loadToDo();
});

function deleteSelected() {
    loadMetod().then(() => {
        let done = document.getElementsByClassName('done');
        for(let i = 0; i < done.length; i ++) {
            if(done[i].checked) {
                todoList.removeChild(done[i].parentElement); 
                // console.log(i);
                data.splice(i, 1);
                i--;
            }
        }
        saveMetod();
    // localStorage.data = JSON.stringify(data);
        if(data.length === 0) {
            deleteSelectedButton.style.display = 'none';
        }
    }); 
};

deleteSelectedButton.addEventListener('click', deleteSelected);

function loadToDo() {
    return loadMetod().then(() => {
        for (const key of data) {
            let todo = document.createElement('div');
            todo.className = 'todo-block';
            let done = document.createElement('input');
            done.type = 'checkbox';
            done.name = 'done';
            done.classList = 'done';
            if(key.completed == true) {
                done.checked = true;
            }
            let deleteButton = document.createElement('button');
            deleteButton.innerHTML = 'X';
            deleteButton.className = 'delete-todo';
            let span = document.createElement('span');
            span.className = 'todo-text';
            span.innerHTML = key.todo;
            done.addEventListener('click', checkToDo.bind(span));
            deleteButton.addEventListener('click', deleteToDo.bind(span));
            todo.append(done, span, deleteButton);
            todoList.append(todo);
            deleteSelectedButton.style.display = 'block';
        }
    });
    //   saveMetod();
}


function deleteToDo() {
    loadMetod().then(() => {
        // console.log(data);
        for (const key of data) {
            // console.log(this.innerHTML);
            if(this.innerHTML === key.todo) {
                todoList.innerHTML = '';
                data.splice(data.indexOf(key), 1);
                saveMetod(); 
                loadToDo();
            }
        }
        if(todoList.innerHTML === '') {
            deleteSelectedButton.style.display = 'none';
        };
    });
}

function checkToDo() {
    loadMetod().then(() => {
        for (const key of data) {
            if(this.innerHTML === key.todo) {
                if(key.completed == true) {
                    key.completed = false;
                } else {
                    key.completed = true;
                }
            }
        }
        // localStorage.data = JSON.stringify(data);
        saveMetod();
    });
    // console.log(this);
}

function addToDo() {
    if(this.value !== '') {
        loadMetod().then(() => {
            let todo = document.createElement('div');
            todo.className = 'todo-block'
            let done = document.createElement('input');
            done.type = 'checkbox';
            done.name = 'done';
            done.className = 'done';
            let deleteButton = document.createElement('button');
            deleteButton.innerHTML = 'X';
            deleteButton.className = 'delete-todo';
            data.push({todo: this.value, completed: false});
            saveMetod();
            let span = document.createElement('span');
            span.className = 'todo-text';
            span.innerHTML = this.value;
            done.addEventListener('click', checkToDo.bind(span));
            deleteButton.addEventListener('click', deleteToDo.bind(span));
            todo.append(done, span, deleteButton);
            todoList.append(todo);
            this.value = '';
            deleteSelectedButton.style.display = 'block';
        });
    }
}

let todoInp = document.getElementById('add-todo');
// todoInp.addEventListener('change', addToDo);
todoInp.addEventListener('change', addToDo);