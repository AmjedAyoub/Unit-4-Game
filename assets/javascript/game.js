


$(document).ready(function() {
    
    var players=[
    {index : "0", name : "R2-D2", health : "120", attack : "8", defense : "25", pic : "assets/images/pl1.jpg"},
    {index : "1", name : "Darth", health : "100", attack : "10", defense : "5", pic : "assets/images/pl2.jpg"},
    {index : "2", name : "Dameron", health : "180", attack : "7", defense : "15", pic : "assets/images/pl3.jpeg"},
    {index : "3", name : "Chewbacca", health : "150", attack : "11", defense : "28", pic : "assets/images/pl4.webp"}
    ];
    var myplayer;
    var enmSelected=false;
    var gameover=false;
    var myIndex;
    var myHealth;
    var myAttack;
    var enmIndex;
    var enmHealth;
    var enmDefense;
    var count=3;
    function name(params) {
        
    }

    $(".player").click(function() {
        var ply=$(this);
        var myobj=ply.attr("data-player");
        console.log(myobj);
        myIndex=myobj;
        myplayer=myobj;
        // console.log(b);

        var newdiv = $("<div class = 'card player'>");
        var name=$("<p>");
        var health=$("<p id = 'myHealth'>");
        var newimg=$("<img>")
        
        newimg.attr("src",players[myobj].pic);
        name.text(players[myobj].name);
        health.text(players[myobj].health);
        myHealth=parseInt(players[myobj].health);
        myAttack=parseInt(players[myobj].attack);
        newdiv.append(name, newimg, health);

        $("#myArea").empty();
        $("#choose").empty();
        $("#your").empty();
        $("#your").append( newdiv);

        for (var i = 0; i < players.length; i++) {
            if(players[i].index!==myobj)
            {   
                var newdiv1 = $("<div class = 'card myenemies enemies'>");
                newdiv1.attr("data-player",players[i].index);
                var nameEnemy=$("<p>");
                var healthEnemy=$("<p>");
                var newimg1=$("<img>")
                newimg1.attr("src",players[i].pic);
                nameEnemy.text(players[i].name);
                healthEnemy.text(players[i].health);
                newdiv1.append(nameEnemy, newimg1, healthEnemy);
                $("#myenemies").append(newdiv1);

                newdiv1.bind("click", function(){
                    if(!enmSelected){
                    var enm=$(this);
                    console.log(enm.text());
                    var myobjenm=enm.attr("data-player");
                    enmIndex=myobjenm;
                    console.log(myobjenm);
                    var newdiv = $("<div class = 'card defender'>");
                    var name=$("<p>");
                    var health=$("<p id = 'enmHealth'>");
                    var newimg=$("<img>")
                    enm.remove();

                    newimg.attr("src",players[myobjenm].pic);
                    name.text(players[myobjenm].name);
                    health.text(players[myobjenm].health);
                    newdiv.append(name, newimg, health);
                    enmHealth=parseInt(players[myobjenm].health);
                    enmDefense=parseInt(players[myobjenm].defense);
                    $("#defender").empty();
                    $("#defender").append( newdiv);
                    enmSelected=true;
                };
                });

            }            
        }
        
    });

    $("#attack").click(function () {
        if(myHealth>0 && enmHealth>0){
        var myH=document.getElementById("myHealth");
        var enmH=document.getElementById("enmHealth");
        enmHealth=enmHealth-myAttack;
        myAttack=myAttack+parseInt(players[myIndex].attack);
        myHealth=myHealth-enmDefense;
        if(enmHealth<=0)
        {
            enmH.textContent="" + enmHealth;
            count--;

            if(count===0){
                var para=$("<h1>");
                var btn=$("<button id = 'restart'>");
                para.text("GONGRATS YOU WON!!!");
                btn.text("Restart");
                $("#your").append(para, btn);
                gameover=true;
                var p1 =$("<p>");
                p1.text("All your enemy have been defeted");
                $("#defenderPara").empty();
                $("#defenderPara").append(p1);

                btn.bind("click", function(){
                    location.reload(true);
                })
            }
            else{
                var para=$("<h1>");
                para.text("Select another enemy!!!");
                $("#defender").append(para);
                var p1 =$("<p>");
                p1.text("Your enemy has been defeted");
                $("#defenderPara").empty();
                $("#defenderPara").append(p1);
                enmSelected=false;
            }
            
        }
        else if(myHealth<=0)
        {
            myH.textContent="" + myHealth;
            if(!gameover){
            var para=$("<h1>");
            var btn=$("<button id = 'restart'>");
            para.text("GAME OVER!!!");
            btn.text("Restart");
            $("#your").append(para, btn);
            var p1 =$("<p>");
            p1.text("You been defeted");
            $("#defenderPara").empty();
            $("#defenderPara").append(p1);
            gameover=true;
            btn.bind("click", function(){
                location.reload(true);
            })
            }
        }
        else{
            enmH.textContent="" + enmHealth;
            myH.textContent="" + myHealth;
            var p1 =$("<p>");
            var p2 =$("<p>");
            p1.text("You have attacked "+players[enmIndex].name+" for "+myAttack+" damage");
            p2.text(players[enmIndex].name+" attacked you back for "+enmDefense+" damage");
            $("#defenderPara").empty();
            $("#defenderPara").append(p1,p2);
        }

        }
       
        
    });
    






    $(".player").hover(function () {
        var b=$(this);
        $(this).css("background-color", "greenyellow");
    },
    function () {
        var b=$(this);
        $(this).css("background-color", "#fff");
    });





});