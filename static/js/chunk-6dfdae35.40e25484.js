(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dfdae35"],{"6edc":function(t,e,a){},"7af9":function(t,e,a){"use strict";a("6edc")},"88eb":function(t,e){t.exports={messages:{CN:{add:"添加",delete:"删除",save:"保存",cancel:"取消",edit:"编辑",deleteConfirm:"是否要删除此行？",newMember:"新增成员",table:{name:"成员姓名",number:"工号",department:"所属部门",operation:"操作"}},HK:{add:"添加",delete:"刪除",save:"保存",cancel:"取消",edit:"編輯",deleteConfirm:"是否要刪除此行？",newMember:"新增成員",table:{name:"成員姓名",number:"工號",department:"所屬部門",operation:"操作"}},US:{add:"add",delete:"delete",save:"save",cancel:"cancel",edit:"edit",deleteConfirm:"Confirm to delete this row?",newMember:"new member",table:{name:"Member Name",number:"Job Number",department:"Department",operation:"Operation"}}}}},"97e9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{bordered:!1}},[a("h2",[t._v("选择用户类型")]),a("a-space",[a("a-select",{ref:"select",staticStyle:{width:"120px"},attrs:{disabled:!t.changeable},on:{change:t.selectChange},model:{value:t.selectedType,callback:function(e){t.selectedType=e},expression:"selectedType"}},[a("a-select-option",{attrs:{value:"0"}},[t._v("普通用户")]),a("a-select-option",{attrs:{value:"1"}},[t._v("专家认证中")]),a("a-select-option",{attrs:{value:"2"}},[t._v("企业认证中")]),a("a-select-option",{attrs:{value:"3"}},[t._v("封禁中")]),a("a-select-option",{attrs:{value:"4"}},[t._v("认证专家")]),a("a-select-option",{attrs:{value:"5"}},[t._v("认证企业")]),a("a-select-option",{attrs:{value:"6"}},[t._v("全部")])],1)],1),a("br"),a("br"),a("a-table",{key:t.itemKey,attrs:{"data-source":t.data,columns:t.columns,pagination:t.pagination},scopedSlots:t._u([t._l(["name","ins","email","type"],(function(e){return{key:e,fn:function(n,i){return[a("div",{key:e},[i.editable?a("a-input",{staticStyle:{margin:"-5px 0"},attrs:{value:n},on:{change:function(a){return t.handleChange(a.target.value,i,e)}}}):[t._v(" "+t._s(n)+" ")]],2)]}}})),{key:"operation",fn:function(e,n){return[a("div",{staticClass:"editable-row-operations"},[n.editable?a("span",[a("a-space",[a("a",{on:{click:function(){return t.save(n.key)}}},[t._v("Save")]),a("a-popconfirm",{attrs:{title:"Sure to cancel?"},on:{confirm:function(){return t.cancel(n.key)}}},[a("a",[t._v("Cancel")])])],1)],1):a("span",[a("a",{attrs:{disabled:""!==t.editingKey},on:{click:function(){return t.edit(n.key)}}},[t._v("Edit")])])]),t.data.length?a("a-popconfirm",{attrs:{title:"Sure to delete?"},on:{confirm:function(){return t.onDelete(n.key)}}},[a("a",{attrs:{href:"javascript:0;"}},[t._v("Delete")])]):t._e()]}}],null,!0)})],1)},i=[],r=a("2909"),c=a("1da1"),o=a("5530"),u=(a("96cf"),a("d81d"),a("4de4"),a("b0c0"),a("d3b7"),a("ac8f")),d=[{title:"用户名",dataIndex:"name",width:"20%",scopedSlots:{customRender:"name"}},{title:"所属机构",dataIndex:"ins",width:"25%",scopedSlots:{customRender:"ins"}},{title:"邮箱",dataIndex:"email",width:"20%",scopedSlots:{customRender:"email"}},{title:"用户类型",dataIndex:"type",width:"15%",scopedSlots:{customRender:"type"}},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"}}],s=[],l={name:"UserForm",inject:["reload"],i18n:a("88eb"),data:function(){var t=this;return this.cacheData=s.map((function(t){return Object(o["a"])({},t)})),{type:"",type1:0,data:s,columns:d,editingKey:"",editData:{},changeable:!0,selectedType:"全部",pagination:{current:1,onChange:function(e){t.changeable?(t.$forceUpdate(),Object(u["k"])("全部"===t.selectedType?6:t.selectedType,e).then((function(a){var n=a.data;s.length=0;for(var i=0;i<n.data.length;i++)0==n.data[i].type?t.type="普通用户":1==n.data[i].type?t.type="专家认证中":2==n.data[i].type?t.type="企业认证中":3==n.data[i].type?t.type="封禁中":4==n.data[i].type?t.type="认证专家":5==n.data[i].type&&(t.type="认证企业"),s.push({key:n.data[i].id,name:n.data[i].username,ins:n.data[i].institution,type:t.type,email:n.data[i].email,editable:!1});t.cacheData=s.map((function(t){return Object(o["a"])({},t)})),t.totalCnt=n.data.total_count,t.loading=!1,t.pagination.current=e})).catch((function(t){}))):alert("请完成修改后再切换页面！")},total:10},itemKey:""}},watch:{editingKey:function(t){this.changeable=""===t}},mounted:function(){this.init()},methods:{init:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.loadUser();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadUser:function(){var t=this;this.loading=!0,s.length=0,this.pagination.current=1,Object(u["k"])(6,1).then((function(e){for(var a=0;a<s.length;a++)s[a].target=!1;var n=e.data;s.length=0;for(var i=0;i<n.data.length;i++)0==n.data[i].type?t.type="普通用户":1==n.data[i].type?t.type="专家认证中":2==n.data[i].type?t.type="企业认证中":3==n.data[i].type?t.type="封禁中":4==n.data[i].type?t.type="认证专家":5==n.data[i].type&&(t.type="认证企业"),s.push({key:n.data[i].id,name:n.data[i].username,ins:n.data[i].institution,type:t.type,email:n.data[i].email});t.cacheData=s.map((function(t){return Object(o["a"])({},t)})),t.totalCnt=n.data.total_count,t.loading=!1,t.pagination.total=n.page_num})).catch((function(t){}))},onDelete:function(t){var e=this,a=Object(r["a"])(this.data);this.data=a.filter((function(e){return e.key!==t}));var n=a.filter((function(e){return t===e.key}))[0];"个人"==n.type?this.type1=0:"学校"==n.type?this.type1=1:this.type1=2;var i={id:n.key,name:n.name,usertype:this.type1,institution:n.ins,mail:n.email},c=this;Object(u["b"])(i).then((function(t){e.$message.info("成功删除")})).then((function(t){c.reload()})).catch((function(t){}))},handleChange:function(t,e,a){this.editData.key||(this.editData=e),"name"===a?this.editData.name=t:"ins"===a?this.editData.ins=t:"email"===a?this.editData.email=t:"type"===a&&(alert("暂不允许修改用户类型！！"),this.reload()),this.loadUser()},edit:function(t){var e=Object(r["a"])(this.data),a=e.filter((function(e){return t===e.key}))[0];this.editingKey=t,a&&(a.editable=!0,this.data=e)},save:function(t){var e=this,a=Object(r["a"])(this.data),n=Object(r["a"])(this.cacheData),i=a.filter((function(e){return t===e.key}))[0],c=n.filter((function(e){return t===e.key}))[0];i&&c&&(delete i.editable,this.data=a,Object.assign(c,i),this.cacheData=n),this.editingKey="","个人"==i.type?this.type1=0:"学校"==i.type?this.type1=1:this.type1=2;var o={id:this.editData.key,name:this.editData.name,institution:this.editData.ins,mail:this.editData.email},d=this;Object(u["c"])(o).then((function(t){e.$message.info("成功修改")})).then((function(t){d.reload()})).catch((function(t){e.$message.error("无法修改")})),i&&(Object.assign(i,this.cacheData.filter((function(e){return t===e.key}))[0]),delete i.editable,this.data=a),this.reload()},cancel:function(t){var e=this,a=new Promise((function(a,n){var i=Object(r["a"])(e.data),c=i.filter((function(e){return t===e.key}))[0];e.editingKey="",c&&(Object.assign(c,e.cacheData.filter((function(e){return t===e.key}))[0]),delete c.editable,e.data=i),a()}));a.then(e.reload())},selectChange:function(t){var e=this;this.changeable?(this.pagination.current=1,Object(u["k"])(this.selectedType,1).then((function(t){var a=t.data;s.length=0;for(var n=0;n<a.data.length;n++)0==a.data[n].type?e.type="普通用户":1==a.data[n].type?e.type="专家认证中":2==a.data[n].type?e.type="企业认证中":3==a.data[n].type?e.type="封禁中":4==a.data[n].type?e.type="认证专家":5==a.data[n].type&&(e.type="认证企业"),s.push({key:a.data[n].id,name:a.data[n].username,ins:a.data[n].institution,type:e.type,email:a.data[n].email,editable:!1});e.totalCnt=a.data.total_count,e.loading=!1,e.pagination.total=a.page_num,e.itemKey=Math.random()})).catch((function(t){}))):alert("请先完成编辑！")}}},p=l,f=(a("7af9"),a("2877")),h=Object(f["a"])(p,n,i,!1,null,"52be033a",null);e["default"]=h.exports},ac8f:function(t,e,a){"use strict";a.d(e,"n",(function(){return r})),a.d(e,"q",(function(){return c})),a.d(e,"p",(function(){return o})),a.d(e,"o",(function(){return u})),a.d(e,"h",(function(){return d})),a.d(e,"m",(function(){return s})),a.d(e,"a",(function(){return l})),a.d(e,"i",(function(){return p})),a.d(e,"j",(function(){return f})),a.d(e,"d",(function(){return h})),a.d(e,"f",(function(){return y})),a.d(e,"e",(function(){return m})),a.d(e,"g",(function(){return g})),a.d(e,"l",(function(){return b})),a.d(e,"k",(function(){return v})),a.d(e,"b",(function(){return _})),a.d(e,"c",(function(){return j}));a("1da1"),a("96cf"),a("99af");var n=a("7424"),i=a("b775");var r=function(t){var e="Interpretation",a=n["BASE_URL_IP"]+"/api/".concat(e,"/getkeywords");return Object(i["f"])(a,"get",t)},c=function(t){var e=n["BASE_URL_IP"]+"/api/recommend";return Object(i["f"])(e,"get",t)},o=function(t){var e="Interpretation",a=n["BASE_URL_IP"]+"/api/".concat(e,"/getvis");return Object(i["f"])(a,"get",t)},u=function(t){var e="Interpretation",a=n["BASE_URL_IP"]+"/api/".concat(e,"/gettags");return Object(i["f"])(a,"get",t)},d=function(t,e){var a=n["BASE_URL_IP"]+"/api/comment";return Object(i["f"])(a,t,e)},s=function(t){var e=n["BASE_URL_IP"]+"/api/user/profile";return t?Object(i["f"])(e,"get",{user_id:t}):Object(i["f"])(e,"get")},l=function(t,e,a,r){var c=1===e?"Interpretation":"Note",o=n["BASE_URL_IP"]+"/api/".concat(c,"/").concat(t);return Object(i["f"])(o,a,r)},p=function(t){if(null===t||void 0===t)return"无";var e=new Date(t),a=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds(),n=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),i=e.getHours()<10?"0"+e.getHours():e.getHours();return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()," ").concat(i,":").concat(n,":").concat(a)},f=function(t){return t?Object(i["f"])(n["PaperAll"],"get",{user_id:t}):Object(i["f"])(n["PaperAll"],"get")},h=function(t,e){var a=n["BASE_URL_IP"]+"/api/comment/create";return Object(i["f"])(a,t,e)},y=function(t,e){var a=n["BASE_URL_IP"]+"/api/comment/delete";return Object(i["f"])(a,t,e)},m=function(t){var e=n["BASE_URL_IP"]+"/api/discussion/create";return Object(i["f"])(e,"post",t)},g=function(t,e){var a=n["BASE_URL_IP"]+"/api/discussion/delete";return Object(i["f"])(a,t,e)},b=function(t){return t?Object(i["f"])(n["UserAll"],"get",{user_id:t}):Object(i["f"])(n["UserAll"],"get")},v=function(t,e){var a=n["BASE_URL_IP"]+"/api/user/".concat(t,"/all/").concat(e);return Object(i["f"])(a,"get")},_=function(t){var e=n["BASE_URL_IP"]+"/api/user/delete";return Object(i["f"])(e,"post",t)},j=function(t){var e=n["BASE_URL_IP"]+"/api/user/changeinfo";return Object(i["f"])(e,"post",t)}}}]);