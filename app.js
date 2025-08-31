// animasi intro

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logSpan = document.querySelectorAll('.logo');
let batman = document.querySelector('.batman');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        // ✨ Munculin huruf welcome per 0.2s
        logSpan.forEach((span, idx)=>{
            setTimeout(()=>{
               span.classList.add('active'); 
            }, idx * 200);
        });

        // Hitung total waktu animasi huruf
        let totalTime = (logSpan.length - 1) * 200 + 500;

        // ✨ Fade-out huruf
        setTimeout(()=>{
            logSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, idx * 100)
            });

            // ✨ Teks Batman muncul smooth setelah 1s
            setTimeout(()=>{
                batman.classList.add('show');
            }, 1000);
        }, totalTime + 200);  

        // ✨ Geser intro keluar layar setelah fade selesai
        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, totalTime + 1200);
    })
});

//-----------------------------------------------------------------------------------
// Overlay menu
let menuBtn = document.getElementById("menu-btn");
let overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menuBtn.classList.toggle("active");
  overlay.classList.toggle("active");
});

//-----------------------------------------------------------------------------------
// Auto-rotate batman pages
let batmans = document.querySelectorAll(".batman");
let currentPage = 0;

// page pertama langsung muncul
batmans[currentPage].classList.add("active");

// mulai rotasi setelah animasi welcome
setTimeout(() => {
  setInterval(() => {
    // keluar page saat ini
    batmans[currentPage].classList.add("exit-bottom");
    batmans[currentPage].classList.remove("active");

    // hitung page selanjutnya
    currentPage = (currentPage + 1) % batmans.length;

    // reset posisi page baru dari atas
    batmans[currentPage].classList.remove("exit-bottom");
    batmans[currentPage].classList.add("active");
  }, 8000); // ganti tiap 10 detik
}, 0);