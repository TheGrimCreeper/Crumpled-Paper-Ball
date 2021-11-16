class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_img=loadImage("assets/canon.png")
    this.base_img=loadImage("assets/cannonBase.png")
  }
  display(){

  push()
  imageMode(CENTER)
  image(this.cannon_img,this.x,this.y,this.width,this.height)
  pop()

  image(this.base_img,70,20,200,200)
  
  }
}
