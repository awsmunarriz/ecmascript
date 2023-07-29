class ProductManager {
  constructor() {
    this.products = [];
  }

  // Método: Devolver el arreglo con todos los productos creados hasta ese momento.
  getProducts = () => {
    return this.products;
  };

  // Método: Agregar un producto al arreglo de productos inicial.
  addProduct = (title, description, price, thumbnail, code, stock) => {
    // Verificar si el código ya existe en algún producto agregado previamente
    const isDuplicateCode = this.products.some(
      (product) => product.code === code
    );

    if (isDuplicateCode) {
      console.error("Error: Ya existe un producto con el mismo codigo.");
      return;
    }

    const producto = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    // Indice con id autoincrementable
    if (this.products.length === 0) {
      producto.id = 1;
    } else {
      producto.id = this.products[this.products.length - 1].id + 1;
    }

    this.products.push(producto);
  };

  // Método: Obtener un producto por su id
  getProductById = (id) => {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      return product;
    } else {
      console.error("Error: Producto no encontrado.");
    }
  };
}

// Crear nueva instancia de la Clase ProductManager
const manejadorDeProducts = new ProductManager();

// Llamar a "getProducts" debe devolver un arreglo vacio
console.log("Obtener productos:")
console.log(manejadorDeProducts.getProducts());

// Agregar producto
manejadorDeProducts.addProduct(
  "Este es un producto prueba",
  "Descripcion Prod 1",
  200,
  "Sin imagen",
  "abc123",
  25
);

// Llamar a "getProducts" nuevamente, esta vez debe aparecer el producto recién agregado
console.log("Obtener productos:")
console.log(manejadorDeProducts.getProducts());

// Agregar producto con los mismos campos, debe arrojar un error porque el código estará repetido.
manejadorDeProducts.addProduct(
  "Este es un producto prueba",
  "Descripcion Prod 1",
  200,
  "Sin imagen",
  "abc123",
  25
);

// Agregar producto con code diferente.
manejadorDeProducts.addProduct(
  "Este es otro producto prueba",
  "Descripcion Prod 2",
  500,
  "Sin imagen",
  "abc321",
  10
);

// Llamar a "getProducts" nuevamente, esta vez debe aparecer el producto recién agregado
console.log("Obtener productos:")
console.log(manejadorDeProducts.getProducts());

// Obtener un producto por su ID
console.log("Buscar producto con code = 2:")
const productIdToFind = 2;
const foundProduct = manejadorDeProducts.getProductById(productIdToFind);
console.log(foundProduct);

// Intentar obtener un producto con un ID inexistente
console.log("Buscar producto con code = 5:")
const nonExistentProductId = 5;
manejadorDeProducts.getProductById(nonExistentProductId);

