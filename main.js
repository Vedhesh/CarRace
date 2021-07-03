canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 100;
car1_height = 90;
car1_image = "f.png";
car1_X = 10;
car1_Y = 10;

car2_width = 100;
car2_height = 90;
car2_image = "g.png";
car2_X = 10;
car2_Y = 250;

background_image = "e.png";

function add() {
    background_img_tag = new Image();
    background_img_tag.onload = uploadBackground;
    background_img_tag.src = background_image;

    car1_img_tag = new Image();
    car1_img_tag.onload = uploadcar1;
    car1_img_tag.src = car1_image;

    car2_img_tag = new Image();
    car2_img_tag.onload = uploadcar2;
    car2_img_tag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_img_tag,car1_X,car1_Y,car1_width,car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_img_tag,car2_X,car2_Y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed)

    if(keypressed=='38'){
        up();
        console.log("Up");
    }
    if(keypressed=='40'){
        down();
        console.log("Down");
    }
    if(keypressed=='37'){
        left();
        console.log("Left");
    }
    if(keypressed=='39'){
        right();
        console.log("Right");
    }
    if(keypressed=='87'){
        W();
        console.log("W");
    }
    if(keypressed=='83'){
        S();
        console.log("S");
    }
    if(keypressed=='65'){
        A();
        console.log("A");
    }
    if(keypressed=='68'){
        D();
        console.log("D");
    }
}

function up(){
    if(car1_Y>=0){
        car1_Y -= 10;
        console.log("When up Is Pressed: X="+car1_X+"Y="+car1_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function down(){
    if(car1_Y<=500){
        car1_Y += 10;
        console.log("When down Is Pressed: X="+car1_X+"Y="+car1_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
    
}

function left(){
    if(car1_X>=0){
        car1_X -= 10;
        console.log("When left Is Pressed: X="+car1_X+"Y="+car1_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function right(){
    if(car1_X<=700){
        car1_X += 10;
        console.log("When right Is Pressed: X="+car1_X+"Y="+car1_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function W(){
    if(car2_Y>=0){
        car2_Y -= 10;
        console.log("When W Is Pressed: X="+car2_X+"Y="+car2_Y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function S(){
    if(car2_Y<=500){
        car2_Y += 10;
        console.log("When S Is Pressed: X="+car2_X+"Y="+car2_Y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
    
}

function A(){
    if(car2_X>=0){
        car2_X -= 10;
        console.log("When A Is Pressed: X="+car2_X+"Y="+car2_Y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function D(){
    if(car2_X<=700){
        car2_X += 10;
        console.log("When D Is Pressed: X="+car2_X+"Y="+car2_Y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}


