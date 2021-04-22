class Quiz{
    constructor(){
        
    }

   

async start(){
    if(gamestate===0){
contestant=new Contastant()
var contastantcountref=await database.ref('contestantcount').once("value")
if(contastantcountref.exists()){
    contastantcountref=contastantcountref.val();
    contestant.getCount(); 
}
question=new Question()
    question.display();
    }

    
}
display(){
    
}

    getState(){
        database.ref("gamestate").on("value",(data)=>{
            gamestate=data.val();
        })
    }

update(state){
database.ref('/').update({
    gamestate:state
})

}

play(){
    question.hide();
    background('yellow')
    textSize(30)
    text("RESULT OF THE QUIZ",350,50)
    Contastant.getplayerinfo();
    if(allcontestants!==undefined){
        text("Note:Contestant who answered correct will be highlighted in green colour",120,250)
      var y=300
for(var plr in allcontestants ){
    var correctans="b"
    if(correctans===allcontestants[plr].ans){
        fill("green")
    }
    else{
        fill("red")
    }
    y+=20
    text(allcontestants[plr].Name+": "+allcontestants[plr].ans,250,y)
}
    }


}

}