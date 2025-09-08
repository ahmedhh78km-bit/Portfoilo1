// ===== hero.js =====

// حركة الصورة ثلاثية الأبعاد
const img = document.querySelector('.hero-image-3d');
if (img) {
  img.addEventListener('mousemove', (e) => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    img.style.transform = `scale(1.05) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
  });
}

// كشف ظهور قسم المهارات
const skillsSection = document.querySelector('.skills-section');
function checkSkillsVisible() {
  if (!skillsSection) return;
  const rect = skillsSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  if (rect.top <= windowHeight * 0.75) {
    skillsSection.classList.add('visible');
  }
}
window.addEventListener('scroll', checkSkillsVisible);
window.addEventListener('load', checkSkillsVisible);

const contactForm = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault(); // يمنع إعادة تحميل الصفحة

    feedback.textContent = "Message sent successfully! ✅";
    feedback.style.backgroundColor = "#25d366";
    feedback.style.color = "#fff";
    feedback.classList.add('show');

    contactForm.reset(); // إعادة الفورم فارغ

    // اختفاء الرسالة بعد 3 ثواني
    setTimeout(() => {
      feedback.classList.remove('show');
    }, 3000);
  });
}
const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
 
  // يقفل القائمة أوتوماتيك عند الضغط على أي لينك
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });

  // تغيير شكل البار عند التمرير
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
