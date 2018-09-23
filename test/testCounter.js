var Counter = artifacts.require("Counter");

contract('Counter' , () => {

    contract('increase()', () => {

        it('should return 1', done => {
            Counter.deployed()
                .then(instance => instance.increase.call())
                .then(result => {
                    assert.equal(result, '1');
                    done();
                })
                .then(instance => instance.decrease.call())
                .then(result => {
                    assert.equal(result, '0');
                    done();
                })
                ;
        });
    });

    contract('getCounter()', () => {

        it('should return 0', done => {
            Counter.deployed()
                .then(instance => instance.getCounter.call())
                .then(result => {
                    assert.equal(result, '0');
                    done();
                });
        });
    });

    contract('decrease()', () => {

        it('should return -1', done => {
            Counter.deployed()
                .then(instance => instance.decrease.call())
                .then(result => {
                    assert.equal(result, '-1');
                    done();
                });
        });
    });
});