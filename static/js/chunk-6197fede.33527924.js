(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6197fede","chunk-8aba2766"],{1501:function(e,t){e.exports={messages:{CN:{desc:"高级表单常见于一次性输入和提交大批量数据的场景。",repository:"仓库管理",task:"任务管理",user:"用户管理",submit:"提交"},HK:{desc:"高級表單常見於一次性輸入和提交大批量數據的場景。",repository:"倉庫管理",task:"任務管理",user:"用戶管理",submit:"提交"},US:{desc:"Advanced forms are common in scenarios where large quantities of data are entered and submitted at one time.",repository:"Repository Manage",task:"Task Manage",user:"User Manage",submit:"submit"}}}},"28b8":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-card",{staticClass:"card",attrs:{title:e.$t("repository"),bordered:!1}},[a("repository-form",{ref:"repository",attrs:{showSubmit:!1}})],1),a("a-card",{staticClass:"card",attrs:{title:e.$t("task"),bordered:!1}},[a("task-form",{ref:"task",attrs:{showSubmit:!1}})],1),a("a-card",{attrs:{title:e.$t("user"),bordered:!1}},[a("user-form")],1),a("footer-tool-bar",[a("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.validate}},[e._v(e._s(e.$t("submit")))])],1)],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-form",{staticClass:"form",attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-row",{staticClass:"form-row"},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{label:e.$t("name")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["repository.name",{rules:[{required:!0,message:e.$ta("input|name"),whitespace:!0}]}],expression:"['repository.name', {rules: [{ required: true, message: $ta('input|name'), whitespace: true}]}]"}],attrs:{placeholder:e.$ta("input|name")}})],1)],1),a("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[a("a-form-item",{attrs:{label:e.$t("domain")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["repository.domain",{rules:[{required:!0,message:e.$ta("input|domain"),whitespace:!0},{validator:e.validate}]}],expression:"['repository.domain', {rules: [{ required: true, message: $ta('input|domain'), whitespace: true}, {validator: validate}]}]"}],attrs:{addonBefore:"http://",addonAfter:".github.io",placeholder:e.$ta("input|domain")}})],1)],1),a("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[a("a-form-item",{attrs:{label:e.$t("manager")}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["repository.manager",{rules:[{required:!0,message:e.$ta("select|manager")}]}],expression:"['repository.manager', {rules: [{ required: true, message: $ta('select|manager')}]}]"}],attrs:{placeholder:e.$ta("select|manager")}},[a("a-select-option",{attrs:{value:"王同学"}},[e._v("王同学")]),a("a-select-option",{attrs:{value:"李同学"}},[e._v("李同学")]),a("a-select-option",{attrs:{value:"黄同学"}},[e._v("黄同学")])],1)],1)],1)],1),a("a-row",{staticClass:"form-row"},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{label:e.$t("approval")}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["repository.auditor",{rules:[{required:!0,message:e.$ta("select|approval")}]}],expression:"['repository.auditor', {rules: [{ required: true, message: $ta('select|approval')}]}]"}],attrs:{placeholder:e.$ta("select|approval")}},[a("a-select-option",{attrs:{value:"王晓丽"}},[e._v("王晓丽")]),a("a-select-option",{attrs:{value:"李军"}},[e._v("李军")])],1)],1)],1),a("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[a("a-form-item",{attrs:{label:e.$t("date")}},[a("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["repository.effectiveDate",{rules:[{required:!0,message:e.$ta("select|date")}]}],expression:"['repository.effectiveDate', {rules: [{ required: true, message: $ta('select|date')}]}]"}],staticStyle:{width:"100%"}})],1)],1),a("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[a("a-form-item",{attrs:{label:e.$t("type")}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["repository.type",{rules:[{required:!0,message:e.$ta("select|type")}]}],expression:"['repository.type', {rules: [{ required: true, message: $ta('select|type')}]}]"}],attrs:{placeholder:e.$ta("select|type")}},[a("a-select-option",{attrs:{value:"公开"}},[e._v("公开")]),a("a-select-option",{attrs:{value:"私密"}},[e._v("私密")])],1)],1)],1)],1),e.showSubmit?a("a-form-item",[a("a-button",{attrs:{htmlType:"submit"}},[e._v("Submit")])],1):e._e()],1)},i=[],o={name:"RepositoryForm",props:["showSubmit"],i18n:a("484d"),data:function(){return{form:this.$form.createForm(this)}},methods:{handleSubmit:function(e){e.preventDefault(),this.form.validateFields((function(e,t){}))},validate:function(e,t,a){void 0!==t&&"iczer"!==t&&a("输入'iczer'试下？"),a()}}},c=o,u=(a("5f16"),a("2877")),l=Object(u["a"])(c,s,i,!1,null,"f5fd7dfe",null),d=l.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-form",{staticClass:"form",attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-row",{staticClass:"form-row"},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{label:e.$t("name")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.name",{rules:[{required:!0,message:e.$ta("input|name"),whitespace:!0}]}],expression:"['task.name', {rules: [{ required: true, message: $ta('input|name'), whitespace: true}]}]"}],attrs:{placeholder:e.$ta("input|name")}})],1)],1),a("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[a("a-form-item",{attrs:{label:e.$t("describe")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.description",{rules:[{required:!0,message:e.$ta("input|describe"),whitespace:!0}]}],expression:"['task.description', {rules: [{ required: true, message: $ta('input|describe'), whitespace: true}]}]"}],attrs:{placeholder:e.$ta("input|describe")}})],1)],1),a("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[a("a-form-item",{attrs:{label:e.$t("executor")}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.executor",{rules:[{required:!0,message:e.$ta("select|executor")}]}],expression:"['task.executor', {rules: [{ required: true, message: $ta('select|executor')}]}]"}],attrs:{placeholder:e.$ta("select|executor")}},[a("a-select-option",{attrs:{value:"黄丽丽"}},[e._v("黄丽丽")]),a("a-select-option",{attrs:{value:"李大刀"}},[e._v("李大刀")])],1)],1)],1)],1),a("a-row",{staticClass:"form-row"},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{label:e.$t("duty")}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.manager",{rules:[{required:!0,message:e.$ta("select|duty")}]}],expression:"['task.manager', {rules: [{ required: true, message: $ta('select|duty')}]}]"}],attrs:{placeholder:e.$ta("select|duty")}},[a("a-select-option",{attrs:{value:"王伟"}},[e._v("王伟")]),a("a-select-option",{attrs:{value:"李红军"}},[e._v("李红军")])],1)],1)],1),a("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[a("a-form-item",{attrs:{label:e.$t("time")}},[a("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.time",{rules:[{required:!0,message:e.$ta("select|time")}]}],expression:"['task.time', {rules: [{ required: true, message: $ta('select|time')}]}]"}],staticStyle:{width:"100%"}})],1)],1),a("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[a("a-form-item",{attrs:{label:e.$t("type")}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.type",{rules:[{required:!0,message:e.$ta("select|type")}]}],expression:"['task.type', {rules: [{ required: true, message: $ta('select|type')}]}]"}],attrs:{placeholder:e.$ta("select|type")}},[a("a-select-option",{attrs:{value:"定时执行"}},[e._v("定时执行")]),a("a-select-option",{attrs:{value:"周期执行"}},[e._v("周期执行")])],1)],1)],1)],1),e.showSubmit?a("a-form-item",[a("a-button",{attrs:{htmlType:"submit"}},[e._v("Submit")])],1):e._e()],1)},p=[],f={name:"TaskForm",props:["showSubmit"],i18n:a("c30d"),data:function(){return{form:this.$form.createForm(this)}},methods:{handleSubmit:function(e){e.preventDefault(),this.form.validateFields((function(e,t){}))}}},v=f,b=(a("5c0b"),Object(u["a"])(v,m,p,!1,null,"5e67adcf",null)),h=b.exports,y=a("97e9"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"toolbar"},[a("div",{staticStyle:{float:"left"}},[e._t("extra")],2),a("div",{staticStyle:{float:"right"}},[e._t("default")],2)])},$=[],w={name:"FooterToolBar"},k=w,x=(a("856f"),Object(u["a"])(k,g,$,!1,null,"48c355b4",null)),_=x.exports,j={name:"AdvancedForm",components:{FooterToolBar:_,UserForm:y["default"],TaskForm:h,RepositoryForm:d},i18n:a("1501"),data:function(){return{loading:!1}},computed:{desc:function(){return this.$t("desc")}},methods:{validate:function(){this.$refs.repository.form.validateFields((function(e,t){})),this.$refs.task.form.validateFields((function(e,t){}))}}},O=j,S=(a("3c4a"),Object(u["a"])(O,r,n,!1,null,"7ad45680",null)),q=S.exports;t["default"]=q},"28ca":function(e,t,a){},"3c4a":function(e,t,a){"use strict";a("ff06")},"484d":function(e,t){e.exports={messages:{CN:{input:"请输入",select:"请选择",name:"仓库名",domain:"仓库域名",manager:"仓库管理员",approval:"审批人员",date:"生效日期",type:"仓库类型"},HK:{input:"請輸入",select:"請選擇",name:"倉庫名",domain:"倉庫域名",manager:"倉庫管理員",approval:"審批人員",date:"生效日期",type:"倉庫類型"},US:{input:"Please enter",select:"Please select",name:"Repository Name",domain:"Repository Domain",manager:"Repository Manager",approval:"Approval Person",date:"Effective Date",type:"Repository Type"}}}},"5c0b":function(e,t,a){"use strict";a("865d")},"5f16":function(e,t,a){"use strict";a("28ca")},"856f":function(e,t,a){"use strict";a("f31c")},"865d":function(e,t,a){},"88eb":function(e,t){e.exports={messages:{CN:{add:"添加",delete:"删除",save:"保存",cancel:"取消",edit:"编辑",deleteConfirm:"是否要删除此行？",newMember:"新增成员",table:{name:"成员姓名",number:"工号",department:"所属部门",operation:"操作"}},HK:{add:"添加",delete:"刪除",save:"保存",cancel:"取消",edit:"編輯",deleteConfirm:"是否要刪除此行？",newMember:"新增成員",table:{name:"成員姓名",number:"工號",department:"所屬部門",operation:"操作"}},US:{add:"add",delete:"delete",save:"save",cancel:"cancel",edit:"edit",deleteConfirm:"Confirm to delete this row?",newMember:"new member",table:{name:"Member Name",number:"Job Number",department:"Department",operation:"Operation"}}}}},"97e9":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("a-table",{attrs:{"data-source":e.data,columns:e.columns},scopedSlots:e._u([e._l(["name","ins","email","type"],(function(t){return{key:t,fn:function(r,n){return[a("div",{key:t},[n.editable?a("a-input",{staticStyle:{margin:"-5px 0"},attrs:{value:r},on:{change:function(a){return e.handleChange(a.target.value,n.key,t)}}}):[e._v(" "+e._s(r)+" ")]],2)]}}})),{key:"operation",fn:function(t,r){return[a("div",{staticClass:"editable-row-operations"},[r.editable?a("span",[a("a-space",[a("a",{on:{click:function(){return e.save(r.key)}}},[e._v("Save")]),a("a-popconfirm",{attrs:{title:"Sure to cancel?"},on:{confirm:function(){return e.cancel(r.key)}}},[a("a",[e._v("Cancel")])])],1)],1):a("span",[a("a",{attrs:{disabled:""!==e.editingKey},on:{click:function(){return e.edit(r.key)}}},[e._v("Edit")])])]),e.data.length?a("a-popconfirm",{attrs:{title:"Sure to delete?"},on:{confirm:function(){return e.onDelete(r.key)}}},[a("a",{attrs:{href:"javascript:0;"}},[e._v("Delete")])]):e._e()]}}],null,!0)})],1)},n=[],s=a("2909"),i=a("1da1"),o=a("5530"),c=(a("96cf"),a("d81d"),a("4de4"),a("b0c0"),a("ac8f")),u=[{title:"用户名",dataIndex:"name",width:"20%",scopedSlots:{customRender:"name"}},{title:"所属机构",dataIndex:"ins",width:"25%",scopedSlots:{customRender:"ins"}},{title:"邮箱",dataIndex:"email",width:"20%",scopedSlots:{customRender:"email"}},{title:"用户类型",dataIndex:"type",width:"15%",scopedSlots:{customRender:"type"}},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"}}],l=[],d={name:"UserForm",i18n:a("88eb"),data:function(){return this.cacheData=l.map((function(e){return Object(o["a"])({},e)})),{type:"",type1:0,data:l,columns:u,editingKey:""}},mounted:function(){this.init()},methods:{init:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.loadUser();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),loadUser:function(){var e=this;this.loading=!0,l.length=0,Object(c["k"])().then((function(t){for(var a=0;a<t.data.length;a++)0==t.data[a].usertype?e.type="个人":1==t.data[a].usertype?e.type="学校":e.type="公司",l.push({key:t.data[a].id,name:t.data[a].username,ins:t.data[a].institution,type:e.type,email:t.data[a].email});e.totalCnt=t.data.total_count,e.loading=!1})).catch((function(e){}))},onDelete:function(e){var t=this,a=Object(s["a"])(this.data);this.data=a.filter((function(t){return t.key!==e}));var r=a.filter((function(t){return e===t.key}))[0];"个人"==r.type?this.type1=0:"学校"==r.type?this.type1=1:this.type1=2;var n={id:r.key,name:r.name,usertype:this.type1,institution:r.ins,mail:r.email};Object(c["b"])(n).then((function(e){t.$message.info("成功删除")})).catch((function(e){}))},handleChange:function(){this.loadUser()},edit:function(e){var t=Object(s["a"])(this.data),a=t.filter((function(t){return e===t.key}))[0];this.editingKey=e,a&&(a.editable=!0,this.data=t)},save:function(e){var t=this,a=Object(s["a"])(this.data),r=Object(s["a"])(this.cacheData),n=a.filter((function(t){return e===t.key}))[0],i=r.filter((function(t){return e===t.key}))[0];n&&i&&(delete n.editable,this.data=a,Object.assign(i,n),this.cacheData=r),this.editingKey="","个人"==n.type?this.type1=0:"学校"==n.type?this.type1=1:this.type1=2;var o={id:n.key,name:n.name,usertype:this.type1,institution:n.ins,mail:n.email};Object(c["c"])(o).then((function(e){t.$message.info("成功修改")})).catch((function(e){t.$message.error("无法修改")})),n&&(Object.assign(n,this.cacheData.filter((function(t){return e===t.key}))[0]),delete n.editable,this.data=a)},cancel:function(e){var t=Object(s["a"])(this.data),a=t.filter((function(t){return e===t.key}))[0];this.editingKey="",a&&(Object.assign(a,this.cacheData.filter((function(t){return e===t.key}))[0]),delete a.editable,this.data=t)}}},m=d,p=(a("c1d3"),a("2877")),f=Object(p["a"])(m,r,n,!1,null,"79168a38",null);t["default"]=f.exports},ac8f:function(e,t,a){"use strict";a.d(t,"m",(function(){return s})),a.d(t,"p",(function(){return i})),a.d(t,"o",(function(){return o})),a.d(t,"n",(function(){return c})),a.d(t,"h",(function(){return u})),a.d(t,"l",(function(){return l})),a.d(t,"a",(function(){return d})),a.d(t,"i",(function(){return m})),a.d(t,"j",(function(){return p})),a.d(t,"d",(function(){return f})),a.d(t,"f",(function(){return v})),a.d(t,"e",(function(){return b})),a.d(t,"g",(function(){return h})),a.d(t,"k",(function(){return y})),a.d(t,"b",(function(){return g})),a.d(t,"c",(function(){return $}));a("1da1"),a("96cf"),a("99af");var r=a("7424"),n=a("b775");var s=function(e){var t="Interpretation",a="/api/".concat(t,"/getkeywords");return Object(n["f"])(a,"get",e)},i=function(e){var t="/api/recommend";return Object(n["f"])(t,"get",e)},o=function(e){var t="Interpretation",a="/api/".concat(t,"/getvis");return Object(n["f"])(a,"get",e)},c=function(e){var t="Interpretation",a="/api/".concat(t,"/gettags");return Object(n["f"])(a,"get",e)},u=function(e,t){var a="/api/comment";return Object(n["f"])(a,e,t)},l=function(e){var t="/api/user/profile";return e?Object(n["f"])(t,"get",{user_id:e}):Object(n["f"])(t,"get")},d=function(e,t,a,r){var s=1===t?"Interpretation":"Note",i="/api/".concat(s,"/").concat(e);return Object(n["f"])(i,a,r)},m=function(e){if(null===e||void 0===e)return"无";var t=new Date(e),a=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds(),r=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),n=t.getHours()<10?"0"+t.getHours():t.getHours();return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate()," ").concat(n,":").concat(r,":").concat(a)},p=function(e){return e?Object(n["f"])(r["PaperAll"],"get",{user_id:e}):Object(n["f"])(r["PaperAll"],"get")},f=function(e,t){var a="/api/comment/create";return Object(n["f"])(a,e,t)},v=function(e,t){var a="/api/comment/delete";return Object(n["f"])(a,e,t)},b=function(e){var t="/api/discussion/create";return Object(n["f"])(t,"post",e)},h=function(e,t){var a="/api/discussion/delete";return Object(n["f"])(a,e,t)},y=function(e){return e?Object(n["f"])(r["UserAll"],"get",{user_id:e}):Object(n["f"])(r["UserAll"],"get")},g=function(e){var t="/api/user/delete";return Object(n["f"])(t,"post",e)},$=function(e){var t="/api/user/changeinfo";return Object(n["f"])(t,"post",e)}},c1d3:function(e,t,a){"use strict";a("f172")},c30d:function(e,t){e.exports={messages:{CN:{input:"请输入",select:"请选择",name:"任务名",describe:"任务描述",executor:"执行人",duty:"责任人",time:"提醒时间",type:"任务类型"},HK:{input:"請輸入",select:"請選擇",name:"任務名",describe:"任務描述",executor:"執行人",duty:"責任人",time:"提醒時間",type:"任務類型"},US:{input:"Please enter",select:"Please select",name:"Task Name",describe:"Task Describe",executor:"Executor",duty:"Duty Person",time:"Reminder Time",type:"Task Type"}}}},f172:function(e,t,a){},f31c:function(e,t,a){},ff06:function(e,t,a){}}]);