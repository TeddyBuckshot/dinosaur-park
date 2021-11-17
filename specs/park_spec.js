const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;

  beforeEach(function () {
    park = new Park('Dino Land', 300);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 60);
    dinosaur3 = new Dinosaur('raptor', 'carnivore', 70);
    dinosaur4 = new Dinosaur('triceratops', 'herbivore', 80);
    dinosaur5 = new Dinosaur('megladon', 'carnivore', 100);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Dino Land');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 300);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinos;
    assert.deepStrictEqual(actual, []);

  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    park.addDino(dinosaur4);
    park.addDino(dinosaur5);
    const actual = park.dinos;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    park.addDino(dinosaur4);
    park.addDino(dinosaur5);
    park.rmDino(dinosaur5);
    const collection = park.dinos;

    assert.deepStrictEqual(collection, [dinosaur1, dinosaur2, dinosaur3, dinosaur4]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    park.addDino(dinosaur4);
    park.addDino(dinosaur5);
    const result = park.mostVisitDino(park.dinos);

    assert.deepStrictEqual(result, 100);
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
