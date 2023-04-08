const welcome = document.querySelector('.welcome-box')
welcome.addEventListener ('click', () => {
    document.querySelector('.welcome-box h1').textContent = 'Have a Good Time!'
})

const cta = document.querySelector('.cta-button')
cta.addEventListener ('click', () => {
    // document.querySelector('.grid-hide').className = 'grid'
    document.querySelector('.grid-hide').style.display = 'flex'
})