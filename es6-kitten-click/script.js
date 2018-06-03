// Name your kittens!
const litter = ['Arnold', 'Helga', 'Gerald', 'Olga', 'Abner'];

// Generate kittens
class Kitten{
  constructor(kit_num, name){
    this.tile = `<section id="${kit_num}">
      <h2>${name}</h2>
    <img src="http://placekitten.com/g/170/240">
      <summary></summary>
    </section>`;
    this.kit_num = kit_num;
    this.name = name;
    this.counter = 0;
  }

  generateEL(){
    this.kitten = document.getElementById(this.kit_num);
    this.kitten.querySelector('img').addEventListener('click', this.increment.bind(this));
  }

  increment() {
      this.counter++;
      this.kitten.querySelector('summary').innerHTML = `You\'ve clicked on ${this.name} <span class="counter">${this.counter}</span> times.`;
  }
}

// Create kittens from litter
for (let l in litter){
  litter[l] = new Kitten(`kit_${l}`, litter[l]);
}

// Add kittens to page
for (let kitten of litter){
  document.getElementById('container').insertAdjacentHTML('beforeend', kitten.tile);
  kitten.generateEL();
}