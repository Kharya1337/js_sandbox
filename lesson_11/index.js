function change(res) {
    return fetch(`https://api.jsonbin.io/g/${res['ip']}`, {method: 'GET'})
        .then(res => res.json())
        .then(res => {
            let div = document.getElementById('findIp');
            div.innerHTML = 'Ваша страна ➟ ' + res['data']['country'] + '<br>Город ➟ ' + res['data']['city'];
        });
}

Promise.race([
    fetch('https://api.ipify.org?format=json'),
    fetch('https://api.my-ip.io/ip.json'),
    fetch('http://myexternalip.com/json')
        
])
    .then(res => res.json())
    .then(res => change(res))
    .catch(err => console.error(err));



//https://api.jsonbin.io/b/5d0fbdb57fd6b428ccf9fd26

import trash from './garbage.png';

let newStr = document.getElementById('new-str');
let addNewStr = document.getElementById('add-new-str');
let binElements = document.getElementById('bin-elements');
let arr = [];


function getBin() {
    fetch('https://api.jsonbin.io/b/5d10ed3e7395cb45722e084a/latest', {
        method: 'GET',
        headers: {
            'secret-key': '$2a$10$Q4B3ec1dH1buWOe7HF2pzecf2lxBsAbgqH09PtURTUsROpITIFgcW'
        }
    }).then(res => res.json())
      .then(res => {
        // console.log(res['data']);
        if(res['data'].length == 0) {
            binElements.innerHTML = 'Список пуст';
        } else {
            binElements.innerHTML = '';
        }

        addNewStr.removeAttribute('disabled');
        for (const elem of res['data']) {
            let deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            let img = document.createElement('img');
            img.src = trash;
            deleteButton.append(img);
            let li = document.createElement('li');
            li.innerHTML = elem;
            deleteButton.addEventListener('click', () => {
                addNewStr.setAttribute('disabled', true);
                res['data'].splice(res['data'].indexOf(elem), 1);
                // console.log(res['data']);
                binElements.innerHTML = 'Удаляем';
                fetch('https://api.jsonbin.io/b/5d10ed3e7395cb45722e084a', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'secret-key': '$2a$10$Q4B3ec1dH1buWOe7HF2pzecf2lxBsAbgqH09PtURTUsROpITIFgcW'
                    },
                    body: JSON.stringify({"data": res['data']}) 
                }).then(getBin())
                  .catch(err => alert(err));
            });
            li.append(deleteButton);
            binElements.append(li);
        }
        arr = res['data'];
    // console.log(arr);
        
    })
    .catch(err => alert(err));
}
addNewStr.setAttribute('disabled', true);
getBin();

addNewStr.addEventListener('click', () => {
    if(newStr.value == '') {
        alert(Error('Запрещено добавлять пустую строку!'));
    } else {
        addNewStr.setAttribute('disabled', true);
        arr.push(newStr.value);
        binElements.innerHTML = 'Добавляем';
        fetch('https://api.jsonbin.io/b/5d10ed3e7395cb45722e084a', {
           method: 'PUT',
           headers: {
               'Content-Type': 'application/json',
               'secret-key': '$2a$10$Q4B3ec1dH1buWOe7HF2pzecf2lxBsAbgqH09PtURTUsROpITIFgcW'
           },
           body: JSON.stringify({"data": arr}) 
        }).then(() => {
            getBin();
            newStr.value = '';
        })
          .catch(() => alert('Что-то пошло не так!'));
        // console.log(arr);
    }
    
});

