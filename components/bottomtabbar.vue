<template>
	<view class="bottomTabbar">
		<view class="box">
			<view class="Child"><text @click="goTo('/pages/market/market')">精靈廣場</text></view>
			<view class="Child" @click="goTo('/pages/bookSpirit/bookSpirit')"><text>我的精靈</text></view>
			<view class="Child"><text @click="goTo('/pages/servicenew/servicenew')">服務中心</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"bottomtabbar",
		data() {
			return {
				
			};
		},
		methods:{
			goTo(url){
				console.log(this.$router)
				if(url == this.$router.history.current.path) return;
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style lang="less">
.bottomTabbar{
	width: 100%;
	height: 100rpx;
	border: 1px solid red;
	position: fixed;
	bottom: 0rpx;
	.box{
		width: 100%;
		height: 100rpx;
		display: flex;
		.Child{
			flex: 1;
			border: 1px solid red;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
}
</style>
