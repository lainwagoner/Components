var array = ["0", "0","0"];
var eles=[];

function Box(counter){

    const that = this;

    this.counter = counter;
    this.ele=document.createElement("div");
        this.ele.style.fontSize = "18px";
        this.ele.style.height = "100px";
        this.ele.style.width = "200px";
        this.ele.style.justifyContent = "center";
        this.ele.style.alignItems = "center";
        this.ele.style.display = "flex";
        this.ele.style.borderRadius = "10px";
        this.ele.style.backgroundColor = "green";



    this.ele.innerHTML=this.counter;

    this.ele.addEventListener("click", function (){
       that.increaseNumber();

    })

    document.body.appendChild(this.ele);

}

Box.prototype.increaseNumber = function(){
    this.counter=this.counter + 1;
    this.ele.innerHTML=this.counter + "";

}

for (var i=0; i<array.length; i++){
    eles.push(new Box(array[i] = +0));


}

//I have no clue what I'm doing...
var colors= [{message:"", color:"blue"}, {message:"", color:"red"}, {message:"", color:"green"}];

for(var i=0; i<colors.length; i++){
    var ele = document.createElement("div");
    ele.style.backgroundColor= colors[i].color;
}
