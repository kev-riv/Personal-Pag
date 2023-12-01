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

function doFileUpload() {
    document.getElementById("file-btn").click();
}

function updateFileText(input) {
    var files = input.files;
    var fileBtnText = document.getElementById("file-btn-text");

    if (files.length > 0) {
        fileBtnText.textContent = files.length === 1 ? files[0].name : files.length + " archivos seleccionados";
    } else {
        fileBtnText.textContent = "Subir imagen";
    }
}