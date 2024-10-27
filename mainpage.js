document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const totalApplications = document.getElementById("total-applications");
    const interviewingCount = document.getElementById("interviewing");
    const offersCount = document.getElementById("offers");
    const rejectedCount = document.getElementById("rejected");
    const saveNoteButton = document.getElementById("save-note-button");
    const noteTextarea = document.getElementById("note-text");

    // Placeholder data for applications
    const applications = [
        { title: "Amazon Application", status: "Interviewing" },
        { title: "Google Application", status: "Applied" },
        { title: "Facebook Application", status: "Offer" },
        { title: "Apple Application", status: "Rejected" },
        { title: "Microsoft Application", status: "Applied" },
        { title: "Tesla Application", status: "Interviewing" },
        { title: "Netflix Application", status: "Offer" },
        { title: "Twitter Application", status: "Rejected" },
        { title: "Spotify Application", status: "Applied" },
        { title: "LinkedIn Application", status: "Interviewing" },
        // Add more applications as needed
    ];

    // Function to update application stats
    function updateStats() {
        const appliedCount = applications.filter(app => app.status === "Applied").length;
        const interviewingCountValue = applications.filter(app => app.status === "Interviewing").length;
        const offerCountValue = applications.filter(app => app.status === "Offer").length;
        const rejectedCountValue = applications.filter(app => app.status === "Rejected").length;

        totalApplications.textContent = applications.length; // Total applications
        interviewingCount.textContent = interviewingCountValue; // Interviewing
        offersCount.textContent = offerCountValue; // Offers
        rejectedCount.textContent = rejectedCountValue; // Rejected
        
        // Call function to display the bar chart
        displayBarChart(appliedCount, interviewingCountValue, offerCountValue, rejectedCountValue);
    }

    // Function to display a bar chart
    function displayBarChart(applied, interviewing, offers, rejected) {
        const chartContainer = document.getElementById("chart-container");
        chartContainer.innerHTML = ""; // Clear previous chart

        const statuses = ["Applied", "Interviewing", "Offers", "Rejected"];
        const values = [applied, interviewing, offers, rejected];
        
        values.forEach((value, index) => {
            const bar = document.createElement("div");
            bar.className = "bar";
            bar.style.width = `${value * 10}px`; // Width multiplier for visibility
            bar.textContent = `${statuses[index]}: ${value}`;
            chartContainer.appendChild(bar);
        });
    }

    // Search Functionality
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredApps = applications.filter(app => app.title.toLowerCase().includes(searchTerm));
        
        // Debug: Log filtered applications
        console.log("Filtered Applications: ", filteredApps);
        
        // Here you can display filtered applications as needed
        // e.g., updating the UI with search results
    });

    // Note-saving Functionality with Local Storage
    saveNoteButton.addEventListener("click", () => {
        const noteText = noteTextarea.value.trim();
        if (noteText) {
            localStorage.setItem("applicationNote", noteText);
            alert("Note saved successfully!");
            noteTextarea.value = ""; // Clear textarea after save
        } else {
            alert("Please enter a note before saving.");
        }
    });

    // Retrieve saved note on page load
    const savedNote = localStorage.getItem("applicationNote");
    if (savedNote) {
        noteTextarea.value = savedNote;
    }

    // Update stats on page load
    updateStats();
});
