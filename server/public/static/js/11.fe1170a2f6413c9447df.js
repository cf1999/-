webpackJsonp([11],{Jqmv:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=a("4ZRF"),n=a("WheD"),r={components:{Header:t.a,Footer:n.a},data:function(){return{username:"",password:""}},methods:{regist:function(){var e=this;""==this.username?this.$message({message:"账号不能为空",type:"warning"}):""==this.password?this.$message({message:"密码不能为空",type:"warning"}):this.axios.post("/api/setUser",{username:this.username,password:this.$md5(this.password)}).then(function(s){1==s.data.status?(e.$message({message:"注册成功",type:"success"}),e.$router.push({path:"/login"})):e.$message.error(s.data.msg)}).catch(function(e){console.log(e)})}}},o={render:function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",[a("Header"),e._v(" "),a("div",{staticClass:"regist"},[a("el-input",{staticClass:"username",attrs:{placeholder:"请输入账号",clearable:""},model:{value:e.username,callback:function(s){e.username=s},expression:"username"}}),e._v(" "),a("el-input",{staticClass:"username",attrs:{placeholder:"请输入密码","show-password":"",autocomplete:"off",name:"pwd"},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}}),e._v(" "),a("el-button",{staticClass:"login-btn",on:{click:e.regist}},[e._v("注册")])],1),e._v(" "),a("Footer")],1)},staticRenderFns:[]};var i=a("VU/8")(r,o,!1,function(e){a("SOey")},"data-v-1c218c62",null);s.default=i.exports},SOey:function(e,s){}});
//# sourceMappingURL=11.fe1170a2f6413c9447df.js.map