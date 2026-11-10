
const form = document.getElementById("registrationForm");
const result = document.getElementById("result");
const displayDetails = document.getElementById("displayDetails");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    const fullName = document.getElementById("fullName").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const qualification = document.getElementById("qualification").value;
    const course = document.getElementById("course").value;

    // Generate registration number
    const registrationNumber =
        "REG" + Date.now().toString().slice(-8);

    // Store details
    const details = [
        ["Registration Number", registrationNumber],
        ["Full Name", fullName],
        ["Date of Birth", dob],
        ["Gender", gender],
        ["Email Address", email],
        ["Phone Number", phone],
        ["Address", address],
        ["Qualification", qualification],
        ["Course / Program", course]
    ];

    // Display formatted details safely
    displayDetails.replaceChildren();

    details.forEach(function(item) {

        const row = document.createElement("div");
        row.className = "detail-row";

        const label = document.createElement("strong");
        label.textContent = item[0];

        const value = document.createElement("span");
        value.textContent = item[1];

        row.appendChild(label);
        row.appendChild(value);

        displayDetails.appendChild(row);
    });

    // Show success result
    form.hidden = true;
    result.hidden = false;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Start a new application
function newApplication() {

    form.reset();

    result.hidden = true;
    form.hidden = false;

    displayDetails.replaceChildren();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
