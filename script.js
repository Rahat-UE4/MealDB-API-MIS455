function searchMeal() {
    let searchText = document.getElementById("searchbox").value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    
    fetch (url)
    .then (response => response.json())
    .then (data => showMeals(data));
}
function showMeals(data){
    console.log(data);
}

