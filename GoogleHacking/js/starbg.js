"use strict";function windowload(){canvasApp()}function canvasSupport(){return Modernizr.canvas}function canvasApp(){if(canvasSupport()){var o=document.getElementById("fullstarbg"),h=o.getContext("2d"),t=window.innerWidth,i=window.innerHeight;o.width=t,o.height=i;for(var r=[],a=0;a<200;a++){var n=+Math.random(),e=Math.random()*o.width,d=Math.random()*o.height,l=.7<(l=+Math.random())?.7:l,c=["t","f"][Math.floor(2*Math.random())];r.push({x:e,y:d,R:n,initX:e,initY:d,moves:c,initOpacity:l,opacity:l})}var f=!0,s=[],p=0,v=!1;setTimeout(function(){v=!0},3e3);var w=-.25*o.width*.22,M=-.35*o.width*.22;g(),setInterval(g,20)}function g(){h.clearRect(0,0,o.width,o.height);var t=h.createLinearGradient(0,0,0,o.height);t.addColorStop(0,"#090723"),t.addColorStop(.75,"#090723"),t.addColorStop(1,"#08071e"),h.fillStyle=t,h.fillRect(0,0,o.width,o.height),m("#f7f4d3",.12*o.width,.44*o.width,M,"#fcf6ac"),m("#201620",.025*o.width,.95*o.width,.32*o.height),m("#140c2a",.01*o.width,.75*o.width,.22*o.height),m("#090929",.018*o.width,.82*o.width,.52*o.height),1==v&&(M+=1),w<M&&(M=w);for(var i=0;i<r.length;i++){var a=r[i];h.save(),h.globalAlpha=a.opacity,h.beginPath(),h.fillStyle="#ffffff",h.arc(a.initX,a.initY,a.R,0,2*Math.PI,!1),h.fill(),h.closePath(),"t"==a.moves&&(a.initX-=.12*+Math.random(),a.initX<0&&(a.initX=a.x)),a.opacity<.8&&(a.opacity+=.005,.7<a.opacity&&(a.opacity=a.initOpacity)),h.restore()}!function(){if(1==f){var t=Math.ceil(2*Math.random());s=[];for(var i=0;i<t;i++){var a=Math.random()*o.width;Math.random(),o.height,Math.random();s.push({initX:a,initY:0,length:50*Math.random()+30,speed:10*Math.random()})}f=!1}}();for(i=0;i<s.length;i++){a=s[i];h.save(),h.rotate(0),h.beginPath(),h.strokeStyle="#59576a",h.moveTo(a.initX,a.initY),h.lineTo(a.initX-Math.cos(Math.PI/180*45)*a.length,a.initY+Math.sin(Math.PI/180*45)*a.length),h.stroke(),h.restore(),a.speed+=.1;var n=Math.cos(Math.PI/180*45)*a.speed,e=Math.sin(Math.PI/180*45)*a.speed;a.initX=a.initX-n,a.initY=a.initY+e,(p=a.initX<0||a.initY>o.height?i+1:p)==s.length&&(f=!(p=0))}}function m(t,i,a,n,e){var o;h.beginPath(),e?((o=h.createRadialGradient(a,n,i/2,a,n,i)).addColorStop(0,t),o.addColorStop(.5,t),o.addColorStop(1,e),h.fillStyle=o):h.fillStyle=t;h.arc(a,n,i,0,2*Math.PI,!1),h.fill(),h.closePath()}}window.addEventListener("load",windowload,!1);