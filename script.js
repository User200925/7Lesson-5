async function fetchUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        return data.results[0];
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayUser(user) {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = `
        <div class="card">
            <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
            <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
            <p>📧 ${user.email}</p>
            <p>📞 ${user.phone}</p>
            <p>🏠 ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}</p>
        </div>
    `;
}

document.getElementById('new-user-button').addEventListener('click', async () => {
    const user = await fetchUser();
    displayUser(user);
});

// Загрузка первого пользователя при загрузке страницы
window.onload = async () => {
    const user = await fetchUser();
    displayUser(user);
};
