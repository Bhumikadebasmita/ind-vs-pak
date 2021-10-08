class Bullet
{
    constructor() {
        this.x = 100;
		this.y=500;
		this.spt=createSprite(this.x, this.y, 350,100);
		this.spt.shapeColor="red";
        this.spt.scale=0.15;
        this.spt.velocityX=9

        this.x = 900;
		this.y=500;
		this.spt=createSprite(this.x, this.y, 350,100);
		this.spt.shapeColor="green";
        this.spt.scale=0.15;
        this.spt.velocityX=-9;

        this.x = 900;
		this.y=200;
		this.spt=createSprite(this.x, this.y, 350,100);
		this.spt.shapeColor="green";
        this.spt.scale=0.15;
        this.spt.velocityX=-9;

        this.x = 900;
		this.y=800;
		this.spt=createSprite(this.x, this.y, 350,100);
		this.spt.shapeColor="green";
        this.spt.scale=0.15;
        this.spt.velocityX=-9;
    }

    
}