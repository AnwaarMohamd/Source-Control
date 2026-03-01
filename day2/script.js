// Button Interaction
const button = document.getElementById("main-btn");

button.addEventListener("click", function () {
    alert("Button Clicked! 🎉");
});


// Form Validation
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        message.style.color = "red";
        message.textContent = "Please fill in all fields!";
    } else {
        message.style.color = "green";
        message.textContent = "Form submitted successfully ✅";
        form.reset();
    }
});