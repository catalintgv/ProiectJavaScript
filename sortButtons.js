// aduagam in pagina HTML elementul de sortare
mainPage.innerHTML += `
  <button id="sortByPrice">Sorteaza dupa pret</button>
  <button id="sortByanAparitie">Sorteaza dupa AnAparitie</button>
  <button id="sortBydataAdaugare">Sorteaza dupa dataAdaugare</button>
  <button id="PriceFilter">Preturi peste 1000</button>
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
    
    case "sortByanAparitie":
      const sortedAn = APP.getProducts().sort((elem1, elem2) => {
        // daca primul element e mai mic, se returneaza un numar negativ
        // ceea ce insemana ca elementele nu vor fi schimbate
        if(elem1.anAparitie < elem2.anAparitie) {
          return -1;
        // elementele sunt schimbate
        } else if (elem1.anAparitie > elem2.anAparitie) {
          return 1;
        // elementele raman pe loc
        } else {
          return 0;
        }
        // return elem1.price - elem2.price;
      });
      // we put products in our database
      APP.addProducts(sortedAn);
      // then we render the sorted list
      APP.renderProductList(sortedAn);
      break;
    
    case "sortBydataAdaugare":
      const sortedDa = APP.getProducts().sort((elem1, elem2) => {
        var a = new Date(elem1.dataAdaugare).getTime();
        var b = new Date(elem2.dataAdaugare).getTime();
        return a < b ? -1 : a > b ? 1 : 0
        // daca primul element e mai mic, se returneaza un numar negativ
        // ceea ce insemana ca elementele nu vor fi schimbate
        // if(a < b) {
        //   return -1;
        // // elementele sunt schimbate
        // } else if (a > b) {
        //   return 1;
        // // elementele raman pe loc
        // } else {
        //   return 0;
        // }
        // // return elem1.price - elem2.price;
      });
      // we put products in our database
      APP.addProducts(sortedDa);
      // then we render the sorted list
      APP.renderProductList(sortedDa);
      break;
  }
}

function PriceFilter(){
  const priceOver10k = APP.getProducts().filter(a => a.price > 1000);
  APP.addProducts(priceOver10k);
  APP.renderProductList(priceOver10k);
}

// sterge element din li
function delElement(){

  const sterge = APP.getProducts().indexOf(this.name);
  const listaNoua = APP.getProducts().splice(sterge);
  
 

  APP.addProducts(listaNoua);
  APP.renderProductList(listaNoua);

}

// cand se face click pe butonul de sortare dupa pret, se apeleaza functia de sortare
const sortByPrice = document.querySelector('#sortByPrice');
sortByPrice.addEventListener('click', function() {
  sortPhones('sortByPrice');
})

const sortedAn = document.querySelector('#sortByanAparitie');
sortedAn.addEventListener('click',function(){
  sortPhones('sortByanAparitie');
})

const sortedDa = document.querySelector('#sortBydataAdaugare');
sortedDa.addEventListener('click',function(){
  sortPhones('sortBydataAdaugare');
})

const priceSort = document.querySelector('#PriceFilter');
priceSort.addEventListener('click', function(){
  PriceFilter();
})

const stergeElement = document.querySelector('.delete');
stergeElement.addEventListener('click', function(){
  delElement();
})