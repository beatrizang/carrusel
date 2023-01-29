let people = [
    {
        "name":"Susan Smith",
        "job":"Web Developer",
        "description":"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        "image":"person-1.png"
    },
    {
        "name":"Anna Johnson",
        "job":"Web Designer",
        "description":"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal",
        "image":"person-2.png"
    },
    {
        "name":"Peter Jones",
        "job":"Intern",
        "description":"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        "image":"person-3.png"
    },
    {
        "name":"Bill Anderson",
        "job":"The Boss",
        "description":"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
        "image":"person-4.png"
    }
];

let index = 0;

document.getElementById("button__left").addEventListener('click',mostrarAnterior);
document.getElementById("button__right").addEventListener('click',mostrarSiguiente);
document.getElementById("button__surprise").addEventListener('click',sorpresa);

let nameP = document.getElementById("card__name");
let job = document.getElementById("card__job");
let description = document.getElementById("card__description");
let image = document.getElementById("card__img");

function mostrarSiguiente(){
    index++;
    if(index>=people.length){
        index = 0;
    }
    mostrar(index);
}

function mostrarAnterior(){
    index--;
    if(index <0){
        index = people.length - 1;
    }
    mostrar(index);
}

function sorpresa(){
    index = Math.floor(Math.random() * (people.length));
    mostrar(index);
}

function mostrar(i){
    nameP.textContent = people[i].name;
    job.textContent = people[i].job;
    description.textContent = people[i].description;
    image.src = "./images/"+people[i].image;
}
