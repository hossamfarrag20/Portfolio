const text = document.querySelector(".sec-text");
const texts = ["Designer", "Developer"];
let index = 0;

const textload = () => {
    text.classList.remove('fade-in');
    text.classList.add('fade-out');
    setTimeout(() => {
        text.textContent = texts[index];
        text.classList.remove('fade-out');
        text.classList.add('fade-in');
        index = (index + 1) % texts.length;
    }, 500); 
}

// تحميل النص لأول مرة
textload();

// تغيير النص كل 4 ثواني
setInterval(textload, 4000);




// const all = document.getElementById("all");
// const grafic = document.getElementById("grafic");
// const web = document.getElementById("web");
// const bran = document.getElementById("bran");

// const por1 = document.getElementById("por1");
// const por2 = document.getElementById("por2");
// const por3 = document.getElementById("por3");
// const por4 = document.getElementById("por4");
// const por5 = document.getElementById("por5");
// const por6 = document.getElementById("por6");



// grafic.addEventListener("click", (eo) => {
//     eo.preventDefault();
//     por1.style.display = "none";

// });

// web.addEventListener("click", (eo) => {
//     eo.preventDefault();
//     por2.style.display = "none";
//     por3.style.display = "none";
//     por6.style.display = "none";

// });
// bran.addEventListener("click", (eo) => {
//     eo.preventDefault(); 
//     por1.style.display = "none";
//     por3.style.display = "none";
//     por4.style.display = "none";
//     por5.style.display = "none";
    
// });

// all.addEventListener("click", (eo) => {
//     eo.preventDefault(); 
//     por1.style.display = "block";
//     por2.style.display = "block";
//     por3.style.display = "block";
//     por4.style.display = "block";
//     por5.style.display = "block";
//     por6.style.display = "block";
    
// });

