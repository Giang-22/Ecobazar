function Searchin(){
    var product = window.document.ecobazar.Search.value;
    if(!product){
        alert("Yêu cầu nhập sản phẩm cần tìm!!!");
    }
    else{
        var regex = /^(?![0-9])(?=.*[A-Z]).{8,}$/;
        if(regex.test(product)){
            alert("Tìm sản phẩm")
        }
        else{
            alert("Hãy nhập đúng sản phẩm");
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.querySelector('a[href="#about"]');
    const aboutSection = document.getElementById("about-us");
    if (aboutLink && aboutSection) {
        aboutLink.addEventListener("click", function (e) {
            e.preventDefault();
            aboutSection.style.display = "grid";
            aboutSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});
