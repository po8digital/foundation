import { $, $$ } from './_utilities';

// AnimatedText
const texts = $$('.animated-text__item');

const animTextTl = new TimelineMax({ repeat: -1, repeatDelay: 1 });

texts.forEach(textItem => {
	animTextTl
		.to(textItem, 2, { opacity: 1, y: -5 })
		.to(textItem, 2, { opacity: 0, y: 20 });
});
