
var productName=document.getElementById('productName');
var productdescrption=document.getElementById('productDescrption');
var productImg=document.getElementById('productImg');
var incart=[];

if (localStorage.getItem("proInfo")==null){
    ProdArray=[];
}else{
    ProdArray=JSON.parse(localStorage.getItem("proInfo"))
}

productImg.src=ProdArray[0].productImgSrc;
productdescrption.innerText=ProdArray[0].productDescrption;
productName.innerText=ProdArray[0].productName;

console.log(ProdArray[0].productImgSrc)


var buy=document.getElementById('buy');
buy.addEventListener('click',function(){
    var cookieStr = document.cookie;
    console.log(cookieStr) 
    console.log(cookieStr.length)
    if(cookieStr.length==0){
        location.href=location.href.replace('product.html','login.html')
    }else{
        overCount.classList.add('flex'); 
    }
})

var overCount=document.getElementById('overCount');
var cancel=document.getElementById('cancel');
cancel.addEventListener('click',function(){
    overCount.classList.remove('flex');
})

console.log(select)
var confirm =document.getElementById('confirm');

if (localStorage.getItem("cart")==null){
    incart=[];
}else{
    incart=JSON.parse(localStorage.getItem("cart")) 
}
confirm.addEventListener('click',function(e){
  
    console.log(455);
    var select=document.getElementById('select').value;

    console.log(select);
    var willbuy={
        proName:ProdArray[0].productName,
        ProImg:ProdArray[0].productImgSrc,
        ProQu:select,
    }
    incart.push(willbuy);
    localStorage.setItem('cart',JSON.stringify(incart));
   
})
