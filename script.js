// Sample Records
let records = [
    {
        id: 1,
        block: "Block A",
        location: "Bus Stand",
        cleanDate: "2026-07-25",
        complaints: 2,
        status: "Pending"
    },
    {
        id: 2,
        block: "Block B",
        location: "Railway Station",
        cleanDate: "2026-07-26",
        complaints: 0,
        status: "Clean"
    },
    {
        id: 3,
        block: "Block C",
        location: "Market",
        cleanDate: "2026-07-20",
        complaints: 4,
        status: "Urgent"
    }
];

// Display Records
function displayRecords(data = records) {

    let table = document.getElementById("tableBody");
    table.innerHTML = "";

    data.forEach((record, index) => {

        table.innerHTML += `
        <tr>
            <td>${record.id}</td>
            <td>${record.block}</td>
            <td>${record.location}</td>
            <td>${record.cleanDate}</td>
            <td>${record.complaints}</td>
            <td>${record.status}</td>

            <td>

                <button
                    class="action-btn view-btn"
                    onclick="viewRecord(${index})">
                    View
                </button>

                <button
                    class="action-btn delete-btn"
                    onclick="deleteRecord(${index})">
                    Delete
                </button>

            </td>

        </tr>
        `;

    });

    document.getElementById("recordCount").innerText = data.length;

}

// Add Record
document.getElementById("recordForm").addEventListener("submit", function(e){

    e.preventDefault();

    let record = {

        id: document.getElementById("id").value,

        block: document.getElementById("block").value,

        location: document.getElementById("location").value,

        cleanDate: document.getElementById("cleanDate").value,

        complaints: document.getElementById("complaints").value,

        status: document.getElementById("status").value

    };

    records.push(record);

    displayRecords();

    this.reset();

});

// Search
function searchRecords(){

    let value = document.getElementById("search")
        .value
        .toLowerCase();

    let filtered = records.filter(record =>
        record.block.toLowerCase().includes(value)
    );

    displayRecords(filtered);

}

// Filter
function filterRecords(){

    let status = document.getElementById("statusFilter").value;

    if(status === "All"){

        displayRecords();

        return;

    }

    let filtered = records.filter(record =>
        record.status === status
    );

    displayRecords(filtered);

}

// Delete Record
function deleteRecord(index){

    if(confirm("Delete this record?")){

        records.splice(index,1);

        displayRecords();

    }

}

// View Details
function viewRecord(index){

    localStorage.setItem(
        "selectedRecord",
        JSON.stringify(records[index])
    );

    window.location.href = "details.html";

}

// Load Records
displayRecords();