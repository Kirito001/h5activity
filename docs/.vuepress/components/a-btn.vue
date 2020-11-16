<template>
	<button type="button" class="a-btn" :class="[!outlined && color, classObject]" :style="styleObject" v-ripple>
		<span class="a-btn__content">
			<slot></slot>
		</span>
	</button>
</template>

<script>
import ripple from '../directives/ripple'
export default {
	name: 'a-btn',
	props: {
		block: Boolean,
		color: String,
		width: String,
		height: String,
		shade: Boolean,
		rounded: Boolean,
		tile: Boolean,
		outlined: Boolean,
		fab: Boolean
	},
	directives: { ripple },
	data() {
		return {
			styleObject: {
				'color': this.outlined && this.color,
				'background-color': this.outlined ? 'transparent' : this.color,
				'width': this.getWidth() || this.block && '100%',
				'height': this.getHeight()
			},
			classObject: {
				'a-btn-shade': this.shade,
				'rounded-pill': this.rounded,
				'rounded-tile': this.tile,
				'a-btn-outlined': this.outlined,
				'a-btn-fab': this.fab
			}
		}
	},
	watch: {
		outlined: function(val) {
			this.classObject['a-btn-outlined'] = val;
			val && (this.styleObject['background-color'] = val)
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

<style lang="scss" scoped>
@import '../../plugin/h5activity.scss';
</style>
