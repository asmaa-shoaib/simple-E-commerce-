

var contact_btn= document.getElementById('contact_btn');

var form = document.forms[0];
contact_btn.addEventListener('click',function(e){
    e.preventDefault;
    console.log(e.target);
    name = document.getElementById('name').value;
    subject = document.getElementById('subject').value;
    message = document.getElementById('message').value;
    //form.action= `mailto:admin@gmail.com?subject=`+subject+` from `+name+`&body=`+message;
    console.log(name+'\t'+subject+'\t'+message);
    form.submit();
    console.log(name+'\t'+subject+'\t'+message)
}) 
