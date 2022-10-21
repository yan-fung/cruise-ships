const Ship = require('../src/ship');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    })

    it('has a starting port', () => {
        const ship = new Ship('Dover');
        expect(ship.startingPort).toEqual('Dover')
    })

    it('can set sail', () => {
        const ship = new Ship('Dover');

        ship.setSail();

        expect(ship.startingPort).toBeFalsy();
    })
})