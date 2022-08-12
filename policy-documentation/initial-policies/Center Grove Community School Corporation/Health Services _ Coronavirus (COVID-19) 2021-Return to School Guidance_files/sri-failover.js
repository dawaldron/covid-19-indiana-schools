﻿const attributeName = 'data-sri-failover'; (function () { function a(f, g, h) { let i = document.createElement(f); switch (f) { case 'script': i.src = g, i.type = 'text/javascript'; break; case 'link': i.href = g, i.type = 'text/css'; break; default: throw tageName + ' is not a valid resource tag'; }h.parentNode.appendChild(i) } function b() { return -1 < window.navigator.userAgent.indexOf('Edge') } function c(f) { let g = (f.tagName || '').toLowerCase(); f.integrity && (f.onerror = () => { let i; if (i = f.getAttribute(attributeName)) { let j = 'loading' === document.readyState, k = j && !b(); switch (g) { case 'script': k ? document.write('<script type="text/javascript" src="' + i + '"></script>') : a(g, i, f); break; case 'link': k ? document.write('<link rel="Stylesheet" type="text/css" href="' + i + '">') : a(g, i, f); default: throw 'SRI Failover attribute is only available for script and link elements.'; } } else throw 'SRI Failover attribute is missing a failover resource value.' }) } let d = window.MutationObserver || WebKitMutationObserver; d && new MutationObserver(f => f.forEach(g => g.addedNodes.forEach(c))).observe(document, { childList: !0, attributes: !0, characterData: !0, subtree: !0, attributeOldValue: !1, attributeFilter: [attributeName] }) })();