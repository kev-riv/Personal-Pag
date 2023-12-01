document.addEventListener("DOMContentLoaded", function() {
    // Simulate a loading time (you can remove this in production)
    setTimeout(function() {
        // Hide the loader after 2 seconds
        document.querySelector("#loader").style.display = "none";
        document.querySelector("#loader-wrapper-img").style.display = "none";
        document.querySelector("#loader-wrapper").style.backgroundColor = "transparent";
        document.querySelector("#loader-wrapper").remove();
    }, 2000);
    
});


