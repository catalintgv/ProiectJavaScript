// aduagam in HTML formularul de adaugare produs
mainPage.innerHTML += `
  <form id="addPhone">
    Nume: <input type="text" name="phoneName">
    Pret: <input type="number" name="phonePrice">
    An Aparitie: <input type="number" name="phoneYear">
    Data Adaugare: <input type="date" name="phoneDate">
    URL Imagine: <input type="text" name="phoneImage">
    
    <input type="submit" value="Adauga telefon">
  </form>
`;

function addFormFunctionality() {
  // adaugarea produsului
  function addProduct(nameP, priceP, anAparitieP, dataAdaugareP, imageP) {
    // preluam produsele din localStorage
    const products = APP.getProducts();
    // modificarea vectorului de produse
    products.push({
      name: nameP,
      price: priceP,
      anAparitie:anAparitieP,
      dataAdaugare: dataAdaugareP,
      image: imageP
    });
    // adaugam vectorul in localStorage
    APP.addProducts(products);

    // reafisam produsele
    APP.renderProductList(products);
  }

  const form = document.querySelector('#addPhone');
  form.onsubmit = function(event) {
    // trebuie sa prevenim reincarcare paginii
    event.preventDefault();
    // luam numele si pretul introduse de utilizator
    const name = event.target.phoneName.value;
    const price = Number(event.target.phonePrice.value);
    const anAparitie = Number(event.target.phoneYear.value);
    const dataAdaugare = String (event.target.phoneDate.value);
    const image = String(event.target.phoneImage.value);
    // apelam functia de adaugare a produsului
    addProduct(name, price, anAparitie, dataAdaugare, image);
  }
}

// la momentul incarcarii fisierului addItemsForm.js
// inca nu stim cine e APP.renderProductList.
// asadar, inainte ca respectiv functie sa fie apelata,
// vrem sa incarcam celelalte fisiere
window.addEventListener('load', addFormFunctionality);

