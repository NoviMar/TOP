// 3D Scroll
let zSpacing = -1000,
    lastPos = zSpacing / 5,
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVals = []

// Вычисляем максимальную позицию прокрутки
const maxScroll = (frames.length - 1) * Math.abs(zSpacing) / 5.5;

window.onscroll = function() {
    let top = document.documentElement.scrollTop;
    
    // Если достигнут последний фрейм, останавливаем прокрутку
    if (top > maxScroll) {
        window.scrollTo(0, maxScroll);
        return;
    }
    
    let delta = lastPos - top;
    lastPos = top;

    frames.forEach(function(n, i) {
        zVals.push((i * zSpacing) + zSpacing);
        zVals[i] += delta * -5.5;
        let frame = frames[i],
            transform = `translateZ(${zVals[i]}px)`,
            opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
    });
}

window.scrollTo(0, 1);

// Audio
let soundButton = document.querySelector('.soundbutton'),
    audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
    soundButton.classList.toggle('paused')
    audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
    soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
    audio.pause()
}

// Добавляем обработчик клика для кнопки
document.querySelector('.hogwarts-button').addEventListener('click', function(e) {
    console.log('Button clicked');
    e.stopPropagation();
});
