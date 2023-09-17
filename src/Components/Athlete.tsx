import { action, makeObservable, observable } from 'mobx';

class Athlete {
  name: string;
  age: number;
  salary: number;
  teamHistory: string[];

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.teamHistory = [];
    this.salary = salary;
    makeObservable(this, {
      tradePlayer: action,
      wishHappyBirthday: action,
      name: observable,
      teamHistory: observable,
      age: observable,
      salary: observable,
    });
  }
  wishHappyBirthday() {
    this.age++;
  }

  tradePlayer(team: string) {
    this.teamHistory.push(team);
  }
}

export default Athlete;
