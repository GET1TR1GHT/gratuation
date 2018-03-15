// var win = 1, time = "";
var play = null,
  time = null,
  index = 0;
$(document).ready(function () {
  if ($(window).height() >= 550) {
    $('#header-big').css('height', $(window).height() * 0.8);
    $('#header-title-p').css({'padding-top': $(window).height() * 0.2, 'padding-bottom': $(window).height() * 0.1})
  }
  else if ($(window).height() <= 550 && $(window).height() >= 400) {
    $('#header-big').css('height', $(window).height() * 0.8);
    $('#header-title-p').css({'padding-top': 0, 'padding-bottom': $(window).height() * 0.1})
  }


  if ($('.imgbox').eq(0).height() <= 540 && $('.imgbox').eq(0).height() >= 458) {
    $('.imgbox').eq(0).css('height', $(window).height() * 0.76);
    $('.headertitle').eq(0).css('top', 30 + '%');
  } else if ($('.imgbox').eq(0).height() > 540) {
    $('.imgbox').eq(0).css('height', 540);
  } else if ($('.imgbox').eq(0).height() < 458) {
    $('.imgbox').eq(0).css('height', 458);
    $('.headertitle').eq(0).css('top', 15 + '%');
  }
});
$(document).ready(function () {
  var $Oli = $('#circle>li');
  var $Ocerma = $('#cerma');
  var timer = null;
  var $Header = $('#header-big');
  var $headerxssm = $('#header-nav-xs-sm');
  var $iconheader = $('#icon-header');
  var $maskxssm = $('#mask-xs-sm');
  var $closeButton = $('#close-button');

  // 手机端header的选项跳出
  $iconheader.on('click', function () {
    $headerxssm.css('display', 'block');
    $maskxssm.css('display', 'block');
    $('html').css({'overflow': 'hidden', 'height': '100%'});
    $('body').css({'overflow': 'hidden', 'height': '100%'});
  })
  $closeButton.on('click', function () {
    $headerxssm.css('display', 'none');
    $maskxssm.css('display', 'none')
    $('html').css({'overflow': 'auto', 'height': 'auto'});
    $('body').css({'overflow': 'auto', 'height': 'auto'});
  })
  $maskxssm.on('click', function () {
    $headerxssm.css('display', 'none');
    $maskxssm.css('display', 'none')
    $('html').css({'overflow': 'auto', 'height': 'auto'});
    $('body').css({'overflow': 'auto', 'height': 'auto'});
  })
  // 中英文切换首页
  $.each($Oli, function (index, value) {
    $Oli.eq(index).on('click', function () {
      $Oli.each(function (a, b) {
        $Oli.eq(a).removeClass('active');
      })
      $(value).addClass('active');
    })
    $Oli.eq(index).on('mouseover', function () {
      $Oli.each(function (a, b) {
        $Oli.eq(a).removeClass('active');
      })
      $(value).addClass('active');
    })
  })

  // 摄像机的放大和缩小
  $Ocerma.on('mouseover', function () {
    clearInterval(timer);
    timer = setInterval(function () {
      var wid = $Ocerma.width();
      wid >= 100 ? (clearInterval(timer), timer = 0) : wid += 10;
      $Ocerma.css('width', wid + 'px');
    }, 10)
  })

  $Ocerma.on('mouseout', function () {
    clearInterval(timer);
    var wid = $Ocerma.css('width', '48px');
  })

// banner动画
  $('.imgbox').on('mouseover', function () {
    clearInterval(play);
  })
  $('.imgbox').on('mouseout', function () {
    autoplay();
  })
  $('#numchar>p').each(function (a, b) {
    $('#numchar>p').eq(a).on('mouseover', function () {
      show(a);
    })
  })

  // photograph页面的选项点击
  var $Ochosemnu = $('#choose-menu>li');

  $Ochosemnu.each(function (c, d) {
    $Ochosemnu.eq(c).on('click', function () {
      $Ochosemnu.each(function (e, f) {
        $Ochosemnu.eq(e).removeClass();
      })
      $Ochosemnu.eq(c).addClass('active');
    })
  })

// 刷新页面清除lll和jjj
  $('.servicecol').each(function (c, d) {
    $(d).removeClass('lll');
  });

  $('.bigimgh1').each(function (c, d) {
    $(d).removeClass('lll');
  });

  var $oPhotoer = $('#photoers > .photographer');
  $oPhotoer.each(function (r, t) {
    $oPhotoer.eq(r).on('click', function () {
      // if(r<index){
      //   $('#photoers').css('transform', 'translate3d(-1371px, 0px, 0px)');
      // }
      // else {
      //   $('#photoers').css('transform', 'translate3d(-1871px, 0px, 0px)');
      // }
      $oPhotoer.each(function (j, k) {
        $oPhotoer.eq(j).removeClass('photographer-left');
        $oPhotoer.eq(j).removeClass('photographer-right');
        $oPhotoer.eq(j).removeClass('photographer-middule')
      })
      $oPhotoer.eq(r).addClass('photographer-middule');
      if ($oPhotoer.eq(0).hasClass('photographer-middule')) {
        $oPhotoer.eq(5).addClass('photographer-left');
        $oPhotoer.eq(1).addClass('photographer-right');
      }
      else if ($oPhotoer.eq(5).hasClass('photographer-middule')) {
        $oPhotoer.eq(4).addClass('photographer-left');
        $oPhotoer.eq(0).addClass('photographer-right');
      }
      else {
        $oPhotoer.eq(r - 1).addClass('photographer-left');
        $oPhotoer.eq(r + 1).addClass('photographer-right');
      }
    })
  });

  var $smallmore = $('.small-more');
  for (var l = 0; l < $smallmore.length; l++) {
    this.index = l+1;
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    setInterval(function () {
      function randomSort(a, b) {
        return Math.random() > 0.5 ? -1 : 1;
      }
    console.log(arr);
    arr.sort(randomSort);
    $smallmore.eq(l).css({'background': 'url(images/image/morephotography'+ arr[this.index]+'.jpg) no-repeat center','background-size' :'100% 100%'});
    },3000);
  }

  // 浏览器改变index下small-pic大小
  $('.small-more').each(function (p, l) {
    var $widsmall = Math.floor($('.small-more').eq(p).width());
    $('.small-more').eq(p).height($widsmall);
    $('.more-button').eq(0).height($widsmall);
    $('.big-more').each(function (p, l) {
      $('.big-more').eq(p).height($widsmall * 2);
    })

  });
});


// index页面，刷新页面浏览器大小，变化其中的div为正方形
$(window).resize(function () {
  $('.small-more').each(function (p, l) {
    var $widsmall = Math.floor($('.small-more').eq(p).width());
    $('.small-more').eq(p).height($widsmall);
    console.log($('.small-more').eq(p).height());
    $('.more-button').eq(0).height($widsmall);

    $('.big-more').each(function (p, l) {
      $('.big-more').eq(p).height($widsmall * 2);
      console.log($('.big-more').eq(p).height())
    })

  });

  // 浏览器大小变换header图片大小
  if ($(window).height() >= 550) {
    $('#header-big').css('height', $(window).height() * 0.8);
    $('#header-title-p').css({'padding-top': $(window).height() * 0.2, 'padding-bottom': $(window).height() * 0.1})
  }
  else if ($(window).height() <= 550 && $(window).height() >= 400) {
    $('#header-big').css('height', $(window).height() * 0.8);
    $('#header-title-p').css({'padding-top': 0, 'padding-bottom': $(window).height() * 0.1})
  }


  if ($('.imgbox').eq(0).height() <= 540 && $('.imgbox').eq(0).height() >= 458) {
    $('.imgbox').eq(0).css('height', $(window).height() * 0.76);
    $('.headertitle').eq(0).css('top', 30 + '%');
  } else if ($('.imgbox').eq(0).height() > 540) {
    $('.imgbox').eq(0).css('height', 540);
  } else if ($('.imgbox').eq(0).height() < 458) {
    $('.imgbox').eq(0).css('height', 458);
    $('.headertitle').eq(0).css('top', 15 + '%');
  }


})
// service页面刷新时也
$(document).ready(function () {
  $('.servicecol').each(function (c, d) {
    var g = 0;
    var oo = $('.servicecol').eq(g).offset().top - $(document).eq(g).scrollTop() - $(window).height();
    var pp = $('.servicecol').eq(g).height() + $(window).height();
    if (oo > 0 || oo < -pp) {
      // $('.servicecol').eq(c).removeClass('lll')
    }
    else {
      $('.servicecol').eq(g).addClass('lll');
      if ($('.servicecol').eq(0).hasClass('lll')) {
        setInterval(function () {
          g++;
          $('.servicecol').eq(g).addClass('lll');
        }, 500)
      }
    }
    // else{
    //   $(d).removeClass('lll');
    // }

  })

  var $apyear = $('#appointment-year');
  var $apmonth = $('#appointment-month');
  var $apdate = $('#appointment-data');

  for (var i = 2017; i < 2040; i++) {
    var $optionyear = $('<option></option>').html(i).val(i);
    $optionyear.appendTo($apyear);
  }
  for (var i = 1; i < 13; i++) {
    var $optionmonth = $('<option></option>').html(i).val(i);
    $optionmonth.appendTo($apmonth);
    switch (i) {
      case 1, 3, 5, 7, 8, 10, 12: {
        $apdate.empty();
        for (var m = 1; m < 32; m++) {
          var $optiondata = $('<option></option>').html(m).val(m);
          $optiondata.appendTo($apdate);
        }
      }
        ;
        break;
      case 4, 6, 9, 11: {
        $apdate.empty();
        for (var m = 1; m < 31; m++) {
          var $optiondata = $('<option></option>').html(m).val(m);
          $optiondata.appendTo($apdate);
        }
      }
        ;
        break;
      case 2: {
        $apdate.empty();
        for (var m = 1; m < 29; m++) {
          var $optiondata = $('<option></option>').html(m).val(m);
          $optiondata.appendTo($apdate);
        }
      }
        ;
        break;
    }
  }
})
// 头部向下滑动变换和service页面
$(document).scroll(function () {
  $(document).scrollTop() >= $('#header-small').height() / 2 ? $('#header-small').addClass('scoll') : $('#header-small').removeClass('scoll');
  $('.servicecol').each(function (c, d) {
    var g = 0;
    var oo = $('.servicecol').eq(g).offset().top - $(document).eq(g).scrollTop() - $(window).height();
    var pp = $('.servicecol').eq(g).height() + $(window).height();
    if (oo > 0 || oo < -pp) {
      // $('.servicecol').eq(c).removeClass('lll')
    }
    else {
      $('.servicecol').eq(g).addClass('lll');
      if ($('.servicecol').eq(0).hasClass('lll')) {
        setInterval(function () {
          g++;
          $('.servicecol').eq(g).addClass('lll');
        }, 500)
      }
    }
    // else{
    //   $(d).removeClass('lll');
    // }
  })
  $('.bigimg').each(function (c, d) {
    var ii = $('.bigimg').eq(c).offset().top <= $(document).scrollTop() + $(window).height();
    if (ii) {
      $('.bigimg').eq(c).addClass('jjj')
    }
  })

  // function lll() {
  //   for(var m=0;m<$('.historylist').length;m++) {
  //     var kk=0;
  //     var uu=0;
  //      kk=$('.historylist').eq(m).offset().top-$(document).eq(m).scrollTop()-$(window).height();
  //      uu=$('.historylist').eq(m).height()+$(window).height();
  //     if(kk>0 || kk<-uu){
  //     }
  //     else {
  //       $('.historylist').eq(m).addClass('ppp');
  //     }
  //   }
  // }

  // about页面的history
  $('.historylist').each(function (g, h) {
    var yy = ($('.historylist').eq(g).offset().top - 150) <= $(document).scrollTop() + $(window).height();
    if (yy) {
      $('.historylist').eq(g).addClass('ppp');
    }
  })
})

//自动访问
function autoplay() {
  play = setInterval(function () {
    index == $('#bannerimg>li').length - 1 ? index = 0 : index++;
    show(index)
  }, 6000)
}

// showbanner
function show(a) {
  index = a;
  var alpha = 0;
  var $Oimgli = $('#bannerimg>li');
  var $Ocharp = $('#numchar>p');

  $Oimgli.each(function (a, value) {
    $Oimgli.eq(a).removeClass();
    $Oimgli.eq(index).addClass('current');
  })

  $Ocharp.each(function (a, value) {
    $Ocharp.eq(a).removeClass();
    $Ocharp.eq(index).addClass('default');
  })
}
