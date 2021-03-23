class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png");
    this.tragectry=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x>10 && this.body.position.x>220){
      var pos = [this.body.position.x,this.body.position.y]
      this.tragectry.push((pos));
      var i = 0;
      for (i=0;i<this.tragectry.length;i=i+1){
        image(this.smokeImage,this.tragectry[i][0],this.tragectry[i][1])
      }
    }
    

    super.display();
  }
}
