// No 1
class Employee {
  name: string;
  gender: string;
  workingHours: number;
  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
    this.workingHours = 0;
  }
  formatCurrency(price: number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  }
}
class FulltimeEmployee extends Employee {
  hourlyRate: number;
  extraHourlyRate: number;
  constructor(name: string, gender: string) {
    super(name, gender);
    this.hourlyRate = 100_000;
    this.extraHourlyRate = 75_000;
  }
  addWorkingHours(hour: number) {
    this.workingHours += hour;
  }
  calculateSalary() {
    if (this.workingHours <= 6) {
      return {
        name: this.name,
        gender: this.gender,
        hours: this.workingHours,
        totalSalary: this.formatCurrency(this.workingHours * this.hourlyRate),
      };
    } else {
      const regularHours = 6;
      const extraHours = this.workingHours - regularHours;
      return {
        name: this.name,
        gender: this.gender,
        totalSalaryRegular: this.formatCurrency(regularHours * this.hourlyRate),
        totalSalaryExtra: this.formatCurrency(
          extraHours * this.extraHourlyRate
        ),
        total: this.formatCurrency(
          regularHours * this.hourlyRate + extraHours * this.extraHourlyRate
        ),
      };
    }
  }
}
class ParttimeEmployee extends Employee {
  hourlyRate: number;
  extraHourlyRate: number;
  constructor(name: string, gender: string) {
    super(name, gender);
    this.hourlyRate = 50_000;
    this.extraHourlyRate = 30_000;
  }
  addWorkingHours(hour: number) {
    this.workingHours += hour;
  }
  calculateSalary() {
    if (this.workingHours <= 6) {
      return {
        name: this.name,
        gender: this.gender,
        hours: this.workingHours,
        totalSalary: this.formatCurrency(this.workingHours * this.hourlyRate),
      };
    } else {
      const regularHours = 6;
      const extraHours = this.workingHours - regularHours;
      return {
        name: this.name,
        gender: this.gender,
        totalSalaryRegular: this.formatCurrency(regularHours * this.hourlyRate),
        totalSalaryExtra: this.formatCurrency(
          extraHours * this.extraHourlyRate
        ),
        total: this.formatCurrency(
          regularHours * this.hourlyRate + extraHours * this.extraHourlyRate
        ),
      };
    }
  }
}
const employee1 = new FulltimeEmployee("Aceng", "cwk");
const employee2 = new ParttimeEmployee("Mamang", "cwk");
employee1.addWorkingHours(5);
employee1.addWorkingHours(5);
employee1.addWorkingHours(2);
console.log(employee1.calculateSalary());
employee2.addWorkingHours(5);
employee2.addWorkingHours(5);
console.log(employee2.calculateSalary());
// No 2
class Player {
  name: string;
  health: number;
  power: number;
  constructor(name: string, health: number = 100, power: number = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }
  hit(power: number) {
    this.health -= power;
  }
  useItem(item: { health: number; power: number }) {
    this.health += item.health;
    this.power += item.power;
  }
  showStatus() {
    return `${this.name} -> Health : ${this.health} | Power : ${this.power}`;
  }
}
class ShootingGame {
  player1: Player;
  player2: Player;
  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }
  getRandomItem() {
    const health = Math.random() < 0.5 ? 0 : 10;
    const power = Math.random() < 0.5 ? 0 : 10;
    return { health, power };
  }
  start() {
    while (this.player1.health > 0 && this.player2.health > 0) {
      // show status
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());
      // get random item
      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();
      // use random item
      this.player1.useItem(item1);
      this.player2.useItem(item2);
      // hit player
      this.player2.hit(this.player1.power);
      this.player1.hit(this.player2.power);
      // show status
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());
    }
    if (this.player1.health <= 0) {
      return `${this.player2.name} WIN`;
    } else {
      return `${this.player1.name} WIN`;
    }
  }
}
const player1 = new Player("Budi");
const player2 = new Player("Joko");
const game = new ShootingGame(player1, player2);
console.log(game.start());
