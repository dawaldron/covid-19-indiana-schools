!function(t,e){t.poll_config.forEach(function(t){function l(l,a){var i=e.getElementById("poll-"+t.id);"false"!=i.getAttribute("data-charted")&&1!=a||fetch(t.results).then(function(l){if(200!==l.status)return void console.log("Poll "+t.asset_id+" Status Code: "+l.status);l.json().then(function(l){var r;r="pie"==t.chart?n(l.results):o(l.results),e.getElementById("poll-"+t.id+"-results").innerHTML=r,i.setAttribute("data-charted","true")})}).catch(function(e){console.log("Fetch Error "+t.asset_id+": ",e)}),r(l)}function r(l){e.getElementById("poll-"+t.id+"-container").classList.add("hide"),e.getElementById("poll-"+t.id+"-results").classList.remove("hide"),l&&e.getElementById("poll-"+t.id+"-back-vote").classList.remove("hide")}function a(t){var e=0;for(var l in t)if(t.hasOwnProperty(l)){var r=t[l],a=r.votes;0===a&&r.text===i&&(a=1),e+=a}return e}function n(e){var l=a(e),r=0,n="100,0",o='<div class="tnt-chart-ledger">',s='<div class="tnt-chart"><svg class="tnt-chart-pie" viewBox="-100 -100 200 200" aria-labelledby="'+t.title+'"><g transform="rotate(-90)">';for(var d in e)if(e.hasOwnProperty(d)){var c=e[d],v=c.votes;0===v&&c.text===i&&(v=1);var u=(v/l*100).toFixed(1);if(0!=v){r>=l&&(n="100,0"),r+=v;var p=2*Math.PI*r/l,h=100*Math.cos(p),f=100*Math.sin(p),g=l/v<=2?1:0,m=1!=v?"votes":"vote";s+='<path d="M0,0 L'+n+" A100,100 0 "+g+",1 "+h+","+f+' Z" fill="'+c.color+'"><title>'+v+" "+m+"</title></path>",o+='<p class="tnt-ledger-item" title="'+v+" "+m+'"><span style="color:'+c.color+'"><span class="fas tnt-circle"></span></span> <strong>'+u+"%</strong> "+c.text+"</p>",n=h+","+f}}return r<=0?'<div class="alert alert-warning">No votes have been submitted.</div>':s=s+"</g></svg>"+o+"</div></div>"}function o(e){var l=a(e),r=0,n="";for(var o in e)if(e.hasOwnProperty(o)){var s=e[o],d=s.votes,c="option-"+t.id+"-"+o;if(0===d&&s.text===i&&(d=1),0!=d){var v=(d/l*100).toFixed(1);barWidth=v/2,n+='<svg class="tnt-chart-bar" aria-labelledby="'+c+'" role="img"><g class="bar"><rect width="'+barWidth+'%" height="20" y="0" style="fill: '+s.color+'"></rect><text class="tnt-chart-percent" x="'+(barWidth+1)+'%" y="10" dy=".35em">'+v+'%</text><text class="tnt-chart-count" x="'+(barWidth+1)+'%" y="10" dy=".35em">'+s.votes+'</text></g></svg><p id="'+c+'" class="tnt-chart-bar-text">'+s.text+"</p>",r+=d}}return r<=0?'<div class="alert alert-warning">No votes have been submitted.</div>':n}var i=localStorage.getItem("poll_"+t.asset_id);i&&(e.getElementById("poll-"+t.id+"-your-vote").innerHTML=i,e.getElementById("poll-"+t.id+"-your-vote-container").classList.remove("hide"),l()),e.getElementById("poll-"+t.id+"-form").addEventListener("submit",function(r){r.preventDefault();var a=e.querySelector("#poll-"+t.id+"-form input[name=answer]:checked").value;if(!a)return!1;var n=e.querySelector("#poll-"+t.id+"-form input[name=answer]:checked").getAttribute("title");if("function"==typeof dmpAction){var o="Poll : "+t.title+" : "+n;dmpAction(o)}var s=new XMLHttpRequest;s.open("POST",t.url+"?format=json&action=poll:vote"),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.onreadystatechange=function(){4===s.readyState&&(200===s.status?(localStorage.setItem("poll_"+t.asset_id,n),i=n,l(!1,!0),e.getElementById("poll-"+t.id+"-your-vote").innerHTML=i,e.getElementById("poll-"+t.id+"-your-vote-container").classList.remove("hide")):console.log("A poll error occurred: "+s.status))},s.send(encodeURI("answer="+a))}),e.getElementById("poll-"+t.id+"-get-results").addEventListener("click",function(t){return t.preventDefault(),l(!0),!1}),e.getElementById("poll-"+t.id+"-back-btn").addEventListener("click",function(l){l.preventDefault(),e.getElementById("poll-"+t.id+"-back-vote").classList.add("hide"),e.getElementById("poll-"+t.id+"-results").classList.add("hide"),e.getElementById("poll-"+t.id+"-container").classList.remove("hide")})})}(window,document);
//# sourceMappingURL=tnt.poll.aa4a56a35da582e986ed8bbce2004ea4.js.map