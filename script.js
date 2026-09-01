// =========================================================
// SAKTHIYA PORTFOLIO - COMPLETE JAVASCRIPT
// =========================================================


// =========================================================
// LOADER
// =========================================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }

});


// =========================================================
// AOS ANIMATION
// =========================================================

if (typeof AOS !== "undefined") {

    AOS.init({
        duration: 1000,
        once: true,
        offset: 80
    });

}


// =========================================================
// THEME TOGGLE
// =========================================================

const toggle = document.getElementById("theme-toggle");


// Load saved theme

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    if (toggle) {

        toggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

} else {

    document.body.classList.remove("dark");

    if (toggle) {

        toggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

}


// Toggle theme

if (toggle) {

    toggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            toggle.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "light");

            toggle.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    });

}


// =========================================================
// HAMBURGER MENU
// =========================================================

const hamburger =
    document.querySelector(".hamburger");

const nav =
    document.querySelector(".nav-links");


if (hamburger && nav) {

    hamburger.addEventListener("click", (event) => {

        event.stopPropagation();

        nav.classList.toggle("active");

        hamburger.classList.toggle("active");

    });

}


// =========================================================
// CLOSE MOBILE MENU WHEN LINK CLICKED
// =========================================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("active");
        }

        if (hamburger) {
            hamburger.classList.remove("active");
        }

    });

});


// =========================================================
// CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
// =========================================================

document.addEventListener("click", (event) => {

    if (!hamburger || !nav) return;

    const clickedInsideMenu =
        nav.contains(event.target);

    const clickedHamburger =
        hamburger.contains(event.target);

    if (!clickedInsideMenu && !clickedHamburger) {

        nav.classList.remove("active");

        hamburger.classList.remove("active");

    }

});


// =========================================================
// RESET MENU ON DESKTOP
// =========================================================

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        if (nav) {
            nav.classList.remove("active");
        }

        if (hamburger) {
            hamburger.classList.remove("active");
        }

    }

});


// =========================================================
// TYPING EFFECT
// =========================================================

const text = [

    "Frontend Developer",
    "AI Student",
    "UI Designer",
    "Java Developer"

];

let textIndex = 0;

let charIndex = 0;

let isDeleting = false;


const typingElement =
    document.getElementById("typing");


function type() {

    if (!typingElement) return;

    const currentText =
        text[textIndex];


    if (!isDeleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex);

        charIndex++;


        if (charIndex > currentText.length) {

            isDeleting = true;

            setTimeout(type, 1200);

            return;

        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex);

        charIndex--;


        if (charIndex < 0) {

            isDeleting = false;

            charIndex = 0;

            textIndex =
                (textIndex + 1) % text.length;

        }

    }


    setTimeout(
        type,
        isDeleting ? 70 : 120
    );

}


type();


// =========================================================
// PROJECT DATA
// =========================================================

const projects = {

    web: [

        {
            title: "College Website",
            desc: "Modern responsive college website",
            img: "scet.png",
            link: "https://github.com/sakthiyad2/SCET-College-Website-"
        },

        {
            title: "MindMirror",
            desc: "AI mental wellness web app",
            img: "mindmirror.png",
            link: "https://github.com/sakthiyad2/MindMirror-website"
        },

        {
            title: "MR.Review",
            desc: "Movie review platform",
            img: "mrreview.png",
            link: "https://github.com/sakthiyad2/Movie-Review-website-MR.Review"
        },

        {
            title: "Paws and Wings",
            desc: "Pet adoption website",
            img: "pawsandwings.png",
            link: "https://github.com/sakthiyad2/Paws-and-Wings---Pet-Adoption-Website"
        },

        {
            title: "Portfolio Website",
            desc: "Personal developer portfolio",
            img: "portfolio.png",
            link: "#"
        },

        {
            title: "Village Milk Collection System",
            desc: "Web application for managing daily milk collection records using Node.js, Express.js and SQLite.",
            img: "milk.png",
            link: "https://github.com/sakthiyad2/Village-Milk-Collection-System"
        }

    ],


    java: [

        {
            title: "Bank Management System",
            desc: "Bank Account",
            img: "bank.jpg",
            link: "https://github.com/sakthiyad2/BankManagementSystem-java"
        },

        {
            title: "Library Management",
            desc: "Library record system",
            img: "library.png",
            link: "https://github.com/sakthiyad2/Library-Management-java-OOPS"
        },

        {
            title: "Student Management",
            desc: "Student database app",
            img: "studentm.png",
            link: "https://github.com/sakthiyad2/Student-Management-Java-OOPS"
        },

        {
            title: "Hospital Management",
            desc: "Hospital Management using Inheritance",
            img: "hospitalin.png",
            link: "https://github.com/sakthiyad2/Hospital-Management-inheritance-OOPS-Java"
        },

        {
            title: "Vehicle Hierarchy System",
            desc: "Vehicle Hierarchy",
            img: "vehiclehierarchy.png",
            link: "https://github.com/sakthiyad2/Vehicle-Hierarchy"
        },

        {
            title: "Inventory System",
            desc: "Stock management",
            img: "inventory.png",
            link: "https://github.com/sakthiyad2/InventorySystem-java-"
        },

        {
            title: "Online Quiz",
            desc: "Quiz application",
            img: "quizjava.png",
            link: "https://github.com/sakthiyad2/QuizUi-java"
        },

        {
            title: "Course Management",
            desc: "Course Management App",
            img: "course.png",
            link: "https://github.com/sakthiyad2/Course-Management-Java-OOPS"
        },

        {
            title: "Employee Payroll",
            desc: "Payroll calculation",
            img: "employee.png",
            link: "https://github.com/sakthiyad2/Employee-Payroll-Java-OOPS"
        },

        {
            title: "Hospital Management",
            desc: "Hospital records",
            img: "hospital.png",
            link: "https://github.com/sakthiyad2/Hospital-Management-Java-OOPS"
        },

        {
            title: "Bank Account",
            desc: "Bank account system",
            img: "bankaccount.png",
            link: "https://github.com/sakthiyad2/Bank-Account-Java-OOPS"
        },

        {
            title: "Food Ordering",
            desc: "Restaurant ordering app",
            img: "foodorder.png",
            link: "https://github.com/sakthiyad2/FoodOrderingSystem-java"
        },

        {
            title: "Food Delivery Payment",
            desc: "Food Delivery Payment",
            img: "fooddelivery.png",
            link: "https://github.com/sakthiyad2/FoodDeliveryPayment-java"
        },

        {
            title: "Vehicle Detail System",
            desc: "Vehicle Detail",
            img: "vehicledetail.png",
            link: "https://github.com/sakthiyad2/Vehicle-Details-System-using-Method-Overloading-Polymorphism-in-Java-"
        },

        {
            title: "Smart Home Automation",
            desc: "Smart Home System",
            img: "smarthome.png",
            link: "https://github.com/sakthiyad2/Smart-Home-Automation-System-using-Java-Interfaces-OOP-"
        },

        {
            title: "Vehicle Rental",
            desc: "Vehicle renting",
            img: "vehiclerent.png",
            link: "https://github.com/sakthiyad2/Vehicle-Rental-System-java"
        },

        {
            title: "Movie Ticket Booking",
            desc: "Ticket Booking",
            img: "moviebooking.png",
            link: "https://github.com/sakthiyad2/MovieTicketBookingSystem-java"
        }

    ],


    python: [

        {
            title: "ATM",
            desc: "ATM System",
            img: "atm.png",
            link: "https://github.com/sakthiyad2/ATM-python"
        },

        {
            title: "Data Processing",
            desc: "Expense Tracker",
            img: "data.png",
            link: "https://github.com/sakthiyad2/data_processing_project"
        },

        {
            title: "Dice Game",
            desc: "Game app",
            img: "dice.png",
            link: "https://github.com/sakthiyad2/Dice-game-python"
        },

        {
            title: "File Based Notes Saver",
            desc: "Notes Saver",
            img: "notes.png",
            link: "https://github.com/sakthiyad2/File-based-notes-saver"
        },

        {
            title: "Hangman Game",
            desc: "Game App",
            img: "hangman.png",
            link: "https://github.com/sakthiyad2/Hangman"
        },

        {
            title: "Library Management System",
            desc: "Library Management",
            img: "lipy.png",
            link: "https://github.com/sakthiyad2/Library-Management-python"
        },

        {
            title: "Number Guessing Game",
            desc: "Game",
            img: "number.png",
            link: "https://github.com/sakthiyad2/Number-Guessing-Game-Python"
        },

        {
            title: "Password Strength Checker",
            desc: "Password Checker",
            img: "password.png",
            link: "https://github.com/sakthiyad2/Password-Strength-Checker"
        },

        {
            title: "Quiz",
            desc: "Quiz game",
            img: "quizpy.png",
            link: "https://github.com/sakthiyad2/Quiz-Python"
        },

        {
            title: "Rock Paper Scissor",
            desc: "Game",
            img: "rock.png",
            link: "https://github.com/sakthiyad2/Rock-Paper-Scissor-vs-Computer"
        }

    ]

};


// =========================================================
// PROJECT CATEGORY BUTTONS
// =========================================================

const catDiv =
    document.getElementById("categories");


if (catDiv) {

    Object.keys(projects).forEach(category => {

        const button =
            document.createElement("button");

        button.innerText =
            category.toUpperCase();


        button.addEventListener("click", () => {

            loadProjects(category);

        });


        catDiv.appendChild(button);

    });

}


// =========================================================
// LOAD PROJECTS
// =========================================================

function loadProjects(category) {

    const container =
        document.getElementById("project-container");


    if (!container) return;


    container.innerHTML = "";


    if (!projects[category]) return;


    projects[category].forEach((project, index) => {

        const div =
            document.createElement("div");


        div.className =
            "project glass";


        div.setAttribute(
            "data-aos",
            "zoom-in-up"
        );


        div.setAttribute(
            "data-aos-delay",
            index * 100
        );


        div.innerHTML = `

            <img
                src="${project.img}"
                alt="${project.title}"
                class="project-image"
            >

            <h3>
                ${project.title}
            </h3>

            <p>
                ${project.desc}
            </p>

        `;


        // ONLY PROJECT IMAGE OPENS MODAL

        const image =
            div.querySelector(".project-image");


        if (image) {

            image.addEventListener("click", (event) => {

                event.stopPropagation();


                openImageModal(
                    project.img,
                    project.title,
                    "Project",
                    project.link
                );

            });

        }


        container.appendChild(div);

    });


    if (typeof AOS !== "undefined") {

        AOS.refresh();

    }

}


// =========================================================
// LOAD DEFAULT PROJECT CATEGORY
// =========================================================

loadProjects("web");


// =========================================================
// CERTIFICATE DATA
// =========================================================

const certificates = [

    {
        title: "Legacy responsive web design v8",
        img: "freecode legacy responsive web design v8.png"
    },

    {
        title: "Responsive Web Design",
        img: "Resposive web design.jpeg"
    },

    {
        title: "Communication skill",
        img: "communication.jpg"
    },

    {
        title: "JavaScript",
        img: "javascript.jpg"
    },

    {
        title: "Java",
        img: "javafundamentals.jpg"
    },

    {
        title: "UX",
        img: "ux.jpg"
    },

    {
        title: "Microsoft - Secure storage for Azure Files and Azure Blob Storage",
        img: "azureblob.jpg"
    },

    {
        title: "Microsoft - Create and manage canvas apps with power apps",
        img: "canva.jpg"
    },

    {
        title: "Basics of Python",
        img: "bpython.jpg"
    },

    {
        title: "LPBO2-Automation with Arduino",
        img: "leap.jpg"
    },

    {
        title: "Critical Thinking in AI Era",
        img: "criticalthinking.jpg"
    },

    {
        title: "Claude Code in Action (Anthropic)",
        img: "claudecodeinaction.jpg"
    },

    {
        title: "Claude 101 (Anthropic)",
        img: "claude101.jpg"
    },

    {
        title: "AI Fluency: Framework & Foundations",
        img: "aifluencyframeworkandfoundations.jpg"
    },

    {
        title: "Claude with the Anthropic API",
        img: "claudewiththeanthropic.jpg"
    },

    {
        title: "Introduction to Model Context Protocol",
        img: "introductiontomodelcontextprotocol.jpg"
    },

    {
        title: "AI Fluency for educators",
        img: "aifluencyforeducators.jpg"
    },

    {
        title: "Data Science and Analytics",
        img: "datascience.jpg"
    },

    {
        title: "AI Fluency for students",
        img: "aifluencyforstudents.jpg"
    },

    {
        title: "Model Context Protocol: Advanced Topics",
        img: "modelcontextprotocoladvancedtopics.jpg"
    },

    {
        title: "Claude with Google Vertex AI",
        img: "claudewithgooglevertexai.jpg"
    },

    {
        title: "Teaching the AI Fluency Framework",
        img: "teachingtheaifluencyframework.jpg"
    },

    {
        title: "AI Fluency for nonprofits",
        img: "aifluencyfornonprofits.jpg"
    },

    {
        title: "Introduction to agent skills",
        img: "introductiontoagentskills.jpg"
    },

    {
        title: "Claude with Amazon Bedrock",
        img: "claudewithamazonbedrock.jpg"
    },

    {
        title: "Python Fundamentals",
        img: "pythonfundamentals.jpg"
    },

    {
        title: "Yuva AI for All",
        img: "yuvaai.jpg"
    },

    {
        title: "Java Programming Fundamentals",
        img: "javaprogrammingfundamentals.jpg"
    },

    {
        title: "Introduction to Claude Cowork",
        img: "introductiontoclaudecowork.jpg"
    },

    {
        title: "Introduction to subagents",
        img: "introductiontosubagents.jpg"
    },

    {
        title: "Type Writing (Junior)",
        img: "type1.jpeg"
    },

    {
        title: "Type Writing (Senior)",
        img: "type2.jpeg"
    }

];


// =========================================================
// CERTIFICATE CONTAINER
// =========================================================

const certContainer =
    document.getElementById("certificate-container");


const showBtn =
    document.getElementById("show-more-certificates");


let visibleCertificates = 3;


// =========================================================
// LOAD CERTIFICATES
// =========================================================

function loadCertificates() {

    if (!certContainer) return;


    certContainer.innerHTML = "";


    certificates
        .slice(0, visibleCertificates)
        .forEach((certificate, index) => {


            const div =
                document.createElement("div");


            div.className =
                "cert glass";


            div.setAttribute(
                "data-aos",
                "flip-left"
            );


            div.setAttribute(
                "data-aos-delay",
                index * 80
            );


            div.innerHTML = `

                <img
                    src="${certificate.img}"
                    alt="${certificate.title}"
                    class="certificate-image"
                >

                <h3>
                    ${certificate.title}
                </h3>

            `;


            // ONLY CERTIFICATE IMAGE OPENS MODAL

            const image =
                div.querySelector(".certificate-image");


            if (image) {

                image.addEventListener("click", (event) => {

                    event.stopPropagation();


                    openImageModal(
                        certificate.img,
                        certificate.title,
                        "Certificate"
                    );

                });

            }


            certContainer.appendChild(div);

        });


    if (typeof AOS !== "undefined") {

        AOS.refresh();

    }

}


// =========================================================
// LOAD INITIAL CERTIFICATES
// =========================================================

loadCertificates();


// =========================================================
// SHOW ALL CERTIFICATES
// =========================================================

if (showBtn) {

    showBtn.addEventListener("click", () => {

        visibleCertificates =
            certificates.length;


        loadCertificates();


        showBtn.style.display =
            "none";

    });

}


// =========================================================
// IMAGE MODAL
// =========================================================

function openImageModal(
    src,
    title,
    type = "Image",
    link = "#"
) {

    const modal =
        document.getElementById("modal");


    const content =
        document.getElementById("modal-content");


    if (!modal || !content) return;


    let buttonHTML = "";


    // -----------------------------------------------------
    // VIEW PROJECT BUTTON
    // ONLY FOR PROJECTS
    // -----------------------------------------------------

    if (
        type === "Project" &&
        link &&
        link !== "#"
    ) {

        buttonHTML = `

            <a
                href="${link}"
                target="_blank"
                rel="noopener noreferrer"
                class="view-project-btn"
            >

                <i class="fa-brands fa-github"></i>

                View Project

            </a>

        `;

    }


    content.innerHTML = `

        <div class="modal-image-wrapper">

            <img
                src="${src}"
                alt="${title}"
                class="modal-image"
            >

            <h3 class="modal-image-title">
                ${title}
            </h3>

            ${buttonHTML}

        </div>

    `;


    modal.classList.add("active");


    document.body.classList.add("modal-open");

}


// =========================================================
// CLOSE MODAL
// =========================================================

function closeModal() {

    const modal =
        document.getElementById("modal");


    const content =
        document.getElementById("modal-content");


    if (modal) {

        modal.classList.remove("active");

    }


    if (content) {

        content.innerHTML = "";

    }


    document.body.classList.remove("modal-open");

}


// =========================================================
// ESC KEY CLOSE MODAL
// =========================================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeModal();

    }

});


// =========================================================
// CLICK OUTSIDE MODAL TO CLOSE
// =========================================================

window.addEventListener("click", (event) => {

    const modal =
        document.getElementById("modal");


    if (
        modal &&
        event.target === modal
    ) {

        closeModal();

    }

});


// =========================================================
// PARTICLES
// =========================================================

if (typeof tsParticles !== "undefined") {

    tsParticles.load("particles", {

        fullScreen: {
            enable: false
        },


        background: {
            color: "transparent"
        },


        fpsLimit: 60,


        particles: {

            number: {

                value: 100,

                density: {

                    enable: true,

                    area: 800

                }

            },


            color: {

                value: "#ffffff"

            },


            shape: {

                type: "circle"

            },


            opacity: {

                value: {

                    min: 0.2,

                    max: 0.8

                },


                animation: {

                    enable: true,

                    speed: 0.5,

                    minimumValue: 0.1,

                    sync: false

                }

            },


            size: {

                value: {

                    min: 1,

                    max: 4

                }

            },


            move: {

                enable: true,

                speed: 0.3,

                direction: "none",

                random: true,

                straight: false,


                outModes: {

                    default: "out"

                }

            },


            links: {

                enable: true,

                distance: 140,

                color: "#ffffff",

                opacity: 0.12,

                width: 1

            }

        },


        interactivity: {

            events: {

                onHover: {

                    enable: true,

                    mode: "grab"

                },


                resize: true

            },


            modes: {

                grab: {

                    distance: 150,


                    links: {

                        opacity: 0.35

                    }

                }

            }

        },


        detectRetina: true

    });

}


// =========================================================
// NAVBAR SCROLL EFFECT
// =========================================================

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");


    if (!navbar) return;


    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// =========================================================
// HERO MOUSE FLOAT
// =========================================================

const hero =
    document.querySelector(".hero");


if (
    hero &&
    window.innerWidth > 768
) {

    window.addEventListener("mousemove", (event) => {

        const x =
            (
                event.clientX /
                window.innerWidth -
                0.5
            ) * 6;


        const y =
            (
                event.clientY /
                window.innerHeight -
                0.5
            ) * 6;


        hero.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


// =========================================================
// RESET HERO TRANSFORM ON MOBILE
// =========================================================

window.addEventListener("resize", () => {

    if (
        hero &&
        window.innerWidth <= 768
    ) {

        hero.style.transform =
            "translate(0,0)";

    }

});


// =========================================================
// ACTIVE NAVIGATION LINK
// =========================================================

const sections =
    document.querySelectorAll("section");


const navLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;


        if (
            window.scrollY >=
            sectionTop - 200
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove(
            "active-link"
        );


        if (
            current &&
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add(
                "active-link"
            );

        }

    });

});


// =========================================================
// SCROLL PROGRESS BAR
// =========================================================

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;


    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;


    if (height <= 0) return;


    const scrolled =
        (scrollTop / height) * 100;


    const progress =
        document.getElementById("progress-bar");


    if (progress) {

        progress.style.width =
            scrolled + "%";

    }

});


// =========================================================
// BACK TO TOP BUTTON
// =========================================================

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (!topBtn) return;


    if (window.scrollY > 300) {

        topBtn.style.display =
            "flex";

    } else {

        topBtn.style.display =
            "none";

    }

});


if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
