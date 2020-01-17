// Elements
const btns = document.querySelectorAll('.btn');

// Event Listener
btns.forEach(btn => btn.addEventListener('click', changeColor));

// Functions
function changeColor() {
  const options = document.createElement('div');
  options.classList.add('options');
  options.innerHTML = `<div class="bg"></div>`;
  const txt = document.createElement('div');
  txt.classList.add('txt');

  txt.innerHTML = `      
  <div class="btn red"></div>
  <div class="btn"></div>
  <div class="btn green"></div>
  <div class="btn yellow"></div>
  `;

  options.appendChild(txt);
  document.body.appendChild(options);
  txt.style.top = `${this.parentElement.offsetTop - txt.offsetHeight - 10}px`;
  console.log(this.parentElement.offsetLeft, this.offsetLeft);
  txt.style.left = `${this.parentElement.offsetLeft - txt.offsetWidth / 2 + this.offsetWidth / 2 + this.offsetLeft}px`;

  options.querySelector('.bg').addEventListener('click', () => {
    options.remove();
  });
  const optionsBtns = options.querySelectorAll('.btn');
  optionsBtns.forEach(btn =>
    btn.addEventListener('click', () => {
      this.className = btn.className;
      options.remove();
      save();
    })
  );
}

load();
function load() {
  if (localStorage.getItem('btns')) {
    const save = JSON.parse(localStorage.getItem('btns'));
    btns.forEach((btn, i) => {
      btn.className = save[i];
    });
  }
}
function save() {
  const save = [];
  btns.forEach(btn => {
    save.push(btn.className);
  });
  localStorage.setItem('btns', JSON.stringify(save));
}
