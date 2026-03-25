/* TYPING TEXT */

const text="Android Developer • Kotlin • Firebase • Backend APIs";

let i=0;

function typing(){

if(i<text.length){

document.querySelector(".typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,60);

}

}

typing();



/* SCROLL REVEAL ANIMATION */

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach((el)=>observer.observe(el));



/* NAVBAR SCROLL EFFECT */

const navbar=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});



/* STARS BACKGROUND */

const starContainer=document.getElementById("stars");

for(let i=0;i<150;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

starContainer.appendChild(star);

}



/* SHE SHIELD IMAGE SLIDER */

const sheImages=[
"she1.jpg",
"she2.jpg",
"she3.jpg"
];

let sheIndex=0;

setInterval(()=>{

sheIndex++;

if(sheIndex>=sheImages.length){

sheIndex=0;

}

document.getElementById("sheSlider").src=sheImages[sheIndex];

},5000);



/* FAMILY SHIELD IMAGE SLIDER */

const familyImages=[
"family1.jpg",
"family2.jpg",
"family3.jpg"
];

let familyIndex=0;

setInterval(()=>{

familyIndex++;

if(familyIndex>=familyImages.length){

familyIndex=0;

}

document.getElementById("familySlider").src=familyImages[familyIndex];

},5000);