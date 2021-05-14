//This document was created by Justin Jetton for WEB 115 on Juy 14, 2019

//Required Javascript name and student information
function classStudent () {
document.getElementById("classStudentHeading").innerHTML = "<h1 style='font-family:Tahoma; color:black; text-align:center;'>RESUME BUILDER</h1>" + "<h2 style='font-family:Garamond; font-style:italic; color:black; text-align:center;'>Version 1.01</h2>";
}


//Global Variable List
var myForm = document.buildForm;        //myForm stores data from the buildForm's input fields.
var allFieldsReady = 0;                 //allFieldsReady keeps the buildResume() function from executing.
var emailReady = 0;                     //emailReady tracks if the email is valid. Sets to 1 if email is valid.
var phoneNumberReady = 0;               //phoneNumberReady tracks if the phone number is valid/within valid format. Sets to 1 if phone number is valid.

myForm.startBuildButton.addEventListener("click", checkFieldsReady);
myForm.phoneNumber.addEventListener("blur", isValidPhoneNumber);
myForm.emailAddress.addEventListener("blur", isValidEmail);


//This function checks to see that the user has at least entered an @ in their input.
function isValidEmail () {
    var applicantEmail = document.getElementById("emailAddress").value;
    var emailRegExp = /@/gm; 
      
    if (applicantEmail=="") {
        emailReady = 0;
    } else {
        
        if (emailRegExp.test(applicantEmail)) {
            emailReady = 1;        
        } else {
            alert("Invalid email address. You must provide a valid email address.");
            emailReady = 0;
        }                
    }
}

//This function checks to make sure that the phone number is valid.
function isValidPhoneNumber () {
    var applicantPhoneNumber = document.getElementById("phoneNumber").value;
    var phoneRegExp = /\d{10}/gm;
    var checkPhoneLength = /\d{11}/gm;
    var convertExp = /[()\s-]/gm;

   //Did they enter anything at all?
    if (applicantPhoneNumber == "") {
        phoneNumberReady = 0;
    } else {
        //Remove - characters.
        applicantPhoneNumber = applicantPhoneNumber.replace(convertExp, "");
        
        //Check to see if phone number too long.
        if (!checkPhoneLength.test(applicantPhoneNumber)) {

            //Check to see if long enough.    
            if (phoneRegExp.test(applicantPhoneNumber)) {
                phoneNumberReady = 1;
            }
        } else {
            alert("Invalid phone number. Please provide a phone number in one of the following formats: \n 123-456-7890 \n (123) 456-7890");
            phoneNumberReady = 0;
        }
    }
}
 
//This function checks to make sure that the input fields are ready before calling buildResume()
function checkFieldsReady () {
    applicantName = document.getElementById("fullName").value;                      
    applicantAddress = document.getElementById("fullAddress").value;

    if (applicantName != "") {
        if (applicantAddress != "") {

            if(phoneNumberReady == 1) {

                    if (emailReady == 1) {
                        buildResume();
                    } else {
                        emailAddress.focus();
                        alert("Please enter a valid email address.");
                    }
           } else {
                phoneNumber.focus();
                alert("Please provide a phone number in one of the following formats: \n 123-456-7890 \n (123) 456-7890.");
           }
        } else {
            fullAddress.focus();
            alert("Please enter you address.");
        }
    } else {
            fullName.focus();
            alert("Please enter your name.");
    }
} 

//This is the primary function; it created the resume page once all of the information within the form has been validated...
function buildResume () {

    var keepLineBreak = /\n/gm;

    applicantName = document.getElementById("fullName").value;                      
    applicantAddress = document.getElementById("fullAddress").value;
    applicantPhoneNumber = document.getElementById("phoneNumber").value;
    applicantEmail = document.getElementById("emailAddress").value;
    applicantPersonalInfo = document.getElementById("personalData").value;
    applicantPersonalInfo = applicantPersonalInfo.replace(keepLineBreak, "<br />");
    applicantCareerObjective = document.getElementById("careerObjective").value;
    applicantCareerObjective = applicantCareerObjective.replace(keepLineBreak, "<br />");
    applicantEducation = document.getElementById("edExp").value;
    
    applicantJobOneStart = document.getElementById("jobOneStart").value;
    applicantJobOneEnd = document.getElementById("jobOneEnd").value;
    applicantJobOneInfo = document.getElementById("jobOne").value;
    applicantJobOneInfo = applicantJobOneInfo.replace(keepLineBreak, "<br />");
    
    applicantJobTwoStart = document.getElementById("jobTwoStart").value;
    applicantJobTwoEnd = document.getElementById("jobTwoEnd").value;
    applicantJobTwoInfo = document.getElementById("jobTwo").value;
    applicantJobTwoInfo = applicantJobTwoInfo.replace(keepLineBreak, "<br />");

    applicantJobThreeStart = document.getElementById("jobThreeStart").value;
    applicantJobThreeEnd = document.getElementById("jobThreeEnd").value;
    applicantJobThreeInfo = document.getElementById("jobThree").value;
    applicantJobThreeInfo = applicantJobThreeInfo.replace(keepLineBreak, "<br />");

    applicantJobRef = document.getElementById("jobRef").value;

    
    


    myText = ("<html><head><title>" + applicantName + "'s Resume</title>");
    myText += ("<style> body {font-family: Courier; background-color: #c0c0c0;} h2 {align-text: center;} div#theLeft { clear:both; width:15%; float:left; font-weight:bold;} div#theSubLeft { clear:both width=15%; float:left; padding-bottom:20px;} div#theRight {width:83%; float:right; padding-bottom:20px; padding-right:30px;}</style>" + "</head>");
    myText += ("<body><p><h2>" + applicantName + "</h2><h3>" + applicantAddress + " <br /> Phone Number: " + applicantPhoneNumber + " <br /> Email: " + applicantEmail + "</h3></p><hr />");
    myText += ("<div id='theLeft'>Career Objectives:</div><div id='theRight'>" + applicantCareerObjective + "</div>");
    myText += ("<div id='theLeft'>Personal Data:</div><div id='theRight'>" + applicantPersonalInfo + "</div>");
    myText += ("<div id='theLeft'>Education:</div><div id='theRight'>" + applicantEducation + "</div>");    
    myText += ("<div id='theLeft'>Employment Experience:</div><div id='theRight'></div>");
   
    if (applicantJobOneInfo != "") {
    myText += ("<div id='theSubLeft'>"+ applicantJobOneStart + " - " + applicantJobOneEnd + ":</div><div id='theRight'>" + applicantJobOneInfo + "</div>");
    }

    if (applicantJobTwoInfo != "") {
    myText += ("<div id='theSubLeft'>"+ applicantJobTwoStart + " - " + applicantJobTwoEnd + ":</div><div id='theRight'>" + applicantJobTwoInfo + "</div>");
    }
    
    if (applicantJobThreeInfo != "") {
        myText += ("<div id='theSubLeft'>"+ applicantJobThreeStart + " - " + applicantJobThreeEnd + ":</div><div id='theRight'>" + applicantJobThreeInfo + "</div>");
    }
    myText += ("<div id='theLeft'>Character References:</div><div id='theRight'>Upon request.</div>");
    myText += ("<div id='theLeft'>Business References:</div><div id='theRight'>" + applicantJobRef + "</div>");


    myText += ("</body></html>");

    
    newdocument = window.open();
    newdocument.document.write(myText);
}