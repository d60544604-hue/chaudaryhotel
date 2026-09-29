// Mobile menu
const burger = document.getElementById('burger');
const links = document.getElementById('menuLinks');
burger.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open')));

// Menu filter
const filters = document.querySelectorAll('.filter');
const dishes = document.querySelectorAll('.dish');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(f => f.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    dishes.forEach(d => {
      d.style.display = (cat === 'all' || d.dataset.cat === cat) ? 'block' : 'none';
    });
  });
});

// Reservation form
document.getElementById('rDate').min = new Date().toISOString().split('T')[0];
document.getElementById('rBtn').addEventListener('click', () => {
  const name = document.getElementById('rName').value.trim();
  const phone = document.getElementById('rPhone').value.trim();
  const date = document.getElementById('rDate').value;
  const guests = document.getElementById('rGuests').value;
  const msg = document.getElementById('rMsg');
  if (!name || !phone || !date) {
    msg.textContent = '⚠️ Please fill in all fields.';
    return;
  }
  msg.textContent = `✅ Thank you ${name}! Table for ${guests} booked on ${date}.`;
});
