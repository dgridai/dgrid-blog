function initGrid() {
  document.querySelectorAll('.dream-grid').forEach((grid) => {
    const msnry = new Masonry(grid, {
      itemSelector: '.dream-column',
    })
    grid._dreamMasonry = msnry

    if (grid.classList.contains('dream-grid-about')) {
      // Export Masonry instance to global scope for about page,
      // currently used for resizing the grid after Disqus comments are loaded.
      window.aboutMasonry = msnry
    }

    imagesLoaded(grid, () => {
      grid.style.opacity = 1
      msnry.layout()
    })
  })
}

window.relayoutDreamGrid = () => {
  document.querySelectorAll('.dream-grid').forEach((grid) => {
    if (grid._dreamMasonry) {
      grid._dreamMasonry.layout()
    }
  })
}

initGrid()
