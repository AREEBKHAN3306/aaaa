document.addEventListener("DOMContentLoaded", () => {
    
    // changing colors of the Headers when the cursor is moved over it.
    const header = document.querySelector("header");
    header.addEventListener("mouseover", () => {
        header.style.backgroundColor = "#FF5722";
    });
    header.addEventListener("mouseout", () => {
        header.style.background = "#fa6603";
    });

    // Generating message when different actions are done on the Form 
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = "Please fill out all fields.";
            formMessage.style.color = "red";
        } else if (!validateEmail(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
        } else {
            formMessage.textContent = "Thank you for your message!";
            formMessage.style.color = "green";
            contactForm.reset();
        }
    });

    // Making sure the correct email address is entered. 
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
