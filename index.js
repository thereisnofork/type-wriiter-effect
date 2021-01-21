const text = document.getElementById("text");
const speed = document.getElementById("speed");

let idx = 1;
let speedNum = 100 / speed.value;
const txt = "We love typewriting effect !";
const txt2 = "What a wonderful effect !";
const txt3 = "What a beautiful style !";

text.classList.add("typo");

speed.addEventListener("input", (e) => {
   speedNum = 250 / e.target.value;
});

write();

function write() {
   const interval = setInterval(() => {
      text.innerText = txt.slice(0, idx);
      idx++;

      if (idx >= txt.length) {
         clearInterval(interval);
         unWrite();
      }
   }, speedNum);
}

function unWrite() {
   const interval = setInterval(() => {
      text.innerText = txt.slice(0, idx);
      idx--;

      if (idx == 1) {
         clearInterval(interval);
         write2();
      }
   }, speedNum);
}

function write2() {
   const interval = setInterval(() => {
      text.innerText = txt2.slice(0, idx);
      idx++;

      if (idx >= txt2.length) {
         clearInterval(interval);
         unWrite2();
      }
   }, speedNum);
}

function unWrite2() {
   const interval = setInterval(() => {
      text.innerText = txt2.slice(0, idx);
      idx--;

      if (idx == 6) {
         clearInterval(interval);
         write3();
      }
   }, speedNum);
}

function write3() {
   const interval = setInterval(() => {
      text.innerText = txt3.slice(0, idx);
      idx++;

      if (idx >= txt3.length) {
         clearInterval(interval);
         unWrite3();
      }
   }, speedNum);
}

function unWrite3() {
   const interval = setInterval(() => {
      text.innerText = txt3.slice(0, idx);
      idx--;

      if (idx == 1) {
         clearInterval(interval);
         write();
      }
   }, speedNum);
}


