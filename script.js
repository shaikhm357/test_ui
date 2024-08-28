document.addEventListener('DOMContentLoaded', function () {
    const radio1 = document.getElementById('radio1');
    const radio2 = document.getElementById('radio2');

    // Check if radio1 is checked
    if (radio1.checked) {
        console.log("Radio 1 is checked.");
    } else {
        console.log("Radio 1 is not checked.");
    }

    // Check if radio2 is checked
    if (radio2.checked) {
        console.log("Radio 2 is checked.");
    } else {
        console.log("Radio 2 is not checked.");
    }

    // You can also use an event listener to detect when a radio button is checked
    radio1.addEventListener('change', function () {
        if (radio1.checked) {
            console.log("Radio 1 is now checked.");
        }
    });

    radio2.addEventListener('change', function () {
        if (radio2.checked) {
            console.log("Radio 2 is now checked.");
        }
    });
});
