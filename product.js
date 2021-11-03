// data inserarii se preia din BD, se formateaza de tip sir de caractere pentru afisare

function data_ora_min_sec (val) {
	let data=new Date (val);
	let an=String(data.getFullYear());
	let luna=String(data.getMonth()+1);
	let zi=String(data.getDate());
	let ora=String(data.getHours());
	let min=String(data.getMinutes());
	let sec=String(data.getSeconds());

	let strData=zi + '.' + luna + '.' + an;
                    let strTimp = ora + ':' + min + ':' +sec;
	
	return 'Data:  ' + strData + '   ' + 'Timp: ' + strTimp;		     
}

class Product {
	// un produs este creat cu o clasa cu urmtorul constructor:
	constructor(name, price, year, insert_date, picture) {
		this.name = name;
		this.price = price;
		this.year = year;
		this.insert_date = insert_date;
		this.picture = picture;

	}
	// metoda renderProduct adauga produse in interiorul listei de produse
	renderProduct() {
		const productList = document.querySelector('#product-list');
		productList.innerHTML += ` <ul id="lista">  
				            </ul>  `;
		/*
		productList.innerHTML += `
			<div class="product">
				<p>Nume: ${this.name}</p>
				<p>Pret: ${this.price}</p>
				<p>An aparitie: ${this.year}</p>
				<p>Data adaugare:  ${  data_ora_min_sec (  this.insert_date )  }</p>			
				<p><a href=${this.picture }>Imagine</a></p>
				<p><button class='btn1' onclick = 'stergeElement ( "${ this.name}"  )' > Sterge ${this.name}  </button></p>	

			</div>
		`;
		*/
		
		const lista = document.querySelector('#lista');
		lista.innerHTML += `
			<li class="product"> 
				<p>Nume: ${this.name}</p>
				<p>Pret: ${this.price}</p>
				<p>An aparitie: ${this.year}</p>
				<p>Data adaugare:  ${  data_ora_min_sec (  this.insert_date )  }</p>			
				<p><a href=${this.picture }>Imagine</a></p>
				<p><button class= 'btn1' onclick = 'stergeElement ( "${ this.name}"  )' > Sterge ${this.name}  </button></p>				
			</li> 
		`;
		


	}
}