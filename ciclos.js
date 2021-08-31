class Ciclo1 {
  constructor() {
    this.n = 3;
    this.s = 4;
  }

  serieS(limit) {
    let s = 0;
    s += this.resta(this.s, this.s / this.n);

    while (this.n < limit) {
      this.n += 2;
      s = this.suma(s, this.s / this.n);
      this.n += 2;
      s = this.resta(s, this.s / this.n);
    }
    return s;
  }

  resta(num1, num2) {
    let s = num1 - num2;
    return s;
  }

  suma(num1, num2) {
    let a = num1 + num2;
    return a;
  }
}

let c = new Ciclo1();
console.log(c.serieS(100));

class Ciclo2 {
  constructor() {
    this.e = 1;
    this.f = 1;
  }

  serieE(limit) {
    let e = 0;
    e += this.suma(this.e, this.e / this.factorial(this.f));
    while (this.f < limit) {
      this.f += 1;

      e = this.suma(e, this.e / this.factorial(this.f));
    }
    return e;
  }

  suma(num1, num2) {
    let s = num1 + num2;
    return s;
  }
  factorial(num) {
    let a = 1;
    for (let i = 1; i <= num; i++) {
      a *= i;
    }
    return a;
  }
}

let c2 = new Ciclo2();
console.log(c2.serieE(100));
