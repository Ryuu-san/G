let button = document.querySelectorAll('.button')[0]
let image_container = document.querySelectorAll('.img-container')[0]

function other() {
    let image_url = document.querySelectorAll('.input')[0]
    let new_container = document.createElement('div')
    let new_image = document.createElement('img')
    new_image.src = image_url.value
    new_image.onload = function() {
        if (new_image.width > new_image.height) {
            console.log('Больше ширина')
            new_image.classList.add('img-width')
        } else if (new_image.width < new_image.height) {
            new_image.classList.add('img-height')
            console.log('Больше высота')
        }
        new_container.classList.add('container-elem')
        new_container.appendChild(new_image)
        image_container.appendChild(new_container)
    }

    console.log(new_image.width, new_image.height)

    image_url.value = ''
}

button.onclick = function() {
    other()
}