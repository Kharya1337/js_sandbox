import Color from './color';

class MiniSlider {
    constructor (id) {
        this.id = id;
        this.count = 0;
        this.div = document.getElementById(this.id);
        this.images = this.div.childElementCount;
        this.div.style.position = 'relative';
        this.div.style.left = '50%';
        this.div.style.transform = 'translateX(-50%)';
        this.div.style.display = 'inline-block';
        this.div.style.textAlign = 'center';
        this.hideAll();
        this.show(0);
        this.createButtons();
    }
    hideAll() {
        for (const i of this.div.children) {
            if(i.tagName == 'IMG') {
                i.style.display = 'none';
            }
        }
    }
    show(n) {
        this.div.children[n].style.display = 'inline-block';
        this.div.children[n].animate([
            {   
                opacity: '0',
                transform : 'skew(0, 0)'
            },
            {
                opacity: '0.2',
                transform : 'skew(10deg, -10deg)'
            },
            {
                opacity: '0.7',
                transform : 'skew(-10deg, 10deg)'
            },
            {
                opacity: '1',
                transform : 'skew(0, 0)'
            }
          ], 1000);
    }
    createButtons() {
        let Prev = document.createElement('button');
        let Next = document.createElement('button');
        Prev.id = 'prev';
        Next.id = 'next';
        Prev.innerHTML = '<';
        Next.innerHTML = '>';
        Next.addEventListener('click', this.next.bind(this));
        Prev.addEventListener('click', this.prev.bind(this));
        this.div.append(Prev, Next);
    }
    next() {
        let s = new Color().random().toString();
        let Next = document.getElementById('next');
        Next.style.borderColor = s;
        this.hideAll();
        this.count += 1;
        if(this.count >= this.images)  this.count = 0;
        this.show(this.count);
    }
    prev() {
        let s = new Color().random().toString();
        let Prev = document.getElementById('prev');
        Prev.style.borderColor = s;
        this.hideAll();
        this.count -= 1;
        if(this.count < 0)  this.count = this.images - 1;
        this.show(this.count);
    }

    destroy() {
        let Prev = document.getElementById('prev');
        let Next = document.getElementById('next');
        this.div.removeChild(Prev);
        this.div.removeChild(Next);
        this.div.style.position = 'static';
        this.div.style.transform = 'none';
        this.div.style.display = 'block';
        this.div.style.textAlign = 'left';
        for (const i of this.div.children) {
            if(i.tagName == 'IMG') {
                i.style.display = 'inline';
            }
        }
    }
}

// let slider = new MiniSlider('someId');
// window.slider = slider;
