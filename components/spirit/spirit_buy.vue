<template>
	<view class="newBUYItem">
		<view class="boxItem">
			<view class="ImgBox">
				<image src="../../static/BaseImage/bigImage/close@3x.png" mode="widthFix" class="closeImg"
					@click="getClose"></image>
			</view>
			<view class="imgBox">
				<image src="../../static/spirit/newC.png" mode="aspectFit" class="img"></image>
			</view>
			<view class="name">
				<text class="nameI">培養精靈需消耗</text>
			</view>
			<view class="type">
				<text class="info">{{itemInfo.description}}</text>
			</view>
			<view class="type cc">
				<text class="one">消耗GuGu令：</text>
				<image src="../../static/spirit/newCoin.png" mode="widthFix" class="bg"></image>
				<text class="two">x{{itemInfo.wispCoin}}</text>
			</view>
			<text class="buyBox">
				購買數量：
			</text>
			<!-- <image src="../../static/spirit/bd.png" mode="widthFix" class="bd" @click="dec"></image> -->
			<input type="number" class="num" v-model="itemInfo.costAccompanyWisp" @focus="focusIng" disabled="true"/>
			<!-- <image src="../../static/spirit/ad.png" mode="widthFix" class="bd ad" @click="add"></image> -->
			<view class="bottomBox">
				<text class="ce">共消耗GuGu令</text>
				<image src="../../static/spirit/newCoin.png" mode="widthFix" class="icon"></image>
				<text class="ce cetwo">x{{itemInfo.wispCoin * itemInfo.costAccompanyWisp}}</text>
				<button class="btn" @click="buyComponeySpirit" :disabled="status=='FROZEN'">立即購買</button>
			</view>
		</view>
		<toast v-if="isShowToast" :data="toastMsg" :buyMsg="info" @cancelToast="closeToast" @successCloseToast="getSuccessClose"></toast>
	</view>
	<!-- <view class="spiritBuy newBUY">
			<view class="box">
				<view class="imgBox">
					<image src="../../static/spirit/newC.png" mode="aspectFit" class="img"></image>
				</view>
				<view class="name">
					<text class="nameI">培養精靈需消耗</text>
				</view>
				<view class="type">
					<text class="info">{{itemInfo.description}}</text>
				</view>
				<view class="type cc">
					<text class="one">消耗GuGu令：</text>
					<image src="../../static/spirit/newCoin.png" mode="widthFix" class="bg"></image>
					<text class="two">x{{itemInfo.wispCoin||itemInfo.costWispCoin}}</text>
				</view>
				<text class="buyBox">
					購買數量：
				</text>
				<image src="../../static/spirit/bd.png" mode="widthFix" class="bd" @click="dec"></image>
				<input type="number" class="num" v-model="number" @focus="focusIng"/>
				<image src="../../static/spirit/ad.png" mode="widthFix" class="bd ad" @click="add"></image>
				<view class="bottomBox">
					<text class="ce">共消耗GuGu令</text>
					<image src="../../static/spirit/newCoin.png" mode="widthFix" class="icon"></image>
					<text class="ce cetwo">x{{number * (itemInfo.wispCoin)}}</text>
					<button class="btn" @click="buyComponeySpirit">立即購買</button>
				</view>
				<image src="../../static/BaseImage/bigImage/close@3x.png" mode="widthFix" class="closeImg" @click="getClose"></image>
			</view>
			

			<toast v-if="isShowToast" :data="toastMsg" :buyMsg="info" @cancelToast="closeToast" @successCloseToast="getSuccessClose"></toast>
	</view> -->
</template>

<script>
	import toast from './toastSuccessForBuyCoin.vue'
	export default {
		components: {
			toast
		},
		props: {
			itemInfo: {
				type: Object,
				default: {}
			}
		},
		created() {
			console.log(this.itemInfo,'接上腹肌------------------------')
			console.log(123)
		    this.status = this.$cache.get('status')
		},
		data() {
			return {
				status:'',
				show: true,
				number: 0,


				isShowToast: false,
				toastMsg: '',

				info: {}
			}
		},
		mounted() {
			this.number = this.itemInfo.costAccompanyWisp
		},
		methods: {
			toast(msg) {
				this.toastMsg = msg
				this.isShowToast = true
			},
			closeToast() {
				this.isShowToast = false
			},
			getSuccessClose(response) {
				this.$emit('buySuccess', response)
			},
			focusIng() {
				this.$emit('AllNumber', parseInt(this.number))
			},
			getClose() {
				this.$emit('closeBuyChild', false)
			},
			dec() {
				if (parseInt(this.number) == 0) {
					this.number = 0
					return
				}
				this.number = parseInt(this.number) - 1
				this.$emit('decNumber', this.number)
			},
			add() {
				this.number = parseInt(this.number) + 1
				this.$emit('addNumber', this.number)
			},

			//購買能力晶石
			async buyComponeySpirit() {
				// if(this.status = ''){
				// 	uni.showToast({
				// 		icon:'error',
				// 		title:'你的賬戶被凍結，請申請解凍後再操作',
				// 		duration:1000
				// 	})
				// 	return
				// }
				this.isShowToast = true
				this.toast('确認購買麽？')
				this.info.companionWispId = this.itemInfo.id
				this.info.number = this.number
				this.info.paymentPassword = '123456'
				// const data = {
				// 	companionWispId:this.itemInfo.id,
				// 	number:this.number,
				// 	paymentPassword:'123456'
				// }
				// const res = await this.$api.buyCompanySpirit(data)
				// console.log(res)
				// const response = {
				// 	code:res.code,
				// 	message:res.message
				// }
				// if(res.code == 200){
				// 	this.$emit('buySuccess',response)
				// }else{
				// 	this.$emit('buySuccess',response)
				// }
			}
		}
	}
</script>
<style lang="less">
	.newBUYItem {
		width: 100%;
		// height: 654rpx;
		height: 354rpx !important;
		// border: 1px solid red;
		border-radius: 16px 16px 0px 0px;
		position: fixed;
		// bottom: 300rpx;
		z-index: 9999999 !important;
		top:30%;
		left: 0;
		right: 0;
		bottom: 0;

		.boxItem {
			margin-left: 2.5%;
			background: rgb(28, 41, 76);
			// width: 100%;
			width: 95%;
			// height: 100% !important;
			height: 654rpx !important;
			background: #1C294C;
			border-radius: 16px 16px 16px 16px;
			opacity: 1;
			z-index: 9999999 !important;
			position: fixed;

			.ImgBox {
				position: absolute;
				right: 15rpx;
				top: 15rpx;
				width: 40rpx;
				height: 40rpx;

				.closeImg {
					width: 40rpx;
					height: 40rpx;
				}
			}
			
			.imgBox {
				position: absolute;
				left: 32rpx;
				top: 64rpx;
				width: 100px;
				height: 100px;
				background: #1C294C;
				border-radius: 8px 8px 8px 8px;
				opacity: 1;
				border: 1px solid rgba(196, 196, 196, 0.5);
				display: flex;
				align-items: center;
				justify-content: center;
			
				.img {
					width: 88px;
					height: 88px !important;
				}
			}
			
			.name {
				position: absolute;
				left: 256rpx;
				top: 64rpx;
				width: 240px;
				height: 25px;
			
				.nameI {
					font-size: 18px;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #FFFFFF;
				}
			}
			
			.type {
				position: absolute;
				left: 256rpx;
				top: 138rpx;
				width: 240px;
				height: 25px;
			
				.info {
					width: 128px;
					height: 20px;
					font-size: 12px;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #E14CFF;
					border: 1px solid #E14CFF;
					padding: 2px 8px 2px 8px;
				}
			}
			.cc {
				top: 216rpx;
				display: flex;
				align-items: center;
			
				.one {
					// width: 84px;
					height: 20px;
					font-size: 14px;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #FFFFFF;
				}
			
				.bg {
					width: 20px;
					height: 20px !important;
					margin-right: 3px;
				}
			
				.two {
					width: 21px;
					height: 25px;
					font-size: 18px;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #FFFFFF;
				}
			}
			
			.buyBox {
				position: absolute;
				top: 320rpx;
				left: 32rpx;
				width: 80px;
				height: 24px;
				font-size: 16px;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #FFFFFF;
			}
			
			.bd {
				width: 32px;
				height: 32px !important;
				position: absolute;
				top: 312rpx;
				left: 208rpx;
			}
			
			.num {
				width: 80px;
				height: 30px;
				border-radius: 4px 4px 4px 4px;
				opacity: 1;
				border: 1px solid rgba(255, 255, 255, 0.5);
				position: absolute;
				top: 312rpx;
				left: 200rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 16px;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #FFFFFF;
				background: #1C294C;
				line-height: 32px;
				text-align: center;
			}
			
			.ad {
				left: 448rpx;
			}
			
			.bottomBox {
				position: absolute;
				top: 424rpx;
				width: 100% !important;
				border-top: 1px solid rgba(255, 255, 255, 0.1);
			
				.ce {
					// width: 72px;
					height: 17px;
					font-size: 12px;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #FFFFFF;
					position: absolute;
					left: 16px;
					top: 24px;
				}
			
				.icon {
					width: 20px;
					height: 20px !important;
					position: absolute;
					left: 16px;
					top: 48px;
					margin-right: 3px;
				}
			
				.cetwo {
					position: absolute;
					left: 44px;
					top: 45px;
					font-size: 18px;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #FFFFFF;
				}
			
				.btn {
					width: 224px;
					height: 48px;
					background: linear-gradient(270deg, #9331F5 0%, #0B95FF 100%);
					border-radius: 8px 8px 8px 8px;
					opacity: 1;
					font-size: 16px;
					font-family: PingFang SC-Medium, PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
					display: flex;
					align-items: center;
					justify-content: center;
					position: absolute;
					top: 24px;
					left: 115px;
					;
				}
			}
		}
	}

	.spiritBuy {
		width: 100%;
		height: 50%;
		// border: 1px solid red;
		border-radius: 16px 16px 0px 0px;
		position: fixed;
		bottom: -10rpx;
		z-index: 9999999 !important;

		.spirit_mask {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 502;
			background-color: #000;
			opacity: .8;
		}

		.box {
			background: rgb(28, 41, 76);
			width: 100%;
			height: 100% !important;
			background: #1C294C;
			border-radius: 16px 16px 0px 0px;
			opacity: 1;
			z-index: 9999999 !important;
			position: fixed;

			.closeImg {
				width: 50rpx;
				height: 50rpx;
				position: absolute;
				right: 50rpx;
				top: 20rpx;
			}

			.imgBox {
				position: absolute;
				left: 16px;
				top: 32px;
				width: 100px;
				height: 100px;
				background: #1C294C;
				border-radius: 8px 8px 8px 8px;
				opacity: 1;
				border: 1px solid rgba(196, 196, 196, 0.5);
				display: flex;
				align-items: center;
				justify-content: center;

				.img {
					width: 88px;
					height: 88px !important;
				}
			}

			.name {
				position: absolute;
				left: 128px;
				top: 32px;
				width: 240px;
				height: 25px;

				.nameI {
					font-size: 18px;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #FFFFFF;
				}
			}

			.type {
				position: absolute;
				left: 128px;
				top: 69px;
				width: 240px;
				height: 25px;

				.info {
					width: 128px;
					height: 20px;
					font-size: 12px;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #E14CFF;
					border: 1px solid #E14CFF;
					padding: 2px 8px 2px 8px;
				}
			}

			.cc {
				top: 108px;
				display: flex;
				align-items: center;

				.one {
					// width: 84px;
					height: 20px;
					font-size: 14px;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #FFFFFF;
				}

				.bg {
					width: 20px;
					height: 20px !important;
					margin-right: 3px;
				}

				.two {
					width: 21px;
					height: 25px;
					font-size: 18px;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #FFFFFF;
				}
			}

			.buyBox {
				position: absolute;
				top: 160px;
				left: 16px;
				width: 80px;
				height: 24px;
				font-size: 16px;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #FFFFFF;
			}

			.bd {
				width: 32px;
				height: 32px !important;
				position: absolute;
				top: 156px;
				left: 104px;
			}

			.num {
				width: 80px;
				height: 30px;
				border-radius: 4px 4px 4px 4px;
				opacity: 1;
				border: 1px solid rgba(255, 255, 255, 0.5);
				position: absolute;
				top: 156px;
				left: 139px;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 16px;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #FFFFFF;
				background: #1C294C;
				line-height: 32px;
				text-align: center;
			}

			.ad {
				left: 224px;
			}

			.bottomBox {
				position: absolute;
				top: 33%;
				width: 100% !important;
				height: 10%;
				border-top: 1px solid rgba(255, 255, 255, 0.1);

				.ce {
					// width: 72px;
					height: 17px;
					font-size: 12px;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #FFFFFF;
					position: absolute;
					left: 16px;
					top: 24px;
				}

				.icon {
					width: 20px;
					height: 20px !important;
					position: absolute;
					left: 16px;
					top: 48px;
					margin-right: 3px;
				}

				.cetwo {
					position: absolute;
					left: 44px;
					top: 45px;
					font-size: 18px;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #FFFFFF;
				}

				.btn {
					width: 224px;
					height: 48px;
					background: linear-gradient(270deg, #9331F5 0%, #0B95FF 100%);
					border-radius: 8px 8px 8px 8px;
					opacity: 1;
					font-size: 16px;
					font-family: PingFang SC-Medium, PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
					display: flex;
					align-items: center;
					justify-content: center;
					position: absolute;
					top: 24px;
					left: 115px;
					;
				}
			}
		}
	}
</style>
