<template>
	<div id="main">
		<div class="mineTop">
			<header><span><</span><span>发现</span><span></span></header>
		</div>
		<div class="content">
			<div class="content_top clear">
				<div class="top_list" v-for="item in finds">
					<div class="list_left">
						<p>{{item.title}}</p>
						<p>{{item.subtitle}}</p>
					</div>
					<div class="list_right">
						<img :src="item.finds_img"/>
					</div>
				</div>
			</div>
			<div class="advertise">
				<img src="https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/"/>
			</div>
			<div class="recommend">
				<h2 class="title">—<img src="../assets/img/20180.png" /> 为你推荐 —</h2>
				<p class="title2">你的口味，我都懂得</p>
				<div class="rec_list">
					<dl v-for="item in foods">
						<dt><img :src="item.food_img"/></dt>
						<dd>
							<p>{{item.food.name}}</p>
							<p>月售{{item.food.month_sales}}份&nbsp;&nbsp;&nbsp;好评率{{item.food.satisfy_rate}}%</p>
							<p>￥<em>{{item.food.price}}</em><i v-if="item.food.original_price">￥{{item.food.original_price}}</i></p>
							<p>{{item.food.restaurant_name}}</p>
						</dd>
					</dl>
				</div>
				<h2 class="more">查看更多 ></h2>
			</div>
			<div class="time">
				<h2 class="title">—<img src="../assets/img/20180.png" /> 限时好礼 —</h2>
				<p class="title2">金币换豪礼</p>
				<div class="time_list">
					<ul v-for="item in time">
						<li>
							<b>{{item.corner_marker}}</b>
							<img :src="item.time_img" />
						</li>
						<li>{{item.title}}</li>
						<li>{{item.points_required}}金币<i>￥{{item.original_price}}</i></li>
					</ul>
				</div>
				<h2 class="more">查看更多 ></h2>
			</div>
		</div>
	</div>
	
</template>

<script src="../assets/js/find.js">
	
</script>

<style scoped lang="scss" src="../assets/scss/find.scss">
	
</style>