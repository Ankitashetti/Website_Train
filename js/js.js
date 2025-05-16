// Combined mapping of districts from both Karnataka and Tamil Nadu to train names
const trainMapping = {
    // Karnataka districts and their train names
    "bengaluru urban": "Karnataka Express (12627)",
    "bengaluru rural": "Lalbagh Express (12607)",
    "chikkaballapur": "Yesvantpur–Tirupati Express (15203)",
    "ramanagara": "Mysuru–Chennai Shatabdi Express (12007)",
    "mysuru": "Mysuru–Dharwad Express (17301)",
    "mandya": "Chamundi Express (16215)",
    "chamarajanagar": "Tippu Express (12614)",
    "kodagu": "Coorg Express (16535)",
    "hassan": "Hassan–Mangaluru Express (16515)",
    "chitradurga": "Hampi Express (16592)",
    "davanagere": "Jan Shatabdi Express (12079)",
    "tumakuru": "Siddhaganga Intercity Express (12677)",
    "bidar": "Bidar–Bengaluru Express (16571)",
    "kalaburagi": "Hyderabad Express (12603)",
    "yadgir": "Basava Express (17307)",
    "raichur": "Raichur–Bengaluru Express (16593)",
    "ballari": "Hampi Express (16591)",
    "koppal": "Vijayapura Passenger (56502)",
    "belagavi": "Rani Chennamma Express (16589)",
    "bagalkot": "Gol Gumbaz Express (16536)",
    "vijayapura": "Bijapur Passenger (51401)",
    "dharwad": "Dharwad Express (16562)",
    "gadag": "Gadag Express (16571)",
    "haveri": "Jan Shatabdi Express (12079)",
    "uttara kannada": "Karwar Express (16523)",
    "dakshina kannada": "Mangaluru–Bengaluru Express (16518)",
    "udupi": "Mangaluru–Mumbai Matsyagandha Express (12619)",
    "shivamogga": "Talaguppa Express (16227)",
    "chikkamagaluru": "Chikkamagaluru–Bengaluru Express (16578)",

    // Tamil Nadu districts and their train names
    "chennai": "Tamil Nadu Express (12623)",
    "coimbatore": "Cheran Express (12674)",
    "madurai": "Pandian Express (12637)",
    "tiruchirappalli": "Rockfort Express (12654)",
    "salem": "Salem Express (16085)",
    "tirunelveli": "Nellai Express (12631)",
    "thanjavur": "Cholan Express (22675)",
    "erode": "Yercaud Express (22649)",
    "vellore": "Kaveri Express (16021)",
    "ooty": "Nilgiri Mountain Railway (56136)",
    "dindigul": "Vaigai Express (12635)",
    "virudhunagar": "Sethu Express (16713)",
    "kanyakumari": "Kanyakumari Express (12633)",
    "tuticorin": "Pearl City Express (12693)",
    "nagapattinam": "Velankanni Express (16185)",
    "cuddalore": "Cuddalore Passenger (56885)",
    "theni": "Madurai–Theni Passenger (16191)",
    "karur": "Karur–Bengaluru Express (16527)",
    "namakkal": "Salem–Karur Passenger (56525)",
    "sivaganga": "Tiruchendur Express (16105)",
    "krishnagiri": "Dharmapuri Passenger (56516)",
    "dharmapuri": "Dharmapuri Express (56515)",
};

// Count the number of trains for Karnataka and Tamil Nadu
function countTrainsByState() {
    const karnatakaStations = [
        "bengaluru urban", "bengaluru rural", "chikkaballapur", "ramanagara", "mysuru", "mandya", "chamarajanagar", 
        "kodagu", "hassan", "chitradurga", "davanagere", "tumakuru", "bidar", "kalaburagi", "yadgir", "raichur", 
        "ballari", "koppal", "belagavi", "bagalkot", "vijayapura", "dharwad", "gadag", "haveri", "uttara kannada", 
        "dakshina kannada", "udupi", "shivamogga", "chikkamagaluru"
    ];

    const tamilNaduStations = [
        "chennai", "coimbatore", "madurai", "tiruchirappalli", "salem", "tirunelveli", "thanjavur", "erode", 
        "vellore", "ooty", "dindigul", "virudhunagar", "kanyakumari", "tuticorin", "nagapattinam", "cuddalore", 
        "theni", "karur", "namakkal", "sivaganga", "krishnagiri", "dharmapuri"
    ];

    // Counting trains for Karnataka
    let karnatakaTrainCount = karnatakaStations.filter(station => trainMapping[station]).length;
    
    // Counting trains for Tamil Nadu
    let tamilNaduTrainCount = tamilNaduStations.filter(station => trainMapping[station]).length;

    return {
        karnataka: karnatakaTrainCount,
        tamilNadu: tamilNaduTrainCount
    };
}

// Function to update train name and counts based on user input
function updateTrainName() {
    const fromStation = document.getElementById('fromInput').value.trim().toLowerCase();
    const toStation = document.getElementById('toInput').value.trim().toLowerCase();
    const trainNameElement = document.getElementById('trainName');
    const trainCountKarnatakaElement = document.getElementById('trainCountKarnataka');
    const trainCountTamilNaduElement = document.getElementById('trainCountTamilNadu');

    // Check if both the 'from' and 'to' stations are in the train mapping
    const fromTrainName = trainMapping[fromStation];
    const toTrainName = trainMapping[toStation];

    // Check for Karnataka to Tamil Nadu or vice versa
    const karnatakaStations = ["bengaluru urban", "bengaluru rural", "mysuru", "mandya", "hassan", "chitradurga", "ballari", "kalaburagi", "raichur", "dharwad", "gadag", "shivamogga", "udupi"];
    const tamilNaduStations = ["chennai", "coimbatore", "madurai", "tiruchirappalli", "salem", "tirunelveli", "thanjavur", "erode", "vellore", "ooty", "dindigul", "virudhunagar", "kanyakumari", "tuticorin"];

    if (fromTrainName && toTrainName) {
        // If both stations have a train, check if the stations are from different states
        if (fromStation !== toStation) {
            // Check if traveling between Karnataka and Tamil Nadu or vice versa
            if ((karnatakaStations.includes(fromStation) && tamilNaduStations.includes(toStation)) || 
                (tamilNaduStations.includes(fromStation) && karnatakaStations.includes(toStation))) {
                trainNameElement.textContent = "Train not available for this route.";
            } else {
                trainNameElement.textContent = `${fromTrainName}`;
            }
        } else {
            trainNameElement.textContent = `${fromTrainName}`;
        }
    } else {
        trainNameElement.textContent = "Train not available for this route.";
    }

    // Displaying train counts for Karnataka and Tamil Nadu
    const trainCounts = countTrainsByState();
    trainCountKarnatakaElement.textContent = `Trains in Karnataka: ${trainCounts.karnataka}`;
    trainCountTamilNaduElement.textContent = `Trains in Tamil Nadu: ${trainCounts.tamilNadu}`;
}

// Run the function on page load and when inputs change
window.onload = updateTrainName;  // Update when page loads
document.getElementById('fromInput').addEventListener('input', updateTrainName);  // Update on 'from' input change
document.getElementById('toInput').addEventListener('input', updateTrainName);  // Update on 'to' input change