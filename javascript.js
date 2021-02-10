function showCity() {

    let message = document.querySelector('#label');
    let nomVilleSelectionnee = document.getElementById('ville').value;
    apiCall(nomVilleSelectionnee);
    let villes = document.getElementsByClassName('city');
    for (let i = 0; i < villes.length; i++) {
        if (nomVilleSelectionnee == villes[i].id) {
            villes[i].style.display = " ";
            villes[i].style.width = "100%";
            message.firstChild.nodeValue = "Vous avez choisi: " + villes[i].id;

        } else {
            villes[i].style.display = "none";
        }
    }
}
