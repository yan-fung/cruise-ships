class Ship{

    constructor(itinerary) {
        this.itinerary = itinerary;
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
        this.currentPort.addShip(this);

    }

    setSail() {
        const currentPortIndex = this.itinerary.ports.indexOf(this.currentPort);
        if (currentPortIndex === this.itinerary.ports.length -1){
            throw new Error('End of itinerary reached')
        }

        this.previousPort = this.currentPort;
        this.currentPort = null;
        this.previousPort.removeShip();
    }

    dock() {
         const previousPortIndex = this.itinerary.ports.indexOf(this.previousPort);
         this.currentPort = this.itinerary.ports[previousPortIndex + 1];
         this.currentPort.addShip(this);
    }
}




module.exports = Ship;