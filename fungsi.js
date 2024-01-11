let start = 0;
otomatis();

function otomatis() {
    const ilmujs = document.querySelectorAll(".image-profe");

    for (let i = 0; i < ilmujs.length; i++) {
        ilmujs[i].style.display = "none";
    }

    if (start >= ilmujs.length) {
        start = 0;
    }

    ilmujs[start].style.display = "block";
    console.log("gambar ke" + start);
    start++;

    setTimeout(otomatis, 4000);
}

