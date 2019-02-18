<template>
	<div>
		<!-- 模拟考试的底部 -->
		<div class="flex-box next-box border-top">
			<div class="item clearfix fz13">
				<span class="fl-l"><i class="icon ico-right"></i>5555</span>
				<span class="fl-l"><i class="icon ico-wrong "></i>4444</span>
				<span class="fl-l"><i class="icon ico-total"></i>9999/9999</span>
			</div>
			<button class="fc-f btn-next fz16">下一题</button>
		</div>
		<div style="height: 40px;"></div>
	</div>
</template>

<script>
	export default {
		name: 'nextFooter',
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.next-box{
		background: #fff;
		line-height: 40px;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		
		.btn-next{
			width: 160px;
			background: $main-color;
		}
		.fl-l{
			min-width: 37px;
			padding-left: 9px;
		}
		
		.icon{
			display: inline-block;
			width: 20px;
			height: 20px;
			vertical-align: middle;
			margin-right: 3px;
		}
		
		.ico-right{
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAMAAABggeDtAAAANlBMVEUAAAAumY4umZEtlowtl4wtl40tl40tlowtl40tlo0umY4tl40umI4tmI0tl44ulosvmJAtlownZRA4AAAAEXRSTlMALxfz4M2C66m4WWNCm490JLC5JcgAAAItSURBVEjHpVdZloQgDIQEkFXb+192As6YRmHER15/tVSWSoVFdAykN1Yr3FFpa7wE8cJkSBr3b0OdghxFWwp7N1RWDqHL6kW5kvVRiVNL+ffRg1zzQnQmQk1HNA6z2/VfD0GVKE224MhMhS4aTIndjyBLDgZ6X+mj9uI/85rWtCN88qf01GdIOcinAVfEziaebSOG1c2B1AQPYsQCOdCXEsARPIoxi+TA1YUajj6Ygan+IFI2MW4brf8KJxUxL95YIg6ZgpUIgVd4ILrXM/yyoxfvzOO+/CVgiU7x1qhh9jc8kSEH0zYn7Yyy5GkQbs82MYzIRzkM3+OZAB4tCMhi6hi3CbdvyWI4WmmG4AZ3NLVmU+7koPBNHu/LGGgoZcCI5vFKMxTi/FjzvSI43CTghRkqPy6NXadALTl5hqu9UaXPFekB8Uld7zgsQS3IMzwPW7NHQEkJonUE3qyR9CT2JzzYHjxj6/jQyNKyalvxS/2cabqLnhvcqL/i/7Owwln0DG/wX/pfTZi/qJZTavW/1h84chCrFf3hLtBT/+xAxRO+9OCsf54/lhrwseAq0Tfmj+efJ8WecNXWNs8/7z8VZZAz4VJ65afW/hdKx6ELr/c/3n/rLrqeauv9lzfyWvFIv9DFMqw+f1jHZF04o/j8u9+lzPP51z9/Y9rg+fydPP9n7x+T95/J+9fs/W/y/jl5/528f0/e/2ffH/Pvn/n31/z7b/79Of/+nX1//wA2FCkVzm11UAAAAABJRU5ErkJggg==) no-repeat center;
			background-size: cover;
		}
		.ico-wrong{
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAMAAABggeDtAAAANlBMVEUAAADzZzjvZDfyaDbwZDfwZDfwZTfwZTjwZDfxZDfwZTfwZDfwZDfwZTjxZjnwZjfxZTfwZDfACZOQAAAAEXRSTlMALvQX6LllW86rhtyedzhFkI5tLJAAAAJwSURBVEjHlFXbssIwCEwIzT3V/f+fPaFTPcYErTvjE5BlF6hGgbMhp8gE4physM78AOtrJLyCYvX2anXqtDOI05UX9gQBl026PpVshSFI+zfuOwvV1m6jYHdrG8mz9489+IKOat3S0SrB4tVql0m4dQa7SUJ2WhRADB/1hdhz1gxWQvXbnF0VErso79K5me9oDBS7YudgriDw3IHr2vlmruHG3YNRaFbY9Q7yMHcCmrmOBpAfvavmF9TBwzsQ3U/1LgL358kwKDwj3s9PzaFA4McxpW7nixWkScn0InoD0qkegB2sTMsO/L9pQ1UazHNZ2XBP43rXswHLIPueGO1q5mnYWALbI/19mTxDzBmwTzvnNpFz9NEWXByG8jL31A7dLi4WX9LZv12Xnc8gOpFRZrv3XoA2XNc+rUMR40LXpXyMKJ+JaX1dPSXI5eUpchZRegwYfpFylCZ5RHtALJc0asszlol2oVbdV9mkRiJkBQtEw4B6er0UhYRlCQew6eHP30rxVwFA/afXi/YOr9fjM789+Lnp/JP+6T+hiP2qftX/c+3KX+lllAIhDMRQqDK77bqK97+s6IePmhGU+KeIVpt5SRaUlP1/9j/V1/g5HgNSrvuP/uSo58IrTBL9oX9VT/l3Skr1z/ypdhpnu+vOyfwx/wLLtV6Y9Jt1/uGP0m5QJgl/4J/STq+NIfyDv73svmlEKCH8hf/cyLdKQGpDz3+cRGiXMynEtWovAWinx1RK4H+p/068496C8V/8H/eK5/5P/sC/25v8Qf5hhc/yj5m/3Pxn5k8z/5r528z/bv/w+4/fv/z+5/dPv/+6/XsDwLotHk+9Pz8AAAAASUVORK5CYII=) no-repeat center;
			background-size: cover;
		}
		.ico-total{
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA8CAMAAADmFZJDAAAAP1BMVEUAAAAzMzMzMzMyMjIzMzMzMzM1NTUzMzMzMzMzMzMzMzMzMzMzMzMzMzM0NDQ1NTUzMzMzMzM0NDQzMzMzMzN6UOchAAAAFHRSTlMADfAk3XMaY6HKiZeuuFc0f0k+v2pVcTMAAALqSURBVEjHtZfdcuMgDIURfzZgg+36/Z91kQxlSYvwXizTmSaBTzocIeKI/zVUiosx5gIBMZ4J/glOh9NS3nk4K4zMQ2/xZQhQi7u/h1Sw1pf+jYrk9bPabSHIwuvyWUiz5IemhWtUFsDqh5dGlbD6AI6+HGU2UN5XfsF3546O7GqMG40LFqJ/8gLijo5eI3zF5EgPeMwg85JzjDs0aMDTMKhwiAcreF7hDpYR7kHwPBAO4jT20zrEhWB5wqUBWOS99QEuncXDhFcPLgzWcYW/Fzo66TxP2bP4A/Fe7YEHXfC8LeIxu1u7MiaJpnJ8L35TGGyHuszjG563j3jwGf+y2bD8P9aialzB8variL8zTqmwK0vOJW8IWN5XXN61cqrt2eErhs9s/osAHg9vLZOpWVOeBJ5/sh9384kEyFSKtwqWJ5ysW22b3Eg2yY88T+LDXffeDk2Ax33F8MJIKhzi3TajxA+wks5yvF3OIr53KSFYwjA8vQg/spNwraj6YcKT+BV+m6U6+glvNbXnmBeT/BtWcDB78PxJW8Xvhf6rg1Tpif4vKj2uRQX+F/85/8ji0pqWrudu8pT3Dmz9SDgpIA+6RCQ8sOeHRGIAQwFCDdBufCPY80vC+wBNqs3cVe7ec8zTzXVTgL6FYu1/j8YwQ231qwl8u39Ao3wcF90fzIAW4Pi+/45G6dEF0KzqFDj1VNa0QmBMzgPy3tYngF1BaB1BFeAc7DoQFlTg67mq3b3C2wACFXSVxCMko3gRYKODsmh0kdQ3AdrOAph6+0OU6GHfqNgLswCymnb5JD576T7eBUij3cmFpYvwD+Xi48loMhas/rBN5AEvdrAN2gQDbMDigfRzjapP4J+uXRpMl+aQ4fcIkALNqom/uInr51RaaWrmsKVltzbJApSgYNPibqR3JWYDzifC7bZwGLOYI2xOEv3yFxQktOFzyJDmdPNh01J+o1Jvg31zKqLxPgTvTbyY1uSDAMzy/gFl/zkk9OJ7JgAAAABJRU5ErkJggg==) no-repeat center;
			background-size: cover;
		}
	}
	
	
</style>
