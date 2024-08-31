var clicked=0;
function generateinit()
{
for(var i=1;i<=lines;i++)
{
    var width=window.innerWidth+"px";
    var height=window.innerHeight+"px";
    var classdiv=document.createElement("div");
    var mod=document.querySelector("div");
    var container=document.querySelector("#container");
    container.style.cssText="display:flex;flex-direction:column;width:${width};height:${height};";
    classdiv.style.cssText="display:flex;flex-direction:row;";
    for(var j=1;j<=rows;j++)
        {
        var newDiv=document.createElement("div");
        newDiv.addEventListener("click",function(){clicked=1;})
        newDiv.addEventListener("mouseover",function(){if(clicked)this.style.backgroundColor="black";});
        classdiv.appendChild(newDiv);
    }
    container.appendChild(classdiv);
}
}
var rows=16;
var lines=16;
var size=document.querySelector("#size");
size.addEventListener("click",function()
{
    rows=window.prompt("Add the desired number of rows. It must be a number between 1 and 100!");
    lines=window.prompt("Add the desired number of lines. It must be a number between 1 and 100!");
    if(rows>=1 && rows<=100 && lines>=1 && lines<=100)
    {
        var cont=document.querySelector("#container");
        cont.innerHTML="";
        generateinit();
        clicked=0;
    }
    else
    {
        alert("Your input does not respect the instructions!")
    }
})

var btn=document.querySelector("#rst");
btn.addEventListener("click",function(){
    var cont=document.querySelector("#container");
        cont.innerHTML="";
        clicked=0;
    generateinit();
})

generateinit();

document.querySelector("#instr").addEventListener("click",function(){alert("Just click to start drawing, is a Etch a Sketch, why did you expect?")})