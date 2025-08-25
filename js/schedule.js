let schedules = JSON.parse(localStorage.getItem("schedules")) || [];

const scheduleList = document.getElementById("scheduleList");
const scheduleModal = document.getElementById("scheduleModal");
const createBtn = document.getElementById("createBtn");
const closeBtn = document.querySelector(".closeBtn");
const addScheduleBtn = document.getElementById("addScheduleBtn");

const otherNotes = document.getElementById("otherNotes");
const medInfoCheckboxes = document.querySelectorAll(".medInfo");

let editIndex = null;

// Show/hide other notes
medInfoCheckboxes.forEach(cb => {
  cb.addEventListener("change", () => {
    const others = Array.from(medInfoCheckboxes).find(c => c.value === "Others");
    otherNotes.style.display = others.checked ? "block" : "none";
  });
});

function renderSchedules() {
  scheduleList.innerHTML = "";
  schedules.forEach((sch, index) => {
    const card = document.createElement("div");
    card.className = "schedule-card";

    const infoDiv = document.createElement("div");
    infoDiv.className = "schedule-info";
    infoDiv.innerHTML = `<strong>${sch.name}</strong><br>${sch.day}, ${sch.date}`;

    // Detailed info (hidden by default)
    const detailDiv = document.createElement("div");
    detailDiv.className = "schedule-detail";
    detailDiv.style.display = "none"; // hidden initially
    detailDiv.innerHTML = `
      <p><strong>Age:</strong> ${sch.age}</p>
      <p><strong>Gender:</strong> ${sch.gender}</p>
      <p><strong>Address:</strong> ${sch.address}</p>
      <p><strong>Taking Medicine:</strong> ${sch.medicine}</p>
      <p><strong>Medical Information:</strong> ${sch.medicalInfo.join(", ")} ${sch.medicalInfo.includes("Others") ? "(" + sch.otherNotes + ")" : ""}</p>
      <p><strong>Concern:</strong> ${sch.concern}</p>
      <p><strong>Expectation:</strong> ${sch.expectation}</p>
    `;

    infoDiv.addEventListener("click", () => {
      detailDiv.style.display = detailDiv.style.display === "none" ? "block" : "none";
    });

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "card-buttons";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";
    editBtn.onclick = (e) => { e.stopPropagation(); editSchedule(index); };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.onclick = (e) => { e.stopPropagation(); deleteSchedule(index); };

    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);

    card.appendChild(infoDiv);
    card.appendChild(detailDiv);
    card.appendChild(buttonsDiv);

    scheduleList.appendChild(card);
  });
}

function openModal() {
  scheduleModal.style.display = "block";
}

function closeModal() {
  scheduleModal.style.display = "none";
  clearForm();
  editIndex = null;
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("gender").value = "Male";
  document.getElementById("address").value = "";
  document.getElementById("day").value = "";
  document.getElementById("date").value = "";
  document.getElementById("medicine").value = "";
  medInfoCheckboxes.forEach(cb => cb.checked = false);
  otherNotes.value = "";
  otherNotes.style.display = "none";
  document.getElementById("concern").value = "";
  document.getElementById("expectation").value = "";
}

function addSchedule() {
  const name = document.getElementById("name").value.trim();
  if(!name) { alert("Name required"); return; }

  const scheduleData = {
    name,
    age: document.getElementById("age").value,
    gender: document.getElementById("gender").value,
    address: document.getElementById("address").value,
    day: document.getElementById("day").value,
    date: document.getElementById("date").value,
    medicine: document.getElementById("medicine").value,
    medicalInfo: Array.from(medInfoCheckboxes).filter(c => c.checked).map(c => c.value),
    otherNotes: otherNotes.value,
    concern: document.getElementById("concern").value,
    expectation: document.getElementById("expectation").value
  };

  if(editIndex !== null){
    schedules[editIndex] = scheduleData;
  } else {
    schedules.push(scheduleData);
  }

  localStorage.setItem("schedules", JSON.stringify(schedules));
  renderSchedules();
  closeModal();
}

function deleteSchedule(index) {
  const input = prompt(`Type full name of client (${schedules[index].name}) to confirm delete:`).trim().toLowerCase();
  if(input && schedules[index].name.toLowerCase().startsWith(input)){
    schedules.splice(index,1);
    localStorage.setItem("schedules", JSON.stringify(schedules));
    renderSchedules();
  } else {
    alert("Delete cancelled. Last name mismatch.");
  }
}

function editSchedule(index) {
  const input = prompt(`Type last name of client (${schedules[index].name}) to confirm edit:`).trim().toLowerCase();
  if(input && schedules[index].name.toLowerCase().startsWith(input)){
    editIndex = index;
    const sch = schedules[index];
    document.getElementById("name").value = sch.name;
    document.getElementById("age").value = sch.age;
    document.getElementById("gender").value = sch.gender;
    document.getElementById("address").value = sch.address;
    document.getElementById("day").value = sch.day;
    document.getElementById("date").value = sch.date;
    document.getElementById("medicine").value = sch.medicine;
    medInfoCheckboxes.forEach(cb => cb.checked = sch.medicalInfo.includes(cb.value));
    otherNotes.value = sch.otherNotes;
    otherNotes.style.display = sch.medicalInfo.includes("Others") ? "block" : "none";
    document.getElementById("concern").value = sch.concern;
    document.getElementById("expectation").value = sch.expectation;
    openModal();
  } else {
    alert("Edit cancelled. Last name mismatch.");
  }
}

// Event listeners
createBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
addScheduleBtn.addEventListener("click", addSchedule);

renderSchedules();