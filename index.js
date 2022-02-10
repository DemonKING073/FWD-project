var counter = 1;
setInterval(function () {
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

var scrollBtn = document.getElementsByClassName('scroll-container')

window.onscroll = () => {
  onScroll();
};

const onScroll = () => {
  console.log(scrollBtn);
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn[0].style.display = 'block';
    scrollBtn[0].style.backgroundColor = 'red';
  } else {
    scrollBtn[0].style.display = 'none';
  }
}

const toTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
