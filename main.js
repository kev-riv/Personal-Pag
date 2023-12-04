document.addEventListener("DOMContentLoaded", function() {
    // Simulate a loading time (you can remove this in production)
    setTimeout(function() {
        // Hide the loader after 2 seconds
        document.querySelector("#loader").style.display = "none";
        document.querySelector("#loader-wrapper-img").style.display = "none";
        document.querySelector("#loader-wrapper").style.backgroundColor = "transparent";
        document.querySelector("#loader-wrapper").remove();
    }, 2000);

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Intersection Observer to add the 'show' class when the text is in the viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;
            if (entry.isIntersecting) {
                target.classList.add('show');
            } else {
                target.classList.remove('show');
            }
        });
    }, { threshold: 1 }); // Adjust the threshold as needed

    const targetElement = document.getElementById('fillingText');
    observer.observe(targetElement);

    // Check and apply the 'show' class on initial load
    if (isInViewport(targetElement)) {
        targetElement.classList.add('show');
    }
    
    // Check and apply the 'show' class on scroll
    window.addEventListener('scroll', () => {
        if (isInViewport(targetElement)) {
            targetElement.classList.add('show');
        } else {
            targetElement.classList.remove('show');
        }
    });
});

function doFileUpload() {
    document.getElementById("file-btn").click;
}

function updateFileText(input) {
    var files = input.files;
    var fileBtnText = document.getElementById("file-btn-text");

    if (files.length > 0) {
        fileBtnText.textContent = files.length === 1 ? files[0].name : files.length + " archivos seleccionados";
    } else {
        fileBtnText.textContent = "Subir imagenes";
    }
}
