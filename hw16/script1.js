"use strict";

function Human(name, gender) {
  this.name = name;
  this.gender = gender;
  this.getInfo = function () {
    console.log(`Name: ${this.name} Gender: ${this.gender}  `);
  };
}

function Apartment(human) {
  let residents = [];
  this.addResident = (human) => {
    if (human instanceof Human) { 
      residents.push(human);
    }else{
      throw new Error(`object is not instance of Human`)
    }
  };

  this.getInfo1 = function () {
    console.log(`Resident: ${residents}`);
  };
}

function House(maxOfApartments) {
  let apartments = [];
  this.maxOfApartments = maxOfApartments;
  this.addApartment = (apartment) => {
    if (apartment instanceof Apartment){
      if (apartments.length < this.maxOfApartments) {
        apartments.push(apartment);
      } else {
        alert("Це вже не good!");
      }
    }else{
      throw new Error(`object is not instance of Apartment`);
    }
  };

  this.getInfo1 = function () {
    console.log(`Apartments: ${apartments}`);
  };

}

const Ivan = new Human("Ivan", "male");
const Masha = new Human("Masha", "female");
const Onufriy = new Human("Onufriy", "male");
const Dozdraperma = new Human("Dozdraperma", "female");
const Vitalka = new Human("Vitalka", "male");
const Innokentiy = new Human("Innokentiy", "male");

Masha.getInfo();
Ivan.getInfo();
Onufriy.getInfo();
Dozdraperma.getInfo();
Vitalka.getInfo();
Innokentiy.getInfo();

const Apartment1 = new Apartment();
const Apartment2 = new Apartment();
const Apartment3 = new Apartment();
const Apartment4 = new Apartment();

Apartment1.addResident(Ivan);
Apartment1.addResident(Masha);
Apartment1.getInfo1();

Apartment2.addResident(Onufriy);
Apartment2.addResident(Dozdraperma);
Apartment3.addResident(Vitalka);
Apartment4.addResident(Innokentiy);

const house1 = new House(3);

house1.addApartment(Apartment1);
house1.addApartment(Apartment2);
house1.addApartment(Apartment3);
house1.addApartment(Apartment4);
house1.getInfo1();
console.log(house1);