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