//header动效
//获取元素
const container = document.querySelector('.head');
const imgs = document.querySelector('.headimg');
const logos = document.querySelector('.logoimg');
//绑定鼠标移入事件 
container.addEventListener('mouseenter', function (e) {
    //增加过渡效果
    imgs.style.transition = 'all 0.2s';
    logos.style.transition = 'all 0.2s';
    //获取鼠标在移入时的偏移
    this.x = e.clientX;
    //移除过渡效果
    imgs.style.transform = `translate(40px, 0px) rotate(0deg)`;
    logos.style.transform = `translate(-30px, 0px) rotate(0deg)`;
});
//绑定鼠标移动事件
container.addEventListener('mousemove', function (e) {
    //获取鼠标移动时的偏移
    this._x = e.clientX;
    //计算鼠标移动的向量
    let disX = this._x - this.x;
    const blur_5 = Math.abs(0 - 6 * disX / 3000);
    const translateX_5 = 200 * disX / 3000;
    imgs.style.filter = `blur(${blur_5}px)`;
    imgs.style.transform = `translate(${40 + translateX_5}px, 0px) rotate(0deg)`;

    logos.style.transform = `translate(${-30 - translateX_5}px, 0px) rotate(0deg)`;
})
//绑定鼠标离开事件
container.addEventListener('mouseleave', function () {
    //样式清空

    imgs.style.filter = 'blur(0)';
    imgs.style.transform = 'translate(0px, 0px) rotate(0deg)';

    logos.style.transform = 'translate(0px, 0px) rotate(0deg)';
});

//左右立绘动效
//获取元素
const container2 = document.querySelector('body');
const imgss = document.querySelectorAll('.footimg');
const speed = 7000;
//绑定鼠标移入事件 
container2.addEventListener('mouseenter', function (e) {
    //获取鼠标在移入时的偏移
    this.x = e.clientX;
    this.y = e.clientY;
    //移除过渡效果
    imgss.forEach(item => {
        item.style.transition = 'all 0.2s';
    });
});
//绑定鼠标移动事件
container2.addEventListener('mousemove', function (e) {
    //获取鼠标移动时的偏移
    this._x = e.clientX;
    this._y = e.clientY;
    //计算鼠标移动的向量
    let disX = this._x - this.x;
    let disY = this._y - this.y;

    const blur_1 = Math.abs(0 - 6 * disX / speed);
    const translateX_1 = 200 * disX / speed;
    const translateY_1 = 200 * disY / speed;
    imgss[0].style.filter = `blur(${blur_1}px)`;
    imgss[0].style.transform = `translate(${translateX_1}px,${translateY_1}px) rotateY(15deg)`;

    const blur_2 = Math.abs(0 - 6 * disX / speed);
    const translateX_2 = 200 * disX / speed;
    const translateY_2 = 200 * disY / speed;
    imgss[1].style.filter = `blur(${blur_2}px)`;
    imgss[1].style.transform = `translate(${translateX_2}px,${translateY_2}px) rotateY(-15deg)`;
})
//绑定鼠标离开事件
container2.addEventListener('mouseleave', function () {
    //增加过渡效果
    imgss.forEach(item => {
        item.style.transition = 'all 0.3s';
    });
    //样式清空

    imgss[0].style.filter = 'blur(0)';
    imgss[0].style.transform = 'translate(0px, 0px) rotateY(5deg)';

    imgss[1].style.filter = 'blur(0)';
    imgss[1].style.transform = 'translate(0px, 0px) rotateY(-5deg)';
});

