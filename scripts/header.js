document.addEventListener("DOMContentLoaded", function() {
    fetch('Components/header.html')
        .then(response => response.text())
        .then(data => {
            console.log("Header JavaScript is working!");
            document.querySelector('header').innerHTML = data;

            // Add the event listener for the moon button after the header is loaded
            const moonButton = document.getElementById("moon-button");
            moonButton.addEventListener("click", function() {
                document.body.classList.toggle("dark-mode");
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});