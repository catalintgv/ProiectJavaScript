class Product {
	// un produs este creat cu o clasa cu urmtorul constructor:
	constructor(name, price, anAparitie, dataAdaugare, image) {
		this.name = name;
		this.price = price;
		this.anAparitie = anAparitie;
		this.dataAdaugare = dataAdaugare;
		this.image = image;
	}
	// metoda renderProduct adauga produse in interiorul listei de produse
	renderProduct() {
		const productList = document.querySelector('#product-list');
		productList.innerHTML += `
		
			<ul class="product">
				<li class="name">Nume: ${this.name} required </li>
				<li>Pret: ${this.price}</li>
				<li>An Aparitie: ${this.anAparitie}</li>
				<li>Data Adaugare: ${this.dataAdaugare}</li>
				<li class="imagine"><img src= "${this.image}" alt="Imaginea nu mai exista"/></li>
				<li class="delete"><input type="button" value="Sterge Inregistrare ${this.name}"></li>
			</ul>
		`;
	



		const deleteButtons = document.querySelectorAll('.delete');
		deleteButtons.forEach(function(btn) {
		  btn.addEventListener('click', function() {
			const filteredArticles = APP.getProducts().filter(x => 
			   x.name !== btn.innerText
			); 
	  
			APP.addProducts(filteredArticles);
			APP.renderProductList(filteredArticles);

		  });
		})
	}
}