const siteContent = {
	nav            : {
		'nav-item-1' : 'Services',
		'nav-item-2' : 'Product',
		'nav-item-3' : 'Vision',
		'nav-item-4' : 'Features',
		'nav-item-5' : 'About',
		'nav-item-6' : 'Contact',
		'img-src'    : 'img/logo.png',
	},
	cta            : {
		h1        : 'DOM Is Awesome',
		button    : 'Get Started',
		'img-src' : 'img/header-img.png',
	},
	'main-content' : {
		'features-h4'      : 'Features',
		'features-content' :
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4'         : 'About',
		'about-content'    :
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src'   : 'img/mid-page-accent.jpg',
		'services-h4'      : 'Services',
		'services-content' :
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4'       : 'Product',
		'product-content'  :
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4'        : 'Vision',
		'vision-content'   :
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	},
	contact        : {
		'contact-h4' : 'Contact',
		address      : '123 Way 456 Street Somewhere, USA',
		phone        : '1 (888) 888-8888',
		email        : 'sales@greatidea.io',
	},
	footer         : {
		copyright : 'Copyright Great Idea! 2018',
	},
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

const navBar = document.querySelectorAll('header nav a');
navBar[0].textContent = 'Services';
navBar[1].textContent = 'Product';
navBar[2].textContent = 'Vision';
navBar[3].textContent = 'Features';
navBar[4].textContent = 'About';
navBar[5].textContent = 'Contact';

let headerPic = document.getElementById('cta-img');
headerPic.setAttribute('src', siteContent['cta']['img-src']);

let headerLogo = document.getElementsByTagName('h1');
headerLogo[0].textContent = siteContent['cta']['h1'];
headerLogo[0].setAttribute('style', 'white-space: pre;');
headerLogo[0].textContent = siteContent['cta']['h1'].split(' ').join('\n');

let button = document.getElementsByTagName('button');
button[0].textContent = siteContent['cta']['button'];

let titleH4 = document.getElementsByTagName('h4');
titleH4[0].textContent = siteContent['main-content']['features-h4'];
titleH4[1].textContent = siteContent['main-content']['about-h4'];
titleH4[2].textContent = siteContent['main-content']['services-h4'];
titleH4[3].textContent = siteContent['main-content']['product-h4'];
titleH4[4].textContent = siteContent['main-content']['vision-h4'];
titleH4[5].textContent = siteContent['contact']['contact-h4'];

let paragraph = document.getElementsByTagName('p');
paragraph[0].textContent = siteContent['main-content']['features-content'];
paragraph[1].textContent = siteContent['main-content']['about-content'];
paragraph[2].textContent = siteContent['main-content']['services-content'];
paragraph[3].textContent = siteContent['main-content']['product-content'];
paragraph[4].textContent = siteContent['main-content']['vision-content'];
paragraph[5].textContent = siteContent['contact']['address'];
paragraph[5].setAttribute('style', 'white-space: pre;');
paragraph[5].textContent = siteContent['contact']['address'].split('t ').join('t\n');
paragraph[6].textContent = siteContent['contact']['phone'];
paragraph[7].textContent = siteContent['contact']['email'];
paragraph[8].textContent = siteContent['footer']['copyright'];

let middlePic = document.getElementById('middle-img');
middlePic.setAttribute('src', siteContent['main-content']['middle-img-src']);

const colorNavBar = document.querySelectorAll('a');
colorNavBar.forEach((element) => {
	element.style.color = 'green';
});

const newContent = document.createElement('addNav');
newContent.textContent = 'People';
const secondaryContent = document.querySelector('nav');
secondaryContent.prepend(newContent);

const contentNew = document.createElement('nav2');
contentNew.textContent = 'Code';
const secondaryContents = document.querySelector('nav');
secondaryContents.append(contentNew);

// const mainContent = document.querySelector(".main-content");

// const topContent = mainContent.querySelector(".top-content");
// const features = topContent.getElementsByTagName("div")[0];
// features.querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
// features.querySelector("p").textContent = siteContent["main-content"]["features-content"];

// const about = topContent.getElementsByTagName("div")[1];
// about.querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
// about.querySelector("p").textContent = siteContent["main-content"]["about-content"];

// document.getElementById("middle-img").setAttribute("src",siteContent["main-content"]["middle-img-src"])
