const productList = document.getElementById('productList') as HTMLDivElement;
const inputBox = document.getElementById('inputBox') as HTMLInputElement;

let allProduct: any[] = [];

const lodeProduct = async (): Promise<void> => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  allProduct = data;
  showFilterProduct(allProduct);
};

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
}

const showFilterProduct = (products: any[]) => {
  productList.innerHTML = '';
  products.forEach((product: ProductType) => {
    const div = document.createElement('div');
    const att = document.createAttribute('class');
    att.value = 'product';
    div.setAttributeNode(att);
    div.innerHTML = `
    <h2> ${product.title} </h2>
    <p> ${product.price} </p>
    <p> ${product.description} </p>
    `;
    productList.appendChild(div);
  });
};
inputBox.addEventListener('input', () => {
  const inputVal = inputBox.value.toLowerCase();
  const filtered = allProduct.filter(product =>
    product.title.toLowerCase().includes(inputVal),
  );
  showFilterProduct(filtered);
});

lodeProduct();
