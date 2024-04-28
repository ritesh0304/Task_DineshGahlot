
// active navbar
let nav = document.querySelector(".navigation-wrap");
let navLinks = document.querySelectorAll('.nav-link');
let icon = document.querySelector('.navbar-toggler-icon');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
        icon.classList.remove("d-none")
        navLinks.forEach(function (navLink) {
            let otherClasses = Array.from(navLink.classList).filter(function (className) {
                return className !== "nav-link"; // Exclude the navLink class itself
            });
            if (!otherClasses.includes('activenow')) {
                navLink.classList.add("scroll-on");
            }
        });
    } else {
        nav.classList.remove("scroll-on");
        navLinks.forEach(function (navLink) {
            navLink.classList.remove("scroll-on");
        });
        icon.classList.add("d-none")
    }
}
// scroll on click

// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navBar.forEach((a) => {
    a.addEventListener("click", function () {
        const targetId = this.getAttribute('href').substring(1);
            navCollapse.classList.remove("show");
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        
    });
});


// Function to add active class to the corresponding link
function setActiveLink() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Loop through each section to check if it's in view
    document.querySelectorAll('section').forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        console.log(`${section.getAttribute('id')} soctionTop is ${sectionTop} and SectionHeight is ${sectionHeight-100}`)
        // Check if the scroll position is within the section
        if (scrollPosition >= (sectionTop-100) && scrollPosition < sectionTop + (sectionHeight-100)) {
            // Get the corresponding nav-link for this section
            const targetId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector(`.nav-link[href="#${targetId}"]`);

            // Remove active class from all nav-links
            navLinks.forEach(link => {
                let otherClasses = Array.from(link.classList).filter(function (className) {
                    return className !== "nav-link"; // Exclude the navLink class itself
                });
                if (otherClasses.includes('activenow')) {
                    link.classList.remove('activenow')
                    link.classList.add("scroll-on");
                }
            });
            // Add active class to the corresponding nav-link
            correspondingNavLink.classList.remove('scroll-on');
            correspondingNavLink.classList.add('activenow');
        }
    });
}

// Add scroll event listener to handle adding active class when scrolled into section
window.addEventListener('scroll', setActiveLink);

// Call setActiveLink function initially to set active link on page load
setActiveLink();

//hero-section
const htmlContent = `
<div class="container ">
    <div class="row ">
       <div class="col-sm-12 col-md-6">
            <h2>
                Photography For Adventurous Souls & Rebels At Heart
            </h2>
            <a href="" class="readMore">read more</a>
        </div>
    </div>
</div>  
`;

// Select all carousel caption elements
const carouselCaptions = document.querySelectorAll('.carousel-item .carousel-caption');

// Loop through each carousel caption and add the HTML content
carouselCaptions.forEach(function (caption) {
    caption.innerHTML = htmlContent;
});

// popup-image

const galleryImgs = document.querySelectorAll('.center_div img');
console.log(galleryImgs)

galleryImgs.forEach(img => {
    img.addEventListener("click", (e) => {
        const src = e.target.getAttribute("src");
        console.log(document.querySelector(".modal-img").src);
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallary-popup'))
        myModal.show();
    })
});


