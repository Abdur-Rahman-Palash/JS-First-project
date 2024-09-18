document.getElementById("login-btn").addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById("pin-number").value;
    if(phoneNumber === '17'  && pinNumber === '1234'){
        console.log("successfully logged in")
        window.location.href = './home.html'
    }
    else{
        alert("wrong pin or number. please try again")
    }
})
