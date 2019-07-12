import MaskInput from 'mask-input';
/*
Установить npm модуль “mask-input”. Link, ознакомиться с примером
Создать файл mask.js в нем создать класс MaskedInput и создать новый экземпляр класса в файле index.js.  Этот класс при инициализации должен добавить в body элемент input.
Используя модуль “mask-input” сделать этот input полем для ввода номера кредитной карты, с маской, и разрешенными только символами цифр. Если поле пустое, рамка этого поля должна пульсировать с помощью css анимации.
Скриншоты:
*/
export default class MaskedInput {
    constructor() {
        let input = document.createElement('input');
        input.id = 'mask';
        input.setAttribute('type', 'text');
        document.body.append(input);
        
        // console.log(document.querySelector('#mask'));
        const maskInput = new MaskInput(document.querySelector('#mask'), {
            mask: '0000-0000-0000-0000',
            alwaysShowMask: true,
            maskChar: '_',
          });
        //   console.log(input.value );
          input.addEventListener('keydown', el => {
              if(input.value !== '____-____-____-____') {
                  input.style.animationName = 'none';
              } else {
                input.style.animationName = 'puls';
              }
              
          })
          
        document.body.append(input);
    }
}