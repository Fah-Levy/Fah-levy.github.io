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
