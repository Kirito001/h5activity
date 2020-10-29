module.exports = {
	base: '/h5-activity/',
	dest: 'dist',
	title: 'h5activity',
	description: '专为H5活动页而生，开发H5更快捷方便',
	head: [
		[ 'link', { rel: 'icon', href: 'public/logo.png' } ]
	],
	themeConfig: {
		logo: '/logo.png',
		displayAllHeaders: true,
		smoothScroll: true,
		sidebar: [{
			title: '必看前提',
			collapsable: false,
			sidebarDepth: 0,
			children: [
				['/essentials/size', '尺寸'],
				['/essentials/unit', '单位'],
				['/essentials/start', '快速开始']
			]
		}, {
			title: '样式',
			collapsable: false,
			sidebarDepth: 0,
			children: [
				['/styles/colors', '颜色'],
				['/styles/spacing', '间距'],
				['/styles/text', '文本']
			]
		}]
	},
	locales: {
		'/': { lang: 'zh-CN' }
	},
	plugins: {
		scss: {
			includePaths: ["../plugin/h5-activity.scss"]
		},
		'@vuepress/medium-zoom': {
			selector: 'img.zoom-custom-imgs',
			options: {
				margin: 16,
				background: 'rgba(255, 255, 255, .7)'
			}
		},
		'@vuepress/last-updated': {
			transformer: (timestamp, lang) => {
				const moment = require('moment')
				moment.locale(lang)
				return moment(timestamp).fromNow()
			}
		}
	}
}