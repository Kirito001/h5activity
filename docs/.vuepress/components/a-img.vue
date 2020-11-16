<template>
	<div class="a-img" :style="{ width: copywidth, height: copyheight, 'background-color': backgroundColor }">
		<transition :name="transition">
			<div class="a-img__content" :style="styleObject" v-show="!loading"></div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'a-img',
	props: {
		width: {
			type: String,
			default: '100%'
		},
		height: 0,
		src: String,
		align: {
			type: String,
			default: 'center center'
		},
		transition: {
			type: String,
			default: 'fade'
		},
		'background-color': {
			type: String,
			default: 'transparent'
		}
	},
	data() {
		return {
			loading: true,
			awidth: this.width,
			aheight: this.height,
			styleObject: {
				'background-image': `url(${this.src})`,
				'background-position': this.align
			}
		}
	},
	computed: {
		copywidth: function() {
			return this.awidth / 7.5 + 'vw'
		},
		copyheight: function() {
			return this.aheight / 7.5 + 'vw'
		}
	},
	mounted() {
		this.$nextTick(() => {
			let img = new Image();
			img.src = this.src;
			if(img.complete) {
				this.awidth = this.width || img.width;
				this.aheight = this.height || img.height;
				this.loading = false;
			} else {
				img.onload = () => {
					this.awidth = this.width || img.width;
					this.aheight = this.height || img.height;
					this.loading = false;
				}
			}
		})
	}
}
</script>

<style lang="scss" scoped>
@import '../../plugin/h5activity.scss';
.a-img {
	background-color: #EEEEEE;
	max-width: 100%;
	.a-img__content {
		width: 100%;
		height: 100%;
		background-size: 100%;
		background-repeat: no-repeat;
	}
}
</style>
