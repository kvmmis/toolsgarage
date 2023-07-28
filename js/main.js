const nav = document.querySelector('.navbar')
const navItems = document.querySelector('.navbar__items')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.navbar__item')

const handleNav = () => {
	nav.classList.toggle('navbar--active')
	navItems.classList.toggle('navbar__items--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('navbar--active')
			navItems.classList.remove('navbar__items--active')
		})
	})
}

navBtn.addEventListener('click', handleNav)
