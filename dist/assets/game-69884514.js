import"./style-e74fcfd1.js";import{b as h,n as v,p as I}from"./playAgainButton-d56b9698.js";import{r as n,p as r}from"./audio-63414c73.js";function B(){let e=document.getElementById("avatarsContainer");for(let t=0;t<n().length;t++)e.innerHTML+=`

        <div data-avatar-name="avatar1" class="avatarItem">

        <img src="${n()[t].avatar}" alt="">
        <h3>${n()[t].name}</h3>

        </div>
        `}function m(){const e=document.createElement("div");return e.classList.add("popup"),document.body.appendChild(e),e}function u(e,t){e.innerText=t}function c(e){e.style.display="block",setTimeout(()=>{f(e)},2e3)}function f(e){e.style.display="none"}function P(e){c(e),setTimeout(()=>{f(e)},15e3)}let d=[];function S(e,t,a){e.classList.remove("visible"),e.style.backgroundColor="",t.add(e.dataset.avatarNumber||""),d=Array.from(t),e.style.display="none",localStorage.setItem("eliminatedPlayers",JSON.stringify(Array.from(t))),u(a,`Eliminated player: ${n()[e.dataset.avatarNumber-1].name}`),r("elimination",.5,!1),c(a)}let E=document.getElementById("startButton"),b=document.getElementById("resultsButton");function N(){E.style.display="none",b.style.display="block"}function w(){return JSON.parse(localStorage.getItem("eliminatedPlayers"))}let l=[];function L(){w().forEach(e=>{l.push(n()[e-1])})}function M(){localStorage.setItem("eliminated",JSON.stringify(l))}function k(){localStorage.setItem("eliminatedPlayers",JSON.stringify(d))}function T(e,t){const a=e==null?void 0:e.dataset.avatarNumber;a&&(d.push(a),k(),L(),M(),u(t,`And the WINNER is: ${l[l.length-1].name}!!!`),P(t),N(),document.getElementById("mainMelody").pause(),r("applause",.5,!1))}function $(e,t){e.classList.add("selected"),e.style.transform="scale(1)",e.dataset.avatarNumber=(t+1).toString()}function A(e){for(let t=e.length-1;t>0;t--){const a=Math.floor(Math.random()*(t+1));[e[t],e[a]]=[e[a],e[t]]}return e}const C=document.getElementById("startButton");function G(){const e=new Set;C.addEventListener("click",t=>{t.preventDefault(),r("mainMelody",.3,!0);const a=m(),s=Array.from(document.getElementsByClassName("avatarItem"));s.forEach((p,g)=>{$(p,g)});const i=A(s);let o=0;const y=window.setInterval(()=>{o>=i.length-1?(clearInterval(y),T(i[o],a)):(S(i[o],e,a),o++)},3e3)})}function D(){B(),G(),n(),m(),h("backGame"),v("newGameGame"),I("playAgainGame")}D();