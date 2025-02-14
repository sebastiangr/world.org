document.querySelector('.menu_button').addEventListener('click', function() {
  const menu = document.getElementById('menu');
  menu.style.display = 'block';
  menu.classList.remove('fade-out');
  menu.classList.add('fade-in');
});

document.addEventListener('click', function(event) {
  const menu = document.getElementById('menu');
  const isClickInside = menu.contains(event.target) || event.target.classList.contains('menu_button');

  if (!isClickInside) {
    menu.classList.remove('fade-in');
    menu.classList.add('fade-out');
    setTimeout(() => {
      menu.style.display = 'none';
    }, 500); // Match this duration with the CSS transition duration
  }
});

document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.remove('fade-in');
    menu.classList.add('fade-out');
    setTimeout(() => {
      menu.style.display = 'none';
    }, 500); // Match this duration with the CSS transition duration
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const heroVideo = document.getElementById('hero-video');
  const heroVideoMobile = document.getElementById('hero-video-mobile');
  const heroGif = document.getElementById('hero-gif');

  if (isIOS) {
    heroVideo.style.display = 'none';
    heroVideoMobile.style.display = 'none';
    heroGif.style.display = 'block';
  } else {
    heroGif.style.display = 'none';
  }
});

document.querySelectorAll('[data-parallax]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.transform = 'translateY(-10px)';
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'translateY(0)';
  });
});

document.querySelectorAll('[data-grow]').forEach(el => {
  el.style.transition = 'transform 0.3s ease';
  el.addEventListener('mouseenter', () => {
    el.style.transform = 'scale(1.1)';
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'scale(1)';
  });
});

document.querySelectorAll('[data-shrink]').forEach(el => {
  el.style.transition = 'transform 0.3s ease';
  el.addEventListener('mouseenter', () => {
    el.style.transform = 'scale(0.95)';
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'scale(1)';
  });
});

document.querySelectorAll('[data-rotate]').forEach(el => {
  el.style.transition = 'transform 0.3s ease';
  el.addEventListener('mouseenter', () => {
    el.style.transform = 'scale(1.05) rotate(-20deg)';
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'scale(1) rotate(-10deg)';
  });
});


document.querySelectorAll('[data-rotateinv]').forEach(el => {
  el.style.transition = 'transform 0.3s ease';
  el.addEventListener('mouseenter', () => {
    el.style.transform = 'scale(1.05) rotate(20deg)';
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'scale(1) rotate(10deg)';
  });
});

