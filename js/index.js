// add event on more button
const openTab = () => {
    const elem = document.querySelectorAll('.more_button')
    for (let i = 0; i < elem.length; i++) {
        let element = elem[i]
        element.onclick = function () {
            if (element.nextElementSibling.style.display === 'none' ||
            element.nextElementSibling.style.display === '') {
                element.nextElementSibling.style.display = 'block'
            } else {
                element.nextElementSibling.style.display = 'none'
            }
        }
    }
}

openTab()

// enable more button with JS
document.querySelectorAll('button').forEach(x => x.style.display = 'block')
// hide more info with JS
document.querySelectorAll('button').forEach(x => x.nextElementSibling.style.display = 'none')
