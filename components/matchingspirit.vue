<template>
	<view class="match">
		<view class="box">
			<view class="item">
				<view class="left">
					<view class="img"><image class="pic" src="https://s2.loli.net/2021/12/24/7bn1rPlMmYVihAR.jpg" mode="widthFix"></image></view>
					<view class="time"><text>匹配時間:2012-12-12 10:20:30</text></view>
					<view class="info">
						<view class="infoItem">
							<image class="type" src="https://s2.loli.net/2021/12/24/rR5NMP2s4izc6WG.jpg" mode="widthFix"></image>
							<text>x2</text>
						</view>
						<view class="infoItem">
							<image class="type" src="https://s2.loli.net/2021/12/24/7bn1rPlMmYVihAR.jpg" mode="widthFix"></image>
							<text>x2</text>
						</view>
						<view class="infoItem">
							<image class="type" src="https://s2.loli.net/2021/12/24/UkbB4ApPrGlVMsz.jpg" mode="widthFix"></image>
							<text>x2</text>
						</view>
					</view>
				</view>
				<view class="right">
					<view>小天使精靈</view>
					<view>級别:lv2</view>
					<view>增長能力:300</view>
					<view>能力值:200-300</view>
					<view>培養天數:10天</view>
					<button @click="fukuan">付款</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"matchingspirit",
		data() {
			return {
				
			};
		},
		methods:{
			fukuan(){
				uni.showModal({
					content:'付款成功'
				})
			}
		}
	}
</script>

<style lang="less">
.match{
	width: auto;
	height: auto;
	.box{
		width: auto;
		height: auto;
		border: 1px solid red;
		padding: 20rpx;
		.item{
			width: 90%;
			height: auto;
			border: 1px solid orange;
			margin-left: 5%;
			display: flex;
			flex-direction: row;
			margin-bottom: 15rpx;
			.left{
				width: 40%;
				height: 100%;
				border: 1px solid red;
				.img{
					display: flex;
					align-items: center;
					justify-content: center;
					.pic{
						width: 250rpx;
						height: 350rpx;
					}
				}
				.time{
					width: 100%;
					font-size: 30rpx;
				}
				.info{
					width: 100%;
					border: 1px solid red;
					display: flex;
					.infoItem{
						flex: 1;
						height: 100rpx;
						border: 1px solid blue;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						.type{
							width: 50rpx;
							height: 50rpx;
							border-radius: 50%;
						}
					}
				}
			}
			.right{
				width: 60%;
				border: 1px solid red;
			}
		}
	}
}
</style>
