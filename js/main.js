let $imgs = $('.slides > img')
let $btns = $('.btns > li')
let n = 0
let timer = carouselInterval()

for(let i = 0; i < $imgs.length; i++) {
    $btns.eq(i).on('click', function(e) {
        n = i
        let px = i * -920 + 'px'
        $(e.currentTarget).addClass('active').siblings().removeClass('active')
        $('.slides').css({
            transform: 'translateX(' + px + ')'
        })
    })
}

$('.carousel').on('mouseenter', function() {
    clearInterval(timer)
})
$('.carousel').on('mouseleave', function() {
    timer = carouselInterval()
})

function carouselInterval() {
    return setInterval(function() {
        n++
        if(n === $imgs.length) {
            n = 0
        }
        $btns.eq(n).click()
    }, 3000)
}