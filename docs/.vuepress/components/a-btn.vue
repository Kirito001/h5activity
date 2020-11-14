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

@media screen and (min-width: 1280px) {
	$design-size: 1920 / 100vw;
}
.a-btn {
	color: #ffffff;
	height: 72 / $design-size;
	font-size: 28 / $design-size;
	line-height: 28 / $design-size;
	padding-left: 8 * $spacing;
	padding-right: 8 * $spacing;
	border-radius: 8 / $design-size;
	font-weight: 500;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	background-color: #EEEEEE;
	border: none;
	outline: none;
	user-select: none;
	.a-btn__content {
		z-index: 1;
	}
	&.a-btn-shade {
		box-shadow: 0 (6/$design-size) (2/$design-size) (-6/$design-size) rgba(0, 0, 0, .2),
					0 (4/$design-size) (4/$design-size) 0 rgba(0, 0, 0, .14),
					0 (2/$design-size) (10/$design-size) 0 rgba(0, 0, 0, .12)!important;
	}
	&.a-btn-outlined {
		border: thin solid;
	}
	&.a-btn-fab {
		height: 96 / $design-size;
		width: 96 / $design-size;
	}
}
</style>
