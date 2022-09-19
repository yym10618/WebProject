export function scroll (){
    const scrollTop = document.querySelector('#scrolltoTop')
    const primaryNavBar = document.querySelector('#primary-navbar')

    scrollTop.addEventListener('click', () => window.scroll({top:0, behavior: 'smooth'}))

    window.onscroll = () => scrollFunction()

    function scrollFunction(){
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            scrollTop.style.display = 'block'
            primaryNavBar.classList.add('rgba-black-strong')
            primaryNavBar.classList.remove('rgba-black-light')
        }else{
            scrollTop.style.display = 'none'
            primaryNavBar.classList.remove('rgba-black-strong')
            primaryNavBar.classList.add('rgba-black-light')
        }
    }
}