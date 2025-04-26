/* Modal da página Acomodação */

document.addEventListener("DOMContentLoaded", function () {
    const modalTitle = document.getElementById("modalTitle");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
  
    const buttons = document.querySelectorAll(".open-modal-btn");
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const title = btn.getAttribute("data-title");
        const image = btn.getAttribute("data-image");
        const descriptionUrl = btn.getAttribute("data-description-url");
  
        modalTitle.textContent = title;
        modalImage.src = image;
  
        if (descriptionUrl) {
          fetch(descriptionUrl)
            .then(response => response.text())
            .then(html => {
              modalDescription.innerHTML = html;
            })
            .catch(error => {
              modalDescription.textContent = "Erro ao carregar a descrição.";
              console.error(error);
            });
        } else {
          modalDescription.textContent = ""; 
        }
      });
    });
  });