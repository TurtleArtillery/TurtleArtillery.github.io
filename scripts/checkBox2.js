
//Checkbox Elements
var chkboxes=document.querySelectorAll(".checkbox");
var heading=document.querySelector("h1");


//Set these Values
//Make sure you set the checkbox's width in your stylesheets.
var size=15;
var marginLeft=chkboxes[0].style.marginLeft;
var cRadius=size/5;
var color1=[255,255,255];
var color2=[0,255,139];


//Do not edit these
var colorInterval=[color2[0]-color1[0],color2[1]-color1[1],color2[2]-color1[2]];
var chkboxDict=[];
var chkid;
var boxSwitch=0;
var boxInterval;
for(var x=0;x<chkboxes.length;x++)
{
    
    chkboxes[x].style.width=size+"vw";
    chkboxes[x].style.height=size+"vw";
    chkboxes[x].style.display="inline-block";
    chkboxes[x].style.verticalAlign="middle";
    //chkboxes[x].style.position="absolute";
    chkboxes[x].style.marginLeft=marginLeft;
    chkboxes[x].style.backgroundColor="rgb("+color1[0]+","+color1[1]+","+color1[2]+")";
    //chkboxes[x].style.left="0px";
    chkboxes[x].style.borderRadius=cRadius+"vw";
    
    chkboxDict[chkboxDict.length]={};
    chkboxDict[x].endSwitch=false;
    chkboxDict[x].upSwitch=true;
    chkboxDict[x].clicked=false;
    chkboxDict[x].count=0;
    chkboxDict[x].a;
    chkboxDict[x].img=document.createElement("img");
    chkboxDict[x].img.src="images/check_white.svg";
    chkboxDict[x].img.style.width=size+"vw";
    chkboxDict[x].img.style.position="relative";
    chkboxDict[x].img.style.left=(size/6)+"vw";
    chkboxDict[x].img.style.bottom=size/10+"vw";
    chkboxDict[x].img.style.display="none";
    chkboxes[x].appendChild(chkboxDict[x].img);

    chkboxes[x].addEventListener("click",function(){
    determiner(this);
    boxInterval=setInterval(chkPulse,6);
    });
}

function determiner(caller)
{
    var z=0;
    for(var y=0;y<chkboxes.length;y++)
    {
        if(caller===chkboxes[y])
        {
            z=y;
        }
    }
    chkboxDict[z].endSwitch=false;
    chkboxDict[z].upSwitch=true;
    chkboxDict[z].count=0;
    boxSwitch=z;
}



function chkPulse()
{
    var caller=chkboxes[boxSwitch];
    var callDict=chkboxDict[boxSwitch];
    callDict.img.style.display="inline-block";
    if(callDict.endSwitch)
    {
        if(callDict.clicked)
        {
            callDict.clicked=false;
            callDict.img.style.display="none";
        }
        else{
            callDict.clicked=true;
        }
        callDict.count=-1;
        clearInterval(boxInterval);
    }
    else if(callDict.upSwitch)
    {
        caller.style.width=parseFloat(caller.style.width)+.5+"vw";
        caller.style.height=parseFloat(caller.style.height)+.5+"vw";
        caller.style.left=parseFloat(caller.style.left)-.25+"vw";
        if(parseFloat(caller.style.width)>=size*1.5)
        {
            callDict.upSwitch=false;
        }
    }
    else{
        caller.style.width=parseFloat(caller.style.width)-.5+"vw";
        caller.style.height=parseFloat(caller.style.height)-.5+"vw";
        caller.style.left=parseFloat(caller.style.left)+.25+"vw";
        if(parseFloat(caller.style.width)<=size)
        {
            
            callDict.endSwitch=true;
        }
    }
    //grade the color
    if(!callDict.clicked)
    {
        callDict.a="rgb("+Math.round(color1[0]+(colorInterval[0]*callDict.count/15))+","+
        Math.round(color1[1]+(colorInterval[1]*callDict.count/15))+","+
        Math.round(callDict.count*(colorInterval[2]/15)+color1[2])+")";
        caller.style.backgroundColor=callDict.a;
    }
    else
    {
        callDict.a="rgb("+Math.round(color2[0]-(colorInterval[0]*callDict.count/15))+","+
        Math.round(color2[1]-(colorInterval[1]*callDict.count/15))+","+
        Math.round(color2[2]-(colorInterval[2]*callDict.count/15))+")";
        caller.style.backgroundColor=callDict.a;
    }

    if(callDict.clicked)
    {
        callDict.img.style.display="inline-block";
    }
    callDict.count++;
}