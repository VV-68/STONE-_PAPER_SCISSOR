           let pEl=document.querySelector(".para");
            
            let newObj=JSON.parse(localStorage.getItem('data')) || undefined;
            let obj1=newObj || {
                win:0,
                lose:0,
                tie:0
            };
            let res='';
            
                pEl.innerText=`RESULTS 
                WIN : ${obj1.win}    LOSE : ${obj1.lose}    TIE : ${obj1.tie}`;

            function clickedfn(clickedB){
                clickedB=clickedB.toUpperCase();
                let move = pickMove();
                move=move.toUpperCase();
                if(clickedB==='ROCK'){
                    if(move==='ROCK'){
                        obj1.tie++;
                        res='TIE';
                    } 
                    else if(move==='PAPER'){
                        obj1.lose++;
                        res='COMPUTER WON';
                    } 
                    else {
                        obj1.win++;
                        res='YOU WIN';
                    }

                }else if(clickedB==='PAPER'){
                    if(move==='ROCK') {
                        console.log('you win');
                        obj1.win++;
                        res='YOU WIN';
                    }
                    else if(move==='PAPER'){
                         obj1.tie++;
                         res='TIE';
                    }
                    else {
                        console.log('computer won');
                        obj1.lose++;
                        res='COMPUTER WON';
                    }
                }else if(clickedB==='SCISSOR'){
                    if(move==='ROCK') {
                        res='COMPUTER WON';
                        obj1.lose++;
                    }
                    else if(move==='PAPER') {
                        obj1.win++;
                        res='YOU WIN';
                    }
                    else {
                        obj1.tie++;
                        res='TIE';
                    }
                }
                pEl.innerHTML=`YOU PICKED <img class="im2" src="${clickedB}-emoji.png">  COMPUTER PICKED <img class="im2" src="${move}-emoji.png"><br> <br>
                ${res}<br><br>

                RESULTS <br>
                WIN : ${obj1.win}    LOSE : ${obj1.lose}    TIE : ${obj1.tie}`;


                let s=JSON.stringify(obj1);
                localStorage.setItem('data',s);

            }

            function pickMove(){
                let num = Math.random();
                if(num >= 0 && num <(1/3)){
                    return 'rock';
                }else if(num >= (1/3) && num <(2/3)){
                    return 'paper';
                }else if(num >= (2/3) && num <1){
                    return 'scissor';
                }
            }