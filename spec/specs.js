describe('BankAccount', function() {
  describe("deposit", function() {
    it("adds an amount of money to the bank account", function() {
    var testBankAccount = Object.create(BankAccount);
    testBankAccount.deposit(10);
    expect(testBankAccount.balance).to.equal(10);
    });
  });

  describe("withdraw", function() {
    it("subtracts the amount of money from the balance", function() {
      var testBankAccount = Object.create(BankAccount);
      testBankAccount.withdraw(10);
      expect(testBankAccount.balance).to.equal(-10);
    });
  });
});
