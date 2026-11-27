function searchMeal() {
    let searchText = document.getElementById("searchbox").value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    
    fetch (url)
    .then (response => response.json())
    .then (data => showMeals(data));
}
function showMeals(data){
    let displayBox = document.getElementById("displayArea");
    displayBox.textContent= "";

    for (let i = 0; i < data.meals.length; i++) {
        if (i < 5) {
            let mealCard = document.createElement("div");
            mealCard.classList.add("innerStyle");
            mealCard.innerHTML = `<b>${data.meals[i].strMeal} </b> <br>
                <p> Category: ${data.meals[i].strCategory} </p>
                <img src="${data.meals[i].strMealThumb}" alt="Meal Image">`;
                
            displayBox.appendChild(mealCard);
        }
    }
}

