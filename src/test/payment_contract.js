const PaymentContract = artifacts.require("PaymentContract");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("PaymentContract", function (/* accounts */) {
  it("should assert true", async function () {
    await PaymentContract.deployed();
    return assert.isTrue(true);
  });
});
