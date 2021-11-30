const CartoonCharacters = artifacts.require("CartoonCharacters");

module.exports = async function(deployer) {
  await deployer.deploy(CartoonCharacters);
};
