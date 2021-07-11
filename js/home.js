var cookieStr =document.cookie
console.log(cookieStr)
var uname;
var mail;
var phone;
var pass;
function getCookie(){
    var splitedcookieStr=cookieStr.split(';')
    console.log(splitedcookieStr)
    for ( i in splitedcookieStr ){
       var splitedItem=splitedcookieStr[i].split('=')
       console.log(splitedItem)
            for(j in splitedItem ){
                if (splitedItem[0].includes('username')){
                    uname=splitedItem[1]
                }else if (splitedItem[0].includes('usermail')){
                    mail=splitedItem[1]
                }else if (splitedItem[0].includes('userphone')){
                    phone=splitedItem[1]
                }else if (splitedItem[0].includes('userpass')){
                    pass=splitedItem[1]
                }
            }
        }
    console.log(splitedcookieStr[i])
}
getCookie(); 
console.log(uname+'\n'+mail+'\n'+phone+'\n'+pass)

var username =document.getElementById('username');
username.innerText='welcome to you mrs.'+uname;

//try to create aslider
/* function changeSlider(){
    var i=18;
    var header=document.getElementById('header');
    while(i<21){
        var ImgSrc= 'url(../images/'+i+'.jpg)'
        header.style.backgroundImage=ImgSrc
        
        console.log(ImgSrc) 
        
    }
    setInterval(changeSlider,1000)
   // setT imeout(changeSlider,1000);
 i++  
} */
var signOut=document.getElementById('signOut');
signOut.addEventListener('click',function(){
    var date = new Date();
            date.setMonth(date.getMonth()-2);
            document.cookie ="username ='' ;expires ="+date;
            document.cookie ="usermail ='';expires ="+date;
            document.cookie ="userphone ='';expires ="+date;
            document.cookie ="userpass ='';expires ="+date;
            
            location.href=location.href.replace('home','login')
})