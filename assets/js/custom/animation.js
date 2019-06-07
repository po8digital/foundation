import { $, $$ } from './_utilities';

// AnimatedText
const texts = $$('.animated-text__item');

const animTextTl = new TimelineMax({
	repeat: -1,
	repeatDelay: 0.3,
	paused: false,
});

texts.forEach(textItem => {
	animTextTl.to(textItem, 1, { opacity: 1 }).to(textItem, 1, { opacity: 0 });
});

// heroanimation

const heroTitle = $('.home .hero__title');
const heroRedButton = $('.hero__buttons .button--salmon');
const heroBlueButton = $('.hero__buttons .button--blue');
const homeHeader = $('.home .header__content');

const animHeroTl = new TimelineMax();

animHeroTl
	.to(homeHeader, 2, { opacity: 1, ease: Power2.easeOut })
	.fromTo(
		heroTitle,
		2,
		{ y: 10 },
		{ opacity: 1, y: 0, ease: Power2.easeOut },
		'-=1.5'
	)
	.fromTo(
		heroRedButton,
		2,
		{ y: 15 },
		{ opacity: 1, y: 0, ease: Power2.easeOut },
		'-=1.5'
	)
	.fromTo(
		heroBlueButton,
		2,
		{ y: 40 },
		{ opacity: 1, y: 0, ease: Back.easeOut },
		'-=1.5'
	);
