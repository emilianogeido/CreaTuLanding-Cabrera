export const productos = [
  {
    id: 1,
    nombre: "Remera Rick",
    precio: 8500,
    categoria: "European Swords",
    stock: 5,
    descripcion:
      "Las remeras son 100% algodón peinado 24/1 (Premium).No se deforman, ni pierden el color.",
    img: "https://cdn11.bigcommerce.com/s-3pn7p1id/images/stencil/1280x1280/products/509/2664/DSC_8713__04882.1511021416.JPG?c=2?imbypass=on",
  },
  {
    id: 2,
    nombre: "Buzo peace among worlds",
    precio: 13000,
    categoria: "Longswords",
    stock: 5,
    descripcion:
      "Buzo Unisex 100% Algodón. Cuello Redondo con refuerzo en los cuellos y mangas",
    img: "https://cdn11.bigcommerce.com/s-3pn7p1id/images/stencil/608x608/products/540/3200/DSC_4459__41393.1549209550.JPG?c=2",
  },
];

export const getProducts = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(productos);
    }, 2000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    const productosFiltrados = productos.filter(
      (prod) => prod.categoria === category
    )
    setTimeout(() => {
      resolve(productosFiltrados);
    }, 2000);
  });
};

export const getProductsById = (id) => {
  console.log("ID recibido:", id);
  return new Promise((resolve) => {
    const productoFiltrado = productos.find(
      (el) => el.id === parseInt(id)
    );
    setTimeout(() => {
      console.log("Producto filtrado:", productoFiltrado);
      resolve(productoFiltrado);
    }, 2000);
  });
};



