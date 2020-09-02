// ==UserScript==
// @name	Click on mousedown
// @version	1
// @grant	none
// ==/UserScript==

var lastClick = 0;
window.addEventListener("click", function(e) {
	if (Date.now() - lastClick < 200) {
		e.preventDefault();
		e.stopImmediatePropagation();
	}
}, true);

window.addEventListener("mousedown", function(e) {
	if (e.button !== 0) return;
	
	if (e.ctrlKey) {
		//window.open(e.target.href); //often just fails. the href is not always set, sometimes other functions open the URL
		//window.focus(); //doesn't work. attempts to keep the focus on this page instead of focusing on the newly created page
		return;
	}
	e.target.click();
	lastClick = Date.now();
});
