// Minimal interactivity and chart examples
document.getElementById('year')?.textContent = new Date().getFullYear();

// Hero chart (sample forecast)
const heroCtx = document.getElementById('heroChart');
if(heroCtx){
  const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'];
  const data = {
    labels,
    datasets:[{label:'Sales',data:[120,150,170,160,180,210,230,220,240],borderColor:'#78b9ff',backgroundColor:'rgba(120,185,255,0.12)',tension:0.3}]
  };
  new Chart(heroCtx,{type:'line',data,options:{responsive:true,plugins:{legend:{display:false}}}});
}

// mini chart
const miniCtx = document.getElementById('miniChart');
if(miniCtx){
  new Chart(miniCtx,{type:'bar',data:{labels:['A','B','C','D'],datasets:[{label:'Metric',data:[12,19,8,14],backgroundColor:['#3a86ff','#5fb0ff','#7fd1ff','#bfe9ff']} ]},options:{plugins:{legend:{display:false}}}})
}

// simple menu toggle
const menuToggle = document.getElementById('menuToggle');
if(menuToggle){menuToggle.addEventListener('click',()=>{const nav=document.querySelector('.main-nav');nav.style.display=(nav.style.display==='flex'?'none':'flex');nav.style.flexDirection='column';});}
