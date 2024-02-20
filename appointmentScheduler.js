document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('date').addEventListener('change', function() {
        console.log("Date input changed!");
        var selectedDate = new Date(this.value);
        var dayOfWeek = selectedDate.getDay(); // 0 for Sunday, 1 for Monday, etc.
        var timeSelect = document.getElementById('time');
        timeSelect.innerHTML = ''; // Clear existing options

        // Define available appointment times based on the day of the week
        var availableTimes = [];
        switch (dayOfWeek) {
            case 3: // Wednesday
            case 4: // Thursday
                availableTimes = ['10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm'];
                break;
            case 5: // Friday
                availableTimes = ['10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm'];
                break;
            case 6: // Saturday
                availableTimes = ['12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
                break;
            default:
                break; // Closed on other days
        }

        // Populate time selection with available appointment times
        availableTimes.forEach(function(time) {
            var option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        });
    });
});