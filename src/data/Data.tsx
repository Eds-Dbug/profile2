import {JS_AlGO_Cert, RESPONSIVE_WEB_DESIGN,BAY, IN_PROGRESS, VIDEO_SEARCH_APP, SEASONS_APP, IMAGE_SEARCH_APP, STUDENT_LIST, TECH_DOCS, TRIBUTE, RANDOM_QUOTE_MACHINE} from '../Pictures/index'

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
		link: 'https://www.google.com/search?q=javascript&sxsrf=AJOqlzXB10ewBEteqGMWou5uj3ZiWEyOQQ%3A1673213152903&ei=4DS7Y_zjNoGiptQP46CeEA&ved=0ahUKEwj80_Lc9Lj8AhUBkYkEHWOQBwIQ4dUDCA8&uact=5&oq=javascript&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDOgcIIxCwAxAnOgoIABBHENYEELADOgcIABCwAxBDOg0IABDkAhDWBBCwAxgBOhIILhDHARDRAxDIAxCwAxBDGAI6FQguEMcBENEDENQCEMgDELADEEMYAjoPCC4Q1AIQyAMQsAMQQxgCOgQIIxAnOgQILhAnOgoIABCxAxCDARBDOg0IABCABBCxAxCDARAKOgoIABCABBCxAxAKOgsIABCABBCxAxCDAUoECEEYAEoECEYYAVDqCVitFWDNFmgCcAF4AIABiQGIAZwIkgEDNS41mAEAoAEByAESwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz-serp',
	},
	{
		id: 3,
		iconPrefix: 'fab',
		iconName: 'html5',
		skillName: 'HTML',
		link: 'https://www.google.com/search?q=html&sxsrf=AJOqlzU6_E1GKYitnxlaK8cvnylwvX_Ywg%3A1673214011838&ei=Ozi7Y4LqMrCwptQP_vqUyAk&ved=0ahUKEwjC87v297j8AhUwmIkEHX49BZkQ4dUDCA8&uact=5&oq=html&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQsQMQQzIGCAAQChBDMgcIABCxAxBDMgQIABBDMgcIABCxAxBDMgUIABCABDIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6BwgAELADEEM6DQgAEOQCENYEELADGAE6EgguEMcBENEDEMgDELADEEMYAjoVCC4QxwEQ0QMQ1AIQyAMQsAMQQxgCOgQIIxAnOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6DgguEIAEELEDEMcBENEDOgUILhCABDoHCAAQgAQQCjoLCC4QgAQQxwEQ0QNKBAhBGABKBAhGGAFQygdYrxRgrBZoBHABeACAAXeIAZAEkgEDMi4zmAEAoAEByAESwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz-serp',
	},
	{
		id: 4,
		iconPrefix: 'fab',
		iconName: 'css3',
		skillName: 'css',
		link: 'https://www.google.com/search?sa=X&sxsrf=AJOqlzW7IgxWolkjSsNTiIPcnOLi9mrvag:1673214068723&q=CSS&stick=H4sIAAAAAAAAAONQFuLQz9U3ME43MlDiBLEMTUuyMk4xwkVPMWIImxlkl51i5AIxzYuTstOSoOKmVYbxUGZWemE6lGluWlwCZRoVWJr_YpQLSs1JLElNUSjJV_AI8fVRSMxLUfBKLEsMTi7KLCjZxQK3G8oEaVvEyuwcHDyBjfEWmyRDk4CURIyDcumO_R15KvwLOEKqmt4FGZ27CQCUgkIozgAAAA&ved=2ahUKEwjD4MuR-Lj8AhW0kokEHdV8Cv0Q-BZ6BAgJEA0',
	},
	{
		id: 5,
		iconPrefix: 'fab',
		iconName: 'bootstrap',
		skillName: 'bootstrap',
		link: 'https://www.google.com/search?q=bootstrap&sxsrf=AJOqlzXdI-euZIxmuHmfdoLYKaEVosLzqQ%3A1673214267738&ei=Ozm7Y7jYLIyjptQP2-ONyAU&ved=0ahUKEwj44b7w-Lj8AhWMkYkEHdtxA1kQ4dUDCA8&uact=5&oq=bootstrap&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIHCAAQsQMQQzIECAAQQzIECAAQQzIICAAQgAQQsQMyCggAEIAEEIcCEBQyBwgAELEDEEMyBQgAEIAEMgsIABCABBCxAxCDATIFCAAQgAQ6CggAEEcQ1gQQsAM6BwgAELADEEM6DgguEIAEELEDEMcBENEDOggILhCxAxCDAToHCC4Q1AIQQ0oECEEYAEoECEYYAFCZB1jGEmCyFGgDcAF4AIABe4gBqgeSAQMzLjaYAQCgAQHIAQrAAQE&sclient=gws-wiz-serp',
	},
	{
		id: 6,
		iconPrefix: 'fab',
		iconName: 'linux',
		skillName: 'linux',
		link: 'https://www.google.com/search?q=linux&sxsrf=AJOqlzWM2vTzlO-jDqnBTioyZdhrocESnQ%3A1673214257863&ei=MTm7Y6KYNMKjptQPk9-_MA&ved=0ahUKEwji9OPr-Lj8AhXCkYkEHZPvDwYQ4dUDCA8&uact=5&oq=linux&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQsQMQQzILCAAQgAQQsQMQgwEyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyBQgAEIAEMgsIABCABBCxAxCDAToHCCMQsAMQJzoKCAAQRxDWBBCwAzoECCMQJzoECAAQQzoNCC4QsQMQxwEQ0QMQQzoHCC4Q1AIQQzoKCAAQsQMQgwEQQzoNCC4QgwEQ1AIQsQMQQzoLCC4QgAQQxwEQ0QM6CwguEIMBELEDEIAEOggILhCABBCxAzoHCC4QsQMQQzoLCC4QgAQQsQMQgwFKBAhBGABKBAhGGABQqAZYyAtgrQ1oAnABeACAAYwBiAGoBJIBAzIuM5gBAKABAcgBCsABAQ&sclient=gws-wiz-serp',
	},
	{
		id: 7,
		iconPrefix: '',
		iconName: 'TypeScript',
		skillName: 'TypeScript',
		link: 'https://www.google.com/search?q=typescript&sxsrf=AJOqlzVzu1WWhzMofBzV9KIEQMmZDDYtyA%3A1673214207200&ei=_zi7Y8n0C86iptQPrKankA4&ved=0ahUKEwiJ8M_T-Lj8AhVOkYkEHSzTCeIQ4dUDCA8&uact=5&oq=typescript&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIECCMQJzIECCMQJzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECC4QQzINCAAQgAQQhwIQsQMQFDoKCAAQRxDWBBCwAzoHCAAQsAMQQzoKCAAQsQMQgwEQQzoQCC4QsQMQgwEQxwEQ0QMQQzoFCAAQgAQ6CAguELEDEIMBOgsILhCABBCxAxCDAToLCC4QsQMQgwEQ1AJKBAhBGABKBAhGGABQ8wZYrhVg1CFoA3ABeACAAWiIAcEHkgEDOC4ymAEAoAEByAEKwAEB&sclient=gws-wiz-serp',
	},
	{
		id: 8,
		iconPrefix: '',
		iconName: 'SQL',
		skillName: 'SQL',
		link: 'https://www.google.com/search?q=SQL&sxsrf=AJOqlzWgWujwtFj8upQ4jG4jCelDXbLREw%3A1673214166604&ei=1ji7Y8fHJJWYptQPssCSmAs&ved=0ahUKEwjHiqLA-Lj8AhUVjIkEHTKgBLMQ4dUDCA8&uact=5&oq=SQL&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQsQMQQzIECAAQQzIHCAAQsQMQQzIECAAQQzIHCAAQsQMQQzIHCAAQsQMQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzoKCAAQRxDWBBCwAzoHCAAQsAMQQzoNCAAQ5AIQ1gQQsAMYAToPCC4Q1AIQyAMQsAMQQxgCOhIILhDHARDRAxDIAxCwAxBDGAI6BAgjECc6BQgAEIAEOhEILhCABBCxAxCDARDHARDRAzoICC4QsQMQgwE6BwgjEOoCECc6DAgAEOoCELQCEEMYAzoPCC4Q1AIQ6gIQtAIQQxgDOgYIABAKEENKBAhBGABKBAhGGAFQkAhY_Bpgmh9oBHABeACAAXWIAZADkgEDMy4xmAEAoAEBsAEUyAETwAEB2gEGCAEQARgJ2gEGCAIQARgI2gEGCAMQARgB&sclient=gws-wiz-serp',
	},
	{
		id: 9,
		iconPrefix: '',
		iconName: 'JQuery',
		skillName: 'JQuery',
		link: 'https://www.google.com/search?q=Jquery&sxsrf=AJOqlzWUIW9QztVphEuMWkiEOyro74pgtg%3A1673214197022&ei=9Ti7Y9N-9p2m1A_E7Y-YDw&ved=0ahUKEwiTzeLO-Lj8AhX2jokEHcT2A_MQ4dUDCA8&uact=5&oq=Jquery&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQsQMQQzIHCAAQsQMQQzIKCAAQgAQQhwIQFDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6BwgAELADEEM6BAgjECc6BAgAEEM6EQguEIAEELEDEIMBEMcBENEDOggILhCxAxCDAToICC4QgAQQ1AI6CAguEIAEELEDOggIABCABBCxA0oECEEYAEoECEYYAFCoB1iqD2DIEWgDcAF4AIABZIgBxASSAQM0LjKYAQCgAQHIAQrAAQE&sclient=gws-wiz-serp',
	},
	{
		id: 10,
		iconPrefix: '',
		iconName: 'Express',
		skillName: 'Express',
		link: 'https://www.google.com/search?q=express+js&sxsrf=AJOqlzUiCu574ceszKfdXHu2WQxy1bYIWA%3A1673214151617&ei=xzi7Y46xJY2pptQP4rWbsAE&oq=ex&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgDMgQIIxAnMgQIIxAnMgQIIxAnMgQIABBDMgQIABBDMgQIABBDMgQIABBDMg0ILhDHARDRAxDUAhBDMgQIABBDMggIABCABBCxAzoKCAAQRxDWBBCwAzoHCAAQsAMQQzoNCC4QxwEQ0QMQsAMQQzoRCC4QgAQQsQMQgwEQxwEQ0QM6CAguELEDEIMBSgQIQRgASgQIRhgAUKYDWIkFYN4daAJwAXgAgAFsiAHQAZIBAzAuMpgBAKABAcgBCsABAQ&sclient=gws-wiz-serp',
	},
	{
		id: 11,
		iconPrefix: 'fab',
		iconName: 'node',
		skillName: 'node js',
		link: 'https://www.google.com/search?q=node&sxsrf=AJOqlzXHOdguYNAlhJzWE-b4P8_qC298Cw%3A1673214133803&ei=tTi7Y4HVMKybptQPwPeT0Ao&ved=0ahUKEwjBg9Cw-Lj8AhWsjYkEHcD7BKoQ4dUDCA8&uact=5&oq=node&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQsQMQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIHCAAQsQMQQzIKCAAQsQMQgwEQQzIECAAQQzIECAAQQzIECAAQQzIICAAQgAQQsQM6CggAEEcQ1gQQsAM6BwgAELADEEM6BAgjECc6CwguEIAEELEDEIMBOhAILhCxAxCDARDHARDRAxBDOggILhCABBDlBDoLCAAQgAQQsQMQgwE6BQgAEIAEOhEILhCABBCxAxCDARDHARDRA0oECEEYAEoECEYYAFDTBliuCmCoD2gDcAF4AIABeYgBtQOSAQMxLjOYAQCgAQHIAQrAAQE&sclient=gws-wiz-serp',
	},
	{
		id: 12,
		iconPrefix: 'fab',
		iconName: 'php',
		skillName: 'php',
		link: 'https://www.google.com/search?sa=X&sxsrf=AJOqlzVa3tL_CSrTL0Hbw7Sz75ghlP-7pw:1673214070531&q=PHP&stick=H4sIAAAAAAAAAONQFuLQz9U3ME43MlACs8wMsstOMcIFTzFygpiGpiVZGVBhiAouENO8OCk7LQkqblplGA9lZqUXpkOZ5qbFJVCmUYGl-S9GuaDUnMSS1BSFknwFjxBfH4XEvBQFr8SyxODkosyCkl0scLuhTJC2RazMAR4BE9gYb7FJMjQJSEnEOCiX7tjfkafCv4AjpKrpXZDRuZsAbxJV280AAAA&cshid=1673214085951251&lei=dji7Y7OHIJyhptQP1f-lkAg',
	},
	{
		id: 13,
		iconPrefix: 'fab',
		iconName: 'youtube',
		skillName: 'youtube api',
		link: 'https://developers.google.com/youtube/v3',
	},
	{
		id: 14,
		iconPrefix: 'fab',
		iconName: 'java',
		skillName: 'Java',
		link: 'https://www.google.com/search?sa=X&sxsrf=AJOqlzVa3tL_CSrTL0Hbw7Sz75ghlP-7pw:1673214070531&q=Java&stick=H4sIAAAAAAAAAONQFuLQz9U3ME43MlDiArHMi5Oy05JOMcKFTzFygpiGpiVZGVBhM4PsslOMmMpNqwzjocys9MJ0KNPctLgEyjQqsDT_xSgXlJqTWJKaolCSr-AR4uujkJiXouCVWJYYnFyUWVCyiwVuN5QJ0raIlQWkZAIb4y02SYYmASmJGAfl0h37O_JU-BdwhFQ1vQsyOncTAKxC7RfQAAAA&cshid=1673214085951251&lei=jDi7Y7L4JZGcptQP59S2mAk',
	},
];

const projectData = [
	{
		id: 'scheduler_app',
		pic: IN_PROGRESS,
		link: 'https://github.com/Eds-Dbug/scheduler',
		description:
			'An app that allows for the creation of meetings between interviewers and students',
	},
	{
		id: 'Videos_Search_App',
		pic: VIDEO_SEARCH_APP,
		link: 'https://eds-dbug.github.io/videos/',
		description:
			'App that searches for videos, that was created during Modern React with Redux Course',
	},
	{
		id: 'Seasons_App',
		pic: SEASONS_APP,
		link: 'https://eds-dbug.github.io/Determine_season_app/',
		description:
			'App that Checks if its chilly or sunny outside depending on your location',
	},
	{
		id: 'Image_Search_App',
		pic: IMAGE_SEARCH_APP,
		link: 'https://eds-dbug.github.io/Image_Search_App/',
		description:
			'App that searches for images depending on whatever the user puts in the search bar',
	},
	{
		id: 'Student_List_App',
		pic: STUDENT_LIST,
		link: 'https://eds-dbug.github.io/front_end_assessment-2/',
		description:
			'An app that renders a list of students and can search for a student by name or by tags that can be added. For more information please contact me.',
	},
	{
		id: 'Technical_Documentation_Page',
		pic: TECH_DOCS,
		link: 'https://codepen.io/TeeJip/full/zYEWKgy',
		description: 'A technical documentation page for dear old JavaScript',
	},
	{
		id: 'Tribute_Page',
		pic: TRIBUTE,
		link: 'https://codepen.io/TeeJip/full/gOGogpq',
		description:
			'A tributary page for Dr. Norman Junior a project from the Free Code Camp',
	},
	{
		id: 'Random_Quote_Machine',
		pic: RANDOM_QUOTE_MACHINE,
		link: 'https://codepen.io/TeeJip/full/qBmvwWX',
		description: 'A Quote machine that generates random quotes',
	},
];

export { contacts, links, hobbyLinks, certificates, softwareSkills,projectData };