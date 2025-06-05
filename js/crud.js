
let mockRecords = [];
let selectedIndex = -1;

function createRecord() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const diagnosis = document.getElementById("diagnosis").value;

  if (name && age && diagnosis) {
    mockRecords.push({ name, age, diagnosis });
    displayRecords();
    clearForm();
  }
}

function readRecord() {
  displayRecords();
}

function updateRecord() {
  if (selectedIndex > -1) {
    mockRecords[selectedIndex] = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      diagnosis: document.getElementById("diagnosis").value
    };
    displayRecords();
    clearForm();
    selectedIndex = -1;
  }
}

function deleteRecord() {
  if (selectedIndex > -1) {
    mockRecords.splice(selectedIndex, 1);
    displayRecords();
    clearForm();
    selectedIndex = -1;
  }
}

function selectRecord(index) {
  const record = mockRecords[index];
  document.getElementById("name").value = record.name;
  document.getElementById("age").value = record.age;
  document.getElementById("diagnosis").value = record.diagnosis;
  selectedIndex = index;
}

function displayRecords() {
  const output = document.getElementById("recordOutput");
  if (mockRecords.length === 0) {
    output.innerHTML = "<p style='text-align: center; color: white;'>No records to display.</p>";
    return;
  }

  let table = "<div style='display: flex; justify-content: center; margin-top: 20px;'>"
  table += "<table border='1' style='border-collapse: collapse; text-align: center; color: white;'>";
  table += "<tr><th>Name</th><th>Age</th><th>Diagnosis</th><th>Select</th></tr>";
  mockRecords.forEach((rec, index) => {
    table += `<tr>
      <td>${rec.name}</td>
      <td>${rec.age}</td>
      <td>${rec.diagnosis}</td>
      <td><button onclick="selectRecord(${index})">Select</button></td>
    </tr>`;
  });
  table += "</table></div>";
  output.innerHTML = table;
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("diagnosis").value = "";
}
