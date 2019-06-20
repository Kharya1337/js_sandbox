function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

fetch('https://api.exchangeratesapi.io/latest', {method: 'GET'})
    .then((res => res.json()))
    .then(res => {
        res.rates['EUR'] = 1;
        // console.log(res);
        let sp = document.getElementById('convert-time');
        sp.innerHTML = res.date;
        let head = document.getElementById('converter-header');
        head.append('',sp);
        let cur1 = document.getElementById('currency1');
        let cur2 = document.getElementById('currency2');
        let inp1 = document.getElementById('currency1-value');
        inp1.setAttribute('placeholder', 'Please fill in this field.')
        let inp2 = document.getElementById('currency2-value');
        let makeConvert = document.getElementById('swap');
        let exchRate1 = res.rates[cur2.value],
            exchRate2 = res.rates[cur1.value];
        cur1.addEventListener('change', () => {
            if(isNumeric(inp1.value)) {
                inp1.style.borderColor = 'initial';
                exchRate1 = res.rates[cur1.value];
                inp2.value = (inp1.value * exchRate2 / exchRate1).toFixed(2);
            } else {
                inp1.style.borderColor = 'red';
            }
        });
        cur2.addEventListener('change', () => {
            if(isNumeric(inp1.value)) {
                inp1.style.borderColor = 'initial';
                exchRate2 = res.rates[cur2.value];
                inp2.value = (inp1.value * exchRate2 / exchRate1).toFixed(2);
            } else {
                inp1.style.borderColor = 'red';
            }
        });
        inp1.addEventListener('change', () => {
            if(isNumeric(inp1.value)) {
                exchRate1 = res.rates[cur1.value];
                inp1.style.borderColor = 'initial';
                inp1.value = (+inp1.value).toFixed(2);
                inp2.value = (inp1.value * exchRate2 / exchRate1).toFixed(2);
            } else {
                inp1.style.borderColor = 'red';
            }
        });
        makeConvert.addEventListener('click', () => {
            if(isNumeric(inp1.value)) {
                inp1.style.borderColor = 'initial';
                let temp = cur2.value;
                cur2.value = cur1.value;
                cur1.value = temp;
                // console.log(exchRate2);
                // console.log(temp);
                // inp1.value = inp2.value;
                exchRate1 = res.rates[cur1.value];
                exchRate2 = res.rates[cur2.value];
                inp2.value = (inp1.value * exchRate2 / exchRate1).toFixed(2);
            } else {
                inp1.style.borderColor = 'red';
            }
        });
    });


let getRate = document.getElementById('get-rate');
let start_at = document.getElementById('start-time');
let end_at = document.getElementById('end-time');
start_at.value = new Date().toLocaleDateString('sv');
end_at.value = new Date().toLocaleDateString('sv');
getRate.addEventListener('click', () => {
    // console.log(new Date(start_at.value).getTime());
    // console.log(start_at.value);
    let ul = document.getElementById('time-list');
    ul.style.display = 'none';
    let loadGif = document.getElementById('load');
    loadGif.style.display = 'block';
    let x = new Promise((resolve, reject) => {
        if(start_at.value == '' || end_at.value == '') {
            reject('Incorrect data type');
        } else if (new Date(start_at.value).getTime() > new Date().getTime()) {
            reject('First date is bigger than today');
        } else if(new Date(start_at.value).getTime() > new Date(end_at.value).getTime()) {
            reject('First date is bigger than second');
        }
        else {
            resolve();
        }
    });
    // 2018-12-12
    x.then(() => {
        const query = `https://api.exchangeratesapi.io/history?start_at=${start_at.value}&end_at=${end_at.value}`;
        fetch(query,{method: 'GET'})
            .then(res => res.json())
            .then(res => {
                // console.log(res);
                loadGif.style.display = 'none';
                let cur = document.getElementById('currency');
                let curArr = [];
                for(let i = 0; i < cur.length; i++) {
                    if(cur[i].value != cur.value) {
                        // console.log(cur[i].value);
                        curArr.push(cur[i].value);
                    }
                }
                ul.innerHTML = `Exchange rate 1 ${cur.value}`;
                // console.log(curArr);
                // console.log(new Date().getTime());
                let list = [];
                // console.log(res.rates);
                for(let i in res.rates) {
                    list.push(i);
                }

                list = list.sort();
                // console.log(list.sort())
                for(let i of list) {
                    res.rates[i]['EUR'] = 1;
                    let li = document.createElement('li');
                    // console.log(res.rates[i]);
                    
                    let currency1 = (res.rates[i][curArr[0]]/res.rates[i][cur.value]).toFixed(2);
                    let currency2 = (res.rates[i][curArr[1]]/res.rates[i][cur.value]).toFixed(2);
                    li.innerHTML = `${i} ➤ <i>${currency1 + '</i> ' +  curArr[0]} <i>${currency2 + '</i> ' + curArr[1]}`;
                    ul.append(li);
                    // console.log(i);
                }

                ul.style.display = 'block';
            })
    })
    .catch((res) => {
        alert(res);
        loadGif.style.display = 'none';
    });
});

