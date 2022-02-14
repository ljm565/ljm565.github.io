function moveNext(){
    var unit = 0;
    const l = document.querySelector('.slides').style.left;
    const n = document.querySelectorAll('.slides li').length - 1;
    if (window.innerWidth < 800){
        unit = 300;
    } else{
        unit = 700;
    }
    document.querySelector('.slides').style.left = parseInt(l) - unit + 'px';
    if (l === -unit*n + 'px'){
        document.querySelector('.slides').style.left = 0;
    }
}

function movePrev(){
    var unit = 0;
    const l = document.querySelector('.slides').style.left;
    const n = document.querySelectorAll('.slides li').length - 1;
    if (window.innerWidth < 800){
        unit = 300;
    } else{
        unit = 700;
    }
    document.querySelector('.slides').style.left = parseInt(l) + unit + 'px';
    if (l === 0 + 'px'){
        document.querySelector('.slides').style.left = -unit*n + 'px';
    }
}

function darkMode(self){
    if (self.value === 'dark'){
        self.value = 'light';
        document.getElementById('modeState').innerHTML = '라이트 모드로 보기';
        document.getElementById('menuImg').src = 'init/index_img/menu_white.png';
        $('body').css('color', 'white');
        $('body').css('background-color', 'rgb(50, 50, 50)');
        $('#mainHead h1').css('color', 'rgb(200, 200, 200)');
        $('.subHead').css('color', 'rgb(200, 200, 200)');
        $('#mainHead h1').css('background-color', 'rgb(50, 50, 50)');
        $('.controller span').css('color', 'white');
        $('#menuRelated .menu').css('background-color', 'rgb(22, 22, 22)');
        $('a').css('color', 'white');
        $('.highlight').css('color', 'rgb(255, 153, 0)');
        hoveringOn(self);
    } else{
        self.value = 'dark'
        document.getElementById('modeState').innerHTML = '다크 모드로 보기';
        document.getElementById('menuImg').src = 'init/index_img/menu_black.png';
        $('body').css('color', 'black');
        $('body').css('background-color', 'white');
        $('#mainHead h1').css('color', 'rgb(82, 82, 82)');
        $('.subHead').css('color', 'rgb(82, 82, 82)');
        $('#mainHead h1').css('background-color', 'white');
        $('.controller span').css('color', 'black');
        $('#menuRelated .menu').css('background-color', 'rgb(233, 233, 233)');
        $('a').css('color', 'black');
        $('.highlight').css('color', 'rgb(0, 3, 206)');
        hoveringOn(self);
    }
}

function hoveringOn(self){
    if (self.value === 'dark'){
        document.getElementById('modeImg').src = 'init/index_img/moon_on.png';
        $(self).css('background-color', 'rgb(80, 80, 80)');
        $(self).css('color', 'white');
    } else{
        document.getElementById('modeImg').src = 'init/index_img/sun_on.png';
        $(self).css('background-color', 'rgb(224, 224, 224)');
        $(self).css('color', 'black');
    }
}

function hoveringOff(self){
    if (self.value === 'dark'){
        document.getElementById('modeImg').src = 'init/index_img/moon_off.png';
        $(self).css('background-color', 'rgb(224, 224, 224)');
        $(self).css('color', 'black');
    } else{
        document.getElementById('modeImg').src = 'init/index_img/sun_off.png';
        $(self).css('background-color', 'rgb(80, 80, 80)');
        $(self).css('color', 'white');
    }
}

function openMenu(self){
    // $(self).fadeOut(100);
    $('#menuRelated .menu').animate({
        'left': 0
    }, 300);
    $('#container').css('opacity', 0.5);
}

function reload(){
    // $('#menuRelated .menuButton img').fadeIn(500);
    $('#menuRelated .menu').animate({
        // left: '-20%'
        left: '-19rem'
    }, 300);
    $('#container').css('opacity', 1);
}

function colorOn(self){
    if ($('#modeButton button').val() === 'dark'){
        $(self).css('color', 'rgb(0, 3, 206)');
    } else{
        $(self).css('color', 'rgb(255, 153, 0)'); 
    } 
    $(self).css('font-weight', 900);
}

function colorOff(self){
    if ($('#modeButton button').val() === 'dark'){
        $(self).css('color', 'black');
    } else{
        $(self).css('color', 'white');
    }
    $(self).css('font-weight', 'initial');
}

function fetchPage(file, selector){
    fetch(file).then(function(response){
      response.text().then(function(text){
        document.querySelector(selector).innerHTML = text;
        reload();
        headHighlightColorChanger();
      })
    });
  }

function pjaxPage(url){
    $.pjax({
        url: url,
        fragment: 'article', // 위 주소를 받아와서 추출할 DOM
        container: 'article' // 위에서 추출한 DOM 내용을 넣을 대상
    }).then(function(){
        headHighlightColorChanger();
    });
    reload();
    document.querySelector('#container').scrollTo(0, 0);
}


function headHighlightColorChanger(){
    $('a').css('font-weight', 'initial');
    if ($('#modeButton button').val() === 'dark'){
        $('#mainHead h1').css('color', 'rgb(82, 82, 82)');
        $('.subHead').css('color', 'rgb(82, 82, 82)');
        $('#mainHead h1').css('background-color', 'white');
        $('.highlight').css('color', 'rgb(0, 3, 206)');
        $('.prev').css('color', 'black');
        $('.next').css('color', 'black');
        $('a').css('color', 'black');
    } else{
        $('#mainHead h1').css('color', 'rgb(200, 200, 200)');
        $('.subHead').css('color', 'rgb(200, 200, 200)');
        $('#mainHead h1').css('background-color', 'rgb(50, 50, 50)');
        $('.highlight').css('color', 'rgb(255, 153, 0)');
        $('.prev').css('color', 'white');
        $('.next').css('color', 'white');
        $('a').css('color', 'white');
    }
}

function pushFunc(){
    fetchPage('init/profile.html', '.profile');
    fetchPage('init/menu.html', '.tree');
    window.onpopstate = function(event){
        $('iframe').remove();
        reload();
        document.querySelector('#container').scrollTo(0, 0);
    };
}

function detectSize(){
    $(window).resize(function() {
        document.querySelector('.slides').style.left = 0;
    });
}



function detectScroll(){
    var didScroll; 
    var lastScrollTop = 0;
    var delta = 200;       

    $('#container').scroll(function(){ 
        didScroll = true; 
    });

    setInterval(function() { 
        if (didScroll) { 
            hasScrolled(); 
            didScroll = false; 
        } 
    }, 250); 

    function hasScrolled() {
        var st = $('#container').scrollTop();

        if(Math.abs(lastScrollTop - st) <= delta){
            return;
        }

        if (st > lastScrollTop){ 
            $('#menuRelated .menuButton img').fadeOut(150); 
            $('#mainHead h1').fadeOut(150); 
        } else{
            $('#menuRelated .menuButton img').fadeIn(150); 
            $('#mainHead h1').fadeIn(150); 
        }
        lastScrollTop = st;
    }
}


function initMathJax() {
    MathJax = null;
    if(typeof(MathJax) !== 'undefined') {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }
}