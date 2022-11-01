let Rose = new Object();
Rose.number = '1,25,4';
Rose.team = 'Bull,Nicks,Cavaliers,Timberwolves,Pistons';
console.log(Rose); 

let Rose1 = {
        number: '1,25,4',
        team: 'Bull,Nicks,Cavaliers,Timberwolves,Pistons'
    }
    console.log(Rose1); 

    function Player(number, team) {
        this.number = number
        this.team  = team
        // this.sayname = () => {
        //   console.log(this.name)
        // }
      }
      const Rose2 = new Player('1,25,4', 'Bull,Nicks,Cavaliers,Timberwolves,Pistons')

      console.log(Rose2)
      
