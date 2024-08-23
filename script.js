

//This will grap the entire element by the ID name
let serviceHeading = document.getElementById("serviceAmazing");
console.log(serviceHeading);


//Grabbing the id by multiple elemtns by className
let serviceElements = document.getElementsByClassName(".serviceIcons");
console.log(serviceElements)


//grabing the elment by css selection
let serviceSupport = document.querySelector(".amazingIcon h6");
console.log(serviceSupport);


//Grabbing all the elemtnts in css seleciton
//makes an array with all the elements with specified class name
let serviceColums = document.querySelectorAll(".serviceIcons h6");
console.log(serviceColums);

let topBorderColums = document.querySelectorAll(".TopBorder a:link");
console.log(topBorderColums);


//Modify Elements section
//if we want to add text use .innerHTML
serviceHeading.innerHTML = "AMAZING"


//Changeing the tex for a spacific index in a NODE Collection
serviceColums[1].innerHTML = "Pizza";

// Icon Image Change
let serviceImage = document.querySelectorAll(".serviceIcons img");
console.log(serviceImage)

// Body Middle Image Change
let BodyImageChange = document.querySelectorAll(".bodyMiddle img");
console.log(BodyImageChange);

//Body Middle Title Portfolio change
let BodyTitleChange = document.querySelectorAll(".bodyMiddle span");
console.log(BodyTitleChange);

// Button In Middle Body Change
let buttonChange = document.querySelectorAll(".button a:link");
console.log(buttonChange);


//options to do in script.js but should still do in css
//styling elements
// https://www.w3schools.com/jsref/dom_obj_style.asp
//if you look up styling  properly it should give you the JsavaScript syntax

for(let i = 0;i<serviceColums.length;i++){
    serviceColums[i].style.color = "rgb(160, 198, 63)"
}//for loop to make all the h6 ICONS Green
//styleCenter();

///funitons
// make text Center
function styleCenter(){
    for(let i=0;i<serviceColums.length;i++){
        const element = serviceColums[i];
        
        serviceColums[i].style.textAlign = "center"
    }//end for loop
}//end funiton sylecenter


// Changes the color of buttons in middle body
function buttonStyle(){
    for(let i=0;i<buttonChange.length;i++){
        buttonChange[i].style.backgroundColor = "purple"
    }//end for loop
}//end funtion button style


// Test to change text
let serviesText = document.querySelectorAll(".services h5,h6")
console.log(serviesText);
function styingText(){
    for(let i=0;i<serviceColums.length;i++){
        const element = styingText[i];
        
        styingText[i].style.color = "rgb(160, 198, 63)";
        serviesText[i].style.fontSize = "40px";
    }//end for loop
}//end funciton styling text
//serviceImageOne.addEventListener("click", stylingText);

//li topborder
function ChangeTopBorderLi(){
    for(let i=0;i<topBorderColums.length;i++){
        topBorderColums[i].style.color = "blue";
    }//end for loop
}//end funciton


// changes the icons to blue if you click a img
function ChangeIconImageStyle(){
    for(let i=0;i<serviceColums.length;i++){
        serviceColums[i].style.color = "blue";
    }//end for loop
}//end fucntion


// Change middlebody subheaders font to 60px
let MiddleBodyLi = document.querySelectorAll(".bodyMiddle li");
function ChangeSubheader(){
    for(let i=0;i<BodyImageChange.length;i++){
        const element = MiddleBodyLi[i];
        MiddleBodyLi[i].style.fontSize = "60px"
    }//end for loop
} //end funciton

// BODY MIDDLE hover span
function hoverSpan(){
    console.log("Mr.Portfolio")
}


//Event listeners
//Practice question from mike
// 1.
//IF you click the last icon picture change the color of the nav to blue
serviceImage[3].addEventListener("click", ChangeIconImageStyle);
// 2.
//change the icon name "pizza" back to origanal name
serviceColums[1].innerHTML = "Avaliabilty";
// 3.
//if you hover over the body's TITLE "PORTFOLIO" console.log "Mr.Portfolio"
BodyTitleChange[0].addEventListener("mousemove", hoverSpan);
// 4.
//if you click the bodys's second picture change the buttons in the body to purple
BodyImageChange[1].addEventListener("click", buttonStyle);
// 5.
//if you click the body's second picture change the font size to 60px
BodyImageChange[1].addEventListener("click", ChangeSubheader);




//practice questions

//Input boxes
//Grabbing values
//onchanges
//Eventlistener

/*
// Savign info based onChange
let inputName = document.getElementById("name");
let savedInfo = "";
console.log(inputName);
inputName.addEventListener("input", () =>{
    //this is grabbing the input boxes value
    //Innertext is only for html text tags
    savedInfo = inputName.value;
    console.log(savedInfo);
})
*/

/*
//2nd option on saving info from a input textbox
//This varable is being used to grap the input value
let inputName = document.getElementById("name");
let inputEmail = document.querySelector("#email");
//This varable is being used for the eventListener
let subscribeButton = document.querySelector(".sub input");
let savedNameInfo = "";
let savedEmailInfo = "";

subscribeButton.addEventListener("click",() =>{
    savedNameInfo = inputName.value;
    savedEmailInfo = inputEmail.value;
    //
    inputName.value = "";
    inputEmail.value = "";
    console.log(savedNameInfo);
    console.log(savedEmailInfo);
})
*/

//saving a list of personal infromation

//this is going to hold my detail objects of information
let subscribeList = [];
//this is my object templete to push into the array later
let personInfo = {
    name: "", 
    email: ""
};
//What's going to activate our input variables to grab the values?
//This variable is goin to be used for my eventListener
let subscribeButtonInfo = document.querySelector(".sub input");
subscribeButtonInfo.addEventListener("click", grabNewsLetterInfo);
//funciton to push info into the array
function grabNewsLetterInfo(){
    //This is going ot grap the unput text
    //ONLY GRABA THE VALUE NOT THE NODE ELEMENT
        let inputNameInfo = document.querySelector("#name");
        let inputEmailInfo = document.querySelector("#email");
    //gettting personal info
        personInfo.name = inputNameInfo.value;
        personInfo.email = inputEmailInfo.value;
        console.log(personInfo);
    //push and writing info
        subscribeList.push(personInfo);
        console.log(subscribeList);
    //clearing out the input boxes
    inputNameInfo.value = "";
    inputEmailInfo.value = "";
}//end funciton grap news letter info



