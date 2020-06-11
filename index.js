// cream un obiect global, numit APP
window.APP = {};
// index.js fiind primul fisier care se incarca, mainPage va fi available in toate celelalte fisiere
window.mainPage = document.querySelector('#root');
// tot in APP cream un vector de obiecte, numit products
APP.products = [
	{
		// un telefon are nume si pret
		name: 'Iphone XS',
		price: 4500,
		anAparitie: 2018,
		dataAdaugare: '2020-05-23',
		image:'https://s12emagst.akamaized.net/products/17043/17042928/images/res_9252dac902adcfcb1f3af786dc312395_full.jpg'
	},
	{
		name: 'Huawei P30',
		price: 4000,
		anAparitie: 2017,
		dataAdaugare: '2020-04-17',
		image:'https://fdn2.gsmarena.com/vv/bigpic/huawei-p30.jpg'
	},
	{
		name: 'Samsung S10',
		price: 4250,
		anAparitie: 2020,
		dataAdaugare: '2019-11-08',
		image:'https://s12emagst.akamaized.net/products/20114/20113789/images/res_b35cd7697dd216fd10d252186a5a325a_full.jpg'
	}
];
// pentru stocare persistenta(sa nu se mai piarda datele la refresh), folosim lacalStorage
// avand in vedere ca vom face de mai multe ori operatiile de introducere a datelor in localStorage
// si de extragere a datelor din localStorage, vom face doua functii

// pentru a adauga vectorul de produse in local storage, trebuie mai intai sa il facem string
// pentru cheia "products", vom avea valoarea corespunzatoare, dar facuta string
APP.addProducts = (products) => {
	localStorage.setItem("products", JSON.stringify(products));
}
// pentru a extrage vectorul de produse, luam valoarea corespunzatoare cheii "products"
// apoi o parsam, pentru a deveni iar vector de obiecte, si o returnam 
APP.getProducts = () => {
	const products = localStorage.getItem("products");
	return JSON.parse(products);
};
// daca nu avem nimic in baza de date
// introducem vectorul de produse in localStorage
if (APP.getProducts() === null){
	APP.addProducts(APP.products);
}


function startRendering() {
	// "randam" lista de produse, trimitand ca parametru APP.products (incarcat mai sus)
	APP.renderProductList(APP.getProducts());
}
// DUPA ce s-au incarcat TOATE scripturile, apelam functia startRendering
// facem asta pentru ca la momentul incarcarii lui index.js, nu stim cine renderProductList()
window.addEventListener('load', startRendering);