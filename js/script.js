const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Complex {
    constructor(real, imag) {
        this.real = real;
        this.imag = imag;
    }
    add(other) {
        return new Complex(this.real + other.real, this.imag + other.imag);
    }
    sub(other) {
        return new Complex(this.real - other.real, this.imag - other.imag);
    }
    mul(other) {
        return new Complex(
            this.real * other.real - this.imag * other.imag,
            this.real * other.imag + this.imag * other.real
        );
    }
    div(other) {
        return new Complex(
            (this.real * other.real + this.imag * other.imag) /
                (other.real * other.real + other.imag * other.imag),
            (this.imag * other.real - this.real * other.imag) /
                (other.real * other.real + other.imag * other.imag)
        );
    }
    mag() {
        return Math.sqrt(this.real * this.real + this.imag * this.imag);
    }
}

const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random() * (max - min) + min;
};

const mandelbrot = (c, maxIterations) => {
    let z = 0;
    let n = 0;
    while (n < maxIterations && z * z < 4) {
        z = z * z + c;
        console.log(z);
        n++;
    }
    return n;
};
