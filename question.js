class Question{
constructor(){
    this.title=createElement('h2')
    this.question=createElement('h3')
    this.option1=createElement('h4')
    this.option2=createElement('h4')
    this.option3=createElement('h4')
    this.namebox=createInput("ENTER YOUR NAME")
    this.option4=createElement('h4')
    this.ansbox=createInput("ENTER YOUR ANS no.")
this.submit=createButton("SUBMIT")


}
hide(){
    this.title.hide()
    this.ansbox.hide()
    this.namebox.hide()
    this.submit.hide()

}
display(){


//canvas = createCanvas(850,400);

this.title.html("MY QUIZ GAME")
this.title.position(350,0)

this.submit.position(300,300)
   
    this.question.html("QUESTION:- What starts and ends with the letter 'E' but has only one letter?")
    this.question.position(150,80)


this.option1.html("a)EVERYONE")
this.option1.position(150,100)


this.option2.html("b)ENVELOPE")
this.option2.position(150,120)


this.option3.html("c)ESTIMATE")
this.option3.position(150,140)


this.option4.html("d)EXAMPLE")
this.option4.position(150,160)


this.namebox.position(150,230)


this.ansbox.position(350,230)
this.submit.mousePressed(()=>{
    this.title.hide()
    this.submit.hide()
    this.ansbox.hide()
    this.namebox.hide();
    contestant.name=this.namebox.value()
    contestant.ans=this.ansbox.value()
    contestant.updatecontestantinfo();
    contastantcount+=1
    contestant.index=contastantcount
    contestant.updateCount(contastantcount)
})


}
}