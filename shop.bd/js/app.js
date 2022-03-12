const searchPhone = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(Response => Response.json())
        .then(data => displayResult(data.data))
}
const displayResult = phones => {
    console.log(phones);
    const serachResult = document.getElementById('search-result')
    phones.forEach(phone => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
             
             <div class="card ">
                      <img src="${phone.image}" class="card-img-top " alt="...">
             <div class="card-body">
                     <h5 class="card-title">${phone.phone_name}</h5>
                     <h5 class="card-title">${phone.brand}</h5>
                     
            </div>
            </div>
           
    
        `
        serachResult.appendChild(div)
    })

}