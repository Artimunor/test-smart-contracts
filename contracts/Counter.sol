pragma solidity ^0.4.23;

contract Counter {

    int counter;

    constructor() public {
        counter = 0;
    }

    function getCounter() public view returns(int) {
        return counter;
    }

    function increase() public returns(int) {
        counter ++;
        return counter;
    }

    function decrease() public returns(int) {
        counter --;
        return counter;
    }

}
