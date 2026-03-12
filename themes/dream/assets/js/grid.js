"use strict";

function initGrid() {
  document.querySelectorAll('.dream-grid').forEach(function (grid) {
    var msnry = new Masonry(grid, {
      itemSelector: '.dream-column'
    });
    grid._dreamMasonry = msnry;
    if (grid.classList.contains('dream-grid-about')) {
      window.aboutMasonry = msnry;
    }
    imagesLoaded(grid, function () {
      grid.style.opacity = 1;
      msnry.layout();
    });
  });
}

window.relayoutDreamGrid = function () {
  document.querySelectorAll('.dream-grid').forEach(function (grid) {
    if (grid._dreamMasonry) {
      grid._dreamMasonry.layout();
    }
  });
};

initGrid();
