//---------------------INDEX--------------
//#region Dev-mode
const isDevMode = document.body.classList.contains('dev-mode');
//#endregion Dev-mode

//#region Intro (Animasi Welcome + Quotes)
const introDelayStart = 500;
const letterAppearDelay = 200;
const letterFadeDelay = 120;
const stayDuration = 1500;
const afterFadeDelay = 800;
const introExitDuration = 2000;
const quoteStartDelay = 800;
const quoteDuration = 9000;

// Ambil elemen yang dibutuhkan
const intro = document.querySelector('.intro');
const logSpan = document.querySelectorAll('.anim');
const quotes = document.querySelectorAll('.qutes-all');
const btn = document.querySelector('.btn'); // tombol "Browse"

// Jalankan setelah semua elemen DOM siap
window.addEventListener('DOMContentLoaded', () => {
  //#region Dev-mode
  if (isDevMode) {
    console.log("🧩 Dev Mode Aktif — animasi WELCOME dimatikan.");
    if (logSpan.length > 0) logSpan.forEach(span => span.classList.add('active'));
    return;
  }
  //#endregion Dev-mode

  // Jalankan animasi intro hanya jika elemen ada
  if (intro && logSpan.length > 0 && quotes.length > 0 && btn) {
    // Sembunyikan tombol "Browse" di awal
    btn.style.opacity = "0";
    btn.style.transform = "translateY(20px)";
    btn.style.transition = "opacity 1s ease, transform 1s ease";

    // Mulai animasi "welcome"
    setTimeout(() => {
      logSpan.forEach((span, idx) => {
        setTimeout(() => span.classList.add('active'), idx * letterAppearDelay);
      });

      const totalAppearTime = (logSpan.length - 1) * letterAppearDelay + stayDuration;

      // Setelah muncul semua huruf → fade out
      setTimeout(() => {
        logSpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove('active');
            span.classList.add('fade');
          }, idx * letterFadeDelay);
        });
      }, totalAppearTime);

      const totalFadeTime = totalAppearTime + (logSpan.length * letterFadeDelay) + afterFadeDelay;

      // Setelah fade out selesai → intro hilang ke atas
      setTimeout(() => {
        intro.style.transition = `all ${introExitDuration / 1000}s ease`;
        intro.style.opacity = "0";
        intro.style.top = "-100vh";

        // Setelah intro benar-benar hilang → tampilkan quotes
        setTimeout(() => startQuotes(), quoteStartDelay);
      }, totalFadeTime);
    }, introDelayStart);
  }
});

// Fungsi animasi quotes
function startQuotes() {
  if (quotes.length === 0) return;

  let current = 0;

  quotes.forEach(q => {
    q.style.opacity = "0";
    q.style.transform = "translateY(20px)";
    q.style.transition = "opacity 1s ease, transform 1s ease";
  });

  const showQuote = (index) => {
    quotes.forEach(q => (q.style.opacity = "0"));
    const q = quotes[index];
    q.style.opacity = "1";
    q.style.transform = "translateY(0)";

    // Saat quote pertama muncul → munculkan tombol "Browse"
    if (index === 0 && btn) {
      setTimeout(() => {
        btn.style.opacity = "1";
        btn.style.transform = "translateY(0)";
      }, 1000);
    }
  };

  showQuote(current);
  setInterval(() => {
    quotes[current].style.opacity = "0";
    quotes[current].style.transform = "translateY(-20px)";
    current = (current + 1) % quotes.length;
    setTimeout(() => showQuote(current), 500);
  }, quoteDuration);
}
//#endregion Intro

//#region Navigation (Tombol nav-menu & pop-up nav)
const navBtn = document.getElementById('navv-btn');
const navMan = document.getElementById('Nav-Man');

if (navBtn && navMan) {
  navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active');
    navMan.classList.toggle('active');
  });
}
//#endregion Navigation

//#region Contact
const browseBtn = document.querySelector('.browse-btn');
const browsTbl = document.querySelector('.Brows-tbl');
const bckBtn = document.querySelector('.bck-btn');

if (browseBtn && browsTbl && bckBtn) {
  browseBtn.addEventListener('click', () => {
    browsTbl.classList.add('active');
    bckBtn.classList.add('active');
    bckBtn.style.opacity = 1;
  });

  bckBtn.addEventListener('click', () => {
    browsTbl.classList.remove('active');
    bckBtn.classList.remove('active');
    bckBtn.style.opacity = 0;
  });
}

// Reset isi input jika elemen ada
const searchInput = document.querySelector('.search-input');
if (searchInput) searchInput.value = '';
//#endregion Contact

//#region 404
function createDots() {
  const dotsContainer = document.getElementById('dots');
  if (!dotsContainer) return;

  const dotsCount = 50;
  for (let i = 0; i < dotsCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');

    dot.style.left = Math.random() * 100 + 'vw';
    dot.style.top = Math.random() * 100 + 'vh';

    const size = Math.random() * 3 + 1;
    dot.style.width = size + 'px';
    dot.style.height = size + 'px';

    dot.style.animationDelay = Math.random() * 6 + 's';
    dot.style.animationDuration = (Math.random() * 4 + 4) + 's';

    dotsContainer.appendChild(dot);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  createDots();

  const back404 = document.querySelector('.back-404');
  if (back404) {
    back404.addEventListener('click', () => {
      if (window.history.length > 1) window.history.back();
      else window.location.href = '/';
    });
  }
});
//#endregion 404

//#region About
document.addEventListener('DOMContentLoaded', () => {
  const bckabBtn = document.querySelector('.bckab-btn');
  if (bckabBtn) {
    bckabBtn.addEventListener('click', () => {
      window.history.back();
    });
  }
});
//#endregion About

//#region --
//#endregion --