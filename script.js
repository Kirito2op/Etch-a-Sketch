var container = document.getElementById('container');

for (var i = 0; i < 16 * 16; i++) {
    var box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('mouseenter', function(event) {
        event.target.classList.add('red');
    });
}