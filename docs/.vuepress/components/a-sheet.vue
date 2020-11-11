<template>
	<div :class="color" :style="{ width: getWidth(), height: getHeight(), 'background-color': color }">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'a-sheet',
	props: {
		width: 0,
		height: 0,
		color: {
			type: String,
			default: 'transparent'
		}
	},
	methods: {
		getWidth() {
			return this.width / 7.5 + 'vw'
		},
		getHeight() {
			return this.height / 7.5 + 'vw'
		}
	}
}
</script>

<style lang="scss">
	
</style>
