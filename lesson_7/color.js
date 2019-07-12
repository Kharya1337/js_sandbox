export default class Color {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    toString() {
        return `rgb(${this.a}, ${this.b}, ${this.c})`;
    }
    toBlack() {
        this.a = this.b = this.c = 0;
        return this;
    }
    toWhite() {
        this.a = this.b = this.c = 255;
        return this;
    }
    getLightness() {
        return (this.a + this.b + this.c) / 3;
    }
    toGrayscale() {
        this.a = this.b = this.c = parseInt(this.getLightness());
        return this;
    }
    invert() {
        this.a = 255 - this.a;
        this.b = 255 - this.b;
        this.c = 255 - this.c;
        return this;
    }
    random() {
        this.a = Math.trunc(Math.random() * 255);
        this.b = Math.trunc(Math.random() * 255);
        this.c = Math.trunc(Math.random() * 255);
        return this;
    }
    static fromString(str) {
        str = str.replace('rgb(', '').replace(')', '').split(',');
        let a = parseInt(str[0]);
        let b = parseInt(str[1]);
        let c = parseInt(str[2]);
        return new Color(a, b, c);
    }
}
