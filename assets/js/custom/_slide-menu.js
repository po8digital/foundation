import { $ } from './_utilities';

const trigger = $('.header-menu__trigger');
const slideMenu = $('.slide-menu');
const close = $('.slide-menu__close');
const openMenu = () => slideMenu.classList.add('isOpen');
const closeMenu = () => slideMenu.classList.remove('isOpen');

trigger.on('click', openMenu);
close.on('click', closeMenu);
// document.on('click', e => {
// 	if (!e.target.closest('.slide-menu')) {
// 		closeMenu(e);
// 	}
// });
