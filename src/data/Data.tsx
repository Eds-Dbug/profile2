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

const softwareSkills = [
	{
		id: 1,
		iconPrefix: 'fab',
		iconName: 'react',
		skillName: 'React',
		link: 'https://www.google.com/search?q=react&sxsrf=AJOqlzVNDzmAdQ-KcIpq2QlSpEPieKapIA%3A1673212485494&source=hp&ei=RTK7Y62zG620qtsP_q-m0As&iflsig=AK50M_UAAAAAY7tAVSns8nrVzdToyTil17IcHFOjlijl&ved=0ahUKEwjt6dCe8rj8AhUtmmoFHf6XCboQ4dUDCAo&uact=5&oq=react&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyBAgAEEMyBQgAEJECMgQIABBDMgUIABCRAjIKCAAQsQMQgwEQQzIHCAAQsQMQQzIKCAAQsQMQgwEQQzoHCCMQ6gIQJzoUCC4QgAQQsQMQgwEQxwEQ0QMQ1AI6CgguELEDEIMBEEM6CgguEMcBENEDEEM6CgguEIMBELEDEEM6CwgAEIAEELEDEIMBOgUIABCABDoLCC4Q1AIQsQMQgAQ6CAgAELEDEIMBOhEILhCDARDHARCxAxDRAxCABDoLCC4QgAQQsQMQgwE6EQguEIAEELEDEIMBEMcBENEDUMExWKFEYOlGaANwAHgBgAGxAogBqAiSAQcxLjYuMC4xmAEAoAEBsAEK&sclient=gws-wiz',
	},
	{
		id: 2,
		iconPrefix: 'fab',
		iconName: 'js',
		skillName: 'JavaScript',
		link: '',
	},
	{
		id: 3,
		iconPrefix: 'fab',
		iconName: 'html5',
		skillName: 'HTML',
		link: '',
	},
	{
		id: 4,
		iconPrefix: 'fab',
		iconName: 'css3',
		skillName: 'css',
		link: '',
	},
	{
		id: 5,
		iconPrefix: 'fab',
		iconName: 'bootstrap',
		skillName: 'bootstrap',
		link: '',
	},
	{
		id: 6,
		iconPrefix: 'fab',
		iconName: 'linux',
		skillName: 'linux',
		link: '',
	},
	{
		id: 7,
		iconPrefix: '',
		iconName: 'TypeScript',
		skillName: 'TypeScript',
		link: '',
	},
	{
		id: 8,
		iconPrefix: '',
		iconName: 'SQL',
		skillName: 'SQL',
		link: '',
	},
	{
		id: 9,
		iconPrefix: '',
		iconName: 'JQuery',
		skillName: 'JQuery',
		link: '',
	},
	{
		id: 10,
		iconPrefix: '',
		iconName: 'Express',
		skillName: 'Express',
		link: '',
	},
	{
		id: 11,
		iconPrefix: 'fab',
		iconName: 'node',
		skillName: 'node js',
		link: '',
	},
	{
		id: 12,
		iconPrefix: 'fab',
		iconName: 'php',
		skillName: 'php',
		link: '',
	},
	{
		id: 13,
		iconPrefix: 'fab',
		iconName: 'youtube',
		skillName: 'youtube api',
		link: '',
	},
	{
		id: 14,
		iconPrefix: 'fab',
		iconName: 'java',
		skillName: 'Java',
		link: '',
	},
];

export { contacts, links, hobbyLinks, certificates, softwareSkills };
