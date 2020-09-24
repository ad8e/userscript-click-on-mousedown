Makes most clicks about 100 ms faster. Hence, pages load about 100 ms faster. Only tested on Firefox.

Currently, it only works on links, and not buttons.

In another method, I tried to replace all clicks globally whether on links or not. So every mousedown created a click. This broke some sites:
* Virustotal tabs stop working
* Image viewer in firefox has broken zoom. When you're on a website consisting of just an image, clicking on the image zooms to the top of the image rather than to the click location.
* Steam videos seek to the beginning on click, instead of the timestamp you click on
* Compose button in gmail clicks twice
