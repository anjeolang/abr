let currentScreen = 1;
let selectedCategory = null;
let selectedItems = {}; // temp storage for current screen
let resultsStorage = JSON.parse(localStorage.getItem("resultsStorage")) || {};

// Move to next screen
function nextScreen(screen) {
  document.getElementById(`screen${screen}`).style.display = "none";
  document.getElementById(`screen${screen+1}`).style.display = "block";

  if(screen === 1) loadCategories();
  if(screen === 3) showFinal();
}

// Move to previous screen
function prevScreen(screen) {
  document.getElementById(`screen${screen}`).style.display = "none";
  document.getElementById(`screen${screen-1}`).style.display = "block";
}

// Load categories for Screen 2
function loadCategories() {
  const div = document.getElementById("categoryList");
  div.innerHTML = "";
  analyzerData.forEach(cat => {
    let btn = document.createElement("button");
    btn.textContent = cat.category;
    btn.onclick = () => loadChecklist(cat.category);
    div.appendChild(btn);
  });
}

// Load checklist + notes for Screen 3
// Load checklist + notes for Screen 3 (updated with color circles)
function loadChecklist(categoryName) {
  selectedCategory = analyzerData.find(c => c.category === categoryName);
  const div = document.getElementById("checklist");
  div.innerHTML = "";
  document.getElementById("checklistTitle").textContent = categoryName;

  selectedCategory.list.forEach(item => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <strong>${item.name}</strong><br>
      <input type="radio" id="${item.name}_HIGH" name="${item.name}" value="HIGH">
      <label for="${item.name}_HIGH">HIGH</label>
      <input type="radio" id="${item.name}_LOW" name="${item.name}" value="LOW">
      <label for="${item.name}_LOW">LOW</label><br>
      <span>Color: </span>
      <div class="color-container" style="display:inline-block;"></div>
      <br>
      <input type="text" placeholder="Notes" class="notes" data-name="${item.name}">
    `;

    div.appendChild(card);

    // --- Create color circles dynamically ---
    const colorContainer = card.querySelector(".color-container");
    const colors = ["red", "blue", "yellow"];
    colors.forEach(c => {
      const circle = document.createElement("span");
      circle.style.display = "inline-block";
      circle.style.width = "20px";
      circle.style.height = "20px";
      circle.style.marginRight = "5px";
      circle.style.borderRadius = "50%";
      circle.style.backgroundColor = c;
      circle.style.border = "2px solid #ccc";
      circle.style.cursor = "pointer";

      // Click event for color circle
      circle.addEventListener("click", () => {
        // Remove highlight sa lahat ng circles
        colorContainer.querySelectorAll("span").forEach(s => s.style.border = "2px solid #ccc");
        // Highlight selected
        circle.style.border = "3px solid black";

        // SAVE sa selectedItems
        if(!selectedItems[selectedCategory.category]) selectedItems[selectedCategory.category] = {};
        if(!selectedItems[selectedCategory.category][item.name]) selectedItems[selectedCategory.category][item.name] = {};
        selectedItems[selectedCategory.category][item.name].color = c;

        // SAVE HIGH/LOW kung may napili
        const typeRad = card.querySelector(`input[name="${item.name}"]:checked`);
        if(typeRad) selectedItems[selectedCategory.category][item.name].type = typeRad.value;

        // SAVE notes kung may laman
        const noteInput = card.querySelector(`.notes[data-name="${item.name}"]`);
        if(noteInput.value.trim() !== "") selectedItems[selectedCategory.category][item.name].notes = noteInput.value.trim();
      });
      colorContainer.appendChild(circle);
    });

    // HIGH/LOW change event
    const radios = card.querySelectorAll(`input[name="${item.name}"]`);
    radios.forEach(r => {
      r.addEventListener("change", () => {
        if(!selectedItems[selectedCategory.category]) selectedItems[selectedCategory.category] = {};
        if(!selectedItems[selectedCategory.category][item.name]) selectedItems[selectedCategory.category][item.name] = {};
        selectedItems[selectedCategory.category][item.name].type = r.value;

        // SAVE color kung may napili na
        const selectedCircle = colorContainer.querySelector("span[style*='3px solid black']");
        if(selectedCircle) selectedItems[selectedCategory.category][item.name].color = selectedCircle.style.backgroundColor;

        // SAVE notes
        const noteInput = card.querySelector(`.notes[data-name="${item.name}"]`);
        if(noteInput.value.trim() !== "") selectedItems[selectedCategory.category][item.name].notes = noteInput.value.trim();
      });
    });

    // Notes input event
    const noteInput = card.querySelector(`.notes[data-name="${item.name}"]`);
    noteInput.addEventListener("input", () => {
      if(!selectedItems[selectedCategory.category]) selectedItems[selectedCategory.category] = {};
      if(!selectedItems[selectedCategory.category][item.name]) selectedItems[selectedCategory.category][item.name] = {};
      if(noteInput.value.trim() !== "") selectedItems[selectedCategory.category][item.name].notes = noteInput.value.trim();
    });
  });

  nextScreen(2); // automatic move to screen 3
}
// Prepare final report Screen 4
// Prepare final report Screen 4 (updated for color circles)
function showFinal() {
  const div = document.getElementById("finalReport");
  div.innerHTML = "";

  // Patient info
  const lname = document.getElementById("lastname").value.trim();
  const fname = document.getElementById("firstname").value.trim();
  const mi = document.getElementById("middle").value.trim();
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("age").value;
  const date = document.getElementById("date").value;
  const patientKey = `${lname}, ${fname} ${mi}`;

  div.innerHTML += `
    <h3>Client Information</h3>
    <p>${lname}, ${fname} ${mi}.<br>
    Gender: ${gender}<br>
    Age: ${age}<br>
    Date: ${date}</p>
  `;

  // Assessment Results header
  div.innerHTML += "<h3>Assessment Results</h3>";

  selectedCategory.list.forEach(item => {
    const sel = selectedItems[selectedCategory.category] 
                ? selectedItems[selectedCategory.category][item.name] 
                : null;

    if(sel && sel.type && sel.color){ // only show if both HIGH/LOW and color selected
      const data = item[sel.type]; // meaning, condition, advice
      if(data){
        let card = document.createElement("div");
        card.className = "card";
        card.style.borderLeft = `5px solid ${sel.color}`; // highlight by color

        card.innerHTML = `
          <strong>${item.name} (${sel.type})</strong><br>
          <em>${data.meaning}</em><br>
          Condition: ${data.condition}<br>
          Advice: ${data.advice}<br>
          ${sel.notes ? `<span style="color:${sel.color}">Notes: ${sel.notes}</span>` : ""}
        `;

        div.appendChild(card);

        // Save temp selections for this session (needed for saveResult)
        if(!selectedItems[selectedCategory.category]) selectedItems[selectedCategory.category] = {};
        selectedItems[selectedCategory.category][item.name] = {
          type: sel.type,
          color: sel.color,
          notes: sel.notes || ""
        };
      }
    }
  });
}

// Save result (include meaning, condition, advice)
// Save result (include meaning, condition, advice, color)
function saveResult() {
  const lname = document.getElementById("lastname").value.trim();
  const fname = document.getElementById("firstname").value.trim();
  const mi = document.getElementById("middle").value.trim();
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("age").value;
  const date = document.getElementById("date").value;
  const patientKey = `${lname}, ${fname} ${mi}`;

  // Ensure structure exists
  if (!resultsStorage[patientKey]) resultsStorage[patientKey] = {};
  if (!resultsStorage[patientKey][date]) resultsStorage[patientKey][date] = {};

  // Save patient info
  resultsStorage[patientKey][date]["info"] = { gender, age, lname, fname, mi };

  // Save assessment items
  for (let cat in selectedItems) {
    if (!resultsStorage[patientKey][date][cat]) resultsStorage[patientKey][date][cat] = {};

    for (let itemName in selectedItems[cat]) {
      const sel = selectedItems[cat][itemName];
      const dataItem = selectedCategory.list.find(i => i.name === itemName)[sel.type];

      // Only save if HIGH/LOW and color selected
      if(sel.type && sel.color){
        resultsStorage[patientKey][date][cat][itemName] = {
          type: sel.type,
          color: sel.color,
          notes: sel.notes || "",
          meaning: dataItem.meaning,
          condition: dataItem.condition,
          advice: dataItem.advice
        };
      }
    }
  }

  // Save to localStorage
  localStorage.setItem("resultsStorage", JSON.stringify(resultsStorage));
  alert("Result saved successfully!");
  
  // Clear temp selection
  selectedItems = {};
}
// Print current final report directly
// Print current final report directly (with color)
function printResult() {
  const element = document.getElementById("finalReport");
  const newWindow = window.open("", "_blank");

  // Basic style para sa cards at color highlight
  const style = `
    <style>
      body { font-family: Arial, sans-serif; padding: 20px; }
      .card { border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-left-width:5px; }
      .card span { font-weight: bold; }
    </style>
  `;

  newWindow.document.write("<html><head><title>Print Result</title>");
  newWindow.document.write(style);
  newWindow.document.write("</head><body>");
  newWindow.document.write(element.innerHTML);
  newWindow.document.write("</body></html>");
  newWindow.document.close();
  newWindow.print();
}
