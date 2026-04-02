// Article navigation lookup table
// Key: filename, Value: {group: ordered array of filenames in same subcategory, title: article title}
const ARTICLE_GROUPS = (function() {
    function makeGroup(entries) {
        var files = entries.map(function(e) { return e[0]; });
        var result = {};
        entries.forEach(function(e) {
            result[e[0]] = { group: files, title: e[1] };
        });
        return result;
    }
    var groups = [
        // WEB
        makeGroup([
            ['mathjax.html', 'SPA의 MathJax 적용'],
            ['webImgHosting.html', '이미지 불러오기']
        ]),
        // Manifold Learning
        makeGroup([
            ['ManifoldLearning1.html', 'Autoencoder (오토인코더)'],
            ['ManifoldLearning2.html', 't-SNE, UMAP'],
            ['ManifoldLearning3.html', 'Autoencoder 구현 및 MNIST']
        ]),
        // VAE
        makeGroup([
            ['VAE1.html', 'Variational Autoencoder (VAE)'],
            ['VAE2.html', 'VAE 구현 및 MNIST 생성']
        ]),
        // GAN
        makeGroup([
            ['GAN1.html', 'Generative Adversarial Network'],
            ['GAN2.html', 'GAN 구현 및 MNIST 생성']
        ]),
        // DCGAN
        makeGroup([
            ['DCGAN1.html', 'Deep Convolutional GAN'],
            ['DCGAN2.html', 'DCGAN 구현 및 CelebA 생성']
        ]),
        // CGAN
        makeGroup([
            ['CGAN1.html', 'Conditional GAN (CGAN)'],
            ['CGAN2.html', 'MNIST와 CGAN으로 데이터 생성']
        ]),
        // CNN & ResNet
        makeGroup([
            ['CNN1.html', 'Convolutional Neural Network'],
            ['CNN2.html', 'CNN을 이용한 MNIST 분류'],
            ['CNN3.html', 'Residual Network (ResNet)'],
            ['CNN4.html', 'ResNet 구현 및 CIFAR-10 분류']
        ]),
        // RNN
        makeGroup([
            ['RNN1.html', 'RNN, LSTM, GRU'],
            ['RNN2.html', 'Seq2Seq 모델과 Attention'],
            ['RNN3.html', 'LSTM으로 IMDb 감성 분류'],
            ['RNN4.html', 'Seq2Seq 기계 번역']
        ]),
        // Image Captioning
        makeGroup([
            ['img2txt1.html', 'Image Captioning'],
            ['img2txt2.html', 'ResNet/LSTM Flickr8k 캡션']
        ]),
        // Mortality Prediction
        makeGroup([
            ['mortality-prediction1.html', 'GRU로 Mortality Prediction']
        ]),
        // Chest X-ray
        makeGroup([
            ['chest-xray-resnet1.html', '흉부 X-ray ResNet 환자 예측']
        ]),
        // Transformer
        makeGroup([
            ['transformer1.html', 'Transformer'],
            ['transformer2.html', 'Transformer WMT/IWSLT 번역'],
            ['transformer3.html', 'Transformer 한국어 챗봇']
        ]),
        // BERT
        makeGroup([
            ['bert1.html', 'BERT'],
            ['bert2.html', 'WikiSplit BERT Pre-training'],
            ['bert3.html', 'BERT Fine-tuning 감성 분류']
        ]),
        // DialogBERT
        makeGroup([
            ['dialogbert1.html', 'DialogBERT'],
            ['dialogbert2.html', 'DailyDialog DialogBERT 구현']
        ]),
        // GPT
        makeGroup([
            ['gpt1.html', 'GPT-1, GPT-2, GPT-3'],
            ['gpt2.html', 'GPT-2 Multi-turn 챗봇']
        ]),
        // GNN/GCN
        makeGroup([
            ['gnn1.html', 'GNN, Graph Convolutional Network'],
            ['gnn2.html', 'Cora 데이터와 GCN 노드 분류'],
            ['gnn3.html', 'GCN COLLAB 그래프 분류']
        ]),
        // DQN
        makeGroup([
            ['dqn1.html', 'Deep Q Network (DQN)'],
            ['dqn2.html', 'DQN Cart Pole 세우기']
        ]),
        // CLIP
        makeGroup([
            ['clip1.html', 'CLIP'],
            ['clip2.html', 'Text-CLIP retrieval 모델']
        ]),
        // BART
        makeGroup([
            ['bart2.html', 'BART 한국어 챗봇 모델']
        ]),
        // OFA
        makeGroup([
            ['ofa1.html', 'One For All (OFA)']
        ]),
        // BEIT
        makeGroup([
            ['beit1.html', 'BEIT']
        ]),
        // ViT
        makeGroup([
            ['vit1.html', 'Vision Transformer (ViT)']
        ]),
        // CoOp
        makeGroup([
            ['coop1.html', 'Context Optimization (CoOp)'],
            ['coop2.html', 'CoCoOp'],
            ['coop3.html', 'KgCoOp']
        ]),
        // Deep Model Fusion
        makeGroup([
            ['modelSoups1.html', 'Model Soup'],
            ['ties1.html', 'TrIm, Elect Sign & Merge']
        ]),
        // Spain & Paris
        makeGroup([
            ['spain1.html', '스페인 여행 준비 및 팁'],
            ['spain2.html', '파리 여행 (1)'],
            ['spain3.html', '파리 여행 (2)'],
            ['spain4.html', '파리 여행 (3)'],
            ['spain5.html', '바르셀로나 여행 (1)'],
            ['spain6.html', '바르셀로나 여행 (2)'],
            ['spain7.html', '바르셀로나 여행 (3)'],
            ['spain8.html', '스페인 론다 여행'],
            ['spain9.html', '스페인 세비야 여행 (1)'],
            ['spain10.html', '스페인 세비야 여행 (2)'],
            ['spain11.html', '스페인 세비야 여행 (3)'],
            ['spain12.html', '스페인 마드리드 여행'],
            ['spain13.html', '스페인 세고비아 여행'],
            ['spain14.html', '스페인 톨레도 여행']
        ]),
        // Switzerland
        makeGroup([
            ['switzerland1.html', '스위스 여행 준비 (1)'],
            ['switzerland2.html', '스위스 여행 준비 (2)'],
            ['switzerland3.html', '스위스 제네바 여행 (1)'],
            ['switzerland4.html', '스위스 제네바 여행 (2)'],
            ['switzerland5.html', '스위스 로잔 여행'],
            ['switzerland6.html', '스위스 몽트뢰 여행'],
            ['switzerland7.html', '에모송, 팡우 여행'],
            ['switzerland8.html', '스위스 베른 여행'],
            ['switzerland9.html', '인터라켄 여행 (1)'],
            ['switzerland10.html', '인터라켄 여행 (2)'],
            ['switzerland11.html', '라우터브루넨 여행'],
            ['switzerland12.html', '그린델발트 여행'],
            ['switzerland13.html', '스위스 융프라우요흐'],
            ['switzerland14.html', '스위스 체르마트 여행'],
            ['switzerland15.html', '스위스 생모리츠 여행'],
            ['switzerland16.html', '스위스 취리히 여행'],
            ['switzerland17.html', '스위스 샤프하우젠 여행'],
            ['switzerland18.html', '바덴, 그뤼예르 여행']
        ]),
        // New Zealand
        makeGroup([
            ['newzealand1.html', '뉴질랜드 여행 준비'],
            ['newzealand2.html', '오클랜드 여행 (1)'],
            ['newzealand3.html', '오클랜드 여행 (2)'],
            ['newzealand4.html', '오클랜드 근교 여행 (3)'],
            ['newzealand5.html', '뉴질랜드 로토루아'],
            ['newzealand6.html', '뉴질랜드 타우포'],
            ['newzealand7.html', '통가리로 트레킹'],
            ['newzealand8.html', '뉴질랜드 웰링턴'],
            ['newzealand9.html', '카이코우라, 크라이스트처치'],
            ['newzealand10.html', '뉴질랜드 테카포'],
            ['newzealand11.html', '와이타키, 더니든'],
            ['newzealand12.html', '뉴질랜드 와나카'],
            ['newzealand13.html', '뉴질랜드 애로우타운'],
            ['newzealand14.html', '뉴질랜드 퀸스타운'],
            ['newzealand15.html', '루트번 트랙 (1)'],
            ['newzealand16.html', '루트번 트랙 (2)'],
            ['newzealand17.html', '루트번 트랙 (3)'],
            ['newzealand18.html', '뉴질랜드 마운트 쿡'],
            ['newzealand19.html', '뉴질랜드 블레넘'],
            ['newzealand20.html', '에그몬트 국립공원'],
            ['newzealand21.html', '와이토모, 코로만델 (1)'],
            ['newzealand22.html', '코로만델 반도 (2)'],
            ['newzealand23.html', '코로만델 반도 (3)']
        ]),
        // Eastern Europe Summer
        makeGroup([
            ['EEurope_summer1.html', '동유럽 여행 준비'],
            ['EEurope_summer2.html', '체스키 크룸로프'],
            ['EEurope_summer3.html', '슬로바키아 브라티슬라바'],
            ['EEurope_summer4.html', '슬로바키아 보이니체'],
            ['EEurope_summer5.html', '슬로바키아 플레소'],
            ['EEurope_summer6.html', '헝가리 부다페스트'],
            ['EEurope_summer7.html', '부다페스트 근교 센텐드레'],
            ['EEurope_summer8.html', '크로아티아 자그레브'],
            ['EEurope_summer9.html', '슬로베니아 블레드 (1)'],
            ['EEurope_summer10.html', '슬로베니아 블레드 (2)'],
            ['EEurope_summer11.html', '슬로베니아 블레드 (3)'],
            ['EEurope_summer12.html', '슬로베니아 류블랴나'],
            ['EEurope_summer13.html', '슬로베니아 피란'],
            ['EEurope_summer14.html', '크로아티아 라스토케'],
            ['EEurope_summer15.html', '플리트비체 국립공원'],
            ['EEurope_summer16.html', '크로아티아 자다르'],
            ['EEurope_summer17.html', '크르카 국립공원'],
            ['EEurope_summer18.html', '크로아티아 스플리트'],
            ['EEurope_summer19.html', '크로아티아 트로기르'],
            ['EEurope_summer20.html', '크로아티아 두브로브니크'],
            ['EEurope_summer21.html', '오스트리아 할슈타트'],
            ['EEurope_summer22.html', '러시아 모스크바']
        ]),
        // Eastern Europe Winter
        makeGroup([
            ['EEurope_winter1.html', '동유럽 여행 준비'],
            ['EEurope_winter2.html', '체코 프라하 여행 (1)'],
            ['EEurope_winter3.html', '체코 프라하 여행 (2)'],
            ['EEurope_winter4.html', '체스키 크룸로프'],
            ['EEurope_winter5.html', '오스트리아 잘츠부르크 (1)'],
            ['EEurope_winter6.html', '오스트리아 잘츠부르크 (2)'],
            ['EEurope_winter7.html', '오스트리아 할슈타트'],
            ['EEurope_winter8.html', '오스트리아 인스부르크'],
            ['EEurope_winter9.html', '독일 뮌헨'],
            ['EEurope_winter10.html', '독일 노이슈반슈타인 성'],
            ['EEurope_winter11.html', '오스트리아 빈(비엔나)'],
            ['EEurope_winter12.html', '헝가리 부다페스트'],
            ['EEurope_winter13.html', '크로아티아 자그레브'],
            ['EEurope_winter14.html', '크로아티아 두브로브니크']
        ]),
        // Iceland
        makeGroup([
            ['iceland1.html', '아이슬란드 여행 준비'],
            ['iceland2.html', '아이슬란드 레이캬비크'],
            ['iceland3.html', '아이슬란드 골든 서클 (1)'],
            ['iceland4.html', '아이슬란드 골든 서클 (2)'],
            ['iceland5.html', '레이캬달루르 트레킹'],
            ['iceland6.html', '하이포스, 갸우인'],
            ['iceland7.html', '란드만날라우가르 (1)'],
            ['iceland8.html', '란드만날라우가르 (2)'],
            ['iceland9.html', '셀야란즈포스'],
            ['iceland10.html', '베스트만 제도'],
            ['iceland11.html', '스코가포스'],
            ['iceland12.html', '아이슬란드 비크'],
            ['iceland13.html', '키르큐바이야르클라우스튀르'],
            ['iceland14.html', '스바르티포스 & 요쿨살론'],
            ['iceland15.html', '회픈, 듀피보구르'],
            ['iceland16.html', '동쪽 피오르드'],
            ['iceland17.html', '아이슬란드 헹기포스'],
            ['iceland18.html', '보르가르피요르드 에이스트리'],
            ['iceland19.html', '브루나비크 트레킹'],
            ['iceland20.html', '데티포스, 셀포스'],
            ['iceland21.html', '크라플라, 미바튼'],
            ['iceland22.html', '아쿠레이리, 후사비크'],
            ['iceland23.html', '아이슬란드 글라움베어'],
            ['iceland24.html', '아이슬란드 딘얀디'],
            ['iceland25.html', '아이슬란드 서쪽 피요르드'],
            ['iceland26.html', '스나이펠스네스 반도 (1)'],
            ['iceland27.html', '스나이펠스네스 반도 (2)'],
            ['iceland28.html', '아이슬란드 서쪽'],
            ['iceland29.html', '아이슬란드 옴놈 초콜릿'],
            ['iceland30.html', '핀란드 헬싱키'],
            ['iceland31.html', '아이슬란드 폭포 소개']
        ]),
        // Australia Summer
        makeGroup([
            ['Australia_summer1.html', '시드니 여행'],
            ['Australia_summer2.html', '시드니 맛집']
        ]),
        // Australia Fall
        makeGroup([
            ['Australia_fall1.html', '시드니 여행 준비'],
            ['Australia_fall2.html', '시드니 여행 (1)'],
            ['Australia_fall3.html', '시드니 여행 (2)'],
            ['Australia_fall4.html', '시드니 블루 마운틴 (3)'],
            ['Australia_fall5.html', '시드니 맨리 (4)']
        ]),
        // Italy
        makeGroup([
            ['italy1.html', '이탈리아 돌로미티 준비'],
            ['italy2.html', '이탈리아 트레비소'],
            ['italy3.html', '돌로미티 4개 호수'],
            ['italy4.html', '팔로리아 크리스탈로 트레킹'],
            ['italy5.html', '돌로미티 트레 치메 트레킹'],
            ['italy6.html', '사쏘룽고 트레킹'],
            ['italy7.html', '세체다, 알페 디 시우시'],
            ['italy8.html', '카레짜 호수'],
            ['italy9.html', '이탈리아 페스키에라'],
            ['italy10.html', '시르미오네, 가르다 마을'],
            ['italy11.html', '이탈리아 기념품 & 캄니크']
        ]),
        // Austria
        makeGroup([
            ['austria1.html', '오스트리아 여행 준비'],
            ['austria2.html', '오스트리아 빈'],
            ['austria3.html', '빈의 숨은 맛집'],
            ['austria4.html', '잘츠부르크 여행 (1)'],
            ['austria5.html', '잘츠부르크 여행 (2)'],
            ['austria6.html', '잘츠카머구트 여행 (1)'],
            ['austria7.html', '잘츠카머구트 여행 (2)'],
            ['austria8.html', '잘츠카머구트 여행 (3)'],
            ['austria9.html', '할슈타트 호수 보트'],
            ['austria10.html', '멜크 수도원, 쇤부른 궁전']
        ]),
        // Japan Sapporo 2024
        makeGroup([
            ['japan_sapporo_2024_1.html', '삿포로 2024']
        ]),
        // Japan Sapporo 2025
        makeGroup([
            ['japan_sapporo_2025_1.html', '삿포로 2025 (1)'],
            ['japan_sapporo_2025_2.html', '홋카이도 비에이 여행'],
            ['japan_sapporo_2025_3.html', '오타루 골목골목 디저트 투어']
        ]),
        // Kazakhstan
        makeGroup([
            ['kazakhstan1.html', '카자흐스탄 여행 준비'],
            ['kazakhstan2.html', '알마 아라산 라돈 온천 (1)'],
            ['kazakhstan3.html', '카인디, 콜사이, 챠른 (2)'],
            ['kazakhstan4.html', '빅 알마티 등산 (3)'],
            ['kazakhstan5.html', '알마티 시내 (4)']
        ]),
        // Korea
        makeGroup([
            ['korea1.html', '남한산성 출사'],
            ['korea2.html', '경복궁, 광화문 출사'],
            ['korea3.html', '성수대교 출사'],
            ['korea4.html', '서울 낙산공원 출사'],
            ['korea5.html', '대전 보문산 출사'],
            ['korea6.html', '남산 해방촌 출사'],
            ['korea7.html', '응봉산 전망대 출사'],
            ['korea8.html', '서울 하늘공원 출사'],
            ['korea9.html', '서울 올림픽공원 출사'],
            ['korea10.html', '대전 식장산 출사']
        ])
    ];

    var result = {};
    groups.forEach(function(g) {
        Object.assign(result, g);
    });
    return result;
})();

function injectPagination() {
    var filename = window.location.pathname.split('/').pop() || '';
    var entry = ARTICLE_GROUPS[filename];
    if (!entry) return;

    var group = entry.group;
    var idx = group.indexOf(filename);

    var html = '<div class="pageTurnerStrip">';
    [-2, -1, 0, 1, 2].forEach(function(offset) {
        var i = idx + offset;
        if (i < 0 || i >= group.length) return;
        var f = group[i];
        var e = ARTICLE_GROUPS[f];
        var label = e.title.length > 16 ? e.title.substring(0, 16) + '…' : e.title;
        if (offset === 0) {
            html += '<span class="ptsItem ptsCurrent">' + label + '</span>';
        } else {
            var pre = offset < 0 ? '‹ ' : '';
            var suf = offset > 0 ? ' ›' : '';
            html += '<span class="ptsItem"><a onclick="pjaxPage(\'contents/' + f + '\',\'' + f + '\');"'
                + ' onmouseover="colorOn(this);" onmouseout="colorOff(this);">'
                + pre + label + suf + '</a></span>';
        }
    });
    html += '</div>';

    var pt = document.querySelector('.pageTurner');
    if (pt) pt.innerHTML = html;
}

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
        document.getElementById('menuImg').src = '/init/index_img/menu_white.png';
        document.getElementById('menuExtension').src = '/init/index_img/extension_white.png';
        document.getElementById('menuCompression').src = '/init/index_img/compression_white.png';
        $('body').css('color', 'white');
        $('body').css('background-color', 'rgb(50, 50, 50)');
        $('#mainHead h1').css('color', 'rgb(200, 200, 200)');
        $('.subHead').css('color', 'rgb(200, 200, 200)');
        $('#mainHead h1').css('background-color', 'rgb(50, 50, 50)');
        $('.controller span').css('color', 'white');
        $('#menuRelated .menu').css('background-color', 'rgb(22, 22, 22)');
        $('#menuRelated .bigMenu').css('background-color', 'rgb(22, 22, 22)');
        $('a').css('color', 'white');
        $('.highlight').css('color', 'rgb(159, 204, 255)');
        $('#scrollButtons button').css('background-color', 'rgb(80, 80, 80)');
        $('#scrollButtons button').css('color', 'white');
        hoveringOn(self);
        // $('#modeButton').on('touchstart', function(){
        //     // hoveringOff(self);
        //     alert("off")
        // });
    } else{
        self.value = 'dark'
        document.getElementById('modeState').innerHTML = '다크 모드로 보기';
        document.getElementById('menuImg').src = '/init/index_img/menu_black.png';
        document.getElementById('menuExtension').src = '/init/index_img/extension_black.png';
        document.getElementById('menuCompression').src = '/init/index_img/compression_black.png';
        $('body').css('color', 'black');
        $('body').css('background-color', 'white');
        $('#mainHead h1').css('color', 'rgb(82, 82, 82)');
        $('.subHead').css('color', 'rgb(82, 82, 82)');
        $('#mainHead h1').css('background-color', 'white');
        $('.controller span').css('color', 'black');
        $('#menuRelated .menu').css('background-color', 'rgb(233, 233, 233)');
        $('#menuRelated .bigMenu').css('background-color', 'rgb(233, 233, 233)');
        $('a').css('color', 'black');
        $('.highlight').css('color', 'rgb(0, 3, 206)');
        $('#scrollButtons button').css('background-color', 'rgb(224, 224, 224)');
        $('#scrollButtons button').css('color', 'black');
        hoveringOn(self);
        // $('#modeButton').on('touchstart', function(){
        //     alert("off");
        // });
    }
}

function hoveringOn(self){
    if (self.value === 'dark'){
        document.getElementById('modeImg').src = '/init/index_img/moon_on.png';
        $(self).css('background-color', 'rgb(80, 80, 80)');
        $(self).css('color', 'white');
    } else{
        document.getElementById('modeImg').src = '/init/index_img/sun_on.png';
        $(self).css('background-color', 'rgb(224, 224, 224)');
        $(self).css('color', 'black');
    }
}

function hoveringOff(self){
    if (self.value === 'dark'){
        document.getElementById('modeImg').src = '/init/index_img/moon_off.png';
        $(self).css('background-color', 'rgb(224, 224, 224)');
        $(self).css('color', 'black');
    } else{
        document.getElementById('modeImg').src = '/init/index_img/sun_off.png';
        $(self).css('background-color', 'rgb(80, 80, 80)');
        $(self).css('color', 'white');
    }
}

function openMenu(self){
    // $(self).fadeOut(100);
    if (window.innerWidth < 750){
        compressMenu(self);
    }
    $("#menuRelated").val('menuOpening');
    $('#menuRelated .menu').animate({
        'left': 0
    }, 300);
    $('#menuRelated .bigMenu').animate({
        'left': 0
    }, 300);
    $('#container').css('opacity', 0.5);

    // // for preventing contents scroll
    // $('body').addClass('preventScroll');
    // $('#container').on('scroll touchmove mousewheel', function(event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     return false;
    // });
}

function extendMenu(self){
    if (window.innerWidth < 750){
        alert("화면이 너무 작습니다..");
    } else{
        $('#menuRelated .bigMenu').css('display', 'block');
        $('#menuRelated .menu').css('display', 'none');
    }
}

function compressMenu(self){
    $('#menuRelated .menu').css('display', 'block');
    $('#menuRelated .bigMenu').css('display', 'none');
}

function reload(){
    $("#menuRelated").val('menuClosed');
    $('#menuRelated .menu').animate({
        left: '-19rem'
    }, 300);
    $('#menuRelated .bigMenu').animate({
        left: '-38rem'
    }, 300);
    $('#container').css('opacity', 1);
    $('#mainHead h1').fadeIn(150); 
    $('#menuRelated .menuButton img').fadeIn(150); 
}

function colorOn(self){
    if ($('#modeButton button').val() === 'dark'){
        $(self).css('color', 'rgb(0, 3, 206)');
    } else{
        $(self).css('color', 'rgb(159, 204, 255)');
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

  
function injectLicenseFooter() {
    var filename = window.location.pathname.split('/').pop() || '';
    if (!filename || filename === '' || filename === 'index.html' || filename.startsWith('portfolio')) return;
    if (document.querySelector('.licenseFooter')) return;

    var footer = document.createElement('div');
    footer.className = 'licenseFooter';
    footer.innerHTML =
        '<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">'
        + '<img alt="CC BY-NC-SA 4.0" style="border-width:0;height:31px;" '
        + 'src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"></a>'
        + '<p>이 저작물은 <strong>여행 초짜</strong>가 작성하였으며 '
        + '<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank"'
        + ' onmouseover="colorOn(this);" onmouseout="colorOff(this);">'
        + 'Creative Commons BY-NC-SA 4.0</a> 라이선스를 따릅니다.</p>';

    var anchor = document.querySelector('#disqus_thread') || document.querySelector('.pageTurner');
    if (anchor) anchor.after(footer);
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function scrollToBottom() {
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
}

function injectScrollButtons() {
    if (document.getElementById('scrollButtons')) return;
    var div = document.createElement('div');
    div.id = 'scrollButtons';
    div.innerHTML =
        '<button type="button" onclick="scrollToTop()" title="맨 위로">▲</button>'
        + '<button type="button" onclick="scrollToBottom()" title="맨 아래로">▼</button>';
    document.body.appendChild(div);
}

function pjaxPage(url, url2=false){
    $.ajax({
        url: url,
        type: 'HEAD',
        error: function()
        {
            if (url2 === false){
                alert('게시물 준비중입니다.');
            } else{
                $.pjax({
                    url: url2,
                    fragment: 'article', // 위 주소를 받아와서 추출할 DOM
                    container: 'article' // 위에서 추출한 DOM 내용을 넣을 대상
                }).then(function(){
                    headHighlightColorChanger();
                    injectPagination();
                    injectLicenseFooter();
                });
                reload();
            }
        },
        success: function()
        {
            $.pjax({
                url: url,
                fragment: 'article', // 위 주소를 받아와서 추출할 DOM
                container: 'article' // 위에서 추출한 DOM 내용을 넣을 대상
            }).then(function(){
                headHighlightColorChanger();
                injectPagination();
                injectLicenseFooter();
            });
            reload();
        }
    });
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
        $('.highlight').css('color', 'rgb(159, 204, 255)');
        $('.prev').css('color', 'white');
        $('.next').css('color', 'white');
        $('a').css('color', 'white');
    }
}

function pushFunc(){
    fetchPage('/init/profile.html', '.menu .profile');
    fetchPage('/init/menu.html', '.menu .tree');
    fetchPage('/init/profile.html', '.bigMenu .profile');
    fetchPage('/init/bigMenu.html', '.bigMenu .tree');
    window.onpopstate = function(event){
        $('iframe').not('iframe.map').remove(); // for disqus
        reload();
    };
    document.addEventListener('DOMContentLoaded', function(){
        injectScrollButtons();
        injectPagination();
        injectLicenseFooter();
    });
}

function detectSize(){
    $(window).resize(function() {
        document.querySelector('.slides').style.left = 0;
    });
}



function detectScroll(){
    var didScroll; 
    var lastScrollTop = 0;
    var delta = 10;  
    
    $(window).scroll(function(){ 
        didScroll = true;
        if ($("#menuRelated"). val() === 'menuOpening') {
            reload();
        }
    });

    setInterval(function() { 
        if ($(window).scrollTop() <= 0) {
            $('#menuRelated .menuButton img').fadeIn(150); 
            $('#mainHead h1').fadeIn(150);
            didScroll = false;
        } 
        else if ($(window).scrollTop() + $(window).innerHeight() + 500 > $('body').prop('scrollHeight')) {
            lastScrollTop = $(window).scrollTop();
            $('#menuRelated .menuButton img').fadeIn(150); 
            $('#mainHead h1').fadeIn(150);
            if ($(window).scrollTop() < lastScrollTop){ 
                $('#menuRelated .menuButton img').fadeIn(150); 
                $('#mainHead h1').fadeIn(150); 
            }
            didScroll = false;
        } 
        else if (didScroll) { 
            hasScrolled(); 
            didScroll = false; 
        }
    }, 250); 

    function hasScrolled() {
        var st = $(window).scrollTop();

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

function lineMaking(id, line_num) {
    str = '';
    for(i=1; i<=line_num; i++) {
        str += i;
        str += '\n';
    }
    document.getElementById(id).innerHTML = str;
}


function convertLink() {
    var obj = document.getElementById("googleDriveUrl")
    var name = obj.value;
    var st = 'file/d/';
    var tr = '/view';
    var prefix = 'https://lh3.google.com/u/0/d/';

    if (name === '') {
        alert('링크를 입력해주세요.');
    } else if (name.indexOf(st) === -1 && name.indexOf(tr) === -1) {
        alert('링크가 올바르지 않습니다.');
    } else {
        name = prefix + name.substring(name.indexOf(st)+st.length, name.indexOf(tr));
        window.open(name);
        obj.value = null;
    }
}