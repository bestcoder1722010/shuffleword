let sword = ["arduino","python","javascript","uno","chess","bluestrip","flooring","ludo","coding","coffee","encourage","happy","exam","flamingo","india","bestfriend","parents"];
let sco = 7;
let score = 0;
let play = false;
let crneword = () => {
    let rnum = Math.floor(Math.random() * sword.length);
    let newtewo = sword[rnum];
    return newtewo;
}
let scr = (spl) =>{
    for (let i = spl.length - 1; i>=0; i--) {
        let temp = spl[i];
        let j = Math.floor(Math.random() * (i+1));
        spl[i] = spl[j];
        spl[j] = temp;
    }
    return spl;
}
function start(){
    if(!play){
        play = true;
        document.getElementById("but").innerHTML = "GUESS";
        document.getElementById("imp1").style.opacity = "1";
        document.getElementById("but").style.top = "65vh";
        document.getElementById("but").style.width = "20vw";
        document.getElementById("but").style.height = "10vh";
        document.getElementById("but").style.fontSize = "3vw";
        document.getElementById("tries").innerHTML = "TRIES LEFT:"+sco+" , YOUR SCORE IS:"+score;
        document.getElementById("tries").style.fontSize = "4.2vh";
        document.getElementById("tries").style.top = "7vh";
        newwor = crneword();
        scraword = scr(newwor.split("")).join("");
        document.getElementById("wor").innerHTML = "YOUR SCRAMBLE WORD IS:"+scraword;
        document.getElementById("wor1").innerHTML = "CAN YOU GUESS IT?";
    } else{
        let inpt = document.getElementById("imp1").value;
        let inpt1 = inpt.toLowerCase();
        if(inpt1 === newwor){
            score += 10
            document.getElementById("wor1").innerHTML = "IT IS CORRECT";
            document.getElementById("but").style.width = "250px";
            document.getElementById("but").innerHTML = "NEXT WORD";
            document.getElementById("tries").innerHTML = "TRIES LEFT:"+sco+", YOUR SCORE IS:"+score;
            play = false;
        }
        else{
            document.getElementById("wor1").innerHTML = "IT IS INCORRECT,THE WORD IS "+newwor;
            sco = sco-1;
            score = score-10;
            play = false;
            document.getElementById("but").innerHTML = "NEXT WORD";
            document.getElementById("tries").innerHTML = "TRIES LEFT:"+sco+", YOUR SCORE IS:"+score;
            if(sco<=0){
                document.getElementById("wor1").innerHTML = "YOU FAILED";
                document.getElementById("wor1").style.top = "170px";
                document.getElementById("wor").style.opacity = 0;
                document.getElementById("tries").innerHTML = "YOUR SCORE IS:"+score;
                document.getElementById("imp1").style.opacity = 0;
                document.getElementById("but").style.opacity = 0;
                document.getElementById("but1").style.opacity = 1;
                document.getElementById("but1").style.zIndex = 1;
            }
        }
    }
}