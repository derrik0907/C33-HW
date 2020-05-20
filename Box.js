//making box
class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    this.Visiblity=255;
  }
  display(){
    //displaying boxes only if their velocity is less than 5
    if(this.body.speed < 5){
     super.display();
    }
    else{
      //removing boxes if their velocity if greater than 3 with a fading effect by reducing its visiblity
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
     }
   }
   //increasing scores if boxes are removed or they are not visible
   score() {
     if(this.Visiblity<0 && this.Visiblity>-1005) {
       score++;
     }
   }
};
