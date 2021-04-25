"use strict"

function validateForm() {
    if (!validateFirstName()) {
        return false;
    }

    if (!validateLastName()) {
        return false;
    }

    if (!validateEmail()) {
        return false;
    }

    return true;
}

function validateFirstName() {  
    const name=document.myform.firstName.value;
   
    if (name==null || name=="") {  
        alert("Name can't be blank");  
        return false; 
    }
    else { 
        return true;
    }
}

function validateLastName() {  
    const name=document.myform.lastName.value;
   
    if (name==null || name=="") {  
        alert("Name can't be blank");  
        return false; 
    }
    else { 
        return true;
    }
}

function validateEmail() {  
    const x=document.myform.email.value;  
    const atposition=x.indexOf("@");  
    const dotposition=x.lastIndexOf("."); 

    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length) {  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false; 
    }
    else {
        return true;
    }
};