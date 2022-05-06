let links = Array.from(document.querySelectorAll('.bar-link'))
let icons = Array.from(document.querySelectorAll('.fa-solid'))

var active;
var iconActive;


for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        if (active) {
            active.classList.remove('active')
        }
        e.currentTarget.classList.add('active');

        active = e.currentTarget
    });
}

