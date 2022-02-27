const searchCocktail = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    searchField.value = '';
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(Response => Response.json())
        .then(data => displaySearchResult(data.drinks));
}
const displaySearchResult = drinks => {
    console.log(drinks);
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
    drinks.forEach(drink => {
        console.log(drink)

        const div = document.createElement('div')
        div.classList.add('col')
        const { strDrink, strGlass } = drink
        div.innerHTML = `
        <div class="col">
        <div class="card h-100">
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${strDrink}</h5>
                
                <h5 class="glass">Glass Type:${strGlass}</h5>
                
                <h5 class="card-category">Category:${drink.strCategory}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
        
        
        `
        searchResult.appendChild(div);

    })

}