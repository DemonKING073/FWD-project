var counter = 1;
setInterval(function () {
  console.log(counter);
  if (counter == 1) {
    document.getElementById(`radio4`).checked = false;
  }
  document.getElementById(`radio${counter}`).checked = true;
  if (counter > 1)
    document.getElementById(`radio${counter - 1}`).checked = false;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);
