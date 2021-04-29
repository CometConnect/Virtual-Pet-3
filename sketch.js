var  dog, happyDog, database, foodS, foodStock;
var dogIMG , dogIMG1 , val ;
var happy;
var buttons;
var lastfeed=0;
var backcolor="green";
var happyTIME;
var sene=0;
var heart;

function preload()
{
  dogIMG = loadImage( "images/dogImg.png" );
  dogIMG1 = loadImage( "images/dogImg1.png" );
  Bedroom = loadImage( "images/BedRoom.png" );
  Garden = loadImage( "images/Garden.png" );
  WashRoom = loadImage( "images/Wash Room.png" );
  LivingRoom = loadImage( "images/Living Room.png" );
  HEARt = loadImage( "images/heart.png" );
}

function setup()
{
  val=10;
  createCanvas( 500 , 500 );
  database = firebase.database();
  foodStock = database.ref( 'Food' );
  foodStock.on( "value" , readStock );
  //dog = image( dogIMG , 200 , 350 , 100 , 100 );
  happy = "no";
  buttons = new elements();
  buttons.display();
  backcolor=LivingRoom;

}


function draw()
{  
  background(backcolor);
  drawSprites();
  hearts();
  happyTIME++;
  push();
  fill( "red" );
  textSize( 20 );
  text( "Remaining food : "+val , 170 , 100 );
  text( "Last feed : "+Math.round(lastfeed/24)+"min" , 200 , 150 );
  pop();
  ifs();
}

function readStock(data)
{
  val = data.val();
}

function writeStock(x)
{
  if( x<=0 )
  {
    x = 0;
  }else
  {
    x = x - 1;
    happy = "yes";
  }

  database.ref( '/' ).update(
                              {
                                Food:x
                              }
                            );
}
function setfood(num)
{
  database.ref( '/' ).update(
    {
      Food:num
    }
  );
}
function ifs()
{
  if(happy==="u")
  {

  }else
  {
    if(happy==="no")
    {
      //dog = image( dogIMG , 200 , 350 , 100 , 100 );
    }else//( happy==="yes" )
    {
      //dog = image( dogIMG1 , 200 , 350 , 100 , 100 );
    }
  }
  if( happyTIME%240===0 )
  {
    happy="no";
  }
  if(happy==="no")
  {
    lastfeed++;
  }
  if(happy==="yes")
  {
    lastfeed = 0;
  }
  if((Math.round(lastfeed/24))>3 && (Math.round(lastfeed/24))<60)
  {
    push();
    fill( "red" );
    textSize( 20 );
    text( "Warning : Your dog is hungry" , 120 , 70 );
    pop();
    buttons.feed.show();
  }
  if((Math.round(lastfeed/24))>60)
  {
    push();
    fill( "red" );
    textSize( 20 );
    text( "Warning : Your dog is very hungry" , 120 , 70 );
    pop();
  }
  if((Math.round(lastfeed/24))>90)
  {
    backcolor="black";
    buttons.hide();
    push();
    fill( "white" );
    textSize( 20 );
    text( buttons.name.value() + " starved to death", 150 , 250 );
    pop();
    happy="u";
    //dog = image( dogIMG , 999 , 999 , 100 , 100 );
  }
  if( val <= 19 )
  {
    buttons.add.show();
  }else
  {
    buttons.add.hide();
  }
}
function setState( state )
{
  database.ref( "/" ).update({
                              gameState : state
                              });
}
function scene(cene)
{
  if( cene===1 )
  {
    backcolor = Bedroom ;
  }
  if( cene===2 )
  {
    backcolor = Garden ;
  }
  if( cene===3 )
  {
    backcolor = LivingRoom ;
  }
  if( cene===4 )
  {
    backcolor = WashRoom ;
    sene=0;
  }
}
function hearts()
{
  image( HEARt , 100 , 250 , 50 , 50);
  
  tint( 100 , 255 );
}