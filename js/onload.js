window.onload = function () {
    // Your existing code...

    // Retrieve data from localStorage
    const from = localStorage.getItem('from');
    const to = localStorage.getItem('to');
    const date = localStorage.getItem('date');
    const classOption = localStorage.getItem('classOption');
    const generalOption = localStorage.getItem('generalOption');
    const checkboxStates = JSON.parse(localStorage.getItem('checkboxStates')) || [false, false, false, false];
    const fromStation = localStorage.getItem('fromStation');
    const toStation = localStorage.getItem('toStation');
    const trainType = localStorage.getItem('trainType');

    // Populate input fields using IDs
    document.getElementById('fromInput').value = from || '';
    document.getElementById('toInput').value = to || '';
    document.getElementById('dateInput').value = date || '';
    document.getElementById('classSelect').value = classOption || '';
    document.getElementById('generalSelect').value = generalOption || '';

    // Populate and enable checkboxes (previously retrieved from localStorage)
    document.getElementById('disabilityCheckbox').checked = checkboxStates[0];
    document.getElementById('flexibleDateCheckbox').checked = checkboxStates[1];
    document.getElementById('availableBerthCheckbox').checked = checkboxStates[2];
    document.getElementById('passConcessionCheckbox').checked = checkboxStates[3];

    // Enable the checkboxes
    document.getElementById('disabilityCheckbox').disabled = false;
    document.getElementById('flexibleDateCheckbox').disabled = false;
    document.getElementById('availableBerthCheckbox').disabled = false;
    document.getElementById('passConcessionCheckbox').disabled = false;

    // Enable the rest of the input fields for modifications
    document.getElementById('fromInput').disabled = false;
    document.getElementById('toInput').disabled = false;
    document.getElementById('dateInput').disabled = false;
    document.getElementById('classSelect').disabled = false;
    document.getElementById('generalSelect').disabled = false;

    // Update the Journey Class text on page load
    const classSelect = document.getElementById('classSelect');
    const journeyClassText = document.getElementById('journeyClassText');
    function updateJourneyClass() {
        const selectedClass = classSelect.options[classSelect.selectedIndex]?.text || "Not Available";
        journeyClassText.textContent = selectedClass;
    }
    updateJourneyClass();
    classSelect.addEventListener('change', updateJourneyClass);

    const classSelect1 = document.getElementById('classSelect');
    const journeyClassText1 = document.getElementById('journeyClassText1');
    function updateJourneyClass1() {
        const selectedClass1 = classSelect1.options[classSelect1.selectedIndex]?.text || "Not Available";
        journeyClassText1.textContent = selectedClass1;
    }
    updateJourneyClass1();
    classSelect1.addEventListener('change', updateJourneyClass1);

    // Update the Train Type text
    const trainTypeSelect = document.getElementById('generalSelect');
    const trainTypeText = document.getElementById('trainTypeText');

    // Event listener for when the selection changes
    trainTypeSelect.addEventListener('change', () => {
        const trainType = trainTypeSelect.options[trainTypeSelect.selectedIndex]?.text || "Not Available";
        trainTypeText.textContent = trainType;
    });

    // Initialize with the default value
    const initialTrainType = trainTypeSelect.options[trainTypeSelect.selectedIndex]?.text || "Not Available";
    trainTypeText.textContent = initialTrainType;

    // Update From Station text
    const fromStationText = document.getElementById('fromStationText');
    fromStationText.textContent = fromStation || "Not Available";
    const station = document.getElementById('station');
    station.textContent = fromStation || "Not Available";

    // Update To Station text
    const toStationText = document.getElementById('toStationText');
    toStationText.textContent = toStation || "Not Available";
    const station1 = document.getElementById('station1');
    station1.textContent = toStation || "Not Available";

    // Update Date text
    const dateText = document.getElementById('dateText');
    dateText.textContent = date || "Not Available";
    const sdate = document.getElementById('sdate');
    sdate.textContent = date || "Not Available";
    const sdate1 = document.getElementById('sdate1');
    sdate1.textContent = date || "Not Available";

    // Allow users to modify the values, save to localStorage when modified
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Save the modified search data to localStorage
        localStorage.setItem('from', document.getElementById('fromInput').value);
        localStorage.setItem('to', document.getElementById('toInput').value);
        localStorage.setItem('date', document.getElementById('dateInput').value);
        localStorage.setItem('classOption', document.getElementById('classSelect').value);
        localStorage.setItem('generalOption', document.getElementById('generalSelect').value);

        // Save the updated checkbox states
        const updatedCheckboxStates = [
            document.getElementById('disabilityCheckbox').checked,
            document.getElementById('flexibleDateCheckbox').checked,
            document.getElementById('availableBerthCheckbox').checked,
            document.getElementById('passConcessionCheckbox').checked,
        ];
        localStorage.setItem('checkboxStates', JSON.stringify(updatedCheckboxStates));

        // Save the station information
        localStorage.setItem('fromStation', document.getElementById('fromInput').value);
        localStorage.setItem('toStation', document.getElementById('toInput').value);

        // Update the displayed text
        fromStationText.textContent = document.getElementById('fromInput').value;
        toStationText.textContent = document.getElementById('toInput').value;
        dateText.textContent = document.getElementById('dateInput').value;
        station.textContent = document.getElementById('fromInput').value;
        station1.textContent = document.getElementById('toInput').value;
        sdate.textContent = document.getElementById('dateInput').value;
        sdate1.textContent = document.getElementById('dateInput').value;

        const classSelect = document.getElementById("classSelect");
        const selectedClass = classSelect.value;
        const amountText = document.getElementById("amountText");
        let amount;
        switch (selectedClass) {
            case '1':
                amount = 'Amount: ₹500';
                break;
            case '2':
                amount = 'Amount: ₹300';
                break;
            case '3':
                amount = 'Amount: ₹700';
                break;
            case '4':
                amount = 'Amount: ₹1200';
                break;
            case '5':
                amount = 'Amount: ₹1500';
                break;
            case '6':
                amount = 'Amount: ₹800';
                break;
            case '7':
                amount = 'Amount: ₹900';
                break;
            default:
                amount = 'Select a valid class to see the amount.';
        }

        // Update the amount display
        amountText.innerHTML = amount;
    });
    const departureSpan = document.getElementById("departureTimeSpan");
    const arrivalSpan = document.getElementById("arrivalTimeSpan");

    // Update Times Function
    function updateTimes() {
        const departureTime = new Date();
        const formattedDeparture = formatTime(departureTime);
        const arrivalTime = new Date(departureTime.getTime() + 4 * 60 * 60 * 1000);
        const formattedArrival = formatTime(arrivalTime);

        departureSpan.textContent = formattedDeparture;
        arrivalSpan.textContent = formattedArrival;
    }

    // Format Time Function
    function formatTime(date) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    updateTimes();

    // Toggle List Functionality
    function toggleList(listId, buttonId) {
        const list = document.getElementById(listId);
        const button = document.getElementById(buttonId);
        if (list.classList.contains('hidden')) {
            list.classList.remove('hidden');
            button.textContent = '▴'; // Change arrow direction
        } else {
            list.classList.add('hidden');
            button.textContent = '▾'; // Change arrow direction
        }
    }

    // Set Times Based on Selected Range
    function setTimes(departureTimeRange) {
        const [start, end] = departureTimeRange.split(" - ").map(time => time.trim());
        const departureStart = calculateTime(start);

        // Add 4 hours to the departure time
        const arrivalTime = new Date(departureStart.getTime() + 4 * 60 * 60 * 1000);

        // Format Times
        const formattedDepartureTime = formatTime(departureStart);
        const formattedArrivalTime = formatTime(arrivalTime);

        // Update Times in Span Tags
        document.getElementById('departureTime').textContent = formattedDepartureTime;
        document.getElementById('arrivalTime').textContent = formattedArrivalTime;
    }

    // Calculate Time from "HH:MM" Format
    function calculateTime(timeStr) {
        // Convert "HH:MM" to a Date object
        const [hours, minutes] = timeStr.split(":").map(Number);
        const now = new Date();
        now.setHours(hours, minutes, 0, 0);
        return now;
    }

    // Example Integration of toggleList and setTimes
    document.querySelectorAll('.time-option').forEach(option => {
        option.addEventListener('click', function () {
            const timeRange = this.getAttribute('data-time-range');
            setTimes(timeRange);
        });
    });
};