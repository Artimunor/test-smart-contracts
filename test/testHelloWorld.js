var HelloWorld = artifacts.require("HelloWorld");

contract('HelloWorld' , () => {

    contract('getHello()', () => {

        it('should return "Hello World!"', done => {
            HelloWorld.deployed()
                .then(instance => instance.getHello.call())
                .then(result => {
                    assert.equal(result, 'Hello World!');
                    done();
                });
        });
    });
});