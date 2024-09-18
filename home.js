document.getElementById('second-login-btn').addEventListener('click', function(event){
    event.preventDefault();
const amount = document.getElementById('amount').value;
const pin = document.getElementById('second-pin').value;
if(pin === '1234'){
    console.log('add money successful');
    const balance = document.getElementById('account-balance').innerText;
    const addMoney = parseFloat(amount);
    const addNumber = parseFloat(balance);
  const newBalance = addMoney + addNumber;
  document.getElementById('account-balance').innerText = newBalance;
}
else{
    alert('Failed to add money,please try again')
}

})

document.getElementById('second-login-btn1').addEventListener('click', function(event){
    event.preventDefault();
const amount1 = document.getElementById('amount1').value;
const pin1 = document.getElementById('second-pin1').value;
if(pin1 === '1234'){
    console.log('add money successful');
    const balance1 = document.getElementById('account-balance').innerText;
    const addMoney1 = parseFloat(amount1);
    const addNumber1 = parseFloat(balance1);
  const newBalance1 =   addNumber1- addMoney1;
  document.getElementById('account-balance').innerText = newBalance1;
}
else{
    alert('Failed to cash-out,please try again')
}

})