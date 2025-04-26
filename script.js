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


  /* opções de cidade do formulário da página Locais */

  function updateCities() {
    const country = document.getElementById("country").value;
    const citySelect = document.getElementById("city");

   
    citySelect.innerHTML = '<option selected disabled value="">cidade</option>';

    let cities = [];

    if (country === "br") {
        cities = ["São Paulo", "Rio de Janeiro", "Brasília"];
    } else if (country === "pt") {
        cities = ["Lisboa", "Porto", "Faro"];
    } else if (country === "us") {
        cities = ["New York", "Los Angeles", "Miami"];
    }


    if (cities.length === 0) {
        citySelect.disabled = true;
    } else {
        citySelect.disabled = false;
        cities.forEach(function(city) {
            const option = document.createElement("option");
            option.value = city.toLowerCase().replace(/\s+/g, "-");
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
}

  /* mostrar o mapa da página Locais, opção Porto */

function showMapSection() {
  const country = document.getElementById("country").value;
  const city = document.getElementById("city").value;

  const mapSection = document.getElementById("mapSection");

  if (country === "pt" && city.includes("porto")) {
      mapSection.style.display = "block"; // Show the map div
  } else {
      mapSection.style.display = "none";
      alert("Por favor selecione Portugal e Porto para ver o mapa.");
  }
}
