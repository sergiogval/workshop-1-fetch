const urlBase = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");

const formatPrice = (price) => {
  const newPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return newPrice;
};

// Web API
// Connect to the server
window
  .fetch(`${urlBase}/api/avo`)
  // Process response and transform into json
  .then((response) => response.json())
  // JSON -> Data -> Renderizar en el HTML
  .then((responseJson) => {
    const todosLosItems = [];
    responseJson.data.map((item) => {
      // crear imagen
      const imagen = document.createElement("img");
      imagen.src = `${urlBase}${item.image}`;
      imagen.className = "w-1/5 inline-flex";
      // crear titulo
      const titulo = document.createElement("h2");
      titulo.textContent = item.name;
      titulo.className = "3-xl";
      // crear precio
      const price = document.createElement("div");
      price.textContent = item.price;

      const container = document.createElement("div");
      container.className = "w-3/6 inline-flex align-center card";
      container.append(imagen, titulo, price);

      todosLosItems.push(container);
    });

    appNode.append(...todosLosItems);
  });
