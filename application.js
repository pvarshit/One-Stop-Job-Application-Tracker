// Sample data for internship and job applications
const applications = {
    internships: [
        { title: "Internship at Google", status: "Applied" },
        { title: "Internship at Facebook", status: "Interviewing" },
        { title: "Internship at Amazon", status: "Offer" },
    ],
    jobs: [
        { title: "Software Engineer at Microsoft", status: "Applied" },
        { title: "Product Manager at Apple", status: "Rejected" },
        { title: "Data Analyst at Netflix", status: "Interviewing" },
    ],
};

// Function to render applications dynamically
function renderApplications() {
    const internshipList = document.getElementById("internship-list");
    const jobList = document.getElementById("job-list");

    // Clear existing lists
    internshipList.innerHTML = "";
    jobList.innerHTML = "";

    // Render Internship Applications
    applications.internships.forEach(app => {
        const appItem = document.createElement("div");
        appItem.className = "application-item";
        appItem.innerHTML = `
            <strong>${app.title}</strong> - Status: ${app.status}
            <button class="status-button" onclick="updateStatus('internship', '${app.title}')">Update Status</button>
        `;
        internshipList.appendChild(appItem);
    });

    // Render Job Applications
    applications.jobs.forEach(app => {
        const appItem = document.createElement("div");
        appItem.className = "application-item";
        appItem.innerHTML = `
            <strong>${app.title}</strong> - Status: ${app.status}
            <button class="status-button" onclick="updateStatus('job', '${app.title}')">Update Status</button>
        `;
        jobList.appendChild(appItem);
    });
}

// Function to update application status
function updateStatus(type, title) {
    const newStatus = prompt("Enter new status (e.g., Applied, Interviewing, Offer, Rejected):");
    if (newStatus) {
        const applicationList = applications[type + 's'];
        const application = applicationList.find(app => app.title === title);
        if (application) {
            application.status = newStatus;
            renderApplications();
        }
    }
}

// Function to handle search functionality
function searchApplications() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const internshipList = document.getElementById("internship-list");
    const jobList = document.getElementById("job-list");

    // Filter and display internships
    const filteredInternships = applications.internships.filter(app => app.title.toLowerCase().includes(searchTerm));
    internshipList.innerHTML = "";
    filteredInternships.forEach(app => {
        const appItem = document.createElement("div");
        appItem.className = "application-item";
        appItem.innerHTML = `
            <strong>${app.title}</strong> - Status: ${app.status}
            <button class="status-button" onclick="updateStatus('internship', '${app.title}')">Update Status</button>
        `;
        internshipList.appendChild(appItem);
    });

    // Filter and display jobs
    const filteredJobs = applications.jobs.filter(app => app.title.toLowerCase().includes(searchTerm));
    jobList.innerHTML = "";
    filteredJobs.forEach(app => {
        const appItem = document.createElement("div");
        appItem.className = "application-item";
        appItem.innerHTML = `
            <strong>${app.title}</strong> - Status: ${app.status}
            <button class="status-button" onclick="updateStatus('job', '${app.title}')">Update Status</button>
        `;
        jobList.appendChild(appItem);
    });
}

// Function to add a new application
function addApplication() {
    const type = prompt("Enter type (internship/job):");
    const title = prompt("Enter application title:");
    const status = prompt("Enter initial status:");

    if (type && title && status) {
        applications[type + 's'].push({ title, status });
        renderApplications();
    }
}

// Event listeners
document.getElementById("search-input").addEventListener("input", searchApplications);
document.getElementById("add-application").addEventListener("click", addApplication);

// Initial rendering of applications
renderApplications();
