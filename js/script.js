const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
