---
title: '颜色'
---

# 颜色

`h5Activity` 提供了以下背景颜色，可以直接使用，例如 `class="red"`

文字颜色需要在背景颜色后面加上后缀 `-text`，例如 `red-text`

<template>
<div class="d-flex">
	<div v-for="(item, i) in colorName" class="col-6 pa-2 d-flex flex-column" :class="item">
		<span class="mb-2">{{ item }}</span>
		<span>{{ color[i] }}</span>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			colorName: ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey', 'white', 'black'],
			color: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b', '#ffffff', '#000000']
		}
	}
}
</script>

<style lang="scss">
@import '../plugin/h5-activity.scss';
</style>