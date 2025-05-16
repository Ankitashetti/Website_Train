document.querySelector('.btn button').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get values from input fields
    const from = document.querySelector('input[name="From"]').value;
    const to = document.querySelector('input[name="To"]').value;
    const date = document.querySelector('input[name="cal"]').value;

    // Get selected class and general options
    const classOption = document.querySelector('.all select').value;
    const generalOption = document.querySelector('.sel select').value;
    // Validation
    if (from === '' || to ==='') {
        showLogin()
        return; // Exit if validation fails
    }

    // Get checkbox states
    const checkboxes = document.querySelectorAll('.check input[type="checkbox"]');
    const checkboxStates = Array.from(checkboxes).map(checkbox => checkbox.checked);

    // Save all data to localStorage
    localStorage.setItem('from', from);
    localStorage.setItem('to', to);
    localStorage.setItem('date', date);
    localStorage.setItem('classOption', classOption);
    localStorage.setItem('generalOption', generalOption);
    localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));

    // Redirect to the second page
    window.location.href = 'track.html';
});
