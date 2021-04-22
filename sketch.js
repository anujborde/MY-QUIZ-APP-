var canva;
var gamestate=0
var contastantcount,quiz,question,contestant
var namebox
var ansbox
var database
var allcontestants
function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database()


quiz=new Quiz()

quiz.getState()
quiz.start();


  
}


function draw(){
  background("pink");
  if(contastantcount===2){
    quiz.update(1);
    
  }
  if(gamestate===1){
    clear();
    quiz.play();
  }

  
 
}
