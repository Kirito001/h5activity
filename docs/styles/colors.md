---
title: '颜色'
---

# 颜色

<template>
<div v-for="(item, i) in colorName" class="pa-2 d-flex justify-space-b" :class="item">
<span>{{ item }}</span>
<span>{{ color[i] }}</span>
</div>
</template>

<script>
export default {
	data() {
		return {
			colorName: ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'],
			color: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b']
		}
	}
}
</script>

<style lang="scss">
@import '../plugin/h5-activity.scss';
</style>