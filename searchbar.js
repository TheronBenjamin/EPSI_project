const input = document.getElementById("searchbar");
input.addEventListener('input', filterList)
function filterList(){
    filter = input.value.toLowerCase()
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        //Permet de récupérer les éléments situés dans le contact header
        // puis le premier élément <p> de cette liste qui contient le nom de client
        let name = card.firstElementChild.firstElementChild.textContent
        if(name.toLowerCase().includes(filter)){
            card.style.display = "block"
        } else {
            card.style.display = "none"
        }
    })
}