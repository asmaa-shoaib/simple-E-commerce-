


if (localStorage.getItem("cart")==null){
    incart=[];
}else{
    incart=JSON.parse(localStorage.getItem("cart"));
}


 
var userCookie=document.cookie
console.log(userCookie);

/* console.log(userCookie.length)
if(userCookie.length==0){
    location.href=location.href.replace('cart.html','login.html')
}
 */

var splited=userCookie.split(';');
var mailCookie;
for(var k=0;k<splited.length;k++){

    if(splited[k].includes('usermail')){
        mailCookie=splited[k].split('=');
        mailCookie=mailCookie[1];}
}
console.log(mailCookie)



var users=JSON.parse(localStorage.getItem('users'));
console.log(users);

console.log(users)
console.log(typeof(users))
var userProducts;
for(j in users){
    if(users[j].usermail==mailCookie){
        console.log(j);
        for(i in incart){
            users[j].usercart.push(incart[i]);  
        }        
        userProducts=users[j].usercart;
       // localStorage.setItem('users',JSON.parse(users))  
        break;
    }else{
        console.log('no')
    }
    
}

console.log(users[0].usercart); 
console.log(userProducts);

console.log(incart)

var temp='';
var row=document.getElementById('row');
for( var i=0;i<userProducts.length;i++){
    temp+=`<div class='cart-item-container'>
    <div class='cart-item'>
        <img class='cart-img' src=`+userProducts[i].ProImg+`>
        <div class="cart-item-caption">
            <h4 >`+userProducts[i].proName+`</h4>
            <p>`+userProducts[i].ProQu+`</p>
        </div>
    </div>
</div>`
}
row.innerHTML=temp; 
