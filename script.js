
// ==================== CONTACT FORM ====================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();
        const submitButton = contactForm.querySelector("button[type='submit']");
        

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || subject === "" || message === "") {
            formMessage.textContent = "Please fill in all fields.";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            return;
        }


        // Clear the error message
        formMessage.textContent = "";

        
        // Show Sending message
        formMessage.textContent = "";
        submitButton.textContent = "Sending...";
        submitButton.disabled = true;

        let dots = 0;

        const loadingAnimation = setInterval(function() {

            dots++;

            if (dots > 3) {
                dots = 1;
            }

            submitButton.textContent = "Sending" + ".".repeat(dots);

        },300);

        setTimeout(function() {

            clearInterval(loadingAnimation);

            formMessage.textContent =
              "Thank you, " + name + "! Your message has been received.";

            contactForm.reset();

            characterCount.textContent = "Characters: 0 / 500";

            submitButton.textContent = "Send Message";
            submitButton.disabled = false;
        }, 1000);
    });
}

// ==================== DONATE BUTTON ====================

const donateButton = document.querySelector(".donate-button");

if (donateButton) {
    donateButton.addEventListener("click", function(event) {
        event.preventDefault();

        alert("Thank you for supporting Samari Utthan Sewa! 💙🌱");
    });

}


// ==================== MOBILE MENU ====================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        document.body.classList.toggle("menu-open");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });

}

const navLinksItems = document.querySelectorAll(".nav-links a");

navLinksItems.forEach(function(link) {

    link.addEventListener("click", function() {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});

// ==================== ABOUT SECTION ===================

const learnMoreButton = document.getElementById("learnMoreButton");
const supportOurMission = document.getElementById("supportOurButton");
const ngoMessage = document.getElementById("ngoMessage");

document.addEventListener("click", function(event) {

    if (
        navLinks &&
        menuToggle &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
    }

});

// Close Mobile Menu with Escape

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        if (navLinks) {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        }

    }

});


// Learn More Button
if (learnMoreButton && ngoMessage) {

    learnMoreButton.addEventListener("click", function() {


        ngoMessage.textContent =
        "Samari Utthan Sewa works to create positive change in the community. 💙🌱";
    
    });
}



//Support Our Mission Button
if (supportOurMission && ngoMessage) {

    
    supportOurMission.addEventListener("click", function() {


        ngoMessage.textContent =
             "Thank you for supporting our mission! together, we can make a difference. 💙🌱";
    
    });

}

const readMoreButton = document.getElementById("readMoreButton");
const moreInformation = document.getElementById("moreInformation");

if (readMoreButton && moreInformation) {

    readMoreButton.addEventListener("click", function() {

        if (moreInformation.style.display === "none") {

            moreInformation.style.display = "block";

        } else {

            moreInformation.style.display = "none";

        }
    });
}

// ==================== CHARACTER COUNTER ====================

const messageInput = document.getElementById("message");
const characterCount = document.getElementById("characterCount");

if (messageInput && characterCount) {

    messageInput.addEventListener("input", function() {
    
     const count = messageInput.value.length;

     characterCount.textContent =
         "Characters: " + count + " / 500";

     if (count === 500) {

        characterCount.textContent =
            "🚫 Character limit reached: 500 / 500";
        
     } else if (count >= 450) {

        characterCount.textContent =
          "⚠️ Characters: " + count +" / 500";

     } else {

        characterCount.textContent =
          "Characters: " + count + " / 500";

        }

    });

}

// ===================== BACK TO TOP ====================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function() {

        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });
    
    backToTop.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

}

// ==================== ACTIVE NAVIGATION ====================

const currentPage = window.location.pathname.split("/").pop();

const navigationLinks = document.querySelectorAll(".nav-links a");




navigationLinks.forEach(function(link) {

    const linkPage = link.getAttribute("href");

   

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});

// ===================== LOCAL STORAGE ====================

localStorage.setItem("ngoMission", "Equitable, Just and Sustainable Society");



// ==================== DARK MODE ====================

const darkModeButton = document.getElementById("darkModeButton");

if (darkModeButton) {

darkModeButton.addEventListener("click", function() {

     document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
       darkModeButton.textContent = "☀️ Light-Mode";
    } else {
       darkModeButton.textContent = "🌙 Dark Mode";
    }

    localStorage.setItem("darkMode", 
        document.body.classList.contains("dark-mode")
    );
});

// Remember Dark Mode after refresh

    if (localStorage.getItem("darkMode") === "true") {

        document.body.classList.add("dark-mode");
        darkModeButton.textContent = "☀️ Light Mode";

    }

}

// ===================== GALLERY / LIGHTBOX ====================

const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

if (lightbox && lightboxImage) {

    galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.style.display = "flex";
    });  

});

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        lightbox.style.display ="none";
    }

});

}

// ==================== SCROLL REVEAL =====================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });
});

revealElements.forEach(function(element) {
    revealObserver.observe(element);
});

// ==================== PROGRAM MODAL ====================

const programCards = document.querySelectorAll("[data-program]");

const programModal = document.getElementById("programModal");
const closeProgramModal = document.getElementById("closeProgramModal");
const modalProgramName = document.getElementById("modalProgramName");
const modalProgramDescription = document.getElementById("modalProgramDescription");

if (programModal && modalProgramName && modalProgramDescription) {
programCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const programName = card.getAttribute("data-program");

        modalProgramName.textContent = programName;

        modalProgramDescription.textContent =
           "Learn more about our " + programName + " program and how we support communities.";

        programModal.style.display = "flex";

    });

});

if (programModal && closeProgramModal) { 

closeProgramModal.addEventListener("click", function() {

   programModal.style.display = "none";

});

programModal.addEventListener("click", function(event) {

    if (event.target === programModal) {

        programModal.style.display = "none";

    }

});

}

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape" && programModal) {

        programModal.style.display = "none";

    }

});

}

// ==================== ANIMATED COUNTER ====================

const counters = document.querySelectorAll(".counter");
const impactSection = document.querySelector(".impact-section");

let countersStarted = false;

if (counters.length > 0 && impactSection) {

    const counterObserver = new IntersectionObserver(function(entries) {
    
        entries.forEach(function(entry) {

            if (entry.isIntersecting && !countersStarted) {

                countersStarted = true;

                counters.forEach(function(counter) {

                    const target = Number(counter.getAttribute("data-target"));
                    let count = 0;

                    counter.textContent = "0";

                    const updateCounter = setInterval(function() {

                        count++;

                        counter.textContent = count;

                        if (count >= target) {
                            clearInterval(updateCounter);
                        }

                    }, 20);

                });

            }

        });

    });

    counterObserver.observe(impactSection);
}

// Scroll Progress Bar

const scrollProgress = document.getElementById("scrollProgress");

if (scrollProgress) {

    window.addEventListener("scroll", function() {

        const scrollTop = window.scrollY;
        const documentHeight =
           document.documentElement.scrollHeight - window.innerHeight;

        const scrollPercentage =
            (scrollTop / documentHeight) * 100;

        scrollProgress.style.width = scrollPercentage + "%";

    });
    
}
