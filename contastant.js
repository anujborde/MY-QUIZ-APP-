class Contastant{
    constructor(){
    this.name=null
    this.index=null
 this.ans=0

    }
    getCount(){
        database.ref('contestantcount').on("value",(data)=>{
            contastantcount=data.val()
        })
    }
    updateCount(count){
        database.ref('/').update(
            {
                contestantcount:count
            }
        )
    }
    updatecontestantinfo(){
var playerindex="Contestants/contestant"+this.index
database.ref(playerindex).set({
    Name:this.name,
   ans:this.ans 
})
    }

  static getplayerinfo(){
database.ref("Contestants").on("value",(data)=>{
    allcontestants=data.val();
})


    }
    
}