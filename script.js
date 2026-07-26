// ================= LOADER =================

window.onload = () => {

document.getElementById("loader").style.display = "none";

};

// ================= AOS =================

AOS.init({
duration:1000,
once:true
});

// ================= THEME TOGGLE =================

const toggle =
document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){

document.body.classList.add("dark");

toggle.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}

toggle.onclick = () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

toggle.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}else{

localStorage.setItem("theme","light");

toggle.innerHTML =
'<i class="fa-solid fa-moon"></i>';

}

};

// ================= TYPING EFFECT =================

const text = [
"Frontend Developer",
"AI Student",
"UI Designer",
"Java Developer"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type(){

currentText = text[i];

if(!isDeleting){

document.getElementById("typing").innerHTML =
currentText.substring(0,j++);

if(j > currentText.length){

isDeleting = true;

setTimeout(type,1200);

return;

}

}else{

document.getElementById("typing").innerHTML =
currentText.substring(0,j--);

if(j < 0){

isDeleting = false;

i = (i + 1) % text.length;

}

}

setTimeout(type,isDeleting ? 70 : 120);

}

type();

// ================= HAMBURGER MENU =================

const hamburger =
document.querySelector(".hamburger");

const nav =
document.querySelector(".nav-links");

hamburger.onclick = () => {

nav.classList.toggle("active");

};

// CLOSE MENU ON CLICK

document.querySelectorAll(".nav-links a")
.forEach(link => {

link.onclick = () => {

nav.classList.remove("active");

};

});

// ================= PROJECT DATA =================

const projects = {

web:[

{
title:"College Website",
desc:"Modern responsive college website",
img:"scet.png",
link:"https://github.com/sakthiyad2/SCET-College-Website-"
},

{
title:"MindMirror",
desc:"AI mental wellness web app",
img:"mindmirror.png",
link:"https://github.com/sakthiyad2/MindMirror-website"
},

{
title:"MR.Review",
desc:"Movie review platform",
img:"mrreview.png",
link:"https://github.com/sakthiyad2/Movie-Review-website-MR.Review"
},

{
title:"Paws and Wings",
desc:"Pet adoption website",
img:"pawsandwings.png",
link:"https://github.com/sakthiyad2/Paws-and-Wings---Pet-Adoption-Website"
},

{
title:"Portfolio Website",
desc:"Personal developer portfolio",
img:"portfolio.png",
link:"https://github.com/sakthiyad2/sakthiya-portfolio"
},
  
{
title:"Village Milk Collection and Payment Register",
desc:"Milk Collection and Payment Register",
img:"milk.jpg",
link:"https://github.com/sakthiyad2/Village-Milk-Collection-System"  
}

],

java:[

{
title:"Bank Management System",
desc:"Bank Account",
img:"bank.jpg",
link:"https://github.com/sakthiyad2/BankManagementSystem-java"
},

{
title:"Library Management",
desc:"Library record system",
img:"library.png",
link:"https://github.com/sakthiyad2/Library-Management-java-OOPS"
},

{
title:"Student Management",
desc:"Student database app",
img:"studentm.png",
link:"https://github.com/sakthiyad2/Student-Management-Java-OOPS"
},

{
title:"Hospital Management",
desc:"Hospital Management using Inheritance",
img:"hospitalin.png",
link:"https://github.com/sakthiyad2/Hospital-Management-inheritance-OOPS-Java"
},

{
title:"Vehicle Hierarchy System",
desc:"Vehicle Hierarchy",
img:"vehiclehierarchy.png",
link:"https://github.com/sakthiyad2/Vehicle-Hierarchy"
},

{
title:"Inventory System",
desc:"Stock management",
img:"inventory.png",
link:"https://github.com/sakthiyad2/InventorySystem-java-"
},

{
title:"Online Quiz",
desc:"Quiz application",
img:"quizjava.png",
link:"https://github.com/sakthiyad2/QuizUi-java"
},

{
title:"Course Management",
desc:"Course Management App",
img:"course.png",
link:"https://github.com/sakthiyad2/Course-Management-Java-OOPS"
},

{
title:"Employee Payroll",
desc:"Payroll calculation",
img:"employee.png",
link:"https://github.com/sakthiyad2/Employee-Payroll-Java-OOPS"
},

{
title:"Hospital Management",
desc:"Hospital records",
img:"hospital.png",
link:"https://github.com/sakthiyad2/Hospital-Management-Java-OOPS"
},

{
title:"Bank Account",
desc:"Bank account system",
img:"bankaccount.png",
link:"https://github.com/sakthiyad2/Bank-Account-Java-OOPS"
},

{
title:"Food Ordering",
desc:"Restaurant ordering app",
img:"foodorder.png",
link:"https://github.com/sakthiyad2/FoodOrderingSystem-java"
},

{
title:"Food Delivery Payment",
desc:"Food Delivery Payment",
img:"fooddelivery.png",
link:"https://github.com/sakthiyad2/FoodDeliveryPayment-java"
},

{
title:"Vehicle Detail System",
desc:"Vehicle Detail",
img:"vehicledetail.png",
link:"https://github.com/sakthiyad2/Vehicle-Details-System-using-Method-Overloading-Polymorphism-in-Java-"
},

{
title:"Smart Home Automation",
desc:"Smart Home System",
img:"smarthome.png",
link:"https://github.com/sakthiyad2/Smart-Home-Automation-System-using-Java-Interfaces-OOP-"
},

{
title:"Vehicle Rental",
desc:"Vehicle renting",
img:"vehiclerent.png",
link:"https://github.com/sakthiyad2/Vehicle-Rental-System-java"
},

{
title:"Movie Ticket Booking",
desc:"Ticket Booking",
img:"moviebooking.png",
link:"https://github.com/sakthiyad2/MovieTicketBookingSystem-java"
}

],

python:[

{
title:"ATM",
desc:"ATM System",
img:"atm.png",
link:"https://github.com/sakthiyad2/ATM-python"
},

{
title:"Data Processing",
desc:"Expense Tracker",
img:"data.png",
link:"https://github.com/sakthiyad2/data_processing_project"
},

{
title:"Dice Game",
desc:"Game app",
img:"dice.png",
link:"https://github.com/sakthiyad2/Dice-game-python"
},

{
title:"File Based Notes Saver",
desc:"Notes Saver",
img:"notes.png",
link:"https://github.com/sakthiyad2/File-based-notes-saver"
},

{
title:"Hangman Game",
desc:"Game App",
img:"hangman.png",
link:"https://github.com/sakthiyad2/Hangman"
},

{
title:"Library Management System",
desc:"Library Management",
img:"lipy.png",
link:"https://github.com/sakthiyad2/Library-Management-python"
},

{
title:"Number Guessing Game",
desc:"Game",
img:"number.png",
link:"https://github.com/sakthiyad2/Number-Guessing-Game-Python"
},

{
title:"Password Strength Checker",
desc:"Password Checker",
img:"password.png",
link:"https://github.com/sakthiyad2/Password-Strength-Checker"
},

{
title:"Quiz",
desc:"Quiz game",
img:"quizpy.png",
link:"https://github.com/sakthiyad2/Quiz-Python"
},

{
title:"Rock Paper Scissor",
desc:"Game",
img:"rock.png",
link:"https://github.com/sakthiyad2/Rock-Paper-Scissor-vs-Computer"
}

]

};

// ================= CATEGORY BUTTONS =================

const catDiv =
document.getElementById("categories");

Object.keys(projects).forEach(cat => {

let btn =
document.createElement("button");

btn.innerText = cat.toUpperCase();

btn.onclick = () => {

loadProjects(cat);

};

catDiv.appendChild(btn);

});

// ================= LOAD PROJECTS =================

function loadProjects(cat){

const container =
document.getElementById("project-container");

container.innerHTML = "";

projects[cat].forEach((p,index) => {

let div =
document.createElement("div");

div.className = "project glass";

div.setAttribute(
"data-aos",
"zoom-in-up"
);

div.setAttribute(
"data-aos-delay",
index * 100
);

div.innerHTML = `

<img src="${p.img}" alt="${p.title}">

<h3>${p.title}</h3>

<p>${p.desc}</p>

`;

div.onclick = () => openModal(p);

container.appendChild(div);

});

AOS.refresh();

}

// DEFAULT

loadProjects("web");

// ================= CERTIFICATES =================

const certificates = [

{
title:"Legacy responsive web design v8",
img:"freecode legacy responsive web design v8.png"
},

{
title:"Responsive Web Design",
img:"Resposive web design.jpeg"
},

{
title:"Communication skill",
img:"communication.jpg"
},

{
title:"JavaScript",
img:"javascript.jpg"
},

{
title:"Java",
img:"javafundamentals.jpg"
},

{
title:"UX",
img:"ux.jpg"
},

{
title:"Microsoft - Secure storage for Azure Files and Azure Blob Storage",
img:"azureblob.jpg"
},

{
title:"Micrsoft - Create and manage canvas apps with power apps",
img:"canva.jpg"
},

{
title:"Basics of Python",
img:"bpython.jpg"
},

{
title:"LPBO2-Automation with Arduino",
img:"leap.jpg"
},

{
title:"Critical Thinking in AI Era",
img:"criticalthinking.jpg"
},

{
title:"Claude Code in Action(Anthropic)",
img:"claudecodeinaction.jpg"
},

{
title:"Claude 101(Anthropic)",
img:"claude101.jpg"
},

{
title:"AI Fluency: Framework & Foundations",
img:"aifluencyframeworkandfoundations.jpg"
},

{
title:"Claude with the Anthropic API",
img:"claudewiththeanthropic.jpg"
},

{
title:"Introduction to Model Context Protocol",
img:"introductiontomodelcontextprotocol.jpg"
},

{
title:"AI Fluency for educators",
img:"aifluencyforeducators.jpg"
},

{
title:"Data Science and Analytics",
img:"datascience.jpg"
},

{
title:"AI Fluency for students",
img:"aifluencyforstudents.jpg"
},

{
title:"Model Context Protocol: Advanced Topics",
img:"modelcontextprotocoladvancedtopics.jpg"
},

{
title:"Claude with Google Vertex AI",
img:"claudewithgooglevertexai.jpg"
},

{
title:"Teaching the AI Fluency Framework",
img:"teachingtheaifluencyframework.jpg"
},

{
title:"AI Fluency for nonprofits",
img:"aifluencyfornonprofits.jpg"
},

{
title:"Introduction to agent skills",
img:"introductiontoagentskills.jpg"
},

{
title:"Claude with Amazon Bedrock",
img:"claudewithamazonbedrock.jpg"
},

{
title:"Python Fundamentals",
img:"pythonfundamentals.jpg"
},

{
title:"Yuva AI for All",
img:"yuvaai.jpg"
},

{
title:"Java Programming Fundamentals",
img:"javaprogrammingfundamentals.jpg"
},

{
title:"Introduction to Claude Cowork",
img:"introductiontoclaudecowork.jpg"
},

{
title:"Introduction to subagents",
img:"introductiontosubagents.jpg"
},

{
title:"Type Writing(Junior)",
img:"type1.jpeg"
},

{
title:"Type Writing(Senior)",
img:"type2.jpeg"
},

];

// ================= CERTIFICATE LOAD =================

const certContainer =
document.getElementById("certificate-container");

const showBtn =
document.getElementById("show-more-certificates");

let visibleCertificates =
window.innerWidth <= 768 ? 3 : 3;

function loadCertificates(){

certContainer.innerHTML = "";

certificates
.slice(0,visibleCertificates)
.forEach((cert,index) => {

let div =
document.createElement("div");

div.className = "cert glass";

div.setAttribute(
"data-aos",
"flip-left"
);

div.setAttribute(
"data-aos-delay",
index * 80
);

div.innerHTML = `

<img src="${cert.img}" alt="${cert.title}">

<h3>${cert.title}</h3>

`;

div.onclick = () =>
openCert(cert.img);

certContainer.appendChild(div);

});

AOS.refresh();

}

// INITIAL

loadCertificates();

// SHOW ALL

showBtn.onclick = () => {

visibleCertificates =
certificates.length;

loadCertificates();

showBtn.style.display = "none";

};

// ================= MODAL =================

function openModal(p){

document.getElementById("modal")
.classList.add("active");

document.getElementById("modal-content")
.innerHTML = `

<h2>${p.title}</h2>

<br>

<p>${p.desc}</p>

<br><br>

<a href="${p.link}"
target="_blank"
class="btn">

Visit Project

</a>

`;

}

// CLOSE MODAL

function closeModal(){

document.getElementById("modal")
.classList.remove("active");

}

// OPEN CERTIFICATE

function openCert(src){

document.getElementById("modal")
.classList.add("active");

document.getElementById("modal-content")
.innerHTML = `

<img src="${src}" width="100%">

`;

}

// CLOSE MODAL WHEN CLICK OUTSIDE

window.onclick = (e) => {

const modal =
document.getElementById("modal");

if(e.target === modal){

modal.classList.remove("active");

}

};

// ================= PARTICLES / NIGHT SKY =================

tsParticles.load("particles",{

fullScreen:{
enable:false
},

background:{
color:"transparent"
},

fpsLimit:60,

particles:{

number:{
value:120,
density:{
enable:true,
area:800
}
},

color:{
value:"#ffffff"
},

shape:{
type:"circle"
},

opacity:{
value:{min:0.2,max:0.9},
animation:{
enable:true,
speed:0.5,
minimumValue:0.1,
sync:false
}
},

size:{
value:{min:1,max:4}
},

move:{
enable:true,
speed:0.3,
direction:"none",
random:true,
straight:false,
outModes:{
default:"out"
}
},

links:{
enable:true,
distance:140,
color:"#ffffff",
opacity:0.12,
width:1
}

},

interactivity:{

events:{

onHover:{
enable:true,
mode:"grab"
},

resize:true

},

modes:{

grab:{
distance:150,
links:{
opacity:0.35
}
}

}

},

detectRetina:true

});

// ================= SCROLL ANIMATION =================

window.addEventListener("scroll",() => {

const navbar =
document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background =
"rgba(15,23,42,0.7)";

navbar.style.boxShadow =
"0 8px 25px rgba(0,0,0,0.3)";

}else{

navbar.style.background =
"rgba(255,255,255,0.1)";

navbar.style.boxShadow =
"none";

}

});

// ================= HERO FLOAT EFFECT =================

const hero =
document.querySelector(".hero");

window.addEventListener("mousemove",(e) => {

const x =
(e.clientX / window.innerWidth - 0.5) * 10;

const y =
(e.clientY / window.innerHeight - 0.5) * 10;

hero.style.transform =
`translate(${x}px, ${y}px)`;

});

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop;

if(pageYOffset >= sectionTop - 200){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active-link");

if(link.href.includes(current)){

link.classList.add("active-link");

}

});

});


window.addEventListener("scroll",()=>{

const scrollTop =
document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const scrolled =
(scrollTop / height) * 100;

document.getElementById("progress-bar")
.style.width = scrolled + "%";

});

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

topBtn.onclick = ()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

};
