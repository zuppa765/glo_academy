(()=>{"use strict";(function(e){const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");function c(){const e=function(){const e=(new Date("3 january 2021 19:00").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),o=Math.floor(e/60%60);return{hours:Math.floor(e/60/60),minutes:o,seconds:t}}();t.textContent=r(e.hours),o.textContent=r(e.minutes),n.textContent=r(e.seconds),e.hours<=0&&e.minutes<=0&&e.seconds<=0&&(document.querySelector(".timer-numbers").innerHTML="<span>Акция закончилась!</span></span>")}function r(e){return(parseInt(e,10)<10?"0":"")+e}c(),setInterval(c,1e3)})(),(()=>{const e=document.querySelector("menu"),t=()=>{e.classList.toggle("active-menu")};document.body.addEventListener("click",(o=>{let n=o.target;if(n=n.closest(".menu"),n)t();else if(n=o.target,n.closest(".close-btn"))t();else if(n.matches("menu ul a"))e.classList.remove("active-menu");else{if(n=o.target,n=n.closest(".active-menu"),n)return;e.classList.remove("active-menu")}}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup-close");let n,c=0;const r=()=>{n=requestAnimationFrame(r),c<1?(c+=.1,e.style.opacity=c):cancelAnimationFrame(n)};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",document.documentElement.clientWidth>768&&(c=0,r())}))})),o.addEventListener("click",(()=>{e.style.display="none",c=0}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let n=e.target;n=n.closest(".service-header-tab"),n&&t.forEach(((e,c)=>{e===n&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(c)}))}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");let o,n,c=0;(()=>{for(let e=0;e<t.length;e++)o=document.createElement("li"),o.classList.add("dot"),document.querySelector(".portfolio-dots").append(o)})(),o=document.querySelectorAll(".dot"),o[0].classList.add("dot-active");const r=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e.length==c&&(t=0,c=0),e[t].classList.add(o)},s=()=>{r(t,c,"portfolio-item-active"),r(o,c,"dot-active"),c++,(c>=t.length||c>=o.length)&&(c=0),l(t,c,"portfolio-item-active"),l(o,c,"dot-active")},a=(e=3e3)=>{n=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault();let n=e.target;n.matches(".portfolio-btn, .dot")&&(r(t,c,"portfolio-item-active"),r(o,c,"dot-active"),n.matches("#arrow-right")?c++:n.matches("#arrow-left")?c--:n.matches(".dot")&&o.forEach(((e,t)=>{e===n&&(c=t)})),c>=t.length||c<0&&(c=t.length-1),l(t,c,"portfolio-item-active"),l(o,c,"dot-active"))})),a(1e4),e.addEventListener("mouseover",(e=>{e.target.matches(".portfolio-btn, .dot")&&clearInterval(n)})),e.addEventListener("mouseout",(e=>{e.target.matches(".portfolio-btn, .dot")&&a()}))})(),(()=>{const e=document.querySelectorAll(".command__photo");let t=[];for(let o=0;o<e.length;o++)t[o]=e[o].getAttribute("src");e.forEach(((e,o)=>{e.addEventListener("mouseenter",(e=>{e.target.src=e.target.dataset.img})),e.addEventListener("mouseleave",(e=>{e.target.src=t[o]}))}))})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),r=document.querySelector(".calc-day"),l=document.getElementById("total");t.querySelectorAll("input").forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^+\d]/g,"")}))})),t.addEventListener("change",(t=>{let s=t.target;(s.matches("select")||s.matches("input"))&&(()=>{let t=0,s=1,a=1;const i=o.options[o.selectedIndex].value,d=+n.value;c.value>1&&(a+=(c.value-1)/10),r.value&&r.value<5?s*=2:r.value&&r.value<10&&(s*=1.5),i&&d&&(t=e*i*d*a*s),((e,t)=>{let o=null;const n=t=>{o||(o=t);const c=Math.min((t-o)/1500,1);l.textContent=Math.floor(c*(e-0)+0),c<1&&window.requestAnimationFrame(n)};window.requestAnimationFrame(n)})(t)})()}))})(100),(()=>{const e=document.querySelectorAll("form"),t=document.createElement("div");t.style.cssText="font-size:2rem",t.style.color="white",[...e].forEach((e=>{e.addEventListener("submit",(n=>{n.preventDefault(),e.append(t),t.textContent="";const c=document.createElement("div");c.classList.add("sk-three-bounce");const r=document.createElement("div");r.classList.add("sk-bounce-dot"),c.appendChild(r);let l=r.cloneNode(!0),s=r.cloneNode(!0);e.appendChild(c),c.appendChild(l),c.appendChild(s);const a=new FormData(e);let i={};a.forEach(((e,t)=>{i[t]=e})),o(i).then((e=>{if(200!==e.status)throw new Error("status network not 200");c.remove(),t.textContent="Спасибо! Мы с вами скоро свяжемся!",console.log(e)})).catch((e=>{console.error(e),setTimeout((()=>{c.remove(),t.textContent="Что-то пошло не так"}),1500)})),e.reset()}))}));const o=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})(),(()=>{const e=document.querySelector("main>a"),t=document.querySelector("menu").querySelectorAll("ul>li>a"),o=e=>{e.preventDefault();let t=e.target;t=t.closest("a"),t=t.getAttribute("href"),console.log("target: ",t);const o=document.querySelector(t).offsetTop;scroll({top:o,behavior:"smooth"})};e.addEventListener("click",o);for(const e of t)e.addEventListener("click",o)})()})();