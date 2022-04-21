  var loadingTask = pdfjsLib.getDocument('pdf/FIKIH_II_MI.pdf');
loadingTask.promise.then(function(pdf) {

pdf.getPage(3).then(function(page) {
  // you can now use *page* here

var scale = 1;
var viewport = page.getViewport({ scale: scale, });

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
canvas.height = viewport.height;
canvas.width = viewport.width;

var renderContext = {
  canvasContext: context,
  viewport: viewport
};
page.render(renderContext);

});
});