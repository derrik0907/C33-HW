//making pigs
class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,70,70);
    this.image = loadImage("sprites/face1.png");
    this.Visiblity = 255;
  }

 display(){
   //displaying pigs only if their velocity is less than 3
   if(this.body.speed < 3){
    super.display();
   }
   else{
     //removing pigs if their velocity if greater than 3 with a fading effect by reducing its visiblity
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
    }
  }
  //increasing scores if pigs are removed or they are not visible
  score() {
    if(this.Visiblity<0 && this.Visiblity>-1005) {
      score++;
    }
  }
};