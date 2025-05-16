 // Get today's date in YYYY-MM-DD format
 const today = new Date();
 const yyyy = today.getFullYear();
 const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
 const dd = String(today.getDate()).padStart(2, '0');

 const currentDate = `${yyyy}-${mm}-${dd}`;

 // Set the min attribute of the date input
 const dateInput = document.getElementById('date-input');
 dateInput.setAttribute('min', currentDate);