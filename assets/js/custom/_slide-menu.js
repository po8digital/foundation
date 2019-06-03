import { $ } from './_utilities';

const trigger = $('.header-menu__trigger');
const slideMenu = $('.slide-menu');
const close = $('.slide-menu__close');
// const itemWithChildrens = $('.menu-item-has-children');
// const openChildrensTrigger;
console.log(dataset('after'));

const openMenu = () => slideMenu.classList.add('isOpen');
const closeMenu = () => slideMenu.classList.remove('isOpen');

trigger.on('click', openMenu);
close.on('click', closeMenu);

// itemWithChildrens.on('click', () => this.classList.add('itemOpen'));
