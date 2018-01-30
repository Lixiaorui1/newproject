<template>
	<div>
		<div id="top">
			<p><i><img src="../assets/img/20180128185817.png"/></i>东城区北京市政府</p>
			<a href="javascript:;"><i><img src="../assets/img/20180128191721.png"/></i>搜索商家、商品名称</a>
		</div>
		<div id="main">
	<!--swiper-->
			<div class="swiper">
				<mt-swipe :auto="0" :continuous='false'>
				  <mt-swipe-item class="swiper_goods clear">
				  	<ul v-for="item in list1">
				  		<li><img :src="item.img_path" /></li>
				  		<li>{{item.name}}</li>
				  	</ul>
				  </mt-swipe-item>
				  <mt-swipe-item class="swiper_goods">
				  	<ul v-for="item in list2">
				  		<li><img :src="item.img_path" /></li>
				  		<li>{{item.name}}</li>
				  	</ul>
				  </mt-swipe-item>
				</mt-swipe>
			</div>
	<!--advertise-->
			<div class="advertise">
				<img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/"/>
			</div>
	<!--recommend-->
			<div class="recommend">
				<i>推荐商家</i>
				<div class="rec_border"></div>
			</div>
			<div class="restaurants clear" v-for="item in restaurants">
				<div class="left">
					<img :src="item.restaurants_img"/>
				</div>
				<div class="right">
					<h2>{{item.restaurant.name}}</h2>
					<div class="rating">
						<img src="../assets/img/20180128172902.png"/>
						{{item.restaurant.rating}}&nbsp;&nbsp;月售{{item.restaurant.recent_order_num}}单
						<p><i>￥0起送 | 配送费￥9</i><em>2.17km | 40分钟</em></p>
						<p v-if="item.restaurant.activities"><i>首</i>新用户下单立减17元<em>{{item.restaurant.activities.length}}个活动</em></p>
						<p v-if="item.restaurant.activities[1]"><i>减</i><em>{{item.restaurant.activities[1].description}}</em></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	
	export default {
		name: "Index",
		data: function(){
			return {
				list1: [],
				list2: [],
				restaurants: []
			}
		},
		mounted () {
			axios.get("/restapi/shopping/openapi/entries?latitude=39.90469&longitude=116.407173&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template")
			.then((res)=>{
				var arr = res.data[0].entries;
				var len = arr.length;
				for(var i = 0;i < len; i ++){
					arr[i].img_path = "//fuss10.elemecdn.com/" + arr[i].image_hash.slice(0,1) + "/" + arr[i].image_hash.slice(1,3) + "/" + arr[i].image_hash.slice(3) + ".jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
				}
				this.list1 = arr.slice(0,10);
				this.list2 = arr.slice(10);
			})
			
			axios.get("/restapi/shopping/v3/restaurants?latitude=39.90469&longitude=116.407173&offset=8&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=882f228d03d842f8ad8a869790136601&terminal=h5")
			.then((res)=>{
				console.log(res)
				var arr = res.data.items;
				console.log(arr);
				var len = arr.length;
				for(var i = 0;i < len; i ++){
					var str = "";
					if(arr[i].restaurant.image_path.indexOf("png") != -1){
						str = arr[i].restaurant.image_path.slice(arr[i].restaurant.image_path.indexOf("png"))
					}else{
						str = arr[i].restaurant.image_path.slice(arr[i].restaurant.image_path.indexOf("jpeg"))
					}
					console.log(str)
					arr[i].restaurants_img = "//fuss10.elemecdn.com/" + arr[i].restaurant.image_path.slice(0,1) + "/" + arr[i].restaurant.image_path.slice(1,3) + "/" + arr[i].restaurant.image_path.slice(3) + "." + str + "?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
				}
				console.log(arr);
				this.restaurants = arr;
			})
		}
	}
</script>

<style scoped>
	#top{
		background:  linear-gradient(90deg,#0af,#0085ff);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 0.2rem;
		width: 100%;
	}
	#top p{
		font-size: 18px;
		color: #fff;
		font-weight: 900;
		line-height: 0.8rem;
		padding-top: 0.2rem;
		width: 95%;
		border: 0;
	}
	#top p img{
		width: 0.4rem;
		vertical-align: middle;
	}
	#top a{
		width: 90%;
		text-align: center;
		color: #999;
		border: 0;
		height: 0.72rem;
		background: #fff;
		line-height: 0.72rem;
	}
	#top a img{width: 0.4rem;vertical-align: middle;}
	#main{
		padding: 0 0.14rem;
		color: #333;
	}
	img{width: 100%;}
	.swiper{
		height: 3.2rem;
	}
	.swiper_goods ul{
		width: 20%;
		text-align: center;
		font-size: 12px;
		float: left;
		margin-top: 0.1rem;
	}
	.swiper_goods ul img{
		width: 0.8rem;
	}	
	.recommend{
		height: 0.8rem;
		line-height: 0.8rem;
		text-align: center;
		position: relative;
		font-size: 16px;
	}
	.recommend i{background: #fff;padding: 0 0.2rem;}
	.rec_border{
		width: 50%;
		position: absolute;
		border-top: 1px solid #666;
		top: 0.4rem;
		left: 25%;
		z-index: -1;
	}
	.restaurants{display: flex;border-bottom: 1px solid #eee; padding: 0.2rem 0;}
	.left{
		width: 1.3rem;
	}
	.left img{border: 1px solid #ccc;}
	.right{
		flex: 1;
		padding-left: 0.3rem;
	}
	h2{
		font-size: 16px;
		font-weight: 900;
	}
	.rating{font-size: 12px;}
	.rating img{width: 1.1rem;}
	p{line-height: 0.6rem;}
	p:nth-of-type(1){
		border-bottom: 1px solid #eee;
	}
	p:nth-of-type(1) em{float: right;color: #999;}
	p:nth-of-type(2) i,p:nth-of-type(3) i{
		background: rgb(240, 115, 115);
		padding: 0.04rem;
		float: left;
		border-radius: 0.06rem;
		color: #fff;
		margin-right: 0.08rem;
		line-height: 1.5em;
	}
	p:nth-of-type(2) i{margin-top: 0.1rem;}
	p:nth-of-type(2) em{
		float: right;
		color: #999;
	}
	p:nth-of-type(3) i{
		background: rgb(0, 183, 98);
	}
	p:nth-of-type(3) em{
		width: 3rem;
		line-height: 1.5em;
		float: left;
	}
</style>