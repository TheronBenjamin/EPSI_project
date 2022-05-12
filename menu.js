let links = Array.from(document.querySelectorAll('.bar-link'))

let active;


for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        if (active) {
            active.classList.remove('active')
        }
        e.currentTarget.classList.add('active');

        active = e.currentTarget
    });
}
