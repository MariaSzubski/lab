class Cat{
  constructor(cat_num, name){
    this.cat = document.getElementById(cat_num);
    this.cat.querySelector('h2').innerHTML = name;
    this.img = this.cat.querySelector('img');
    this.display = this.cat.querySelector('summary');

    this.name = name;
    this.counter = 0;
    this.img.addEventListener('click', this.increment.bind(this));
  }

  increment(){
    this.counter++;
    this.display.innerHTML = `You\'ve clicked on ${this.name} ${this.counter} times.`;
  }
}

let cat_1 = new Cat('cat_1', 'Arnold');
let cat_2 = new Cat('cat_2', 'Helga');
let cat_3 = new Cat('cat_3', 'Gerald');
let cat_4 = new Cat('cat_4', 'Olga');
let cat_5 = new Cat('cat_5', 'Abner');