
// assigning html div elements to variables.
let animals = {
    cow: document.querySelector('#cow'),
    chicken: document.querySelector('#chicken'),
    pig: document.querySelector('#pig'),
    horse: document.querySelector('#horse'),
    sheep: document.querySelector('#sheep'),
    duck: document.querySelector('#duck'),
    dog: document.querySelector('#dog'),
    bird: document.querySelector('#bird'),
    cat: document.querySelector('#cat')
}


// assigning audio elements to variables.
let cowsound = document.querySelector('#cowsound');
let chickensound = document.querySelector('#chickensound');
let pigsound = document.querySelector('#pigsound');
let horsesound = document.querySelector('#horsesound');
let sheepsound = document.querySelector('#sheepsound');
let ducksound = document.querySelector('#ducksound');
let dogsound = document.querySelector('#dogsound');
let birdsound = document.querySelector('#birdsound');
let catsound = document.querySelector('#catsound');


animals.cow.addEventListener('click', function() {
    cowsound.play();
});

animals.chicken.addEventListener('click', function() {
    chickensound.play();
});

animals.pig.addEventListener('click', function() {
    pigsound.play();
});

animals.horse.addEventListener('click', function() {
    horsesound.play();
});

animals.sheep.addEventListener('click', function() {
    sheepsound.play();
});

animals.duck.addEventListener('click', function() {
    ducksound.play();
});

animals.dog.addEventListener('click', function() {
    dogsound.play();
});

animals.bird.addEventListener('click', function() {
    birdsound.play();
});

animals.cat.addEventListener('click', function() {
    catsound.play();
});


let oldMcdonald = document.querySelector('#oldMcdonald');

window.addEventListener('click', function() {
    oldMcdonald.play();
    oldMcdonald.volume = 0.3;
})

