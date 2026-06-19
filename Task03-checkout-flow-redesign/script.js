const form = document.getElementById("checkoutForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;

if(name === "" || email === ""){
    alert("Please fill all required fields");
}
else{
    alert("Proceeding to Payment Step");
}
});
