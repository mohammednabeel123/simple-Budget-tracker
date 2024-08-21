let totalBalance = 2000;
const balanceElement = document.getElementById("total-balance");
const incomeRadio = document.getElementById("incomeRadio");
const expenseRadio = document.getElementById("expenseRadio");
const amount = document.getElementById("amount");
const description = document.getElementById("description");
const transactionList = document.getElementById("transaction-list");
const transactionForm = document.getElementById("transaction-form");

balanceElement.innerText = totalBalance;

transactionForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const transactionAmount = parseFloat(amount.value);
  const transactionDescription = description.value;

  if (incomeRadio.checked) {
    totalBalance += transactionAmount;
    transactionList.innerHTML += `<li>Income:$${transactionAmount.toFixed(
      2
    )} - ${transactionDescription}</li>`;
  } else if (expenseRadio.checked) {
    totalBalance -= transactionAmount;
    transactionList.innerHTML += `<li>Expenses:$${transactionAmount.toFixed(
      2
    )} - ${transactionDescription}</li>`;
  }
  balanceElement.innerText = totalBalance.toFixed(2);

  amount.value = "";
  description.value = "";
});
