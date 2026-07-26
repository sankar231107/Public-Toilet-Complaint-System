// Get selected record
let record = JSON.parse(localStorage.getItem("selectedRecord"));

if(record){

    document.getElementById("recordId").innerHTML = record.id;
    document.getElementById("blockName").innerHTML = record.block;
    document.getElementById("location").innerHTML = record.location;
    document.getElementById("cleanDate").innerHTML = record.cleanDate;
    document.getElementById("complaints").innerHTML = record.complaints;
    document.getElementById("status").innerHTML = record.status;

    // Calculate days since cleaning
    let cleanDate = new Date(record.cleanDate);
    let today = new Date();

    let difference = today - cleanDate;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById("days").innerHTML = days + " Days";
}

// Back button
function goBack(){

    window.location.href = "index.html";

}