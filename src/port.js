class Port {
   constructor(name){
    this.name = name;
    this.ships = [];
   }

   addShip(ship){
      this.ships.push(ship);
   }

   removeShip(ship){
      this.ships.shift();
   }

}


module.exports = Port