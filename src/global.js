Node.prototype.renderPage = function (page) {
  this.innerHTML = "";
  this.appendChild(page);
};
