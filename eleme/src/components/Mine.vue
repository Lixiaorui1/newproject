<template>
	<div id="mine">
		<div class="mineTop">
			<header><span><</span><span>我的</span><span></span></header>
			<div class="mineTop1">
				<span><img src="../assets/img/t.png"></span>
				<div>
				<router-link to="/Login"><p class="minep">登录/注册</p></router-link>	
					<span>登录后享受更多特权</span>
				</div>
				<i>></i>
			</div>
		</div>

		<section>
			<a href="">
				<img src="../assets/img/h.png"><br>
				<span>红包</span>
			</a>
			<a href="">
				<img src="../assets/img/j.png"><br>
				<span>金币</span>
			</a>
		</section>

		<ul>
			<li>
				<img src="../assets/img/a.png">
				<span>我的地址</span>
				<i>></i>
			</li>
		</ul>
		<ul>
			<li>
				<img src="../assets/img/a.png">
				<span>金币商城</span>
				<i>></i>
			</li>
			<li>
				<img src="../assets/img/a.png">
				<span>分享拿5元现金</span>
				<i>></i>
			</li>
		</ul>
		<ul>
			<li>
				<img src="../assets/img/a.png">
				<span>我的客服</span>
				<i>></i>
			</li>
			<li>
				<img src="../assets/img/a.png">
				<span>下载饿了么APP</span>
				<i>></i>
			</li>
		</ul>
	</div>
</template>

<script>
	
</script>

<style scoped>
	#mine{
		display: flex;
		flex-direction: column;
		background: rgb(245,245,245);
	}
	.mineTop{
		background: linear-gradient(90deg,#0af,#0085ff);
	}
	.mineTop header{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0.1rem;
		color: #fff;
		font-size: 18px;
		font-weight: 700;
	}
	.mineTop1{
		height: 1.2rem;
		padding: 0.4rem 0.2rem;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.mineTop1>div{
		flex: 1;
	}
	.mineTop1>span{
		display: inline-block;
		width: 1.6rem;
		height: 1.6rem;
		text-align: center;
		line-height: 1.6rem;
		margin-right: 0.2rem;
	}
	.mineTop1>span>img{
		width: 1.2rem;
		height: 1.2rem;
	}
	.minep{
		color: #fff;
		font-size: 20px;
		font-weight: 700;
	}
	.mineTop1>div>span{
		color: #fff;
	}
	.mineTop1>i{
		color: #fff;
	}
	section{
		display: flex;
		overflow: hidden;
	}
	section a{
		display: inline-block;
		flex: 1;
		padding-top: 0.24rem;
		padding-bottom: 0.24rem;
		text-align: center;
		text-align: center;
		vertical-align: middle;
		background: #fff;
		border-bottom: 1px solid #ddd;
		border-right: 1px solid #ddd;
	}
	section a>img{
		width: 0.6rem;
		height: 0.6rem;
		display: inline-block;
	}
	ul{
		background: #fff;
		margin-top: 0.2rem;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
	}
	ul li{
		height: 0.7rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 0.1rem;
		padding-right: 0.1rem;
	}
	ul li img{
		width: 0.4rem;
		height: 0.4rem;
	}
	ul li span{
		flex: 1;
		margin-left: 0.1rem;
	}
	
</style>