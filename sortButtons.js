// aduagam in pagina HTML elementul de sortare
mainPage.innerHTML += `
  <button id="sortByPrice">Sorteaza dupa pret</button>
`;

// functia de sortare
function sortPhones(sortType) {
  switch(sortType) {
    // in cazul in care e apasat butonul de sortare dupa pret
    case "sortByPrice":
      // sortam dupa pret, modificand vectorul de produse
      // mai intai trebuie sa luam produsele din baza de date
      const sortedArray = APP.getProducts().sort((elem1, elem2) => {
        // daca primul element e mai mic, se returneaza un numar negativ
        // ceea ce insemana ca elementele nu vor fi schimbate
        if(elem1.price < elem2.price) {
          return -1;
        // elementele sunt schimbate
        } else if (elem1.price > elem2.price) {
          return 1;
        // elementele raman pe loc
        } else {
          return 0;
        }
        // return elem1.price - elem2.price;
      });
      // we put products in our database
      APP.addProducts(sortedArray);
      // then we render the sorted list
      APP.renderProductList(sortedArray);
      break;
  }
}

// cand se face click pe butonul de sortare dupa pret, se apeleaza functia de sortare
const sortByPrice = document.querySelector('#sortByPrice');
sortByPrice.addEventListener('click', function() {
  sortPhones('sortByPrice');
})
