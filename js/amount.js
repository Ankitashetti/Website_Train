
function updateAmount() {
    const classSelect = document.getElementById("classSelect");
    const selectedClass = classSelect.value;
    let amount = 0;

    
    switch (selectedClass) {
        case '1':
            amount = 500;
            break;
        case '2':
            amount = 300;
            break;
        case '3':
            amount = 700;
            break;
        case '4':
            amount = 1200;
            break;
        case '5':
            amount = 1500;
            break;
        case '6':
            amount = 800;
            break;
        case '7':
            amount = 900;
            break;
        default:
            amount = 0; 
    }

    
    document.getElementById("amount").value = amount;
}


function bookNow() {
    const amount = document.getElementById("amount").value;

    
    if (amount > 0) {
        
        localStorage.setItem('selectedAmount', amount);

       
        window.location.href = "payment.html";  
    } else {
        alert("Please select a valid class.");
    }
}

