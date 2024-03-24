export const productos = [
  {
    id: 1,
    nombre: "Viking Sword",
    precio: 8500,
    categoria: "European Swords",
    stock: 5,
    descripcion:
      "Forged from 1075 spring steel and metal fittings on sword and sheath",
    img: "https://cdn11.bigcommerce.com/s-3pn7p1id/images/stencil/1280x1280/products/509/2664/DSC_8713__04882.1511021416.JPG?c=2?imbypass=on",
  },
  {
    id: 2,
    nombre: "Two Handed Medieval LongSword",
    precio: 13000,
    categoria: "Longswords",
    stock: 5,
    descripcion:
      "Metal fittings on sword and scabbard, wood core leather wrapped sheath and belt",
    img: "https://cdn11.bigcommerce.com/s-3pn7p1id/images/stencil/608x608/products/540/3200/DSC_4459__41393.1549209550.JPG?c=2",
  },
  {
    id: 3,
    nombre: "Italian Arming Sword",
    precio: 6500,
    categoria: "European Swords",
    stock: 5,
    descripcion:
      "Through hardened 1075 spring steel blade with peened tang",
    img: "https://cdn11.bigcommerce.com/s-3pn7p1id/images/stencil/608x608/products/536/3175/DSC_7029__22759.1546012383.JPG?c=2",
  },
  {
    id: 4,
    nombre: "Katana Model Musashi",
    precio: 9500,
    categoria: "Katana Swords",
    stock: 5,
    descripcion:
      "his is the no bo hi (no groove) version of the #12 for those that want a more robust blade",
    img: "https://cdn11.bigcommerce.com/s-3pn7p1id/images/stencil/608x608/products/623/4392/DSC_8990__28105.1680723356.JPG?c=2",
  },
];
export default productos;

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



