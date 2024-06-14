
function validateForm() {
let isValid = true;

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;

if (isValid) {
    document.getElementById("userInfoForm").style.display = "none";
    document.getElementById("cardName").innerText = name;
    document.getElementById("cardEmail").innerText = email;
    document.getElementById("cardPhone").innerText = phone;
    document.getElementById("userCard").style.display = "block";
}

return false;
}