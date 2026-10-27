'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '메뉴 열기');
}
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const links = [...navigation.querySelectorAll('a')];
const sections = [...document.querySelectorAll('main section[id]')];
function updateActiveLink() {
  const active = sections.filter(section => section.getBoundingClientRect().top <= 150).pop() || sections[0];
  links.forEach(link => {
    if (link.hash === '#' + active.id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();
const email = 'hello@example.com';
const copyButton = document.querySelector('#copy-email-btn');
const toast = document.querySelector('#copy-toast');
toast.setAttribute('role', 'status');
let toastTimer;
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(email);
    toast.textContent = '이메일 주소가 복사되었습니다!';
  } catch {
    toast.textContent = '복사할 수 없습니다. 이메일 주소를 선택해 직접 복사해 주세요.';
  }
  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add('hidden'), 4000);
});
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
status.setAttribute('role', 'status');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const name = document.querySelector('#contact-name').value.trim();
  const sender = document.querySelector('#contact-email').value.trim();
  const type = document.querySelector('#contact-subject').selectedOptions[0].textContent;
  const message = document.querySelector('#contact-message').value.trim();
  const subject = encodeURIComponent(`[포트폴리오 문의] ${type}`);
  const body = encodeURIComponent(`성함 / 기업명: ${name}\n이메일: ${sender}\n\n${message}`);
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  status.classList.remove('hidden');
});
