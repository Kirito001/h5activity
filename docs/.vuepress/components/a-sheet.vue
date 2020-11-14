<template>
	<div class="a-sheet" :class="color" :style="style">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'a-sheet',
	props: {
        absolute: {
            type: Boolean,
            default: false
        },
		color: {
			type: String,
			default: 'transparent'
		},
		height: String,
		width: String,
		src: String
	},
    data() {
        return {
            style: {
                'width': this.getWidth(),
                'height': this.getHeight(),
                'background-color': this.color,
                'position': this.absolute && 'absolute',
                'z-index': this.absolute && 99,
				'background-image': 'url(' + this.src + ')'
            }
        }
    },
	methods: {
		getWidth() {
			return this.width && this.width / 7.5 + 'vw'
		},
		getHeight() {
			return this.height && this.height / 7.5 + 'vw'
		}
	}
}
</script>

<style scoped>
	.a-sheet {
		background-size: 100%;
		background-position: center center;
		background-repeat: no-repeat;
		position: relative;
		z-index: 0;
	}
</style>