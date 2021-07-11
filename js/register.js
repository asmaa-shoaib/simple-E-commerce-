var users=[]
var cart=[];
var note =document.getElementById('note')
function validateName(str){
    var nameRX=/^[A-Za-z]{5,12}$/;
    return nameRX.test(str)
    }
function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
function validatePhone(str){
    var nameRX=/^(010|011|012|015)[0-9]{8}$/;
    return nameRX.test(str)
}
function validatePhass(str){
    var nameRX=/^[0-9]{4,8}$/;
    return nameRX.test(str)
}

function getdata(){
console.log('welcome')
var username=document.getElementById('username').value;
var userpass=document.getElementById('userpass').value;
var usermail=document.getElementById('usermail').value;
var userphone=document.getElementById('userphone').value;
console.log(username+'\n',userpass+'\n',userphone+'\n',usermail)
if(validateName(username)==true && validatePhass(userpass)==true &&validateEmail(usermail)==true &&validatePhone(userphone)==true ){
    var user={
        username:username,
        usermail:usermail,
        userphone:userphone,
        userpass:userpass,
        usercart:cart
    }
    users.push(user);
    console.log(user);
    console.log(users)
    localStorage.setItem('users',JSON.stringify(users))
console.log(location.href)
location.href=location.href.replace('register','index')
}
else{
    note.innerText='*check your information before submit'
}
} 

if (localStorage.getItem("users")==null){
    users=[];
}else{
    users=JSON.parse(localStorage.getItem("users"))
}
var send =document.getElementById('send')
send.addEventListener('click',function(e){
    e.preventDefault()
    console.log('w')
    getdata();
})
