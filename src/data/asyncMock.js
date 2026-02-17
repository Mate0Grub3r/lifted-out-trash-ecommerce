const products = [
  // Remeras
  {
    id: '1',
    name: 'Island Boxy Tee',
    price: 20.00,
    category: 'remeras',
    description: 'Remera boxy fit con diseño Island. Perfecta para un look casual y cómodo.',
    image: '/assets/images/remera1.webp',
    stock: 10
  },
  {
    id: '2',
    name: 'Parasomnia Boxy Tee',
    price: 25.00,
    category: 'remeras',
    description: 'Remera boxy fit con diseño Parasomnia. Estilo urbano y moderno.',
    image: '/assets/images/remera2.webp',
    stock: 8
  },
  {
    id: '3',
    name: 'Falling Oversize Tee',
    price: 25.00,
    category: 'remeras',
    description: 'Remera oversize con diseño Falling. Máxima comodidad y estilo.',
    image: '/assets/images/remera3.webp',
    stock: 12
  },
  {
    id: '4',
    name: 'New Order Boxy Tee',
    price: 30.00,
    category: 'remeras',
    description: 'Remera boxy fit New Order. Diseño exclusivo y calidad premium.',
    image: '/assets/images/remera4.webp',
    stock: 6
  },
  
  // Baggys
  {
    id: '5',
    name: 'Baggy Pant Black',
    price: 35.00,
    category: 'baggys',
    description: 'Pantalón baggy negro. Estilo relajado y versátil.',
    image: '/assets/images/baggy1.webp',
    stock: 15
  },
  {
    id: '6',
    name: 'Baggy Pant Ycammo',
    price: 40.00,
    category: 'baggys',
    description: 'Pantalón baggy con estampado camuflado. Look urbano y original.',
    image: '/assets/images/baggy2.webp',
    stock: 10
  },
  {
    id: '7',
    name: 'Baggy Jean Oxidate',
    price: 45.00,
    category: 'baggys',
    description: 'Jean baggy con efecto oxidado. Diseño único y moderno.',
    image: '/assets/images/baggy3.jpg',
    stock: 8
  },
  {
    id: '8',
    name: 'Baggy Jean Red Heart',
    price: 35.00,
    category: 'baggys',
    description: 'Jean baggy con detalle Red Heart. Estilo distintivo.',
    image: '/assets/images/baggy4.jpg',
    stock: 12
  },
  
  // Hoodies
  {
    id: '9',
    name: 'Hoodie Oversize Destroy',
    price: 40.00,
    category: 'hoodies',
    description: 'Hoodie oversize con diseño Destroy. Comodidad y estilo urbano.',
    image: '/assets/images/hoodie1.webp',
    stock: 10
  },
  {
    id: '10',
    name: 'Hoodie Oversize Art',
    price: 35.00,
    category: 'hoodies',
    description: 'Hoodie oversize Art. Diseño artístico y único.',
    image: '/assets/images/hoodie2.webp',
    stock: 14
  },
  {
    id: '11',
    name: 'Hoodie Oversize Love',
    price: 45.00,
    category: 'hoodies',
    description: 'Hoodie oversize Love. Expresá tu estilo con comodidad.',
    image: '/assets/images/hoodie3.webp',
    stock: 9
  },
  {
    id: '12',
    name: 'Hoodie Oversize Reding',
    price: 40.00,
    category: 'hoodies',
    description: 'Hoodie oversize Reding. Calidad premium y diseño único.',
    image: '/assets/images/hoodie4.webp',
    stock: 11
  },
  
  // Zip-Hoodies
  {
    id: '13',
    name: 'Zip-Hoodie Oversize Order',
    price: 40.00,
    category: 'ziphoodies',
    description: 'Zip-Hoodie oversize Order. Funcionalidad y estilo en uno.',
    image: '/assets/images/zip-hoodie1.webp',
    stock: 7
  },
  {
    id: '14',
    name: 'Zip-Hoodie Oversize Visual',
    price: 35.00,
    category: 'ziphoodies',
    description: 'Zip-Hoodie oversize Visual. Diseño llamativo y cómodo.',
    image: '/assets/images/zip-hoodie2.webp',
    stock: 13
  },
  {
    id: '15',
    name: 'Zip-Hoodie Oversize Cammo',
    price: 45.00,
    category: 'ziphoodies',
    description: 'Zip-Hoodie oversize Cammo. Estilo militar moderno.',
    image: '/assets/images/zip-hoodie3.webp',
    stock: 8
  }
];

// Simula un llamado asíncrono para obtener todos los productos
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

// Simula un llamado asíncrono para obtener productos por categoría
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId));
    }, 500);
  });
};

// Simula un llamado asíncrono para obtener un producto por id
export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId));
    }, 500);
  });
};
