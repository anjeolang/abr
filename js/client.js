let clients = JSON.parse(localStorage.getItem("clients")) || {};
let editKey = null;

const clientList = document.getElementById("clientList");
const modal = document.getElementById("clientFormModal");
const newBtn = document.getElementById("newClientBtn");
const closeBtn = document.getElementById("closeFormBtn");
const addBtn = document.getElementById("addClientBtn");

const nameInput = document.getElementById("clientName");
const ageInput = document.getElementById("clientAge");
const genderInput = document.getElementById("clientGender");
const addressInput = document.getElementById("clientAddress");
const dateInput = document.getElementById("clientDate");
const medicineInput = document.getElementById("clientMedicine");
const medicalInfoInput = document.getElementById("clientMedicalInfo");
const otherNotesInput = document.getElementById("clientOtherNotes");
const concernInput = document.getElementById("clientConcern");
const expectationInput = document.getElementById("clientExpectation");

// Show/Hide modal
newBtn.addEventListener("click", () => {
  editKey = null;
  document.getElementById("formTitle").textContent = "Add New Client";
  clientForm.reset();
  otherNotesInput.style.display = "none";
  modal.style.display = "flex";
});
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if(e.target === modal) modal.style.display = "none"; });

// Show/Hide Other Notes
medicalInfoInput.addEventListener("change", () => {
  otherNotesInput.style.display = medicalInfoInput.value === "Other" ? "block" : "none";
});

// Render client list
function renderClients(){
  clientList.innerHTML = "";
  Object.keys(clients).forEach(key => {
    const data = clients[key];
    const card = document.createElement("div");
    card.className = "client-card";

    card.innerHTML = `
      <strong>${data.name}</strong> - ${data.date}
      <div style="margin-top:5px;">
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
      </div>
      <div class="details" style="display:none;">
        Age: ${data.age}<br>
        Gender: ${data.gender}<br>
        Address: ${data.address}<br>
        Taking Medicine: ${data.medicine}<br>
        Medical Info: ${data.medical}<br>
        Other Notes: ${data.other}<br>
        Concern: ${data.concern}<br>
        Expectation: ${data.expectation}
      </div>
    `;

    // Toggle details
    card.addEventListener("click", e => {
      if(e.target.tagName !== "BUTTON"){
        const det = card.querySelector(".details");
        det.style.display = det.style.display === "none" ? "block" : "none";
      }
    });

    // Edit
    card.querySelector(".editBtn").addEventListener("click", e => {
      e.stopPropagation();
      const input = prompt("Type full name to edit:").trim().toLowerCase();
      if(input && data.name.toLowerCase().startsWith(input)){
        editKey = key;
        document.getElementById("formTitle").textContent = "Edit Client";
        nameInput.value = data.name;
        ageInput.value = data.age;
        genderInput.value = data.gender;
        addressInput.value = data.address;
        dateInput.value = data.date;
        medicineInput.value = data.medicine;
        medicalInfoInput.value = data.medical;
        otherNotesInput.value = data.other;
        otherNotesInput.style.display = data.medical === "Other" ? "block" : "none";
        concernInput.value = data.concern;
        expectationInput.value = data.expectation;
        modal.style.display = "flex";
      } else alert("Incorrect full name!");
    });

    // Delete
    card.querySelector(".deleteBtn").addEventListener("click", e => {
      e.stopPropagation();
      const input = prompt("Type full name to delete:").trim().toLowerCase();
      if(input && data.name.toLowerCase().startsWith(input)){
        delete clients[key];
        localStorage.setItem("clients", JSON.stringify(clients));
        renderClients();
      } else alert("Incorrect full name!");
    });

    clientList.appendChild(card);
  });
}

// Add/Edit client
addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if(!name) return alert("Name required!");
  const data = {
    name,
    age: ageInput.value,
    gender: genderInput.value,
    address: addressInput.value,
    date: dateInput.value,
    medicine: medicineInput.value,
    medical: medicalInfoInput.value,
    other: otherNotesInput.value,
    concern: concernInput.value,
    expectation: expectationInput.value
  };
  const key = editKey || name + "_" + dateInput.value;
  clients[key] = data;
  localStorage.setItem("clients", JSON.stringify(clients));
  modal.style.display = "none";
  renderClients();
});

// Initial render
renderClients();