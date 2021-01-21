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

write(txt, txt.length, 1);

function write(array, length, x) {
   const interval = setInterval(() => {
      idx++;
      text.innerText = array.slice(0, idx);

      if (idx >= length) {
         clearInterval(interval);

         switch (x) {
            case 1:
               unWrite(txt, 1, 1);
               break;
            case 2:
               unWrite(txt2, 6, 2);
               break;
            case 3:
               unWrite(txt3, 1, 3);
               break;

            default:
               alert("default case executed");
         }
      }
   }, speedNum);
}

function unWrite(array, length, x) {
   const interval = setInterval(() => {
      text.innerText = array.slice(0, idx);
      idx--;

      if (idx == length) {
         clearInterval(interval);
         if (idx >= length) {
            clearInterval(interval);

            switch (x) {
               case 1:
                  write(txt2, txt2.length, 2);
                  break;
               case 2:
                  write(txt3, txt3.length, 3);
                  break;
               case 3:
                  write(txt, txt.length, 1);
                  break;

               default:
                  alert("default case executed");
            }
         }
      }
   }, speedNum);
}
