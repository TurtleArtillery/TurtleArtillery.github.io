
//Main control of scipting elements for the index.html file

var backdrop=document.querySelector("body");
/*backdrop.addEventListener("touchstart",function(){this.style.backgroundColor="#00FF00";});
backdrop.addEventListener("touchend",function(){this.style.backgroundColor="#000000";});*/

var heading=document.querySelector("h1");

var button1=document.querySelector(".circleButton");
button1.addEventListener("touchstart",function(){button1.toggleClass(".hover");});
button1.addEventListener("touchend",function(){button1.removeClass(".hover")});

var button2=document.querySelector(".circleButton2");
button2.addEventListener("touchstart",function(){button2.toggleClass(".hover");});
button2.addEventListener("touchend",function(){button2.removeClass("circleButton2");})

var button3=document.querySelector(".circleButton3");
button3.addEventListener("click",function(){button3.className="";button3.className="circleButton3";});
button3.addEventListener("touchstart",function(){heading.accessKey.textContent=:"YEP";button3.toggleClass(".hover");
backdrop.style.backgroundColor="#00FF00";});
button3.addEventListener("touchend",function(){button3.className="";button3.className="circleButton3";
backdrop.style.backgroundColor="#FF0000";});




var button=document.querySelector(".circleButton4");
var buttonStyle=window.getComputedStyle(button,null);
var buttonX=button.getBoundingClientRect().left;
var buttonY=button.getBoundingClientRect().top;

var holder=document.querySelector(".sample1");
var buttonCopy1,bCopy1X,bCopy1Y;
var buttonCopy2,bCopy2X,bCopy2Y;
var buttonCopy3,bCopy3X,bCopy3Y;
var switcher=false;


button.onmouseover=function(){addButtons()};
button.onmouseout=function(){removeButtons()};



function clickSwitch()
{
    if(switcher)
    {
        switcher=false;
        removeButtons();
    }
    else
    {
        switcher=true;
        addButtons();
    }
}

function addButtons()
{

    //add the button
    if(!buttonCopy1)
    {
    buttonCopy1=document.createElement("img");
    buttonCopy1.className="circleButton4addOn";
    //buttonCopy1.textContent="+";
    buttonCopy1.src="images/plus_blue.svg";
    buttonCopy1.style.zIndex="4";
    holder.appendChild(buttonCopy1);
    buttonCopy2=document.createElement("img");
    buttonCopy2.className="circleButton4addOn";
    //buttonCopy2.textContent="+";
    buttonCopy2.src="images/plus_blue.svg";
    buttonCopy2.style.zIndex="4";
    holder.appendChild(buttonCopy2);
    buttonCopy3=document.createElement("img");
    buttonCopy3.className="circleButton4addOn";
    //buttonCopy3.textContent="+";
    buttonCopy3.src="images/plus_blue.svg";
    buttonCopy3.style.zIndex="4";
    holder.appendChild(buttonCopy3);
    //define initial positions
    bCopy1X=buttonCopy1.getBoundingClientRect().left;
    bCopy1Y=buttonCopy1.getBoundingClientRect().top;
    bCopy2X=buttonCopy2.getBoundingClientRect().left;
    bCopy2Y=buttonCopy2.getBoundingClientRect().top;
    bCopy3X=buttonCopy3.getBoundingClientRect().left;
    bCopy3Y=buttonCopy3.getBoundingClientRect().top;
    }

    //animate the buttons
    buttonCopy1.style.left=35+"vw";
    buttonCopy1.style.top=-22+"vw";
    buttonCopy2.style.left=5+"vw";
    buttonCopy2.style.top=-22+"vw";
    buttonCopy3.style.left=-25+"vw";
    buttonCopy3.style.top=-22+"vw";
    myMove();
}

function removeButtons()
{
    myMoveReverse();
    
}

function myMove() {

    buttonCopy1.style.display="inline-block";
    buttonCopy2.style.display="inline-block";
    buttonCopy3.style.display="inline-block";

    var count=0;

    var id = setInterval(frame, 16);
    function frame() {
        if (count==13) {
            clearInterval(id);
        } 
        else {
            buttonCopy1.style.top = parseFloat(buttonCopy1.style.top)-1.3+ 'vw';
            buttonCopy2.style.left = parseFloat(buttonCopy2.style.left)+1.3+"vw";
            buttonCopy3.style.top = parseFloat(buttonCopy3.style.top)+1.3+"vw";
            count++;
        }
    }
    
}
function myMoveReverse() {

    var count=0;

    var id = setInterval(frame, 16);
    function frame() {
        if (count==13) {
            clearInterval(id);
            buttonCopy1.style.display="none";
            buttonCopy2.style.display="none";
            buttonCopy3.style.display="none";
        } 
        else {
        buttonCopy1.style.top = parseFloat(buttonCopy1.style.top)+1.3+ 'vw';
        buttonCopy2.style.left = parseFloat(buttonCopy2.style.left)-1.3+"vw";
        buttonCopy3.style.top = parseFloat(buttonCopy3.style.top)-1.3+"vw";
        count++;
        }
    }
   
}


//TextField Elements
var textField=document.querySelector(".inputField");
var textFieldLabel=document.querySelector(".textFieldName");
var texBackField=document.querySelector(".textField");
var initFontSize=3;
textField.textContent="test";
textFieldLabel.style.fontSize=initFontSize+"vw";
textFieldLabel.style.left=-13+"vw";
textFieldLabel.style.top=-4.75+"vw";
textFieldLabel.style.marginBottom=0;
var count=0;
var textid;
textField.onclick=function(){
    textid=setInterval(textScale,2);
    textField.style.borderBottom="1px solid #232323";
};
function textScale()
{
    if(parseFloat(textFieldLabel.style.fontSize)<=(initFontSize*.5))
    {
        clearInterval(textid);
    }
    else
    {
        textFieldLabel.style.fontSize=parseFloat(textFieldLabel.style.fontSize)-.1+"vw";
        textFieldLabel.style.left=parseFloat(textFieldLabel.style.left)-.4+"vw";
        textFieldLabel.style.top=parseFloat(textFieldLabel.style.top)-.15+"vw";
        textFieldLabel.style.marginBottom=parseFloat(textFieldLabel.style.marginBottom)+.1+"vw";
    }
}
