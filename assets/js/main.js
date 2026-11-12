(function(){var t=document.getElementById('menuToggle'),n=document.getElementById('mainNav');
if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)});
n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');t.setAttribute('aria-expanded',false)})})}
var s=document.getElementById('stickyCta'),h=document.querySelector('.hero');
if(s&&h){window.addEventListener('scroll',function(){s.classList.toggle('show',h.getBoundingClientRect().bottom<0)},{passive:true})}})();