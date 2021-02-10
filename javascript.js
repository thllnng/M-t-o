let apiCall = (city) => {
    const apiKey = "bd6b3aa0299986e1043f0b7b23e81ec4";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    fetch(url).then((response) =>
            response.json().then((data) => {
                console.log(data)
                document.querySelector('.temps' + city).innerHTML = data.main.temp;
            })
        )
        .catch((err) => console.log('Erreur :' + err));
}

function showCity() {

    let message = document.querySelector('#label');
    let nomVilleSelectionnee = document.getElementById('ville').value;
    apiCall(nomVilleSelectionnee);
    let villes = document.getElementsByClassName('city');
    for (let i = 0; i < villes.length; i++) {
        if (nomVilleSelectionnee == villes[i].id) {
            villes[i].style.display = "";
            villes[i].style.width = "100%";
            message.firstChild.nodeValue = "Vous avez choisi: " + villes[i].id;

        } else {
            villes[i].style.display = "none";
        }
    }
}
