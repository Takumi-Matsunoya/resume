(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const printPageButton = document.getElementById('printPageButton');
  if (printPageButton) {
    printPageButton.addEventListener('click', () => {
      window.print();
    });
  }
})();
