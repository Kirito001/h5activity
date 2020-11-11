<template>
	<div :class="color" :style="style">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'a-sheet',
    data() {
        return {
            style: {
                'width': this.getWidth(),
                'height': this.getHeight(),
                'background-color': this.color,
                'position': this.absolute ? 'absolute' : 'relative',
                'z-index': this.absolute ? '99' : '0'
            }
        }
    },
	props: {
		width: 0,
		height: 0,
		color: {
			type: String,
			default: 'transparent'
		},
        absolute: {
            type: Boolean,
            default: false
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
