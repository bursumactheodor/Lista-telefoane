// adaugam lista de produse in html
mainPage.innerHTML += `
	<h2>Telefoane:</h2>
	<div id="product-list">
	</div>
`;

APP.renderProductList = (productArray) => {
	// golim lista in care se vor afisa produsele
	const productList = document.querySelector('#product-list');
	productList.innerHTML = '';
	// pentru fiecare element din vectorul primit ca parametru
	productArray.forEach( (elem) => {
		// cream un produs
		product = new Product(elem.name, elem.price, elem.year, elem.insert_date, elem.picture);
		// il afisam in pagina web
		product.renderProduct();
	});
}
