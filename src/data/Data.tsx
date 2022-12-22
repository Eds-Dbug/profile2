import {JS_AlGO_Cert, RESPONSIVE_WEB_DESIGN} from '../Pictures/index'

const contacts = [
	{
		id: 1,
		iconPrefix: 'fab',
		iconName: 'square-github',
		platform: 'Github',
		link: 'https://github.com/Eds-Dbug',
	},
	{
		id: 2,
		iconPrefix: 'fab',
		iconName: 'linkedin',
		platform: 'Linkedin',
		link: 'https://www.linkedin.com/in/edgar-leung-aa9ba0216/',
	},
	{
		id: 3,
		iconPrefix: 'fas',
		iconName: 'envelope',
		platform: 'edsdbug@gmail.com',
		link: '',
	},
	{
		id: 4,
		iconPrefix: 'fas',
		iconName: 'phone',
		platform: '416 822 3939',
		link: '',
	},
];

const links = [
	{
		id: 1,
		name: 'Home',
		url: '/',
	},
	{
		id: 2,
		name: 'About / Hobbies',
		url: '/hobbies',
	},
	{
		id: 3,
		name: 'Projects',
		url: '/projects',
	},
	{
		id: 4,
		name: 'Skills',
		url: '/skills',
	},
	{
		id: 5,
		name: 'Certificates',
		url: '/certificates',
	},
	{
		id: 6,
		name: 'Contact',
		url: '/contact',
	},
];

const hobbyLinks = [
	{
		id: 1,
		name: 'Cycling',
		url: '/cycling',
	},
	{
		id: 2,
		name: 'Minis',
		url: '/minis',
	},
];

const certificates = [
	{
		id: 'JS_Algorithms_Data_Structures_Cert',
		pic: JS_AlGO_Cert,
		link: 'https://www.freecodecamp.org/certification/fcc0f3779f1-00c2-4422-ac11-e66735cc16ef/javascript-algorithms-and-data-structures',
		description:
			'Many long hours of Java Script challenges , This course taught me to be proficient in JS.                                                                 ',
	},
	{
		id: 'Responsive_Web_Design_Cert',
		pic: RESPONSIVE_WEB_DESIGN,
		link: 'https://www.freecodecamp.org/certification/fcc0f3779f1-00c2-4422-ac11-e66735cc16ef/responsive-web-design',
		description:
			'I thought I knew everything about CSS and HTML being they were "easy" topics, but there was a lot more too it',
	},
];

export { contacts, links, hobbyLinks, certificates };
