module.exports = {
	base: '/h5activity/',
	dest: 'dist',
	title: 'h5activity-bate',
	description: '专为H5活动页而生，开发H5更快捷方便',
	head: [
		[ 'link', { rel: 'icon', href: '/fav.png' } ]
	],
	themeConfig: {
		logo: '/logo.png',
		displayAllHeaders: true,
		smoothScroll: true,
		lastUpdated: '上次更新',
		nav: [{
			text: '样式',
			items: [{
				text: '颜色（color）',
				link: '/styles/colors'
			}, {
				text: '间距（spacing）',
				link: '/styles/spacing'
			}, {
				text: '文本（font）',
				link: '/styles/text'
			}, {
				text: '显示（display）',
				link: '/styles/display'
			}, {
				text: '边框（border）',
				link: '/styles/border'
			}, {
				text: '弹性布局（flex）',
				link: '/styles/flex'
			}, {
				text: '网格（col）',
				link: '/styles/grids'
			}]
		}, {
			text: '组件',
			items: [{
				text: '纸片（a-sheet）',
				link: '/templates/sheet'
			}, {
				text: '按钮（a-btn）',
				link: '/templates/button'
			}, {
				text: '图片（a-img）',
				link: '/templates/images'
			}]
		}, {
			text: '指令',
			items: [{
				text: '波纹（ripple）',
				link: '/directives/ripple'
			}]
		}, {
			text: 'GitHub',
			link: 'https://github.com/Kirito001/h5-activity'
		}],
		sidebar: [{
			title: '必看',
			collapsable: false,
			sidebarDepth: 0,
			children: [
				['/essentials/unit', '单位'],
				['/essentials/size', '使用前提'],
				['/essentials/start', '现在开始']
			]
		}, {
			title: '样式',
			collapsable: false,
			sidebarDepth: 0,
			children: [
				['/styles/colors', '颜色（color）'],
				['/styles/spacing', '间距（spacing）'],
				['/styles/text', '文本（font）'],
				['/styles/display', '显示（display）'],
				['/styles/border', '边框（border）'],
				['/styles/flex', '弹性布局（flex）'],
				['/styles/grids', '非响应式网格（col）']
			]
		}, {
			title: '组件',
			collapsable: false,
			sidebarDepth: 0,
			children: [
				['/templates/sheet', '纸片（a-sheet）'],
				['/templates/button', '按钮（a-btn）'],
				['/templates/images', '图片（a-img）']
			]
		}, {
			title: '指令',
			collapsable: false,
			sidebarDepth: 0,
			children: [
				['/directives/ripple', '波纹（ripple）']
			]
		}]
	},
	locales: {
		'/': { lang: 'zh-CN' }
	},
	plugins: {
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