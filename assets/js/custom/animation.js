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
