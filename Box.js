class Box{
    constructor(x, y, width, height,angle) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        this.Visibility = 225;

        World.add(world, this.body);
      }
      display(){

        if(this.body.speed < 3){

          var angle = this.body.angle;
          push();
         translate(this.body.position.x, this.body.position.y);
          rectMode(CENTER);
          rotate(angle);
          fill("pink");
          rect( 0, 0, this.width, this.height);
          pop();

         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 100;
          // tint(255,this.Visiblity);
          // rect( this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
         }
        }
       
}
