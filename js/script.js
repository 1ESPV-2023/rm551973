
let tmp = "";

// function mudaCor() {
    
//     let r = 0;
//     let g = 0;
//     let b = 0;

//     //Math
//     r = Math.ceil(Math.random() * 255);
//     g = Math.ceil(Math.random() * 255);
//     b = Math.ceil(Math.random() * 255);

//     const elementos = [...document.getElementsByClassName("cabecalho")];
    
//     elementos.forEach((el)=>{
//         el.style.backgroundColor = `rgb(${r},${g},${b})`;
//     })

//     tmp = setTimeout(mudaCor, 5000);
// }
mudaBanner1

function mudaBanner1() {
    
    let banner1 = "./img/./img/banner-lateral-1.png";


    const elImg = document.querySelector('.cabecalho > img')

    elImg.src = banner1;

    setTimeout(mudaBanner2, 1000)
}

function mudaBanner2() {
    
    let banner2 = "../img/banner-lateral-2.png";

    const elImg = document.querySelector('.cabecalho > img')

    elImg.src = banner2;

    setTimeout(mudaBanner3, 1000)
}

function mudaBanner3() {
    
    let banner3 = "./img/banner-lateral-3.png"

    const elImg = document.querySelector('.cabecalho > img')

    elImg.src = banner3;

    setTimeout(mudaBanner1, 1000)
}

