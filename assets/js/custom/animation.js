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

//Scroll animation

var controller = new ScrollMagic.Controller();

const menuScene = new ScrollMagic.Scene({
	triggerElement: '.header',
	triggerHook: 0,
	offset: 400,
})
	.setClassToggle('#fixedMenu', 'active')
	// .addIndicators()
	.addTo(controller);
//TODO: only works on homepage find why

const glassesTween = new TweenMax.to('#glasses', 4, {
	scale: 1.2,
	y: -10,
	x: -50,
	rotation: 8,
	transformOrigin: 'center center',
});

const triangleTween = new TweenMax.fromTo(
	'#triangle',
	4,
	{ x: 165, y: -49, rotation: -10, transformOrigin: 'center center' },
	{
		y: 50,
		x: -50,
		rotation: 50,
		transformOrigin: 'center center',
	}
);

const glassesScene = new ScrollMagic.Scene({
	triggerElement: '.home .hero__title',
	triggerHook: 0,
})
	.setTween(glassesTween)
	.addTo(controller);

const triangleScene = new ScrollMagic.Scene({
	triggerElement: '.home .hero__buttons',
	triggerHook: 0,
})
	.setTween(triangleTween)
	.addTo(controller);
