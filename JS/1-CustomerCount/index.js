
// Create a Counter variable
let count=0
let total=0
let saveCount=0
const saveLog=[,,];

// Function to Increment the Count
function increment(){
    document.getElementById("count-el").innerText = ++count;
    total++
}

// Function to Reset the count
function reset(){
    count=0;
    document.getElementById("count-el").innerText = count;
}

// Helper Function to Decide AM/PM 
const meridiem = function(seed) {
    var o = new Date(seed);
    if(o.getHours()>=12) return "PM"
    return "AM"
}

// Push a Log of a save state
function pushLog(seed, val){
    const d = new Date(seed);
    let str 
        = "Save State " + (saveCount+1) + " ( "
        + d.getHours() + ":"
        + d.getMinutes() + ":"
        + d.getSeconds() + " " + meridiem(seed) + "): "
        + "Total Customers = " + val;
    
    saveLog[saveCount++] = str;
}

// Print the Log of all saved states
function printLog(){
    const printArea = document.getElementById("save-log");
    var printText = ""
    for(i=0 ; i<saveCount ; i++){
        printText += saveLog[i] + "\n";
    }
    printArea.innerText = printText;
}


// Function to save the count
function save(){
    const d = new Date();
    pushLog(d, total);
    printLog();
}