
const regExName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const regExEmail = /^[\w-\.]+@northeastern.edu/;
const regExPhone = /\d{3}-?\d{3}-\d{4}$/;
const regExzip=/^\d{5}(\-?\d{4})?$/;
const selectElement = document.getElementById('menu');
const checkboxContainer = document.getElementById('checkboxContainer');   

    const errordisplay = (elementName, isInValid) => {
        if(isInValid) {
            // You cant access non form element like below error field using name
            // Hence use the rudimentary way - getElementById or other
            document.getElementById(`error_${elementName}`).style.display = "block";
            document.myForm[elementName].style.border = "2px solid red";
        } else {
            document.getElementById(`error_${elementName}`).style.display = "none";
            document.myForm[elementName].style.border = "";
        }
    }
function checkcheckboxcondition(){
    var sources= document.querySelector('input[name="source"]:checked').value;
if(sources==null || sources==" "){


    errordisplay(document.querySelector('input[name="source"]:checked').name, true);
    ischeckedSource = true;
    }
else {
    errordisplay(document.querySelector('input[name="source"]:checked').name, false);
    ischeckedSource = false;
}

}
   
let isFirstNameInValid = true;
    let isLastNameInValid = true;

    let isEmailInValid = true;
    let isPhoneNumberInValid = true;
    let isZipInvalied=true;
    let isCommentsinvalid=true;
     let isAddressinvalid=true;
     let isCityinvalid=true;
     let isStateinvalid=true;
     let ischeckedSource=true;

    const validate = event => {
        console.log('input');
        const {id, value, name} = event.target;

        switch(id) {
            case "firstName":
                if(!value.trim().toLowerCase().match(regExName)){

                    errordisplay(name, true);
                        isFirstNameInValid = true;
                        
                }else if(value.length>30 || value.length<5){
                    errordisplay(name, true);
                    isFirstNameInValid = true;
                    }
                else {
                    errordisplay(name, false);
                    isFirstNameInValid = false;
                }
                break;
            case "lastName":
                if(value.length>30 || value.length<5){
                    errordisplay(name, true);
                    isLastNameInValid = true;
                }
                else {
                    errordisplay(name, false);
                    isLastNameInValid = false;
                }
                break;
            case "emailId":
                if(!value.trim().toLowerCase().match(regExEmail)) {
                    errordisplay(name, true);
                    isEmailInValid = true;
                } else {
                    errordisplay(name, false);
                    isEmailInValid = false;
                }
                break;
            case "phoneNumber":
                if(!value.trim().toLowerCase().match(regExPhone)) {
                    errordisplay(name, true);
                    isPhoneNumberInValid = true;
                } else {
                    errordisplay(name, false);
                    isPhoneNumberInValid = false;
                }
                break;
        
            case "zipcode": 
                if(!value.trim().toLowerCase().match(regExzip)){
                    errordisplay(name, true);
                    isZipInvalied=true
                }
                else {
                    errordisplay(name, false);
                    isZipInvalied = false;
                }

                break;
            case "address":
                if(value.length>60 || value.length<5){
                    errordisplay(name, true);
                    isAddressinvalid=true
                }
                else {
                    errordisplay(name, false);
                    isAddressinvalid = false;
                }
break;
            case "city":
                if(value.length>15 || value.length<5) {
                errordisplay(name, true);
                isCityinvalid=true
            }
            else {
                errordisplay(name, false);
                isCityinvalid = false;
            }
            break;
            case "state":
                if(value.length>20 || value.length<5){
                errordisplay(name, true);
                isStateinvalid=true
            }
            else {
                errordisplay(name, false);
                isStateinvalid = false;
            }
            break;
            case "comments" :
                if(value.length>100 || value.length<5){
                    errordisplay(name, true);
                    isCommentsinvalid=true
                }
                else {
                    errordisplay(name, false);
                    isCommentsinvalid = false;
                }
                break;

        }
        if(isCommentsinvalid || isFirstNameInValid || isLastNameInValid || isEmailInValid || isPhoneNumberInValid || isZipInvalied || isAddressinvalid || isCityinvalid || isStateinvalid) {
            document.myForm.submit.setAttribute('disabled', false);
        } else {
            document.myForm.submit.removeAttribute('disabled');
        }
    }

    // write a function submitted
    function submitted(e){
        console.log('submit');
        // To avoid page refresh
        e.preventDefault();
        // checkcheckboxcondition();
        if(!ischeckedSource||!isCommentsinvalid ||!isFirstNameInValid || !isLastNameInValid || !isEmailInValid || !isPhoneNumberInValid || !isZipInvalied || !isAddressinvalid || !isCityinvalid || !isStateinvalid ){
            alert("Data entered successfully");
            createTable();
            console.log(document.getElementById("container-table"));
            document.getElementById("container-table").style.display= "block"
            document.getElementById("submit").disabled=true;
            // document.getElementById("Reset").disabled=true;


        }
        else{
            alert("Please enter valid details")
        }
    }



    document.myForm.addEventListener('input', validate);
    document.myForm.addEventListener('submit', submitted);
    document.myForm.addEventListener('reset', reset);
    // document.myForm.addEventListener('checkcheckboxcondition', checkcheckboxcondition);

    function createcheckbox(payload) {
        // var selectElement = document.querySelector('#courses');
        // var output = selectElement.value;
        var parent=payload.parentElement.nextElementSibling;
        var checkNode=payload.parentElement.nextElementSibling.firstElementChild;

       if(payload.selectedIndex>0){
        parent.style.display="block";
        checkNode.style.visibility="visible";
    }
       else{
        checkNode.style.visibility="hidden";
        parent.style.display="none";

    }
        
        
    }

    function textbox(textvalue){
        console.log(textvalue);
        var txtNode=textvalue.parentElement.nextElementSibling;
        if(textvalue.checked==true) {
            txtNode.style.display="block";
        }
        else{
            txtNode.style.display="none";
        }
    }





    function createTable(){

var test= document.querySelector('input[name="rating"]:checked').value;
var sar= document.querySelector('input[name="title"]:checked').value;
var sources= document.querySelector('input[name="source"]:checked').value;
var rating= document.querySelector('input[name="rating"]:checked').value;

var selectElement = document.querySelector('#menu');

       var output = selectElement.value;

        var list1=[];
        var list2=[];
        var list3=[];
        var list4=[];
        var list5=[];
        var list6=[];
        var list7=[];
        var list8=[];
        var list8=[];
        var list9=[];
        var list10=[];
        var list11=[];
        var list12=[];
        var list13=[];
        var list14=[];
        var list15=[];
        var list16=[];


var num=1;
var inc=0;


// var resourse= document.querySelector('#courses');
//         output = selectElement.value;
//         console.log(output);
//        document.querySelector('.output').textContent = output;

var addingRow=document.getElementById("mytable")
var NewRow=addingRow.insertRow(num);
list1[inc]=sar;
list2[inc]=test;
list3[inc]=document.getElementById("emailId").value;
list4[inc]=document.getElementById("phoneNumber").value;
list5[inc]=document.getElementById("address").value;
list6[inc]=document.getElementById("address2").value;
list7[inc]=document.getElementById("zipcode").value;
list8[inc]=document.getElementById("state").value;
list9[inc]=document.getElementById("firstName").value;
list10[inc]=document.getElementById("lastName").value;
list11[inc]=document.getElementById("city").value;
list12[inc]=sources;
list13[inc]=document.getElementById("comments").value;
list14[inc]=output;
list15[inc]=document.getElementById("servicefeedback").value;
list16[inc]=rating;
// list15[inc]="checkboxcreated"



var cel0= NewRow.insertCell(0);
var cel1= NewRow.insertCell(1);
var cel2= NewRow.insertCell(2);
var cel3= NewRow.insertCell(3);
var cel4= NewRow.insertCell(4);
var cel5= NewRow.insertCell(5);
var cel6= NewRow.insertCell(6);
var cel7= NewRow.insertCell(7);
var cel8= NewRow.insertCell(8);
var cel9= NewRow.insertCell(9);
var cel10= NewRow.insertCell(10);
var cel11= NewRow.insertCell(11);
var cel12= NewRow.insertCell(12);
var cel13= NewRow.insertCell(13);
var cel14= NewRow.insertCell(14);

//2,5

cel0.innerHTML=list1[inc];
cel1.innerHTML=list9[inc];
cel2.innerHTML=list10[inc];
cel3.innerHTML=list3[inc];
cel4.innerHTML=list4[inc];
cel5.innerHTML=list5[inc];
cel6.innerHTML=list6[inc];
cel7.innerHTML=list11[inc];
cel8.innerHTML=list8[inc];
cel9.innerHTML=list7[inc];
cel10.innerHTML=list14[inc];
cel11.innerHTML=list16[inc]
cel12.innerHTML=list15[inc];
cel13.innerHTML=list12[inc]
cel14.innerHTML=list13[inc]

num++;
inc++;    
    }

function reset(value){
    document.getElementById("submit").disabled=false;
    
    document.getElementById("checkbox").style.visibility="hidden";
    document.getElementById("expandcheckbox").style.display="none"

}