<template>
	<div>
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- 模拟考试说明 -->
		<div>
			<div class="fc-f top-box mb-10">
				<img src="@/assets/image/test-bg1.png" width="100%" class="bg"/>
				<div class="head"><img src="@/assets/image/ico-bg.png" width="100%"/></div>
				<p class="fz14">我的考试</p>
			</div>
			<!-- 列表 -->
			<ul class="table-view mb-10 fz14 bg-f">
				<li class="border-buttom clearfix">
					<span class="fl-l"><i class="icon ico-subject"></i>考试科目 </span>
					<span class="fl-r fc-9 ">科目一理论</span>
				</li>
				<li class="border-buttom clearfix">
					<span class="fl-l"><i class="icon ico-same "></i>全国通用 </span>
					<span class="fl-r fc-9">小车C1/C2/C3</span>
				</li>
				<li class="border-buttom clearfix">
					<span class="fl-l"><i class="icon ico-num"></i>考题数量 </span>
					<span class="fl-r fc-9">100题</span>
				</li>
				<li class="border-buttom clearfix">
					<span class="fl-l"><i class="icon ico-time"></i>考试时间 </span>
					<span class="fl-r fc-9">45分钟</span>
				</li>
				<li class="border-buttom clearfix">
					<span class="fl-l"><i class="icon ico-standard"></i>合格标准 </span>
					<span class="fl-r fc-9">满分100分 90分及格</span>
				</li>
				<li class="border-buttom clearfix">
					<span class="fl-l"><i class="icon ico-rule"></i>出题规则 </span>
					<span class="fl-r fc-9">按公安部规定比例随机抽取</span>
				</li>
			</ul>
			<!--  -->
			<router-link to="/mock" tag="div" class="btn-start fc-f fz14">考试考试</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'mockExplain',
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.btn-start{
		background: $main-color;
		line-height: 40px;
		text-align: center;
		position:fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}
	.top-box{
		text-align: center;
		height: 70px;
		padding: 17px 0 14px 0;
		position: relative;
		
		p:first-of-type{
			margin-bottom: 10px;
		}
		
		.bg{
			position: absolute;
			z-index: -1;
			left: 0;
			top: 0;
		}
		.head{
			width: 60px;
			height: 60px;
			border-radius: 50%;
			overflow: hidden;
			margin: 0 auto;
		}
	}
	.table-view{
		.icon{ 
			width: 20px;
			height: 20px;
			display: inline-block;
			vertical-align: text-top;
			margin-right: 10px;
		}
		.rule-box{
			.title-bg{
				width: 118px;
				margin: 20px 0 10px 0;
			}
			
			p:last-of-type{
				line-height: 1.5;
				padding-bottom: 20px;
			}
		}
		.fl-r{
			font-size: 13px;
		}
	}
	
	.ico-subject{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAOVBMVEUAAAA3joM3j4Q4j4Q3jYM0joI4j4Q4joM3jYQ3joM3joM4joM2joQ4joM3joM3joM4joQ3j4M4joNb/zlYAAAAEnRSTlMA8jhjqQ2OxYGbJtgZt0bjUXLYJmP4AAADIUlEQVRIx7WX65LrIAiAA3i/JfX9H/YIzVaTmLZnZ9aZ/qjxEwQEXKZDp0AmxxUAojUUkl6+HfhQsR5GVA6/Qkte62SsuXyWqmQprNZTwRCwkLcryGTG96gHJq0raZxOxWX54N/gWxQBnRz4p0qRblDt+LPFW7UsSzdTwyclO6d7xTSxZmqml2Wx4b05g+JFacqqj7GgZ7T2zZbumzhywJpfpsxHti89+GjXGQnTW62Rimi+DXaIzbvMQrO3KXcaoLNQgZheu0NNY9jO9AxNSxNck33GvBdZfl8iAp0cp0YFwrtw5NMjynz2VTUhUOFHdP6xvuNtSXjI9PL5OEUM60bk/Q62D7jssFjFyNpVoaAmyl8jthR4wTZRBJFtBph5EqBa2rKoGx2TL3hR7ZuceK1QDrDgxdhXHjEbW2CEcT818Yk73Ed6SrX9rnSYT+2egWmWGSwTot0VXh4SGSlW2O5g5I2nMAKHRmjhEv4fTpFdRKzZV7DWA7w0cxKHph9hpDCFwyM/Blg42WGECVaPFxj9CkAjLBo33csIS5rLRQ+wLlmuy3Bm+RSXthQHmN1rYlu6ddg0IVxuzjAwHM4GC2Rr7rDqcdLhMIdlbOatqzqM37nqqrYY7DdwYYOdXbXoG1iHcHbVJUg2ReECS4yAOwfJJTw3gGjCCUa1Ql1xhDNrzBcjdXhPIgoHOHCMxMf1YkyupC4cJa7Das8lI1z4Ss6TQaBoO+wozJPBbRoKd67qaeicANUnP5sxAYrduu/Ah3dwclB9T72HpJ+4kCnUc1ijYquXPelvY7kRmtTK96/oDh9KpETQWG7kAI9XELpVbv4R3jLPml0pakA5l9h9ECeT1QW9w4miRIke+helz8V9LOOVdaS2ijyfpJd8UXrFQdalFUpFQQWo/DtVHN8W09F97PTjCH6FvdKO49Em/RetVCJjKJx6zMbmdG3i4IsmzkM37pGueZi+70/TLxvXWwGJrQZvWmZp2P3d7iSd1hjch8DmvelPngkiIFce8pxCDAGRH1ggk7Z89EaxUCcD7PaXj7JeHZC8jSDPQU8Y5vr+AxWrPU8k06tmAAAAAElFTkSuQmCC) no-repeat center;
		background-size: cover;
	}
	.ico-same{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAM1BMVEUAAAA3joMyjIE3joM3j4Q4joM3joM3j4Q3j4Q3j4M3j4Q4joM4j4M3joQ3joQ4j4Q4joOvFat3AAAAEHRSTlMAnA7tMozWuh57Z6/GRFBbe9RYMQAAAopJREFUSMe1l9uaqyAMhYWE86G8/9PuINpAtah7ZnLVD/jJIkkDLqcmJXplNJQC2giPUi53DV3QZTAdHN5Ck4FyYmDStdfQlkIUPiFZ8iJC287gHBWwOnHZ9sM2ObNOiAme16OGJE9C2CTp/AWVqk7H9FWWqfPqNPBW1J39JCnS6yrMnrDxMyTyJUxQeAhnPNCysqF3m7ZcC9svE0wPg+B61gMFV4lIcgbaweaETX2GIgOdgQaso7XDUleXDjn61CzjW5wvZUxAVZ67OGgSN0hBAL/vE3bXPFAAe9F6rJ1XN+2KHs9oyZeQbzelOJ5rWkEef/MI720o+h/TGQbPn3klwmwJLV1IVNSrDbJLG4viHZKGNMeBBe1muFpgH+PDBRK7nRjYcdHKVetrPLnVlC7sGpo0359YDSk7VKHoT+1aYarlKby4taokxSY/gDkQ2tbAgX0Cc6HgeuTlCczF4WuZi/+BFXFthwHOzmV5BTfFpD31cOvROl3BiRYttBbHpgDGQAE3h9dAL2WAEUpAWZs05DlsCdxgHsM9E+IaHmX3+qO8lD0GrA+mtpcB41SNJsjzZapastmyXx3i1ZkbN5ZnhqKzlJk7yaw8D3+MzcDP8ywpVnj4S+oAhIZ05y95bAYWyeSNZmDkD9qQ4gb4BG4Qcut9AHPrbU0fn8FISO6um9swXzd80T2BX32YxH7FEgziq2mC+Yo9Xu65TO3Fl3t/l+97ZTWxLDedxR8eNMstc9XR9Ck12uQpxQ9AMaHZyaHHtBAWY+esDcz+/OHKc2r+nEcDs6O9oOIBvz/Wwf/2ZwI7MK2FaaN8QmsxtQ+sajFdZiPH80+jmP/wo4zVW/Qits/BKDzac73/AKbfL6d5B+e9AAAAAElFTkSuQmCC) no-repeat center;
		background-size: cover;
	}
	.ico-num{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAM1BMVEUAAAA4joM3joMzjYI3j4M4joQ4joM3joM3joM3j4M4joQ3joQ4j4Q4kIQ3joQ3jYM4joO4uPVZAAAAEXRSTlMA/sYVjpvns9hSdTdhRCwhg24z118AAAJeSURBVEjHtZfteoMgDIVDgoRP9f6vdgat6MikfbadP63KqychQgRdNGfL3hnjPNs8E7ytFNmbmzzH9BZa2BlFjssQnfkY63nNoZSQV7FfxekZtXUcbmHeTgeL9Y7TAx58DTCQksGA+zXQRWu9nJ9vbUllJzEWF/hRFCUoVkaQ2PJpMIkyCEllcYGBiCuteJ5o+5Pt9F02tuSTFed3ej1YYKPJeU5X2t4SeZiRPw6/ye18pIvz0NjZC7s7cKkPk7MAPLf0XEbZ88gapB6egIJviZqd2U5BO7DwCAOkjWbYFdujJUl+GcGw4PkIwvNGZYsnwxCWzLjSElxeD0YYwaLcQkVhjojDWzB54+l069J+P08DuCUqtajX7XcSM8+wt4dactZapOS3MwP4ovVVk05maBb3TzAUPuWMvdRGqiFDD+vCDW75jlKarMB0kwLXVLHE0cEJ/VWWOjjKTEu+ejibm7CHg4QrJdLDlONVpbctZQJ7lX6esLSBv4I124p021rCNOkJ06cK6C7Qp0ovkuLdVRPpRaKXZzA3MenlKS/G3Nsu4aqlsy2rdepfyXHC2itZzX8Et8WgW4aGcFuGugVwDLcFUF96xzC+mCK73mdwEETdbsYwYaus5CT6D2DZ6Iq6xY5hKZCJ1M29KFCzGLvNvSaA+7ZCaTDKvgncOj3bNTS6mGrvYwetlCYbl6OVUpo4fq+J84veAs7P7IzC0h82rq23Mxh+YgO2lllRcDuu+SoVdflfPhNEiY3IOeQYSkolxAmPLxQuBAMV1D+NMPz3R5mIlhRtdes8TjEtut8vcvQXWsbyhO8AAAAASUVORK5CYII=) no-repeat center;
		background-size: cover;
	}
	.ico-time{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAANlBMVEUAAAA4joQ1j4Q3joM4joQ3j4M4joQ3kIQ4joM3joM4j4U4joM4joQ3joQ4joM3j4Q4joM4joMM1+ZUAAAAEXRSTlMAcBjvgsSbN41UYN5Gq7cs0hT3TdAAAAKFSURBVEjHtVfr0qsgDISEq9zM+7/sacBvSilidebsn85oVzabQIKYA8rmckAiDNptBcTPsDLt9IGQlP2JGnOgCUKOl9SSiIG4J+WjtdGrtCMSI9s11dS/aefLx2PvNL9As6D7UKkeJg5GXcVvZ1zHr3d/akZ10U2dB8NfVousgGRleaZLs2J7YWf9E8y5l8UAmSODb83oQFzDISv/8sqIn6DYtY8cHZo3dQHOFCv3nQ/h4NIlZLMHbS862KroEq6u1cVYkEgd4WS5QDqild3S+c99xbIWkJXchOej7KoBN8iNEv8W1uIeWWjmHOHHu+SILWrZIj7Ixs8AIxl089gcvq9SpWEgC1Utg51wez8JegY1rsy6A4hChOVNVjCD+CJDILJckrsQNw1rfksuzfSEzFZxltUTsuRMv7T7J2RPFAQSxSfkSISC2LUHZPsijmT8hoYz8iB7BiwdWfWyR8Oc/cK7bQFi/DBM/5QqkHrPEgT08evfikQGYuz8tiuSdXl2u0B5F3gL9eXZNsaaDNj2ZAn8222McUvKaXpDEeCrSbbfkk38mpx430fOMJLsDgMYj6E9jZAi89ejAXipVN0xNB6AEyA4DhWUcxJp6w/A8ehNckQUkY7acNXbntNO8GWq8osNAiRSGvvEdbspfManvY4dQ7sRtmt0cjXamff5jbFvsWVBZrp0snQFkobm3gzbTtH6xtjc20iQoaYKz3HUEoewjQON41hWyH+ukpmNUsos4OJ8lGqB8MMLQJoMcbXhEelyYwB8PriOAFdbcTzjRt0KZT2sx5kum/kdbrevCdBdE1ZoC/B1ysh2QZFGB6RlRH1oSBOg9v/pUjb609Q2/RbmFv8DzSZA6DyIzEkAAAAASUVORK5CYII=) no-repeat center;
		background-size: cover;
	}
	.ico-standard{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAOVBMVEUAAAA3joM4j4M1j4Q4joM4joQ3j4M3joM4joM4joQ3joM3j4Q2j4M4joM4joQ3joM3joQ4j4M4j4ROClpuAAAAE3RSTlMA/q0W251Qye2P4jkq87puRXxfowntpgAAAt5JREFUSMe1l+mWpCAMhdmJ7PL+DzsEu4wMWHpmuT+qu+rwmXDDEtlaMtQtKeAcVNpqkOy1fBaKD1Ji96/QkhxfyCXziAbBURFaMFO8L2bXCiJHJf8d1X2Y3UwYfjabjfhI/QU3qqNGLhwstidf7xzeDvT20R3f5JLV+OT9S1VkRivFKi+LYf2DnQkHySWbHheDJHrMOU7TWRoTp8zRK/3E0tBtMHLM+TnzevFB0US+iexxnjK5fDNafNP+E0ufgYFmoaNTN3IthIuqZZibu59giZI2YO4XL2TGatyPxBPrKs2AD6Idu5UW+Cn0j8HmDPwZIBROo0wKOE7LJt0naH+Y4CgwwmjBrNDg6JqOTe0jB/wnHzMmWO5iEoZLwocQ5FkuNF533wm+VdKMtOOqwmfEOsLeDPIr2ABvRQucQxjg4GCQlQtYNqc8q5w3YJizdYM+e0gQfPidcWmKEZ51wqWwro9Vqdn2FhZOnYEyVlpRlZ9gDsZDoV2sGHBefoODGRTOWermR/7cSc1oxtG1r26rg87RQd2jJJivYIiDXIcLiJZ4NOwCv0072Fao2r2ltF8aJlWSzLvuNRn2rlTStonLZBmKSrVcJPKi/l3YgB/ty7BIlstTXYTRhPNY5nl5zhvDR35Rq82G224HN22M1ZY0+SLDcj/4XBbTlnw+DApk/NBMzIfBfAyN8vjo4Cxr8HjnbKsDcGSdlm1okgTTATgfvaM03mmpVYpgYugEX8LSurhrMIxguifourkevduPKpPg7XGhEkzXDcoDLlGqM3WN0nAF1rMBPi86umIDRdb2RzvTHT1hus7FdLnPc64NJXh5ubPa24rn0/P4i23F1NBgZWC7lTvgHYcuW6mw6Xt5aqX+rInDnG1Yt4/hdfv4943r+5a5WP6tT6yu42WVl0+8Ceo/fk0gtQAocFZn45tM1tYBR1nPnmQs8IXAmv/3UkaS0rdsj9fBlr+Xa4t/AZ6SIUa8dtaNAAAAAElFTkSuQmCC) no-repeat center;
		background-size: cover;
	}
	.ico-rule{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAOVBMVEUAAAAzjYM3joM3joM4joM3joM3joM3joQ2kIQ4joM3joM4joM3joM3joM4joM4joQ4kIQ3joM4joMVpDppAAAAEnRSTlMADO1v16/iNxvAKYBIjpljVcr42jJ4AAACJ0lEQVRIx7WX65qjIAyGJYAcRKXc/8WugI7bfsmwOz6TfxXekjNhYkWpuK/BUClkwrpHpXCPQDptTXkTY7X7J97ZuTAy2zQ8NdprN9HchOj6Yr8/Pa7UwcPQFFWTmPbVnp83J7PJdA2Xg/vwn+5LJksqLx3Vil3V3RULv7r1U73oj3669cxSaCtRDb0ZFM9uiDKWvTyjM6G1qDpV/d73LZXNyCKdKr28xaj7ERxEIcEf7pVO9+9Y3bh+ss07lFi7Z3f/BDuqNj2rAmpu/3ZtPLbNEdQ7Uxzt9ub4fB1tb4MRNpzLq6ZnDVYbPJbmmY6cy03z2WWCnlBaSAObrfpKtHicYNgIu11nz0f7snpH3caiK9QTk+L/wp5acJWBOkFhY238FKViGpeXayZraYvcr3PD1jN/Ubze7JoE3NGh8BTuVEOzpLUe4DAZSC8oDCnSZqIDVnwou8gwTeXncHkEP1JbdtgYNhAqhOVQQZIgLCcJn55jOFPF2MIYw60woCQRlksSmwHCcjMAoxGW2xA2QITlBoitdwzvX3d8gqYPsNj08bpBWL5uJgcXHcDyRadW7orN1NjX4IrlL3cfKkt5cLn3Rlr0J70YCpkfKzIMNNBmpXIq67NRCi2kdTjEURvi4PurD5bqG9Tb5n/1aHCVR2YjjMx7Q4toWZpP3Cv1obDu6JyfPRNkUe5+oMymyf1CCePnUQpUGKGQfuNRhhF1+us5uGknRP8PUkk2l8iS9GIAAAAASUVORK5CYII=) no-repeat center;
		background-size: cover;
	}
</style>
