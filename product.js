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
				<li>Nume: ${this.name}</li>
				<li>Pret: ${this.price}</li>
				<li>An Aparitie: ${this.anAparitie}</li>
				<li>Data Adaugare: ${this.dataAdaugare}</li>
				<li class="imagine"><img src= "${this.image}" alt="Imaginea nu mai exista"/></li>
			</ul>
		`;
	}
}