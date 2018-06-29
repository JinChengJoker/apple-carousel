let $slides = $('.slides')
let $imgs = $('.slides > img')
let $btns = $('.btns > button')

for(let i = 0; i < $imgs.length; i++) {
    $btns.eq(i).on('click', function() {
        let px = i * -920 + 'px'
        $slides.css({
            transform: 'translateX(' + px + ')'
        })
    })
}