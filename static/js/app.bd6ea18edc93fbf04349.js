webpackJsonp([2,0],[function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=o(20),s=n(a),i=o(7),r=n(i),l=o(53),u=n(l),m=o(61),c=n(m),d=o(54),v=n(d),p=o(55),f=n(p),h=o(56),g=n(h);r.default.use(c.default);var b=[{path:"/",component:v.default},{path:"/job",component:f.default},{path:"/newJob",component:g.default}],_=new c.default({routes:b});new r.default((0,s.default)({el:"#app",router:_},u.default))},,,,,,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={filterJSON:function(e){for(;e.indexOf(':"[')>0;)e=e.replace(':"[',":[");for(;e.indexOf(']"')>0;)e=e.replace(']"',"]");for(;e.indexOf('\\"')>0;)e=e.replace('\\"','"');for(;e.indexOf("\\\\")>0;)e=e.replace("\\\\","/");return e},alt:function(e){alert(e)}}},,,,,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{msg:"hello vue"}}}},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(9),s=n(a),i=o(7),r=n(i),l=o(14),u=n(l),m=o(8),c=n(m);r.default.use(u.default),r.default.http.options.emulateHTTP=!0,t.default={data:function(){return{jobs:[{show:!0,Name:"",Config:{User:"192.168.1.1",Password:"123a",KeyPath:".ssh/key",Ip:""},LocalBefore:[{Path:"/home",Command:"free",Args:["-a"]}],RemoteBefore:[{Command:""}],UploadJob:{LocalPath:"",RemotePath:""},LocalAfter:[{Path:"/home",Command:"free",Args:["-a"]}],RemoteAfter:[{Command:""}],msg:""}]}},methods:{addlB:function(e){null==this.jobs[e].LocalBefore?this.jobs[e].LocalBefore=[{Path:"/path",Command:"command",Args:["args..."]}]:this.jobs[e].LocalBefore.push({Path:"/path",Command:"command",Args:["args..."]})},removelB:function(e,t){this.jobs[e].LocalBefore.splice(t,1)},addrB:function(e){null==this.jobs[e].RemoteBefore?this.jobs[e].RemoteBefore=[{Command:""}]:this.jobs[e].RemoteBefore.push({Command:""})},removerB:function(e,t){this.jobs[e].RemoteBefore.splice(t,1)},addlA:function(e){null==this.jobs[e].LocalAfter?this.jobs[e].LocalAfter=[{Path:"/path",Command:"command",Args:["args..."]}]:this.jobs[e].LocalAfter.push({Path:"/path",Command:"command",Args:["args..."]})},removelA:function(e,t){this.jobs[e].LocalAfter.splice(t,1)},addrA:function(e){null==this.jobs[e].RemoteAfter?this.jobs[e].RemoteAfter=[{Command:""}]:this.jobs[e].RemoteAfter.push({Command:""})},removerA:function(e,t){this.jobs[e].RemoteAfter.splice(t,1)},chooseJob:function(e){for(var t=e.target.selectedIndex,o=0;o<this.jobs.length;o++)this.jobs[o].show=!1;this.jobs[t].show=!0,this.addlA(this.jobs.length-1),this.removelA(this.jobs.length-1,this.jobs[this.jobs.length-1].LocalAfter.length-1)},update:function(e){var t=(0,s.default)(this.jobs[e]);t=c.default.filterJSON(t),console.log(t),this.$http.get("http://localhost/rest/saveOrUpdate",{params:{job:t}}).then(function(e){console.log(e),c.default.alt("update success!")},function(e){console.log(e)})},deleted:function(e){var t=this,o=(0,s.default)(this.jobs[e]);o=c.default.filterJSON(o),console.log(o),this.$http.get("http://localhost/rest/delete",{params:{job:o}}).then(function(o){console.log(o),t.jobs[0].show=!0,t.jobs.splice(e,1),c.default.alt("delete success!")},function(e){console.log(e)})},deploy:function(e){var t=(0,s.default)(this.jobs[e]);t=c.default.filterJSON(t),console.log(t),this.$http.get("http://localhost/rest/deploy",{params:{job:t}}).then(function(e){console.log(e),c.default.alt("deploy success!")},function(e){console.log(e)})}},created:function(){var e=this;r.default.http.get("http://localhost/rest",{name:"jobList"}).then(function(t){var o=JSON.parse(t.data),n=o.JS.jobs;e.$set(e,"jobs",n),e.jobs.length>0&&(e.jobs[0].show=!0),c.default.alt("create success!")},function(e){})}}},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(9),s=n(a),i=o(7),r=n(i),l=o(14),u=n(l),m=o(8),c=n(m);r.default.use(u.default),r.default.http.options.emulateHTTP=!0,t.default={data:function(){return{jobs:[{show:!0,Name:"",Config:{},LocalBefore:[],RemoteBefore:[],UploadJob:{},LocalAfter:[],RemoteAfter:[]}]}},methods:{addlB:function(e){null==this.jobs[e].LocalBefore?this.jobs[e].LocalBefore=[{Path:"/path",Command:"command",Args:["args..."]}]:this.jobs[e].LocalBefore.push({Path:"/path",Command:"command",Args:["args..."]})},removelB:function(e,t){this.jobs[e].LocalBefore.splice(t,1)},addrB:function(e){null==this.jobs[e].RemoteBefore?this.jobs[e].RemoteBefore=[{Command:""}]:this.jobs[e].RemoteBefore.push({Command:""})},removerB:function(e,t){this.jobs[e].RemoteBefore.splice(t,1)},addlA:function(e){null==this.jobs[e].LocalAfter?this.jobs[e].LocalAfter=[{Path:"/path",Command:"command",Args:["args..."]}]:this.jobs[e].LocalAfter.push({Path:"/path",Command:"command",Args:["args..."]})},removelA:function(e,t){this.jobs[e].LocalAfter.splice(t,1)},addrA:function(e){null==this.jobs[e].RemoteAfter?this.jobs[e].RemoteAfter=[{Command:""}]:this.jobs[e].RemoteAfter.push({Command:""})},removerA:function(e,t){this.jobs[e].RemoteAfter.splice(t,1)},chooseJob:function(e){for(var t=e.target.selectedIndex,o=0;o<this.jobs.length;o++)this.jobs[o].show=!1;this.jobs[t].show=!0,this.addlA(this.jobs.length-1),this.removelA(this.jobs.length-1,this.jobs[this.jobs.length-1].LocalAfter.length-1)},update:function(e){if(null==this.jobs[e])return void console.log("name must not null!");var t=(0,s.default)(this.jobs[e]);t=c.default.filterJSON(t),console.log(t),this.$http.get("http://localhost/rest/saveOrUpdate",{params:{job:t}}).then(function(e){console.log(e),c.default.alt("create success!")},function(e){console.log(e)})}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,o){o(52);var n=o(1)(o(15),o(60),null,null);e.exports=n.exports},function(e,t,o){o(51);var n=o(1)(o(16),o(59),null,null);e.exports=n.exports},function(e,t,o){o(49);var n=o(1)(o(17),o(57),"data-v-2eb1e2b6",null);e.exports=n.exports},function(e,t,o){o(50);var n=o(1)(o(18),o(58),"data-v-50ace945",null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"jumbotron"},[o("select",{on:{change:function(t){e.chooseJob(t)}}},e._l(e.jobs,function(t,n){return o("option",{domProps:{value:t.Name}},[e._v("\n      "+e._s(t.Name)+"\n    ")])})),e._v(" "),e._l(e.jobs,function(t,n){return o("div",[o("transition",{attrs:{name:"bounce"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"job.show"}],staticClass:"job",attrs:{id:n}},[o("H2",[e._v("JobName: "+e._s(t.Name))]),o("br"),e._v(" "),o("div",[e._v("\n        ssh.userName: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Config.User,expression:"job.Config.User"}],domProps:{value:t.Config.User},on:{input:function(e){e.target.composing||(t.Config.User=e.target.value)}}}),e._v("\n        ssh.password: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Config.Password,expression:"job.Config.Password"}],attrs:{type:"password"},domProps:{value:t.Config.Password},on:{input:function(e){e.target.composing||(t.Config.Password=e.target.value)}}}),e._v("\n        ssh.privateKey: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Config.KeyPath,expression:"job.Config.KeyPath"}],domProps:{value:t.Config.KeyPath},on:{input:function(e){e.target.composing||(t.Config.KeyPath=e.target.value)}}}),e._v("\n        ssh.ip:  "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Config.Ip,expression:"job.Config.Ip"}],domProps:{value:t.Config.Ip},on:{input:function(e){e.target.composing||(t.Config.Ip=e.target.value)}}})]),e._v(" "),o("br"),e._v(" "),o("div",[e._v('\n        本地命令 (执行路径 命令 参数 example:E:\\github\\ticket.h5\\web mvn 参数用json数组[  "clean",  "package",  "-Dmaven.test.skip=true",  "-P",  "artifactory,development",  "-Dfile.encoding=UTF-8"] ):\n        '),o("button",{on:{click:function(t){e.addlB(n)}}},[e._v("ADD")]),e._v(" "),o("br"),e._v(" "),o("ul",e._l(t.LocalBefore,function(t,a){return o("li",[e._v("\n          路径:"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Path,expression:"lb.Path"}],attrs:{size:"30"},domProps:{value:t.Path},on:{input:function(e){e.target.composing||(t.Path=e.target.value)}}}),e._v("\n          命令:"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Command,expression:"lb.Command"}],attrs:{size:"30"},domProps:{value:t.Command},on:{input:function(e){e.target.composing||(t.Command=e.target.value)}}}),e._v("\n          参数:"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Args,expression:"lb.Args"}],attrs:{size:"50"},domProps:{value:t.Args},on:{input:function(e){e.target.composing||(t.Args=e.target.value)}}}),e._v(" "),o("button",{on:{click:function(t){e.removelB(n,a)}}},[e._v("X")]),o("br")])}))]),e._v(" "),o("div",[e._v("\n        远程命令"),o("button",{on:{click:function(t){e.addrB(n)}}},[e._v("ADD")]),e._v(":"),o("br"),e._v(" "),o("ul",e._l(t.RemoteBefore,function(t,a){return o("li",[e._v("\n            命令:"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Command,expression:"rb.Command"}],attrs:{size:"150"},domProps:{value:t.Command},on:{input:function(e){e.target.composing||(t.Command=e.target.value)}}}),o("button",{on:{click:function(t){e.removerB(n,a)}}},[e._v("X")])])}))]),e._v(" "),o("br"),e._v(" "),o("div",[e._v("\n        上传文件: 本地目录："),o("input",{directives:[{name:"model",rawName:"v-model",value:t.UploadJob.LocalPath,expression:"job.UploadJob.LocalPath"}],attrs:{size:"70"},domProps:{value:t.UploadJob.LocalPath},on:{input:function(e){e.target.composing||(t.UploadJob.LocalPath=e.target.value)}}}),e._v(" 远程目录："),o("input",{directives:[{name:"model",rawName:"v-model",value:t.UploadJob.RemotePath,expression:"job.UploadJob.RemotePath"}],attrs:{size:"70"},domProps:{value:t.UploadJob.RemotePath},on:{input:function(e){e.target.composing||(t.UploadJob.RemotePath=e.target.value)}}})]),e._v(" "),o("br"),e._v(" "),o("div",[e._v('\n        上传文件后本地命令 (执行路径 命令 参数 example:E:\\github\\ticket.h5\\web mvn 参数用json数组[  "clean",  "package",  "-Dmaven.test.skip=true",  "-P",  "artifactory,development",  "-Dfile.encoding=UTF-8"]'),o("br"),e._v("):\n        "),o("button",{on:{click:function(t){e.addlA(n)}}},[e._v("ADD")]),e._v(" "),o("br"),e._v(" "),o("ul",e._l(t.LocalAfter,function(t,a){return o("li",[e._v("\n          路径:"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Path,expression:"la.Path"}],attrs:{size:"30"},domProps:{value:t.Path},on:{input:function(e){e.target.composing||(t.Path=e.target.value)}}}),e._v("\n          命令:"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Command,expression:"la.Command"}],attrs:{size:"30"},domProps:{value:t.Command},on:{input:function(e){e.target.composing||(t.Command=e.target.value)}}}),e._v("\n          参数:"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Args,expression:"la.Args"}],attrs:{size:"50"},domProps:{value:t.Args},on:{input:function(e){e.target.composing||(t.Args=e.target.value)}}}),e._v(" "),o("button",{on:{click:function(t){e.removelA(n,a)}}},[e._v("X")]),o("br")])}))]),e._v(" "),o("div",[e._v("\n        上传文件后远程命令"),o("button",{on:{click:function(t){e.addrA(n)}}},[e._v("ADD")]),e._v(":"),o("br"),e._v(" "),o("ul",e._l(t.RemoteAfter,function(t,a){return o("li",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.Command,expression:"ra.Command"}],attrs:{size:"150"},domProps:{value:t.Command},on:{input:function(e){e.target.composing||(t.Command=e.target.value)}}}),o("button",{on:{click:function(t){e.removerA(n,a)}}},[e._v("X")])])}))]),e._v(" "),o("br"),e._v(" "),o("div",[o("button",{on:{click:function(t){e.deploy(n)}}},[e._v("deploy")]),o("button",{on:{click:function(t){e.update(n)}}},[e._v("update")]),o("button",{on:{click:function(t){e.deleted(n)}}},[e._v("remove")])])],1)])],1)})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"jumbotron"},e._l(e.jobs,function(t,n){return o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"job.show"}],staticClass:"job",attrs:{id:n}},[o("H2",[e._v("JobName: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Name,expression:"job.Name"}],domProps:{value:t.Name},on:{input:function(e){e.target.composing||(t.Name=e.target.value)}}})]),o("br"),e._v(" "),o("div",[e._v("\n          ssh.userName: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Config.User,expression:"job.Config.User"}],domProps:{value:t.Config.User},on:{input:function(e){e.target.composing||(t.Config.User=e.target.value)}}}),e._v("\n          ssh.password: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Config.Password,expression:"job.Config.Password"}],attrs:{type:"password"},domProps:{value:t.Config.Password},on:{input:function(e){e.target.composing||(t.Config.Password=e.target.value)}}}),e._v("\n          ssh.privateKey: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Config.KeyPath,expression:"job.Config.KeyPath"}],domProps:{value:t.Config.KeyPath},on:{input:function(e){e.target.composing||(t.Config.KeyPath=e.target.value)}}}),e._v("\n          ssh.ip:  "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Config.Ip,expression:"job.Config.Ip"}],domProps:{value:t.Config.Ip},on:{input:function(e){e.target.composing||(t.Config.Ip=e.target.value)}}})]),e._v(" "),o("br"),e._v(" "),o("div",[e._v('\n          本地命令 (执行路径 命令 参数 example:E:\\github\\ticket.h5\\web mvn 参数用json数组[  "clean",  "package",  "-Dmaven.test.skip=true",  "-P",  "artifactory,development",  "-Dfile.encoding=UTF-8"] ):\n          '),o("button",{on:{click:function(t){e.addlB(n)}}},[e._v("ADD")]),e._v(" "),o("br"),e._v(" "),o("ul",e._l(t.LocalBefore,function(t,a){return o("li",[e._v("\n            路径:"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Path,expression:"lb.Path"}],attrs:{size:"30"},domProps:{value:t.Path},on:{input:function(e){e.target.composing||(t.Path=e.target.value)}}}),e._v("\n            命令:"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Command,expression:"lb.Command"}],attrs:{size:"30"},domProps:{value:t.Command},on:{input:function(e){e.target.composing||(t.Command=e.target.value)}}}),e._v("\n            参数:"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Args,expression:"lb.Args"}],attrs:{size:"50"},domProps:{value:t.Args},on:{input:function(e){e.target.composing||(t.Args=e.target.value)}}}),e._v(" "),o("button",{on:{click:function(t){e.removelB(n,a)}}},[e._v("X")]),o("br")])}))]),e._v(" "),o("div",[e._v("\n          远程命令"),o("button",{on:{click:function(t){e.addrB(n)}}},[e._v("ADD")]),e._v(":"),o("br"),e._v(" "),o("ul",e._l(t.RemoteBefore,function(t,a){return o("li",[e._v("\n              命令:"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Command,expression:"rb.Command"}],attrs:{size:"150"},domProps:{value:t.Command},on:{input:function(e){e.target.composing||(t.Command=e.target.value)}}}),o("button",{on:{click:function(t){e.removerB(n,a)}}},[e._v("X")])])}))]),e._v(" "),o("br"),e._v(" "),o("div",[e._v("\n          上传文件: 本地目录："),o("input",{directives:[{name:"model",rawName:"v-model",value:t.UploadJob.LocalPath,expression:"job.UploadJob.LocalPath"}],attrs:{size:"70"},domProps:{value:t.UploadJob.LocalPath},on:{input:function(e){e.target.composing||(t.UploadJob.LocalPath=e.target.value)}}}),e._v(" 远程目录："),o("input",{directives:[{name:"model",rawName:"v-model",value:t.UploadJob.RemotePath,expression:"job.UploadJob.RemotePath"}],attrs:{size:"70"},domProps:{value:t.UploadJob.RemotePath},on:{input:function(e){e.target.composing||(t.UploadJob.RemotePath=e.target.value)}}})]),e._v(" "),o("br"),e._v(" "),o("div",[e._v('\n          上传文件后本地命令 (执行路径 命令 参数 example:E:\\github\\ticket.h5\\web mvn 参数用json数组[  "clean",  "package",  "-Dmaven.test.skip=true",  "-P",  "artifactory,development",  "-Dfile.encoding=UTF-8"] ):\n          '),o("button",{on:{click:function(t){e.addlA(n)}}},[e._v("ADD")]),e._v(" "),o("br"),e._v(" "),o("ul",e._l(t.LocalAfter,function(t,a){return o("li",[e._v("\n            路径:"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Path,expression:"la.Path"}],attrs:{size:"30"},domProps:{value:t.Path},on:{input:function(e){e.target.composing||(t.Path=e.target.value)}}}),e._v("\n            命令:"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Command,expression:"la.Command"}],attrs:{size:"30"},domProps:{value:t.Command},on:{input:function(e){e.target.composing||(t.Command=e.target.value)}}}),e._v("\n            参数:"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Args,expression:"la.Args"}],attrs:{size:"50"},domProps:{value:t.Args},on:{input:function(e){e.target.composing||(t.Args=e.target.value)}}}),e._v(" "),o("button",{on:{click:function(t){e.removelA(n,a)}}},[e._v("X")]),o("br")])}))]),e._v(" "),o("div",[e._v("\n          上传文件后远程命令"),o("button",{on:{click:function(t){e.addrA(n)}}},[e._v("ADD")]),e._v(":"),o("br"),e._v(" "),o("ul",e._l(t.RemoteAfter,function(t,a){return o("li",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.Command,expression:"ra.Command"}],attrs:{size:"150"},domProps:{value:t.Command},on:{input:function(e){e.target.composing||(t.Command=e.target.value)}}}),o("button",{on:{click:function(t){e.removerA(n,a)}}},[e._v("X")])])}))]),e._v(" "),o("br"),e._v(" "),o("div",[o("button",{on:{click:function(t){e.update(n)}}},[e._v("save")])])],1)])}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[e._v("Hello!")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"wrapper"}},[o("nav",{staticClass:"navbar navbar-default"},[o("div",{staticClass:"container"},[e._m(0),e._v(" "),o("ul",{staticClass:"nav navbar-nav"},[o("li",[o("router-link",{attrs:{to:"/job"}},[e._v("任务列表")])],1),e._v(" "),o("li",[o("router-link",{attrs:{to:"/newJob"}},[e._v("新任务")])],1)])])]),e._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"col-sm-3"}),e._v(" "),o("div",{staticClass:"col-sm-9"},[o("router-view")],1)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[o("i",{staticClass:"glyphicon glyphicon-time"}),e._v("\n        Home\n      ")])}]}},,function(e,t){}]);
//# sourceMappingURL=app.bd6ea18edc93fbf04349.js.map