!function(e,t){function a(e,t){e.forEach(function(e){e.classList.contains("expand-children")||e.setAttribute("tabindex",t)})}function n(e){e.forEach(function(e){e.lastChild.classList.add("last-child")})}e.addEventListener("keydown",function(s){var l=s.keyCode||s.which;if(9===l||13===l){var i=t.activeElement,o=t.getElementById("main-navigation"),r=t.getElementById("main-nav_menu"),c=t.querySelector(".offcanvas-drawer-left"),d=t.querySelector(".offcanvas-drawer-right"),u=i.previousSibling,f=i.parentElement,m=t.documentElement.classList,p=t.querySelectorAll("#mobile-nav-left_menu a"),v=t.querySelectorAll("#mobile-nav-right_menu a");if(null!=o&&o.contains(i)||null!=r&&r.contains(i)){if(9===l)r?(a(r.querySelectorAll("a"),"0"),n(r.querySelector(".yamm-fw")&&r.querySelector(".yamm-fw .dropdown-menu ul")?r.querySelectorAll(".yamm-fw .dropdown-menu ul"):r.querySelectorAll("ul.dropdown-menu"))):n(o.querySelectorAll("dropdown-menu")),f.classList.contains("dropdown")&&!f.classList.contains("open")?f.parentElement.classList.contains("navbar-right")||(i.parentElement.focus(),i.parentElement.classList.add("open"),i.parentElement.setAttribute("aria-expanded","true")):i.parentElement.classList.contains("last-child")&&(i.closest(".dropdown").setAttribute("aria-expanded","false"),i.closest(".dropdown").classList.remove("open"));else if(13===l)if(i.classList.contains("hamburger-desktop")||i.classList.contains("pull-left"))c.focus(),m.add("drawer-open","active-left"),c.setAttribute("aria-expanded","true"),a(p,"0");else if(i.classList.contains("pull-right"))d.focus(),m.add("drawer-open","active-right"),d.setAttribute("aria-expanded","true"),a(v,"0");else{if(!i.closest("a"))return!1;e.location=i.closest("a")}}else if(null!=c&&c.contains(i)||null!=d&&d.contains(i))if(9===l){if(null!=c&&c.contains(i)?p[p.length-1].classList.add("last-child"):v[v.length-1].classList.add("last-child"),null!=u&&void 0!=u.classList&&u.classList.contains("collapsed")){var h=u.getAttribute("data-target");u.classList.remove("collapsed"),t.querySelector(h).classList.add("in")}i.classList.contains("last-child")&&(m.remove("drawer-open","active-left","active-right"),t.body.focus(),null!=c&&c.contains(i)?(c.setAttribute("aria-expanded","false"),a(p,"-1")):(d.setAttribute("aria-expanded","false"),a(v,"-1")))}else if(13===l){if(!i.closest("a"))return!1;e.location=i.closest("a")}}})}(window,document);
//# sourceMappingURL=tnt.navigation.accessibility.7a9170240d21440159b9bd59db72933b.js.map