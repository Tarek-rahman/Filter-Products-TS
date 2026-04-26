const productList = document.getElementById('productList');
const inputBox = document.getElementById('inputBox');
let allProduct = [];
const lodeProduct = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    allProduct = data;
    showFilterProduct(allProduct);
};
const showFilterProduct = (products) => {
    productList.innerHTML = '';
    products.forEach((product) => {
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
    const filtered = allProduct.filter(product => product.title.toLowerCase().includes(inputVal));
    showFilterProduct(filtered);
});
lodeProduct();
export {};
//# sourceMappingURL=script.js.map