// One timer for all heart pixels; pause work while the page is hidden.
document.addEventListener('visibilitychange',()=>{
 document.documentElement.classList.toggle('paused-motion',document.hidden);
});
setInterval(()=>{
 if(document.hidden)return;
 document.querySelectorAll('.heart-container:not(.ghost) .pixel.filled').forEach(pixel=>{
  pixel.style.backgroundColor='rgb('+(155+Math.random()*100|0)+','+(Math.random()*50|0)+','+(155+Math.random()*100|0)+')';
 });
},2000);
