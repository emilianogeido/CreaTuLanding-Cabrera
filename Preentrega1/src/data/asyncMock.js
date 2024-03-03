export const productos = [
  {
    id: 1,
    nombre: "Remera Rick",
    precio: 8500,
    categoria: "Remeras",
    stock: 5,
    descripcion:
      "Las remeras son 100% algodón peinado 24/1 (Premium).No se deforman, ni pierden el color.",
    img: "https://http2.mlstatic.com/D_NQ_NP_751255-MLA31037228606_062019-O.webp",
  },
  {
    id: 2,
    nombre: "Buzo peace among worlds",
    precio: 13000,
    categoria: "Buzos",
    stock: 5,
    descripcion:
      "Buzo Unisex 100% Algodón. Cuello Redondo con refuerzo en los cuellos y mangas",
    img: "https://acdn.mitiendanube.com/stores/605/358/products/165bn1-68089a57bae4b2579916833144477754-1024-1024.png",
  },
];

export const getProducts = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(productos);
    }, 2000);
  });
};
