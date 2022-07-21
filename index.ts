// IMPORTANTE:
// Ver la consola de JavaScript

interface Personaje {
  nombre: string;
  hp: number;
}

const personaje: Personaje = {
  nombre: 'Fedex',
  hp: 50,
};

function curar(personaje: Personaje, curarX: number): void {
  personaje.hp += curarX;
}

curar(personaje, 20);

console.log(personaje.hp);
