function loginFade(){
  var fade = document.querySelector('.fade'),
    lb = fade.querySelector('.lb'),
    li = lb.querySelectorAll('li'),
    le = fade.querySelector('.le'),
    ri = fade.querySelector('.ri'),
    dot = fade.querySelector('.dot'),
    dotLi = dot.querySelectorAll('li'),
    imgNum = 0,
    fadeOutTimer, fadeInTimer, autoPlayTimer,
    flag = true,
    dotNum = 0;

  ri.onclick = function () {
    if (flag) {
      flag = false;
      var oldLi = li[imgNum];
      if (imgNum >= li.length - 1) {
        imgNum = 0;
      }
      var newLi = li[imgNum + 1];
      var o1 = parseFloat(getComputedStyle(oldLi).opacity),
        o2 = parseFloat(getComputedStyle(newLi).opacity);
      if (o1 >= 0) {
        fadeOut(oldLi);
      } else {
        fadeIn(oldLi);
      }
      if (o2 <= 0) {
        fadeIn(newLi);
      } else {
        fadeOut(newLi);
      }
      noBg();
      if (dotNum >= dotLi.length - 1) {
        dotNum = -1;
      }
      dotLi[dotNum + 1].style.backgroundColor = '#3cf';
      dotNum++;
      imgNum++;
    }
  };
  le.onclick = function () {
    if (flag) {
      flag = false;
      var oldLi = li[imgNum];
      if (imgNum <= 0) {
        imgNum = li.length - 1;
      }
      var newLi = li[imgNum - 1];
      var o1 = parseFloat(getComputedStyle(oldLi).opacity),
        o2 = parseFloat(getComputedStyle(newLi).opacity);
      if (o1 >= 0) {
        fadeOut(oldLi);
      } else {
        fadeIn(oldLi);
      }
      if (o2 <= 0) {
        fadeIn(newLi);
      } else {
        fadeOut(newLi);
      }
      noBg();
      if (dotNum <= 0) {
        dotNum = dotLi.length
      }
      dotLi[dotNum - 1].style.backgroundColor = '#3cf';
      dotNum--;
      imgNum--;
    }
  };
  autoPlay();
  function autoPlay() {
    autoPlayTimer = setInterval(
      function () {
        ri.onclick()
      }, 2500
    );
  }
  function fadeOut(element) {
    fadeOutTimer = setInterval(
      function () {
        var op = getComputedStyle(element).opacity;
        if (op <= 0) {
          clearInterval(fadeOutTimer);
          flag = true;
          return;
        }
        element.style.opacity = op - 0.1;
      }, 70
    )
  }

  function fadeIn(element) {
    fadeInTimer = setInterval(
      function () {
        var op = parseFloat(getComputedStyle(element).opacity);
        if (op >= 1) {
          clearInterval(fadeInTimer);
          flag = true;
          return;
        }
        element.style.opacity = op + 0.1;
      }, 70
    )
  }

  function noBg() {
    for (var i = 0; i <= dotLi.length - 1; i++) {
      dotLi[i].style.backgroundColor = '#fff';
    }
  }

  for (var i = 0; i < dotLi.length; i++) {
    dotLi[i].index = i;
    dotLi[i].onclick = function () {
      if (flag) {
        flag = false;
        if (dotNum == 0) {
          li[li.length - 1].style.opacity = 0;
        }
        noBg();
        this.style.backgroundColor = '#3cf';
        fadeOut(li[dotNum]);
        fadeIn(li[this.index]);
        dotNum = this.index;
        imgNum = this.index;
      }
    };
    flag = true;
  }
}
