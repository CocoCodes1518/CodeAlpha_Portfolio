// FORM SUBMISSION HANDLER
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset(); // Clear form fields
});

// OPTIONAL: Hero typing animation (like typing out intro slowly)
document.addEventListener("DOMContentLoaded", () => {
    const introText = "A Front-End Web Developer passionate about creating beautiful and functional user experiences.";
    const element = document.querySelector(".hero p");
    let i = 0;

    function typeText() {
        if (i < introText.length) {
            element.innerHTML += introText.charAt(i);
            i++;
            setTimeout(typeText, 30);
        }
    }

    // Clear initial text and begin typing
    if (element) {
        element.innerHTML = "";
        typeText();
    }
});
