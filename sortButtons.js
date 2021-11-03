// aduagam in pagina HTML elementul de sortare
mainPage.innerHTML += `
<div  class="container2">
  <button id="sortByPrice">Sorteaza dupa pret</button>
  <button id="sortByYear">Sorteaza dupa an aparitie</button>
  <button id="sortByDate">Sorteaza dupa data adaugare</button>
</div>
`;

mainPage.innerHTML += `
<div class="container2">
 <label for "filteredPrice">Pret min:  </label>
 <input type="number"  name=" filteredPrice"  id="filteredPrice" value="0"> 
 <button id="filterByPrice">Filtreaza produsele dupa pretul minim </button>
  <button id="refresh">Refresh dupa filtrare</button>
</div>
`;

const filteredPrice = document.querySelector('#filteredPrice');


// functia de sortare
function sortPhones(sortType) {
  let sortedArray=null;
  switch(sortType) {
    // in cazul in care e apasat butonul de sortare dupa pret
    case "sortByPrice":
      // sortam dupa pret, modificand vectorul de produse
      // mai intai trebuie sa luam produsele din baza de date
       sortedArray = APP.getProducts().sort((elem1, elem2) => {
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
 case "sortByYear":
      
       sortedArray = APP.getProducts().sort( (elem1, elem2) => {
       
       			 if(elem1.year < elem2.year) {
          				return -1;   } 
			else if (elem1.year > elem2.year) {
          				return 1;     } 
			else {
         				 return 0;    }
      			  // return elem1.year - elem2.year;
    			  });
   
      APP.addProducts(sortedArray); 
      APP.renderProductList(sortedArray);
      break;

 case "sortByDate":
      
       sortedArray = APP.getProducts().sort( (elem1, elem2) => {
       
       			 if(elem1.insert_date < elem2.insert_date) {
          				return -1;   } 
			else if (elem1.insert_date > elem2.insert_date) {
          				return 1;     } 
			else {
         				 return 0;    }
      			  // return elem1.insert_date - elem2.insert_date;
    			  });
   
      APP.addProducts(sortedArray); 
      APP.renderProductList(sortedArray);
      break;

  }
}

// cand se face click pe butonul de sortare dupa pret, se apeleaza functia de sortare
const sortByPrice = document.querySelector('#sortByPrice');
sortByPrice.addEventListener('click', function() {
  sortPhones('sortByPrice');
})

//sortare dupa anul aparitiei
const sortByYear = document.querySelector('#sortByYear');
sortByYear.addEventListener('click', function() {
  sortPhones('sortByYear');
//alert('Sortare dupa an');
})

//sortare dupa data adaugare
const sortByDate = document.querySelector('#sortByDate');
sortByDate.addEventListener('click', function() {
  sortPhones('sortByDate');
//alert('Sortare dupa data adaugare');
})





//filtrare dupa pret

function filtreaza( minval) {
	 const filteredArray = APP.getProducts().filter(   (elem) => { return   elem.price >= minval;} ) 
	APP.renderProductList ( filteredArray );
}

const filterByPrice = document.querySelector('#filterByPrice');
filterByPrice.addEventListener('click', function() {
	filtreaza (  Number(filteredPrice.value) );
})
// Incarca in pagina din nou valorile din BD
const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', function() {
	startRendering();
})

