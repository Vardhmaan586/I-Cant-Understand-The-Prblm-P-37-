class Contestant{
    constructor(){
      this.name = null;
      //this.distance = 0;
      this.index = null;
    }

    update(){
      database.ref("contestantCount/contestant"+ this.index).set({
          name:this.name,
          //distance:this.distance
      })
    }

    updateCount(count){
      database.ref("/").update({
        contestantCount : count
      });
    }

    getCount(){
     var contestantCountRef = database.ref("contestantCount");
     contestantCountRef.on("value",function(data){
         contestantCount=data.val();
     })
    }

    static getContestantInfo(){
      var contestantInfoRef = database.ref("contestantCount");
      contestantInfoRef.on("value",function(data){
        //console.log(data.val())
      allContestant = data.val();
      });
    }
}