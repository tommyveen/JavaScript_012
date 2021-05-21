const colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;


while (i < colors.length) {
    console.log(colors[i])
    i++;
}

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i])
}

colors.forEach(element => console.log(element))

// 1. Mijn For Loop neemt 3 regels in belsag
// 2. Mijn For Each Loop neemt 1 regel in belsag
// 3. De array method is makkelijker overzichtelijker, waardoor makkelijker leesbaar
// 4. Je bent aan het itereren

let myCar = {
    make: 'Ford',
    model: 'Mustang',
    color: 'Black',
    rims: 'Race',
    year: 1969
}

for (const properties in myCar) {
    console.log(myCar[properties])
  }