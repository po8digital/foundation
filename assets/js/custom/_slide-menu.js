import { $ } from './_utilities';

const trigger = $('.header-menu__trigger');
const slideMenu = $('.slide-menu');
const close = $('.slide-menu__close');
function openMenu() {
	return slideMenu.classList.add('isOpen');
}

trigger.on('click', openMenu);
