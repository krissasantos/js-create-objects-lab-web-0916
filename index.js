'use strict';

function Dog(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
}

var dog = new Dog("Perry", "Schnauzer" , "91")

function Cat(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
}

var cat = new Cat ("Lola", "Persian" , "9")


function Ferret(name, age, foodRequirements) {
  this.name = name;
  this.age = age;
  this.foodRequirements = foodRequirements;
}

// var Ferret = new Ferret ("Bubu", "1", ["bacon", "pastrami"])

function Bird(name, breed) {
  this.name = name;
  this.breed = breed;
}

function Fish(name, species, waterConditions) {
  this.name = name;
  this.species = species;
  this.waterConditions = waterConditions;
}