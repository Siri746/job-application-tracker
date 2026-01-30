// Select DOM elements
const companyInput = document.getElementById('companyInput');
const roleInput = document.getElementById('roleInput');
const statusInput = document.getElementById('statusInput');
const addBtn = document.getElementById('addBtn');
const jobList = document.getElementById('jobList');

// Initialize jobs array from LocalStorage (or empty if first time)
let jobs = JSON.parse(localStorage.getItem('myJobs')) || [];

function renderJobs() {
    jobList.innerHTML = ''; // Clear current list

    jobs.forEach((job, index) => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        
        jobCard.innerHTML = `
            <div class="job-info">
                <h3>${job.company}</h3>
                <p>${job.role}</p>
                <span class="status-badge status-${job.status}">${job.status}</span>
            </div>
            <button class="delete-btn" onclick="deleteJob(${index})">Delete</button>
        `;
        
        jobList.appendChild(jobCard);
    });
}

// Function to add a new job
function addJob() {
    const company = companyInput.value.trim();
    const role = roleInput.value.trim();
    const status = statusInput.value;

    if (company === '' || role === '') {
        alert("Please fill in all fields");
        return;
    }

    const newJob = { company, role, status };
    jobs.push(newJob);
    saveAndRefresh();
    companyInput.value = '';
    roleInput.value = '';
}

// Function to delete a job
function deleteJob(index) {
    jobs.splice(index, 1);
    saveAndRefresh();
}

function saveAndRefresh() {
    localStorage.setItem('myJobs', JSON.stringify(jobs));
    renderJobs();
}

addBtn.addEventListener('click', addJob);

renderJobs();