var cvs = document.getElementById('canvas')
var ctx = cvs.getContext('2d')

var personage = new Image ()
var down = new Image ()
var tree = new Image ()
var bg = new Image ()

var sound = new Audio()
var score_audio = new Audio()

tree.src = 'img/tree.gif'
bg.src = 'img/bg.gif'
personage.src = 'img/personage.gif'
down.src = 'img/down.gif'

sound.src = "sound/krokozhu.mp3"
score_audio.src = "sound/score.mp3"

var xPos = 30
var yPos = 415
var run =1.5
var score =0




document.body.onkeydown = function ( event ) {
    yPos -=120
    sound.play()
}

var pipe = [
  {x : cvs.width,y : 430}
]

function draw () {
  ctx.drawImage (bg , 0,0)
  for (var i=0; i<pipe.length;i++){
    ctx.drawImage (tree , pipe[i].x,pipe[i].y,50,50)
    pipe[i].x= pipe[i].x-2;

    if (pipe[i].x==cvs.width /2){
      pipe.push ({
        x : cvs.width,
        y : 430
      })
    }
    if(xPos == pipe[i].x && yPos > 410 && yPos <480 )
    {
   location.reload()
     }
    if (pipe[i].x == 4) {
         score++
         score_audio.play()
    }
  //  if (score==2) {
  //    pipe[i].x--
  //  }


  }



  if (yPos<415)
  yPos+=run

  ctx.fillStyle = '#000'
  ctx.font = '20px Verdana'
  ctx.fillText ("Счёт: " + score , 10 , 50)

  ctx.drawImage (down , 0,480);
  ctx.drawImage (personage , xPos,yPos);

  setTimeout(draw, 10);


}

personage.onload = draw;
