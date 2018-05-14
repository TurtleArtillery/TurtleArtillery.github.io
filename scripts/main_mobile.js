
//Main control of scipting elements for the index.html file

var backdrop=document.querySelector("body");
/*backdrop.addEventListener("touchstart",function(){this.style.backgroundColor="#00FF00";});
backdrop.addEventListener("touchend",function(){this.style.backgroundColor="#000000";});*/

var button1=document.querySelector(".circleButton");
button1.addEventListener("touchstart",function(){this.toggleClass("hover");});
button1.addEventListener("touchend",function(){this.toggleClass("hover")});

var button2=document.querySelector(".circleButton2");
button2.addEventListener("click",function(){});

var button3=document.querySelector(".circleButton3");
button3.addEventListener("click",function(){});

var heading=document.querySelector("h1");
var button=document.querySelector(".circleButton4");
var holder=document.querySelector(".sample1");
var buttonCopy1;
var buttonCopy2;
var buttonCopy3;
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
    buttonCopy1=document.createElement("h4");
    buttonCopy1.className="circleButton4";
    buttonCopy1.textContent="+";
    buttonCopy1.style.zIndex="4";
    holder.appendChild(buttonCopy1);
    buttonCopy2=document.createElement("h4");
    buttonCopy2.className="circleButton4";
    buttonCopy2.textContent="+";
    buttonCopy2.style.zIndex="4";
    holder.appendChild(buttonCopy2);
    buttonCopy3=document.createElement("h4");
    buttonCopy3.className="circleButton4";
    buttonCopy3.textContent="+";
    buttonCopy3.style.zIndex="4";
    holder.appendChild(buttonCopy3);
    }

    //animate the buttons
    buttonCopy1.style.right="78.25px";
    buttonCopy1.style.bottom="0px";
    buttonCopy2.style.right="152.25px";
    buttonCopy3.style.right="226.25px";
    buttonCopy3.style.bottom="0px";
    myMove();
}

function removeButtons()
{
    myMoveReverse();
}

function myMove() {
    
    var pos = parseFloat(buttonCopy1.style.bottom);
    var pos2 = parseFloat(buttonCopy2.style.right);
    var pos3 = parseFloat(buttonCopy3.style.bottom);

    
        
        var id = setInterval(frame, 1);
        function frame() {
            if (parseFloat(buttonCopy1.style.bottom) >= 60) {
                clearInterval(id);
            } 
            else {
                pos+=2; 
                buttonCopy1.style.bottom = pos + 'px';
                buttonCopy2.style.right = pos2-pos + "px";
                buttonCopy3.style.bottom = pos3-pos+"px";
            }
        }
    
}
function myMoveReverse() {
   
        var inc=2;
        var pos = parseFloat(buttonCopy1.style.bottom);
        var pos2 = parseFloat(buttonCopy2.style.right);
        var pos3 = parseFloat(buttonCopy3.style.bottom)
        var id = setInterval(frame, 1);
        function frame() {
            if (
                parseFloat(buttonCopy1.style.bottom) == 0) {
                clearInterval(id);
            } 
            else {
                buttonCopy1.style.bottom=parseFloat(buttonCopy1.style.bottom)-inc+"px";
                buttonCopy2.style.right=parseFloat(buttonCopy2.style.right)+inc+"px";
                buttonCopy3.style.bottom=parseFloat(buttonCopy3.style.bottom)+inc+"px";
            }
        }
   
}


//TextField Elements
var textField=document.querySelector(".inputField");
var textFieldLabel=document.querySelector(".textFieldName");
textFieldLabel.style.fontSize=20+"px";
textFieldLabel.style.left=-260+"px";
textFieldLabel.style.top=4+"px";
var count=0;
var textid;
textField.onclick=function(){
    textid=setInterval(textScale,2);
    textField.style.borderBottom="1px solid #232323";
};
function textScale()
{
    if(parseFloat(textFieldLabel.style.fontSize)==11)
    {
        clearInterval(textid);
    }
    else
    {
        textFieldLabel.style.fontSize=parseFloat(textFieldLabel.style.fontSize)-1+"px";
        textFieldLabel.style.left=parseFloat(textFieldLabel.style.left)-1+"px";
        textFieldLabel.style.top=parseFloat(textFieldLabel.style.top)-2.5+"px";
    }
}

/*
//Checkbox Elements
var chkbox=document.querySelector(".chkBox");
chkbox.style.width="32px";
chkbox.style.height="32px";
chkbox.style.backgroundColor="rgb(255,255,255)";
chkbox.style.left="0px";
var endSwitch=false;
var upSwitch=true;
var chkid;
var clicked=false;
var count=0;
var color1=[255,255,255];
var color2=[0,255,139];
var colorInterval=[color2[0]-color1[0],color2[1]-color1[1],color2[2]-color1[2]];
var a;

//heading.textContent=chkbox;
chkbox.onclick=function(){
    endSwitch=false;
    upSwitch=true;
    chkid=setInterval(chkPulse2,4);
};
function chkPulse2()
{
    
    if(endSwitch)
    {
        if(clicked)
        {
            clicked=false;
        }
        else{
            clicked=true;
        }
        count=-1;
        clearInterval(chkid);
    }
    else if(upSwitch)
    {
        chkbox.style.width=parseFloat(chkbox.style.width)+1+"px";
        chkbox.style.height=parseFloat(chkbox.style.height)+1+"px";
        chkbox.style.left=parseFloat(chkbox.style.left)-.5+"px";
        if(parseFloat(chkbox.style.width)==40)
        {
            upSwitch=false;
        }
    }
    else{
        chkbox.style.width=parseFloat(chkbox.style.width)-1+"px";
        chkbox.style.height=parseFloat(chkbox.style.height)-1+"px";
        chkbox.style.left=parseFloat(chkbox.style.left)+.5+"px";
        if(parseFloat(chkbox.style.width)<33)
        {
            endSwitch=true;
        }
    }
    //grade the color
    if(!clicked)
    {
        
        a="rgb("+Math.round(color1[0]+(colorInterval[0]*count/15))+","+
        Math.round(color1[1]+(colorInterval[1]*count/15))+","+
        Math.round(count*(colorInterval[2]/15)+color1[2])+")";
        chkbox.style.backgroundColor=a;
    }
    else
    {
        a="rgb("+Math.round(color2[0]-(colorInterval[0]*count/15))+","+
        Math.round(color2[1]-(colorInterval[1]*count/15))+","+
        Math.round(color2[2]-(colorInterval[2]*count/15))+")";
        chkbox.style.backgroundColor=a;
    }
    count++;
}
*/