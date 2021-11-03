// aduagam in HTML formularul de adaugare produs

//data adaugare se preia automat si se memoreaza de tip date
// pentru afisare se preia din date, se formateaza text si se afiseaza


mainPage.innerHTML += `
  <form id="addPhone" class="container">

<div class="container1">
   	 <label for "phoneName">Nume: </label>
	<input type="text" name="phoneName">
</div>
<div class="container1">
   	<label for "phonePrice">Pret:  </label> 
	<input type="number" name="phonePrice">
</div>
<div class="container1">
 	<label for "phoneYear">An aparitie:   </label> 
  	<input type="number" name="phoneYear">
</div>
<div class="container1">
  	<label for "phoneLink_picture">Adresa link imagine:  </label> 
	<input type="text" name="phoneLink_picture">
</div>
    	<input  class="btn"  type="submit" value="Adauga telefon">
  </form>
`;


function addFormFunctionality() {
  // adaugarea produsului
  function addProduct(nameP, priceP, yearP, insert_dateP, link_pictureP) {
    // preluam produsele din localStorage
    const products = APP.getProducts();
    // modificarea vectorului de produse
    products.push({
      name: nameP,
      price: priceP,
      year: yearP,
      insert_date: insert_dateP,
      picture: link_pictureP
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
    // luam numele si pretul si celelalte valori introduse de utilizator
    const name = event.target.phoneName.value;
    const price = Number(event.target.phonePrice.value);
    const year = Number(event.target.phoneYear.value);
  //  const insert_date = event.target.phoneInsert_date.value;
  const insert_date= new Date();

    const picture = event.target.phoneLink_picture.value;

    // apelam functia de adaugare a produsului
    addProduct(name, price, year, insert_date, picture);
  }
}

// la momentul incarcarii fisierului addItemsForm.js
// inca nu stim cine e APP.renderProductList.
// asadar, inainte ca respectiv functie sa fie apelata,
// vrem sa incarcam celelalte fisiere
window.addEventListener('load', addFormFunctionality);