<template>
	<view>
		<nav-bar :navs="navs" @change="handleChange">
			<template slot="content-container">
				<view class="page-content">
					<dynamic-page :API="apis[0]" v-if="clicked == 0"></dynamic-page>
				</view>
				<view class="page-content">
					<dynamic-page :API="apis[1]" v-if="clicked == 1"></dynamic-page>
				</view>
				<view class="page-content">
					<dynamic-page :API="apis[2]" v-if="clicked == 2"></dynamic-page>
				</view>
			</template>
		</nav-bar>
	</view>
</template>

<script>
	import NavBar from '../../components/publicComponents/navBar/navBar.vue'
	export default {
		components:{
			NavBar
		},
		data() {
			return {
				navs:[
					{"title":"精靈廣場","image":"/static/public/elvesSquare.png"},
					{"title":"我的精靈","image":"/static/public/MySpirit.png"},
					{"title":"服務中心","image":"/static/public/服務中心.png"}
				],
				clicked:0,
				apis:[
					`${this.$config.formHost}?id=990327`,
					`${this.$config.formHost}?id=550311`,
					`${this.$config.formHost}?id=7512`,
				]
			}
		},
		methods: {
			handleChange(e){
				console.log(e)
				this.clicked = e
				console.log(this.apis[this.clicked])
				this.$forceUpdate()
			}
		}
	}
</script>

<style>
	.page-content{
		max-height: 80%;
	}
</style>
