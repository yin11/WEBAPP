webpackJsonp([6],{ePxk:function(e,t){},elVZ:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"freeStudy",data:function(){return{userName:"",userPhone:"",userCode:"",next:"000",computedTime:0}},mounted:function(){},created:function(){console.log(this.$comm)},methods:{testUserName:function(){this.$comm.rule.empty(this.userName,"姓名不能为空")&&this.$comm.rule.name(this.userName)?this.next=this.$comm.replaceNext(this.next,"1",0):this.next=this.$comm.replaceNext(this.next,"0",0)},testUserPhone:function(){this.$comm.rule.empty(this.userPhone,"手机号不能为空")&&this.$comm.rule.phone(this.userPhone)?this.next=this.$comm.replaceNext(this.next,"1",1):this.next=this.$comm.replaceNext(this.next,"0",1)},testCode:function(){this.$comm.rule.empty(this.userCode,"验证码不能为空")?this.next=this.$comm.replaceNext(this.next,"1",2):this.next=this.$comm.replaceNext(this.next,"0",2)},sendMess:function(){var e=this;if(e.$comm.rule.empty(e.userPhone,"手机号不能为空")&&e.$comm.rule.phone(e.userPhone)){e.computedTime=60,e.timer=setInterval(function(){e.computedTime--,0==e.computedTime&&clearInterval(e.timer)},1e3);var t={telphone:e.userPhone};e.$getData.postFreeMess(t).then(function(e){console.log(e)}).catch(function(e){comm.alertMsg(e)})}}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-header"),e._v(" "),n("img",{attrs:{width:"100%",src:s("fdsf")}}),e._v(" "),n("div",{staticClass:"main-box"},[e._m(0),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.userName,expression:"userName",modifiers:{trim:!0}}],staticClass:"input-box",attrs:{type:"text",placeholder:"请输入您的姓名"},domProps:{value:e.userName},on:{blur:[e.testUserName,function(t){e.$forceUpdate()}],input:function(t){t.target.composing||(e.userName=t.target.value.trim())}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.userPhone,expression:"userPhone",modifiers:{trim:!0}}],staticClass:"input-box",attrs:{type:"number",pattern:"[0-9]",maxlength:"11",placeholder:"请输入手机号"},domProps:{value:e.userPhone},on:{blur:[e.testUserPhone,function(t){e.$forceUpdate()}],input:function(t){t.target.composing||(e.userPhone=t.target.value.trim())}}}),e._v(" "),n("div",{staticClass:"relative code-box"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.userCode,expression:"userCode",modifiers:{trim:!0}}],staticClass:"input-box",attrs:{type:"number",pattern:"[0-9]",maxlength:"6",placeholder:"请输入验证码"},domProps:{value:e.userCode},on:{blur:[e.testCode,function(t){e.$forceUpdate()}],input:function(t){t.target.composing||(e.userCode=t.target.value.trim())}}}),e._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:!e.computedTime,expression:"!computedTime"}],staticClass:"btn-code fc-f",attrs:{type:"button"},on:{click:e.sendMess}},[e._v("获取验证码")]),e._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:e.computedTime,expression:"computedTime"}],staticClass:"btn-code fc-f tbn-disabled",attrs:{type:"button"}},[e._v("倒计时（"+e._s(e.computedTime)+"）")])]),e._v(" "),n("button",{staticClass:"fc-f btn-solid-big fz14 ",class:"111"!=e.next?"tbn-disabled":"",attrs:{type:"button"}},[e._v("立即申请")])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"freeStudy-title fz14"},[t("p",[this._v("免费试学 | 先培后付")])])}]};var o=s("VU/8")(n,i,!1,function(e){s("ePxk")},"data-v-e30d4b8c",null);t.default=o.exports},fdsf:function(e,t,s){e.exports=s.p+"static/img/banner2.700c008.png"}});
//# sourceMappingURL=6.d492748266132b2b31e1.js.map