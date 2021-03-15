class Question{
    constructor(){
        var title = createElement("h2");
        var question = createElement("h3");
        var option1 = createElement("h3");
        var option2 = createElement("h3");
        var input;
    }
    
    hide(){
        
    }

    display(){
        ths.title.html("My Quiz Game");
        this.title.position(350,0);
        
        this.question.html("Question :- Which is the Largest Continent of the World");
        this.question.position(150,80);
        
        this.option1.html("Asia");
        this.option1.position(150,100);
        
        this.option2.html("Europe");
        this.option2.position(150,120);

        
    }

    
}