allSqrs=document.querySelectorAll(".sqr");let title=document.getElementById("title"),turn="X";function _click(e){let n=document.getElementById(e);"X"===turn&&""===n.innerHTML?(n.innerHTML="X",title.innerHTML="Player (O) turn..",turn="O",winner(),draw()):"O"===turn&&""===n.innerHTML&&(n.innerHTML="O",title.innerHTML="Player (X) turn..",turn="X",winner(),draw())}function winner(){[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].forEach((e=>{const n=e.every((e=>"X"===allSqrs[e].innerHTML)),t=e.every((e=>"O"===allSqrs[e].innerHTML));if(n)for(sqr of(celebrate_winner(allSqrs[e[0]],allSqrs[e[1]],allSqrs[e[2]]),allSqrs))""===sqr.innerHTML&&(sqr.innerHTML=" ");else if(t)for(sqr of(celebrate_winner(allSqrs[e[0]],allSqrs[e[1]],allSqrs[e[2]]),allSqrs))""===sqr.innerHTML&&(sqr.innerHTML=" ")}))}function draw(){const e=[];allSqrs.forEach((n=>{""!==n.innerHTML&&e.push(n)}));const n=!title.classList.contains("Winning");if(9===e.length&&n){e.forEach((e=>{e.classList.add("drawCase")})),title.innerHTML="Tie Case.";let n=setInterval((()=>{title.innerHTML+=" ."}),2e3);setTimeout((()=>{clearInterval(n)}),6e3),setTimeout((()=>{window.location.reload(!0)}),9e3)}}function celebrate_winner(e,n,t){e.setAttribute("class","winningCase"),n.setAttribute("class","winningCase"),t.setAttribute("class","winningCase"),document.body.style.cssText="background: #00284d;\n   transition: 10s",title.innerHTML=`${e.innerHTML}   wins`,title.classList.add("Winning");let r=setInterval((()=>{title.innerHTML+=" ."}),1500);setTimeout((()=>{clearInterval(r)}),5e3),confetti.start(),setTimeout((()=>{window.location.reload(!0)}),25e3)}function reload(){window.location.reload(!0)}start_btn=document.querySelector("#restart");