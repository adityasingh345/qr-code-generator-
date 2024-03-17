let imgbox = document.getElementById("imgbox");
let qrimg = document.getElementById("qrimg");
let searchbox = document.getElementById("search");


function gqr(){
    if (searchbox.value.length > 0){
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + searchbox.value;
    imgbox.classList.add("show-img");
    }else {
        searchbox.classList.add("error");
        setTimeout(() =>{
            searchbox.classList.remove("error");
        }, 2000)
    }
}
