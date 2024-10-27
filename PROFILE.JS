// Selecting elements
const editButton = document.getElementById("edit-btn");
const updateProfileSection = document.getElementById("update-profile");
const profileDetails = document.querySelector(".profile-details");
const form = updateProfileSection.querySelector("form");

// Initially hide the update profile section
updateProfileSection.style.display = "none";

// Function to toggle the profile update form
editButton.addEventListener("click", () => {
    if (updateProfileSection.style.display === "none") {
        updateProfileSection.style.display = "block";
        editButton.textContent = "Cancel";
    } else {
        updateProfileSection.style.display = "none";
        editButton.textContent = "Edit Profile";
    }
});

// Function to handle form submission
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;

    // Update the profile details section
    profileDetails.querySelector("h2").textContent = name;
    profileDetails.querySelector("p:nth-of-type(1)").innerHTML = `<strong>Email:</strong> ${email}`;
    profileDetails.querySelector("p:nth-of-type(2)").innerHTML = `<strong>Phone:</strong> ${phone}`;
    profileDetails.querySelector("p:nth-of-type(3)").innerHTML = `<strong>Location:</strong> ${location}`;

    // Optionally, you can handle resume upload logic here (not covered in this example)

    // Hide the update profile form
    updateProfileSection.style.display = "none";
    editButton.textContent = "Edit Profile";
});
