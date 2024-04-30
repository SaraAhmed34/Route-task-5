
/// & ==============> Typed js <=================//

var typed = new Typed('#element', {
  strings: ['Desginer', 'Freelance'],
  typeSpeed: 50,
  loop: true,
  loopCount: Infinity,
});


// & ==============> Counter Section <=================//

(() => {
  const counter = document.querySelectorAll('.counterr');
  // covert to array
  const array = Array.from(counter);
  // select array element
  array.map((item) => {
      // data layer
      let counterInnerText = item.textContent;

      let count = 1;
      let speed = item.dataset.speed / counterInnerText
      function counterUp() {
          item.textContent = count++
          if (counterInnerText < count) {
              clearInterval(stop);
          }
      }
      const stop = setInterval(() => {
          counterUp();
      }, speed);
  })
})()

// & ==============> Back to Top Button <=================//

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


