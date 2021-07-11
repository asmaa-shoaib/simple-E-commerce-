if (localStorage.getItem("users")==null){
    users=[];
}else{
    users=JSON.parse(localStorage.getItem("users"))
}


function getdata(){
    var mail=document.getElementById('mail').value;
    var pass=document.getElementById('userpass').value;
    var note =document.getElementById('note')
    console .log (mail,pass)
    for(var i=0;i<users.length;i++){
        if((mail==users[i].usermail || mail==users[i].userphone) && pass== users[i].userpass){
            console.log(users[i].usermail+'\n'+users[i].userphone)
            var date = new Date();
            date.setMonth(date.getMonth()+2);
            document.cookie ="username ="+users[i].username+";expires ="+date;
            document.cookie ="usermail ="+users[i].usermail+";expires ="+date;
            document.cookie ="userphone ="+users[i].userphone+";expires ="+date;
            document.cookie ="userpass ="+users[i].userpass+";expires ="+date;
            
            location.href=location.href.replace('login','home')
        }
        else{
            note.innerText='*check your information before submit';
        }
        console.log(users[i])
        
    }
}
var signIn=document.getElementById('signin')
signIn.addEventListener('click',function(e){
    e.preventDefault();
    getdata();  
})
console.log(users);