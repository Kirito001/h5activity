<template>
	<button type="button" class="a-btn fs-32 px-6" :class="color" :style="style">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'a-btn',
	props: {
		color: String,
		block: Boolean,
		width: String,
		height: Number
	},
	data() {
		return {
			style: {
				'background-color': this.color,
				'width': this.width || this.block && '100%',
				'height': this.height
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../plugin/h5activity.scss';

.a-btn {
	height: 96 / $design-size;
	font-size: 20 / $design-size;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	background-color: #EEEEEE;
	border: none;
	outline: none;
}
</style>
