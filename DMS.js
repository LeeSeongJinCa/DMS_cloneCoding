


// function a(num) {
//     var bgImg = document.getElementById(`apply-bg-img${num+1}`);
//     bgImg.classList.add('act');
// }

// const mainApply = document.getElementsByClassName('main-apply');
// for (var i = 0; i < mainApply.length; i++) {
//     mainApply[i].addEventListener('mouseenter', a(i));
// }

function mouseEnter(num) {
    mainApply[num].addEventListener('mouseenter', () => {
        var bgImg = document.getElementById(`apply-bg-img${num + 1}`);
        bgImg.classList.add('act');
    })
}
function mouseLeave(num) {
    mainApply[num].addEventListener('mouseleave', () => {
        var bgImg = document.getElementById(`apply-bg-img${num + 1}`);
        bgImg.classList.remove('act');
    })
}
const mainApply = document.getElementsByClassName('main-apply');
var bgImg = document.getElementById(`apply-bg-img$1`);
var a = bgImg.getAttribute()
function test(index) {
    mainApply[index].addEventListener('mouseenter', mouseEnter(index));
    mainApply[index].addEventListener('mouseleave', mouseLeave(index));
}
// mainApply[0].addEventListener('mouseenter', mouseEnter(0));
// mainApply[0].addEventListener('mouseleave', mouseLeave(0));
// mainApply[1].addEventListener('mouseenter', mouseEnter(1));
// mainApply[1].addEventListener('mouseleave', mouseLeave(1));
// mainApply[2].addEventListener('mouseenter', mouseEnter(2));
// mainApply[2].addEventListener('mouseleave', mouseLeave(2));
// mainApply[3].addEventListener('mouseenter', mouseEnter(3));
// mainApply[3].addEventListener('mouseleave', mouseLeave(3));





















































































