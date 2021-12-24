function allMealCategories() {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res => res.json())
        .then(data => showAllMealCategories(data.categories));
}

function showAllMealCategories(data) {

    var content = document.getElementById('all-meal-categories');

    for (var i = 0; i < data.length; i++) {
        var html = `
            <div class="col">
                <div class="card h-100">
                    <img src="${data[i].strCategoryThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data[i].strCategory}</h5>
                        <p class="card-text">${data[i].strCategoryDescription.substring(0, 203)}</p>
                        <a href="#" class="btn btn-primary">See Details</a>
                    </div>
                </div>
            </div>
        `;

        content.innerHTML = content.innerHTML + html;
    }
}

allMealCategories();


function searchMeal() {
    var search_string = document.getElementById('search-string').value;

    if (search_string != "") {
        console.log('woring');

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search_string}`)
            .then(res => res.json())
            .then(data => showSearchedMeals(data.meals));
    }
    else {
        var content = document.getElementById('searched-meals');
        content.innerHTML = "";
        alert('Please input a meal name in search box.');
    }
}

function showSearchedMeals(data) {
    var content = document.getElementById('searched-meals');

    if (data == null) {
        content.innerHTML = `<h5 class="text-danger">No meal found!</h5>`;
    }
    else {
        content.innerHTML = "";

        for (var i = 0; i < data.length; i++) {
            var html = `
                <div class="col">
                    <div class="card h-100">
                        <img src="${data[i].strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data[i].strMeal}</h5>
                            <p class="card-text">${data[i].strInstructions.substring(0, 203)}</p>
                            <a href="#" class="btn btn-primary">See Details</a>
                        </div>
                    </div>
                </div>
            `;

            content.innerHTML = content.innerHTML + html;
        }
    }
}