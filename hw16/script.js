"use strict";

class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  residents = [];
  addResident(human) {
    if (human instanceof Human){
      this.residents.push(human);
    }else{
      throw new Error (`object is not instance of Human`);
    }
  }
}

class House {
  apartments = [];
  constructor(maxOfApartments) {
    this.maxOfApartments = maxOfApartments;
  }
  addApartment(apartment) {
    if (apartment instanceof Apartment) {
      if (this.apartments.length < this.maxOfApartments) {
       this.apartments.push(apartment);
      } else {
        alert("Це вже не good!");
      }
    } else{
      throw new Error (`object is not instance of Apartment`);
    }
  }
}

const Ivan = new Human("Ivan", "male");
const Masha = new Human("Masha", "female");
const Onufriy = new Human("Onufriy", "male");
const Dozdraperma = new Human("Dozdraperma", "female");
const Vitalka = new Human("Vitalka", "male");
const Innokentiy = new Human("Innokentiy", "male");

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();
const apartment4 = new Apartment();

apartment1.addResident(Ivan);
apartment1.addResident(Masha);
apartment2.addResident(Onufriy);
apartment2.addResident(Dozdraperma);
apartment3.addResident(Vitalka);
apartment4.addResident(Innokentiy);

const house1 = new House(3);

house1.addApartment(apartment1);
house1.addApartment(apartment2);
house1.addApartment(apartment3);
house1.addApartment(apartment4);

console.log(Masha);
console.log(apartment2);
console.log(house1);