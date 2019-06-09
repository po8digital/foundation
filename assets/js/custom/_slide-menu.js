import { $, $$ } from './_utilities';

const trigger = $('.header-menu__trigger');
const slideMenu = $('.slide-menu');
const close = $('.slide-menu__close');
const itemsWithChildrens = $$('.slide-menu .menu-item-has-children');
// const openChildrensTrigger;
// console.log(dataset('after'));
itemsWithChildrens.forEach(item =>
	item.on('click', e => {
		if (e.offsetX > 300) {
			item.classList.toggle('active');
			console.log('clicked after');
		} else {
			console.log('clicked not after');
		}
	})
);

const openMenu = () => slideMenu.classList.add('isOpen');
const closeMenu = () => slideMenu.classList.remove('isOpen');

trigger.on('click', openMenu);
close.on('click', closeMenu);

// itemWithChildrens.on('click', () => this.classList.add('itemOpen'));
