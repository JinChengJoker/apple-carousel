let $carousel = $('.carousel')
let $slides = $('.slides')
let $imgs = $('.slides > img')
let $btns = $('.btns > li')
let n = 0

for(let i = 0; i < $imgs.length; i++) {
    $btns.eq(i).on('click', function(e) {
        n = i
        $(e.currentTarget).addClass('active').siblings().removeClass('active')
        let px = i * -920 + 'px'
        $slides.css({
            transform: 'translateX(' + px + ')'
        })
    })
}

let timer = setInterval(function() {
    n++
    if(n === $imgs.length) {
        n = 0
    }
    $btns.eq(n).click()
}, 3000)

$carousel.on('mouseenter', function() {
    clearInterval(timer)
})
$carousel.on('mouseleave', function() {
    timer = setInterval(function() {
        n++
        if(n === $imgs.length) {
            n = 0
        }
        $btns.eq(n).click()
    }, 3000)
})