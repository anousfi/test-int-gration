//cette fonction vérifie que le l'utilisateur a rentré un bon nom
function validateName(){
    var name=document.querySelector("#name")
    var nameErr=document.querySelector("#nameErr")
    if (name.value.length<=3 ) 
    nameErr.textContent+="Vous devez rentrer un nom valide!"
    console.log(name.value.length)
}
//cette fonction vérifie le format d'email rentré 
function validateEmail(){
    var email=document.querySelector("#email").value
    var emErr=document.querySelector("#emErr")
    if (!email.includes("@"))
    emErr.textContent+="l'email doit être de la forme ex@exemple.com"
    else if(!email.slice("@",email.length).includes("."))
    emErr.textContent+="l'email doit être de la forme ex@exemple.com"
    console.log(emErr)
}

//cette fonction verifie que l'utilisateur a rentré un mot de passe dans le format requis 
function verifyPwd1(){
    var pwdField=document.querySelector("#pwd")
    var pwd=pwdField.value
    var pwdErr=document.querySelector("#pwdErr1")   
    if ( pwd.length<10) 
    pwdErr.textContent+="Votre mot de passe doit contenir au moins 10 caractères!"
}
//cette fonction vérifie que l'utilisateur a rentré le même mot de passe que le premier
function verifyPwd2(){
    var pwd1=document.querySelector("#pwd").value
    var pwd2=document.querySelector("#pwd2").value
    var pwdErr=document.querySelector("#pwdErr2")
    if ( pwd1!=pwd2) 
    pwdErr.textContent+="Vous devez rentrer le même mot de passe!"
}