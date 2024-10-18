(()=>{"use strict";function t(t,e){const[n,o]=t,r=e.querySelectorAll(".coordinate");let c;for(let t=0;t<r.length;t+=1)if(c=r[t],Number(c.dataset.x)===n&&Number(c.dataset.y)===o)return c;return null}function e(e,n){const o=[];for(let r=0;r<e.length;r+=1){const c=t(e[r],n);c&&o.push(c)}return o}function n(t,n){const o=e(t.getMissedAttacks(),n);for(let t=0;t<o.length;t+=1)o[t].classList.add("miss")}function o(t,n){const o=e(t.getSuccessfulAttacks(),n);for(let t=0;t<o.length;t+=1)o[t].classList.add("hit")}document.querySelector(".player-board");const r=document.querySelector(".cpu-board"),c=document.getElementById("next"),s=document.querySelector(".game-info");function i(t){o(t,r),n(t,r),s.textContent="Take your shot.",r.disabled=!1,c.disabled=!0}function l(){return{board:function(){const t=[[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],[10,3],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],[10,4],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],[10,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[1,9],[2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[8,9],[9,9],[10,9],[1,10],[2,10],[3,10],[4,10],[5,10],[6,10],[7,10],[8,10],[9,10],[10,10]],e=[],n=[];return{placeShip:function(e){const n=e.length,o=function(t){const e=t;let n=0;return{hit:function(){return n+=1,n},isSunk:function(){return e===n}}}(n);for(let r=0;r<n;r+=1){const n=e[r],c=t.find((t=>JSON.stringify(t)===JSON.stringify(n)));c.length<3&&c.push(o)}return t},receiveAttack:function(o){let r;for(let e=0;e<t.length;e+=1){const c=t[e],s=c.filter((t=>"number"==typeof t));JSON.stringify(o)===JSON.stringify(s)&&c.length>2&&!n.includes(s)&&(r=o,c[2].hit())}return r?n.push(o):e.push(o),r},allShipsSunk:function(){for(let e=0;e<t.length;e+=1){const n=t[e];if(n.length>2&&!1===n[2].isSunk())return!1}return!0},getBoard:function(){return t},getMissedAttacks:function(){return e},getSuccessfulAttacks:function(){return n}}}()}}function u(t,e){return Math.floor(Math.random()*(e-t+1)+t)}const d=function(){const{board:t}=l();return{board:t}}(),a=document.querySelector(".player-board"),f=document.getElementById("shuffle"),h=document.getElementById("go"),y=document.getElementById("next");d.board.placeShip([[2,2],[2,3],[2,4]]),d.board.placeShip([[2,7],[3,7],[4,7],[5,7]]),function(e,r){const c=function(e,n){const o=[];for(let r=0;r<e.length;r+=1){const c=e[r];if(c.length>2){const e=t(c,n);e&&o.push(e)}}return o}(e.getBoard(),r);for(let t=0;t<c.length;t+=1)c[t].classList.add("placed-ship");n(e,r),o(e,r)}(d.board,a);const p=function(){const{board:t}=l();return{board:t,randomShot:function(t){const e=u(1,10),n=u(1,10);t.receiveAttack([e,n])}}}(),g=document.querySelector(".cpu-board");var b;p.board.placeShip([[9,3],[9,4],[9,5]]),p.board.placeShip([[3,10],[4,10],[5,10]]),f.addEventListener("click",(()=>{})),b=p.board,r.addEventListener("click",(t=>{const e=t.target,{x:i,y:l}=e.dataset,u=b.receiveAttack([Number(i),Number(l)]);o(b,r),n(b,r),function(t){s.textContent=t?"Hit!":"Miss."}(u),r.disabled=!0,c.disabled=!1})),h.addEventListener("click",(()=>{const t=document.querySelector("p:nth-child(2)");!function(t,e){const n=e;t.style.display="block",n.style.display="grid"}(document.querySelector("p:nth-child(4)"),g),function(t,e){const n=e;t.style.display="none",n.style.display="none"}(t,a),f.style.display="none",h.style.display="none",y.style.display="block",i(p.board)})),y.addEventListener("click",(()=>{g.disabled||i(p.board)}))})();