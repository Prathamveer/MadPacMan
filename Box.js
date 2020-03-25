class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/box.png");
  }
  score(){
    if(this.body.speed < 3){
      score++;
    }
  }
};
