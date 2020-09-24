// ==UserScript==
// @name     Click on mousedown
// @version  1
// @grant    none
// @match      *://*/*
// ==/UserScript==

var preventClick = 0;
window.addEventListener("click", function(e) {
	if (preventClick) {
		e.preventDefault();
		e.stopImmediatePropagation();
		preventClick = 0;
	}
}, true);

window.addEventListener("mousedown", function(e) {
	preventClick = 0;
	if (e.button !== 0) return;

	if (e.ctrlKey) {
		//window.open(e.target.href); //often just fails. the href is not always set, sometimes other functions open the URL
		//window.focus(); //doesn't work. attempts to keep the focus on this page instead of focusing on the newly created page
		return;
	}

	var targ = e.target;
	if ((targ.tagName !== "a") && (!targ.hasAttribute("href")) && (!targ.hasAttribute("onclick"))) {
		//sometimes, the target is something like an image inside an <a>
		targ = e.target.parentElement;
		if ((targ.tagName !== "a") && (!targ.hasAttribute("href")) && (!targ.hasAttribute("onclick")))
			return;
	}

	targ.click();
	preventClick = 1;
});
