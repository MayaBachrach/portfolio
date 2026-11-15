(() => {
 const frames=[...document.querySelectorAll('.skating-frame')], footer=document.querySelector('.skating-footer');
 const reduce=matchMedia('(prefers-reduced-motion:reduce)');
 let visible=false,ready=false,started=false,step=0,timer=0;
 const timing=[90,80,110,130,90,80,90,100,130,100,90,80];
 function sync(){clearTimeout(timer);if(visible&&ready&&!document.hidden&&!reduce.matches&&!document.querySelector('#project-page').open)timer=setTimeout(next,timing[step]||100);}
 function next(){step=(step+1)%frames.length;frames.forEach((image,i)=>image.style.visibility=i===step?'visible':'hidden');sync();}
 new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;footer.classList.toggle('is-visible',visible);if(visible&&!started){started=true;Promise.all(frames.map(image=>image.decode())).then(()=>{ready=true;sync();}).catch(()=>{});}sync();},{rootMargin:'80px'}).observe(footer);
 document.addEventListener('visibilitychange',sync);reduce.addEventListener('change',sync);
 new MutationObserver(sync).observe(document.querySelector('#project-page'),{attributes:true,attributeFilter:['open']});
})();
document.querySelector('#copyright-year').textContent=String(new Date().getFullYear());
