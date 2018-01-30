import axios from 'axios';

export default {
		name: "Find",
		data: function(){
			return {
				finds: [],
				foods: [],
				time: []
			}
		},
		mounted () {
			//发现
			axios.get("/restapi/member/v1/discover?platform=1&block_index=0&latitude=39.90469&longitude=116.407173")
			.then((res)=>{
//				console.log(res);
				var arr = res.data[1];
//				console.log(arr);
				var len = arr.length;
				for(var i = 0;i < len; i ++){
					arr[i].finds_img = "//fuss10.elemecdn.com/" + arr[i].main_pic_hash
.slice(0,1) + "/" + arr[i].main_pic_hash
.slice(1,3) + "/" + arr[i].main_pic_hash
.slice(3) + ".jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
				}
//				console.log(arr);
				this.finds = arr;
			})
			//推荐
			axios.get("/restapi/shopping/v1/find/recommendation?latitude=39.90469&longitude=116.407173&offset=0&limit=6&user_id=272551869")
			.then((res)=>{
//				console.log(res);
				var arr = res.data.items;
//				console.log(arr);
				var len = arr.length;
				for(var i = 0;i < len; i ++){
					arr[i].food_img = "//fuss10.elemecdn.com/" + arr[i].food.image_path.slice(0,1) + "/" + arr[i].food.image_path
.slice(1,3) + "/" + arr[i].food.image_path
.slice(3) + ".jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
				}
				console.log(arr);
				this.foods = arr;
			})
			//限时好礼
		axios.get("/restapi/member/gifts/suggest")
			.then((res)=>{
				console.log(res);
				var arr = res.data;
//				console.log(arr);
				var len = arr.length;
				for(var i = 0;i < len; i ++){
					arr[i].time_img = "//fuss10.elemecdn.com/" + arr[i].image_hash.slice(0,1) + "/" + arr[i].image_hash.slice(1,3) + "/" + arr[i].image_hash.slice(3) + ".jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
				}
				console.log(arr);
				this.time = arr.slice(0,3);
			})
		}
}