var productImg;
var productName;
var productDescrption;
var realText=[];

var pargs=document.getElementsByClassName("productDescrption");
for( var k=0;k<pargs.length;k++){
    realText.push(pargs[k].innerText);
    pargs[k].innerText = pargs[k].innerText.substring(1,50);
}

var seeMores=document.getElementsByClassName("seeMores");
for(var j=0;j<seeMores.length;j++){
    seeMores[j].addEventListener('click',function(){
    productImg= this.parentElement.parentElement.children[0].src;
    productName= this.parentElement.children[0].innerText;
    productDescrption= this.parentElement.children[1].innerText;
   
    console.log(productImg+'\n'+productName+'\n'+productDescrption+'\n'+j)
    saveProductInfo();
    goProduct();
    
   })
}



function saveProductInfo(){
    var ProdArray=[];
    var product={
        productImgSrc:productImg,
        productName:productName,
        productDescrption:productDescrption,   
    }
    ProdArray.push(product);
    console.log(ProdArray);
    localStorage.setItem('proInfo',JSON.stringify(ProdArray));
}
function goProduct(){
    location.href=location.href.replace('home','product');
}



/* 
seeMore.addEventListener('click',function(e){
    e.preventDefault;
    saveProductInfo();
    console.log(e.target.value)
}) */