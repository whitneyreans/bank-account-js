var BankAccount = {
  name: "",
  balance: 0,
  deposit: function(amount) {
    this.balance = this.balance + amount;
  },

  withdraw: function(amount) {
    this.balance = this.balance - amount;
  }
};

$(document).ready(function() {
  var newBankAccount = Object.create(BankAccount);

  $("form#new-account").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var initialDeposit = parseFloat($("input#initial-deposit").val());

    newBankAccount.name = inputtedName;
    newBankAccount.balance = initialDeposit;

    $("input#name").val("");
    $("input#initial-deposit").val("");

    $("#show-balance").show();
    $(".account-name").text(newBankAccount.name);
    $(".balance").text(newBankAccount.balance);
  });

  $("form#deposit-withdraw").submit(function(event) {
    event.preventDefault();

    var inputtedDeposit = parseFloat($("input#deposit-amount").val());
    var inputtedWithdraw = parseFloat($("input#withdraw-amount").val());

    if (("#deposit-amount" !== NaN) && ("#withdraw-amount" !== NaN)) {
      newBankAccount.deposit(inputtedDeposit);
      newBankAccount.withdraw(inputtedWithdraw);
    } else if ("#deposit-amount" === NaN) {
        inputtedDeposit.val() = 0;
        newBankAccount.withdraw(inputtedWithdraw);
    } else if ("#withdraw-amount" === NaN) {
        inputtedWithdraw.val() = 0;
        newBankAccount.deposit(inputtedDeposit);
    }

    $(".balance").text(newBankAccount.balance);

    $("input#deposit-amount").val("");
    $("input#withdraw-amount").val("");
  });

});
