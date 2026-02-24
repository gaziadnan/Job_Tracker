let jobs = [
{id:1,company:"Mobile First Corp",position:"React Native Developer",location:"Remote",type:"Full-time",salary:"$85,000 - $110,000",description:"Build cross-platform mobile applications using React Native.",status:"all"},
{id:2,company:"WebFlow Agency",position:"Web Designer & Developer",location:"Los Angeles, CA",type:"Part-time",salary:"$60,000 - $90,000",description:"Create stunning web experiences for high-profile clients.",status:"all"},
{id:3,company:"DataViz Solutions",position:"Data Visualization Specialist",location:"Boston, MA",type:"Full-time",salary:"$75,000 - $95,000",description:"Transform complex data into compelling visualizations.",status:"all"},
{id:4,company:"CloudFirst Inc",position:"Backend Developer",location:"Seattle, WA",type:"Full-time",salary:"$100,000 - $130,000",description:"Design and maintain scalable backend systems.",status:"all"},
{id:5,company:"Innovation Labs",position:"UI/UX Engineer",location:"Austin, TX",type:"Full-time",salary:"$90,000 - $120,000",description:"Create beautiful user interfaces.",status:"all"},
{id:6,company:"MegaCorp Solutions",position:"JavaScript Developer",location:"New York, NY",type:"Full-time",salary:"$80,000 - $105,000",description:"Build enterprise applications with JavaScript.",status:"all"},
{id:7,company:"StartupXYZ",position:"Full Stack Engineer",location:"Remote",type:"Full-time",salary:"$95,000 - $125,000",description:"Work on fast-growing startup platform.",status:"all"},
{id:8,company:"TechCorp Industries",position:"Senior Frontend Developer",location:"San Francisco, CA",type:"Full-time",salary:"$110,000 - $150,000",description:"Build scalable frontend applications with React.",status:"all"},
];

let currentTab="all";

function renderJobs(){
  const container=document.getElementById("jobsContainer");
  container.innerHTML="";

  let filtered=jobs.filter(job=>{
    if(currentTab==="all") return true;
    return job.status===currentTab;
  });

  document.getElementById("jobsCount").innerText=filtered.length+" jobs";

  if(filtered.length===0){
    container.innerHTML=`
    <div class="no-jobs">
      <img src="./image/jobs.png">
      <h3>No jobs available</h3>
      <p>Check back soon for new job opportunities</p>
    </div>`;
    return;
  }

  filtered.forEach(job=>{
    container.innerHTML+=`
      <div class="job-card 
        ${job.status==="interview" ? "interview-active" : ""} 
        ${job.status==="rejected" ? "rejected-active" : ""}">
        
        <div class="job-top">
          <div>
            <h3>${job.company}</h3>
            <div class="job-meta">${job.position}</div>
          </div>
          <button class="delete-btn" onclick="deleteJob(${job.id})">🗑</button>
        </div>

        ${job.status==="interview" ? `<div class="status-badge interview">INTERVIEW</div>` : ""}
        ${job.status==="rejected" ? `<div class="status-badge rejected">REJECTED</div>` : ""}

        <div class="job-meta">${job.location} • ${job.type} • ${job.salary}</div>
        <div class="description">${job.description}</div>

        <div class="buttons">
          <button class="btn interview" onclick="setStatus(${job.id},'interview')">Interview</button>
          <button class="btn rejected" onclick="setStatus(${job.id},'rejected')">Rejected</button>
        </div>
      </div>
    `;
  });

  updateDashboard();
}

function setStatus(id,status){
  let job=jobs.find(j=>j.id===id);
  job.status=status;
  renderJobs();
}

function deleteJob(id){
  jobs=jobs.filter(j=>j.id!==id);
  renderJobs();
}

function changeTab(tab,event){
  currentTab=tab;
  document.querySelectorAll(".tab").forEach(btn=>btn.classList.remove("active"));
  event.target.classList.add("active");
  renderJobs();
}

function updateDashboard(){
  document.getElementById("totalCount").innerText=jobs.length;
  document.getElementById("interviewCount").innerText=jobs.filter(j=>j.status==="interview").length;
  document.getElementById("rejectedCount").innerText=jobs.filter(j=>j.status==="rejected").length;
}

renderJobs();