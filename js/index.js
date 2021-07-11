if(!location.href.includes('index.html')){
    location.href=location.href+'index.html';
}
var signin=document.getElementById('signin');
var signup=document.getElementById('signup');

function signIn(){
    
    location.href=(location.href).replace('index','login');
}
function signUp(){
    location.href=(location.href).replace('index','register');
}

signin.addEventListener('click',function(e){
    e.preventDefault;
    signIn();
})

signup.addEventListener('click',function(e){
    e.preventDefault;
    signUp();
})
