//Create variables here
var dog, dogimg ,dogimg1
var database
var Foods, foodstock
function preload()
{
dogimg= loadImage("images/dogimg.png")  
dogimg1= loadImage("images/dogimg1.png")
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database()
  dog=createSprite(200,300)
  dog.addImage(dogimg)
  dog.scale=0.1
  foodstock= database.ref("Food")
  foodstock.on("value",readstock)

}


function draw() {  

  background ("green")
if(keyWentDown(UP_ARROW)){
writeStocks(Foods)
dog.addImage(dogimg1)
}
drawSprites();
fill("red")
textSize(50)
text("foodremaianing:"+ Foods, 170,200)

}

function readstock(data){
  Foods=data.val()
}

function writeStocks(x){
  if(x<=0){
    x=0

  }
  else{x=x-1
  } 
  database.ref("/").update({
    Food:x
  })
}















