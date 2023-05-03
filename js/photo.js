//相册动效
const container3 = document.querySelector('body');
const cengs = document.querySelectorAll('.ceng');
const title = document.querySelector('.title');
const speed1 = -4000;
const speed2 = 2000;
const speed3 = 800;

container3.addEventListener('mouseenter', function (e) {
    this.x = e.clientX;
    this.y = e.clientY;
});
container3.addEventListener('mousemove', function (e) {
    this._x = e.clientX;
    this._y = e.clientY + 200;

    let disX = this._x - window.screen.availWidth/2;
    let disY = this._y - window.screen.availHeight/2 ;
    
    cengs.forEach(item => {
        item.style.transition = 'all 0.1s';
    });

    const rotaten = Math.atan2(disY,disX)*0.2;

    const translateX_1 = 100 * disX / speed1;
    const translateY_1 = 100 * disY / speed1;
    cengs[0].style.transform = `translate3d(${translateX_1}px,${translateY_1}px,0px) rotateY(${disX*10/window.screen.availWidth}deg) rotateX(${-disY*10/window.screen.availHeight}deg)`;

    const translateX_2 = 100 * disX / speed2;
    const translateY_2 = 100 * disY / speed2;
    cengs[1].style.transform = `translate3d(${translateX_2}px,${translateY_2}px,50px) rotateY(${disX*10/window.screen.availWidth}deg) rotateX(${-disY*10/window.screen.availHeight}deg)`;

    const translateX_3 = 100 * disX / speed3;
    const translateY_3 = 100 * disY / speed3;
    cengs[2].style.transform = `translate3d(${translateX_3}px,${translateY_3}px,90px) rotateY(${disX*10/window.screen.availWidth}deg) rotateX(${-disY*10/window.screen.availHeight}deg)`;
})
container3.addEventListener('mouseleave', function () {
    cengs.forEach(item => {
        item.style.transition = 'all 0.5s';
    });

    cengs[0].style.transform = 'translate3d(0px, 0px,0px) rotate(0deg)';
    cengs[1].style.transform = 'translate3d(0px, 0px,50px) rotate(0deg)';
    cengs[2].style.transform = 'translate3d(0px, 0px,90px) rotate(0deg)';
});
//切换
let b = document.querySelector(".b")
let c = document.querySelector(".c")

let d = document.getElementsByClassName("d")

let lt = document.querySelector(".lt")
let rt = document.querySelector(".rt")

let text = document.querySelector(".serial")

b.style.backgroundImage = "url('images/photos/1.jpg')"

let time
let index = 0
let sj = 0

let a = function () {
    for (let i = 0; i < d.length; i++) {
        if (index <= 1) {
            if (i > 3) {
                d[i].className = "d nd"
            } else {
                d[i].className = "d"
            }
        } else if (index >= d.length - 2) {
            if (i < d.length - 4) {
                d[i].className = "d nd"
            } else {
                d[i].className = "d"
            }
        } else {
            if (i < index - 1 || i > index + 2) {
                d[i].className = "d nd"
            } else {
                d[i].className = "d"
            }
        }

        d[i].style.backgroundImage = "url('images/photos/" + [i + 1] + ".jpg')"
        text.innerHTML = '0' + [index + 1]
        if (index <= 1) {
            sj = 0
        } else if (index >= d.length - 2) {
            sj = d.length - 4
        } else {
            sj = index - 1
        }
        c.style.left = [-200 * sj] + 'px'
    }
    d[index].className = "d dd"
    b.style.backgroundImage = "url('images/photos/" + [index + 1] + ".jpg')"
}
a()

function ts() {
    time = setInterval(function () {
        index++
        if (index == d.length) {
            index = 0
        }
        a()
    }, 3000)
}
lt.onclick = function () {
    index--
    if (index == -1) {
        index = d.length - 1
    }
    a()
    clearInterval(time)
    time = 0
    ts()
}
rt.onclick = function () {
    index++
    if (index == d.length) {
        index = 0
    }
    a()
    clearInterval(time)
    time = 0
    ts()
}
for (let i = 0; i < d.length; i++) {
    d[i].onclick = function () {
        index = i
        a()
        clearInterval(time)
        time = 0
        ts()
    }
}
ts()