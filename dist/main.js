(()=>{"use strict";function t(t,n){const r=function(t,n){const r=[];for(let e=0;e<t.length;e+=1){const o=t[e],[c,u]=o;if(o.length>2){const t=n.querySelectorAll(".coordinate");for(let n=0;n<t.length;n+=1){const e=t[n];Number(e.dataset.x)===c&&Number(e.dataset.y)===u&&r.push(e)}}}return r}(t,n);for(let t=0;t<r.length;t+=1)r[t].classList.add("placed-ship")}function n(){return{board:function(){const t=[[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],[10,3],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],[10,4],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],[10,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[1,9],[2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[8,9],[9,9],[10,9],[1,10],[2,10],[3,10],[4,10],[5,10],[6,10],[7,10],[8,10],[9,10],[10,10]],n=[];return{placeShip:function(n){const r=n.length,e=function(t){const n=t;let r=0;return{hit:function(){return r+=1,r},isSunk:function(){return n===r}}}(r);for(let o=0;o<r;o+=1){const r=n[o],c=t.find((t=>JSON.stringify(t)===JSON.stringify(r)));c.length<3&&c.push(e)}return t},receiveAttack:function(r){for(let n=0;n<t.length;n+=1){const e=t[n],o=e.filter((t=>"number"==typeof t));if(JSON.stringify(r)===JSON.stringify(o)&&e.length>2)return e[2].hit()}return n.push(r),n},allShipsSunk:function(){for(let n=0;n<t.length;n+=1){const r=t[n];if(r.length>2&&!1===r[2].isSunk())return!1}return!0},getBoard:function(){return t}}}()}}const r=function(){const{board:t}=n();return{board:t}}(),e=document.querySelector(".player-board");r.board.placeShip([[2,2],[2,3],[2,4]]),r.board.placeShip([[2,7],[3,7],[4,7],[5,7]]),t(r.board.getBoard(),e);const o=function(){const{board:t}=n();return{board:t}}(),c=document.querySelector(".cpu-board");o.board.placeShip([[9,3],[9,4],[9,5]]),o.board.placeShip([[3,10],[4,10],[5,10]]),t(o.board.getBoard(),c)})();