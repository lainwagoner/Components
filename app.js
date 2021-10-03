var array = [{counter:0, color:"blue"}, {counter: 0, color:"red"}, {counter:0, color:"green"}];
var eles=[];

function Box(button){

    const that = this;

    this.counter = button.counter;
    this.color = button.color;

    this.ele=document.createElement("div");
        this.ele.style.fontSize = "18px";
        this.ele.style.height = "100px";
        this.ele.style.width = "200px";
        this.ele.style.justifyContent = "center";
        this.ele.style.alignItems = "center";
        this.ele.style.display = "flex";
        this.ele.style.borderRadius = "10px";
        this.ele.style.backgroundColor = this.color;

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
    eles.push(new Box(array[i]));


}


