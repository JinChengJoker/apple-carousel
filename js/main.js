let $slides = $('.slides')
let $imgs = $('.slides > img')
let $btns = $('.btns > span')
let n = 0

for(let i = 0; i < $imgs.length; i++) {
    $btns.eq(i).on('click', function() {
        let px = i * -920 + 'px'
        $slides.css({
            transform: 'translateX(' + px + ')'
        })
    })
}

setInterval(function() {
    $btns.eq(n).click()
    n++
    if(n === $imgs.length) {
        n = 0
    }
}, 3000)