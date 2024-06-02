// взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
/*
fetch('https://dummyjson.com/carts')
    .then(response => response.json())
    .then(data => {
        data.carts.forEach(cart => {
            let cartDiv = document.createElement('div');
            cartDiv.classList.add('cart-container');
            cartDiv.innerHTML += "<p><strong>Корзина ID: " + cart.id + "</strong></p>";
            cartDiv.innerHTML += "<p><strong>Товари в корзині:</strong></p>";
            cart.products.forEach(product => {
                let productDiv = document.createElement('div');
                productDiv.classList.add('product-container');
                productDiv.innerHTML += "<p>ID товару: " + product.id + "</p>";
                productDiv.innerHTML += "<p>Назва товару: " + product.title + "</p>";
                productDiv.innerHTML += "<p>Ціна товару: " + product.price + "</p>";
                productDiv.innerHTML += "<p>Кількість товару: " + product.quantity + "</p>";
                productDiv.innerHTML += "<p>Загальна вартість: " + product.total + "</p>";
                productDiv.innerHTML += "<p>Відсоток знижки: " + product.discountPercentage + "%</p>";
                productDiv.innerHTML += "<p>Загальна знижка: " + product.discountedTotal + "</p>";
                productDiv.innerHTML += "<img src='" + product.thumbnail + "' alt='Зображення товару'>";
                productDiv.innerHTML += "<hr>";
                cartDiv.appendChild(productDiv);
            });
            cartDiv.innerHTML += "<p>Загальна вартість корзини: " + cart.total + "</p>";
            cartDiv.innerHTML += "<p>Загальна вартість зі знижкою: " + cart.discountedTotal + "</p>";
            cartDiv.innerHTML += "<hr>";
            document.body.appendChild(cartDiv);
        });
    })
*/



//взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
/*
fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(data => {
        const recipesContainer = document.getElementById('recipes-container');

        data.recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');

            recipeDiv.innerHTML += "<h2>" + recipe.name + "</h2>";

            const ingredientsList = document.createElement('ul');
            recipe.ingredients.forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.textContent = ingredient;
                ingredientsList.appendChild(listItem);
            });
            recipeDiv.appendChild(ingredientsList);

            const instructionsList = document.createElement('ol');
            recipe.instructions.forEach(instruction => {
                const listItem = document.createElement('li');
                listItem.textContent = instruction;
                instructionsList.appendChild(listItem);
            });
            recipeDiv.appendChild(instructionsList);

            recipeDiv.innerHTML += "<p>Час приготування (хвилин): " + recipe.prepTimeMinutes + "</p>";
            recipeDiv.innerHTML += "<p>Час приготування (хвилин): " + recipe.cookTimeMinutes + "</p>";
            recipeDiv.innerHTML += "<p>Порцій: " + recipe.servings + "</p>";
            recipeDiv.innerHTML += "<p>Складність: " + recipe.difficulty + "</p>";
            recipeDiv.innerHTML += "<p>Кухня: " + recipe.cuisine + "</p>";
            recipeDiv.innerHTML += "<p>Калорії на порцію: " + recipe.caloriesPerServing + "</p>";
            recipeDiv.innerHTML += "<p>Теги: " + recipe.tags.join(", ") + "</p>";
            recipeDiv.innerHTML += "<p>Рейтинг: " + recipe.rating + "</p>";
            recipeDiv.innerHTML += "<p>Кількість відгуків: " + recipe.reviewCount + "</p>";
            recipeDiv.innerHTML += "<p>Тип прийому їжі: " + recipe.mealType.join(", ") + "</p>";
            recipeDiv.innerHTML += "<img src='" + recipe.image + "' alt='" + recipe.name + "' />";
            recipeDiv.innerHTML += "<hr>";

            recipesContainer.appendChild(recipeDiv);
        });
    })
*/

/*
зробити файл users.html
з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
 */



fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const userList = document.getElementById('users-list');
        const userDetailsContainer = document.getElementById('user-details');

        data.forEach(user => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="#" data-user-id="${user.id}">${user.id} - ${user.name}</a>`;
            userList.appendChild(listItem);
        });

        userList.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                const userId = event.target.dataset.userId;
                showUserDetails(userId);
            }
        });

        function showUserDetails(userId) {
            fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
                .then(response => response.json())
                .then(user => {
                    userDetailsContainer.innerHTML = `
                                <h2>Інформація про користувача</h2> 
                                <p><strong>ID:</strong> ${user.id}</p>
                                <p><strong>Ім'я:</strong> ${user.name}</p>
                                <p><strong>Імейл:</strong> ${user.email}</p>
                                <p><strong>Ім'я користувача:</strong> ${user.username}</p>
                                <p><strong>Телефон:</strong> ${user.phone}</p>
                                <p><strong>Веб-сайт:</strong> ${user.website}</p>
                                <p><strong>Адреса:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                                <p><strong>Геолокація:</strong> ${user.address.geo.lat}, ${user.address.geo.lng}</p>
                                <p><strong>Компанія:</strong> ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
                            `;
                })
                .catch(error => console.error('Помилка отримання даних про користувача:', error));
        }
    })
    .catch(error => console.error('Помилка отримання даних про користувачів:', error));

