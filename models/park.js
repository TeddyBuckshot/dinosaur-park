const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinos = [];
};

Park.prototype.addDino = function (dino) {
    this.dinos.push(dino);
  };

Park.prototype.rmDino = function (dino) {
    this.dinos.pop(dino);
};

Park.prototype.mostVisitDino = function(dinos) {
    const largest= 0;

    for (i=0; i<dinos.length;i++){
        if (dinos.dinosaur.guestsAttractedPerDay[i]>largest) {
            largest=dinos.dinosaur.guestsAttractedPerDay[i];
        }
    }
    return largest;
}


module.exports = Park;