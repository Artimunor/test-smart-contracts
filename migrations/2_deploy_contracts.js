const HelloWorld = artifacts.require("./HelloWorld.sol")
const Counter = artifacts.require("./Counter.sol")

module.exports = function(deployer) {
	deployer.deploy(HelloWorld);
	deployer.deploy(Counter);
};