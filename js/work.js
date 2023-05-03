//作品动效
const block = document.querySelectorAll('.cd-timeline-content');
block.forEach(i => {
    i.addEventListener('mouseenter', function (e) {
        i.querySelector('img').style.opacity = "1";
    });
});

block.forEach(i => {
    i.addEventListener('mouseleave', function (e) {
        i.querySelector('img').style.opacity = "0";
    });
});