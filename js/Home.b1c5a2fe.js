(self["webpackChunktoutiao_m"]=self["webpackChunktoutiao_m"]||[]).push([[268],{9918:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return T}});var s=function(){var t=this,e=t._self._c;return e("div",[e("div",[e("van-nav-bar",{attrs:{fixed:""},scopedSlots:t._u([{key:"left",fn:function(){return[e("img",{staticClass:"logo",attrs:{src:n(3018)}})]},proxy:!0},{key:"right",fn:function(){return[e("van-icon",{attrs:{name:"search",size:"0.48rem",color:"#fff"},on:{click:function(e){return t.$router.push({path:"/search"})}}})]},proxy:!0}])})],1),e("div",{staticClass:"main"},[e("van-tabs",{attrs:{animated:"",sticky:"","offset-top":"1.2266667rem"},on:{change:t.channelChangeFn},model:{value:t.channelId,callback:function(e){t.channelId=e},expression:"channelId"}},t._l(t.userChannelsList,(function(n){return e("van-tab",{key:n.id,attrs:{name:n.id,title:n.name}},[e("ArticleList",{attrs:{channelId:t.channelId}})],1)})),1)],1),e("van-icon",{staticClass:"moreChannels",attrs:{name:"plus",size:"0.37333334rem"},on:{click:t.showPopup}}),e("van-popup",{attrs:{position:"left"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("ChannelEdit",{attrs:{userList:t.userChannelsList,moreList:t.unCheckChannelList},on:{addChannelEV:t.addChannelFn,delChannelEV:t.delChannelFn,closeEV:function(e){t.show=!1},changeChannelEV:t.changeChannelFn}})],1)],1)},i=[],a=n(586),r=function(){var t=this,e=t._self._c;return e("div",[e("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",offset:"50"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.articlesList,(function(t){return e("ArticleItem",{key:t.art_id,attrs:{artObj:t}})})),1)],1)],1)},o=[],l=function(){var t=this,e=t._self._c;return e("div",[e("van-cell",{on:{click:function(e){return t.goDetailFn(t.artObj.art_id)}},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{staticClass:"title-box"},[e("span",[t._v(t._s(t.artObj.title))]),1===t.artObj.cover.type?e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.artObj.cover.images[0],expression:"artObj.cover.images[0]"}],staticClass:"thumb"}):t._e()]),t.artObj.cover.type>1?e("div",{staticClass:"thumb-box"},t._l(t.artObj.cover.images,(function(t,n){return e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],key:n,staticClass:"thumb"})})),0):t._e()]},proxy:!0},{key:"label",fn:function(){return[e("div",{staticClass:"label-box"},[e("div",[e("span",[t._v(t._s(t.artObj.aut_name))]),e("span",[t._v(t._s(t.artObj.comm_count)+"评论")]),e("span",[t._v(t._s(t.formatTime(t.artObj.pubdate)))])]),e("van-icon",{attrs:{name:"cross"},on:{click:function(e){e.stopPropagation(),t.show=!0}}})],1)]},proxy:!0}])}),e("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":t.cancelText,"close-on-click-action":"","get-container":"body"},on:{cancel:t.onCancel,select:t.onSelect,close:t.closeFn},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},c=[],u=n(9762),h=n(7220);const d=[{name:"不感兴趣"},{name:"反馈垃圾内容"}],f=[{name:"标题夸张",value:1},{name:"低俗色情",value:2},{name:"错别字多",value:3},{name:"旧闻重复",value:4},{name:"广告软文",value:5},{name:"侵权",value:8},{name:"内容不实",value:6},{name:"涉嫌违法犯罪",value:7},{name:"其他问题",value:0}];var m={data(){return{show:!1,actions:d,cancelText:"取消",remark:""}},props:{artObj:Object},methods:{formatTime:h.S,onCancel(){"返回"===this.cancelText&&(this.actions=d,this.cancelText="取消",this.show=!0)},closeFn(){this.actions=d,this.cancelText="取消"},async onSelect(t,e){if("反馈垃圾内容"===t.name)console.log(f),this.actions=f,this.show=!0,this.cancelText="返回";else if("不感兴趣"===t.name)await(0,a.YQ)(this.artObj.art_id),(0,u.Z)({type:"success",message:"反馈成功"});else{0===f[e].value&&(this.remark="测试其他问题");try{await(0,a.ad)(this.artObj.art_id,f[e].value,this.remark),(0,u.Z)({type:"success",message:"举报成功"})}catch(n){}}},goDetailFn(t){this.$router.push({path:"/article_detail",query:{aid:t}})}}},v=m,p=n(1001),_=(0,p.Z)(v,l,c,!1,null,"14e9b5de",null),y=_.exports,$={props:{channelId:Number},data(){return{articlesList:[],loading:!1,finished:!1,timestamp:(new Date).getTime(),isLoading:!1}},created(){this.getArticlesListFn()},components:{ArticleItem:y},methods:{async getArticlesListFn(){const t=await(0,a.VW)(this.channelId,this.timestamp);this.articlesList.push.apply(this.articlesList,t.data.data.results),this.timestamp=t.data.data.pre_timestamp,this.loading=!1,null===this.timestamp&&(this.finished=!0)},onLoad(){0!==this.articlesList.length&&this.getArticlesListFn()},onRefresh(){this.articlesList=[],this.timestamp=(new Date).getTime(),this.getArticlesListFn(),this.isLoading=!1}}},g=$,w=(0,p.Z)(g,r,o,!1,null,null,null),M=w.exports,C=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{attrs:{title:"频道管理"},scopedSlots:t._u([{key:"right",fn:function(){return[e("van-icon",{attrs:{name:"cross",size:"0.37333334rem",color:"white"},on:{click:t.closeFn}})]},proxy:!0}])}),e("div",{staticClass:"my-channel-box"},[e("div",{staticClass:"channel-title"},[e("span",[t._v("我的频道 "),e("span",{staticClass:"small-title"},[t._v(" 点击"+t._s(t.isEdit?"删除":"进入")+"频道 ")])]),e("span",{on:{click:t.editBtn}},[t._v(t._s(t.isEdit?"完成":"编辑"))])]),e("van-row",{attrs:{type:"flex"}},t._l(t.userList,(function(n){return e("van-col",{key:n.id,attrs:{span:"6"},on:{click:function(e){return t.delChannel(n)}}},[e("div",{staticClass:"channel-item van-hairline--surround"},[t._v(" "+t._s(n.name)+" "),e("van-badge",{directives:[{name:"show",rawName:"v-show",value:!(!t.isEdit||0===n.id),expression:"isEdit && obj.id !== 0 ? true : false"}],staticClass:"cross-badge",attrs:{color:"transparent"},scopedSlots:t._u([{key:"content",fn:function(){return[e("van-icon",{staticClass:"badge-icon",attrs:{name:"cross",color:"#cfcfcf",size:"0.32rem"}})]},proxy:!0}],null,!0)})],1)])})),1)],1),e("div",{staticClass:"more-channel-box"},[t._m(0),e("van-row",{attrs:{type:"flex"}},t._l(t.moreList,(function(n){return e("van-col",{key:n.id,attrs:{span:"6"},on:{click:function(e){return t.moreFn(n)}}},[e("div",{staticClass:"channel-item van-hairline--surround"},[t._v("+"+t._s(n.name))])])})),1)],1)],1)},b=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"channel-title"},[e("span",[t._v("点击添加更多频道：")])])}],L={props:{userList:Array,moreList:Array},data(){return{isEdit:!1}},methods:{editBtn(){this.isEdit=!this.isEdit},moreFn(t){!0===this.isEdit&&this.$emit("addChannelEV",t)},delChannel(t){!0===this.isEdit&&0!==t.id?this.$emit("delChannelEV",t):!1===this.isEdit&&this.$emit("changeChannelEV",t.id)},closeFn(){this.$emit("closeEV"),this.isEdit=!1}}},D=L,S=(0,p.Z)(D,C,b,!1,null,"77cb1ebc",null),Y=S.exports,x={data(){return{channelId:0,userChannelsList:[],alluserChannelsList:[],show:!1,channelScrollTopObj:{}}},async created(){const t=await(0,a.lS)();this.userChannelsList=t.data.data.channels;const e=await(0,a.Of)();console.log(e),this.alluserChannelsList=e.data.data.channels},computed:{unCheckChannelList(){return this.alluserChannelsList.filter((t=>-1===this.userChannelsList.findIndex((e=>e.id===t.id))))}},components:{ArticleList:M,ChannelEdit:Y},methods:{showPopup(){this.show=!0},channelChangeFn(){this.$nextTick((()=>{document.documentElement.scrollTop=this.channelScrollTopObj[this.channelId]}))},async addChannelFn(t){this.userChannelsList.push(t),await(0,a.nC)(this.userChannelsList)},async delChannelFn(t){this.userChannelsList=this.userChannelsList.filter((e=>e.id!==t.id)),await(0,a.ZZ)(t.id)},changeChannelFn(t){this.channelId=t,this.show=!1},scrollFn(){this.$route.meta.scrollT=document.documentElement.scrollTop,this.channelScrollTopObj[this.channelId]=document.documentElement.scrollTop}},activated(){document.documentElement.scrollTop=this.$route.meta.scrollT,window.addEventListener("scroll",this.scrollFn)},deactivated(){window.removeEventListener("scroll",this.scrollFn)}},k=x,O=(0,p.Z)(k,s,i,!1,null,"8a5ee90a",null),T=O.exports},5743:function(t){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,s="millisecond",i="second",a="minute",r="hour",o="day",l="week",c="month",u="quarter",h="year",d="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},_=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},y={s:_,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+_(s,2,"0")+":"+_(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(s,c),a=n-i<0,r=e.clone().add(s+(a?-1:1),c);return+(-(s+(n-i)/(a?i-r:r-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:l,d:o,D:d,h:r,m:a,s:i,ms:s,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",g={};g[$]=p;var w=function(t){return t instanceof L},M=function t(e,n,s){var i;if(!e)return $;if("string"==typeof e){var a=e.toLowerCase();g[a]&&(i=a),n&&(g[a]=n,i=a);var r=e.split("-");if(!i&&r.length>1)return t(r[0])}else{var o=e.name;g[o]=e,i=o}return!s&&i&&($=i),i||!s&&$},C=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new L(n)},b=y;b.l=M,b.i=w,b.w=function(t,e){return C(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var L=function(){function p(t){this.$L=M(t.locale,null,!0),this.parse(t)}var _=p.prototype;return _.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(m);if(s){var i=s[2]-1||0,a=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},_.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},_.$utils=function(){return b},_.isValid=function(){return!(this.$d.toString()===f)},_.isSame=function(t,e){var n=C(t);return this.startOf(e)<=n&&n<=this.endOf(e)},_.isAfter=function(t,e){return C(t)<this.startOf(e)},_.isBefore=function(t,e){return this.endOf(e)<C(t)},_.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(t,e){var n=this,s=!!b.u(e)||e,u=b.p(t),f=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return s?i:i.endOf(o)},m=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,p=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case h:return s?f(1,0):f(31,11);case c:return s?f(1,p):f(0,p+1);case l:var $=this.$locale().weekStart||0,g=(v<$?v+7:v)-$;return f(s?_-g:_+(6-g),p);case o:case d:return m(y+"Hours",0);case r:return m(y+"Minutes",1);case a:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},_.endOf=function(t){return this.startOf(t,!1)},_.$set=function(t,e){var n,l=b.p(t),u="set"+(this.$u?"UTC":""),f=(n={},n[o]=u+"Date",n[d]=u+"Date",n[c]=u+"Month",n[h]=u+"FullYear",n[r]=u+"Hours",n[a]=u+"Minutes",n[i]=u+"Seconds",n[s]=u+"Milliseconds",n)[l],m=l===o?this.$D+(e-this.$W):e;if(l===c||l===h){var v=this.clone().set(d,1);v.$d[f](m),v.init(),this.$d=v.set(d,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},_.set=function(t,e){return this.clone().$set(t,e)},_.get=function(t){return this[b.p(t)]()},_.add=function(s,u){var d,f=this;s=Number(s);var m=b.p(u),v=function(t){var e=C(f);return b.w(e.date(e.date()+Math.round(t*s)),f)};if(m===c)return this.set(c,this.$M+s);if(m===h)return this.set(h,this.$y+s);if(m===o)return v(1);if(m===l)return v(7);var p=(d={},d[a]=e,d[r]=n,d[i]=t,d)[m]||1,_=this.$d.getTime()+s*p;return b.w(_,this)},_.subtract=function(t,e){return this.add(-1*t,e)},_.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),a=this.$H,r=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=function(t,n,i,a){return t&&(t[n]||t(e,s))||i[n].slice(0,a)},h=function(t){return b.s(a%12||12,t,"0")},d=n.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:b.s(o+1,2,"0"),MMM:u(n.monthsShort,o,c,3),MMMM:u(c,o),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:b.s(a,2,"0"),h:h(1),hh:h(2),a:d(a,r,!0),A:d(a,r,!1),m:String(r),mm:b.s(r,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:i};return s.replace(v,(function(t,e){return e||m[t]||i.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(s,d,f){var m,v=b.p(d),p=C(s),_=(p.utcOffset()-this.utcOffset())*e,y=this-p,$=b.m(this,p);return $=(m={},m[h]=$/12,m[c]=$,m[u]=$/3,m[l]=(y-_)/6048e5,m[o]=(y-_)/864e5,m[r]=y/n,m[a]=y/e,m[i]=y/t,m)[v]||y,f?$:b.a($)},_.daysInMonth=function(){return this.endOf(c).$D},_.$locale=function(){return g[this.$L]},_.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=M(t,e,!0);return s&&(n.$L=s),n},_.clone=function(){return b.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},p}(),D=L.prototype;return C.prototype=D,[["$ms",s],["$s",i],["$m",a],["$H",r],["$W",o],["$M",c],["$y",h],["$D",d]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),C.extend=function(t,e){return t.$i||(t(e,L,C),t.$i=!0),C},C.locale=M,C.isDayjs=w,C.unix=function(t){return C(1e3*t)},C.en=g[$],C.Ls=g,C.p={},C}))},3432:function(t,e,n){!function(e,s){t.exports=s(n(5743))}(0,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t),s={name:"zh",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){return"W"===e?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s后",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var n=100*t+e;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}};return n.default.locale(s,null,!0),s}))},893:function(t){!function(e,n){t.exports=n()}(0,(function(){"use strict";return function(t,e,n){t=t||{};var s=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(t,e,n,i){return s.fromToBase(t,e,n,i)}n.en.relativeTime=i,s.fromToBase=function(e,s,a,r,o){for(var l,c,u,h=a.$locale().relativeTime||i,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=d.length,m=0;m<f;m+=1){var v=d[m];v.d&&(l=r?n(e).diff(a,v.d,!0):a.diff(e,v.d,!0));var p=(t.rounding||Math.round)(Math.abs(l));if(u=l>0,p<=v.r||!v.r){p<=1&&m>0&&(v=d[m-1]);var _=h[v.l];o&&(p=o(""+p)),c="string"==typeof _?_.replace("%d",p):_(p,s,v.l,u);break}}if(s)return c;var y=u?h.future:h.past;return"function"==typeof y?y(c):y.replace("%s",c)},s.to=function(t,e){return a(t,e,this,!0)},s.from=function(t,e){return a(t,e,this)};var r=function(t){return t.$u?n.utc():n()};s.toNow=function(t){return this.to(r(this),t)},s.fromNow=function(t){return this.from(r(this),t)}}}))},7220:function(t,e,n){"use strict";n.d(e,{S:function(){return o},p:function(){return l}});var s=n(5743),i=n.n(s),a=n(893),r=n.n(a);n(3432);const o=t=>{i().extend(r()),i().locale("zh");const e=i()(),n=i()(t);return e.to(n)},l=t=>i()(t).format("YYYY-MM-DD")},3018:function(t,e,n){"use strict";t.exports=n.p+"img/toutiao_logo.d0d391a4.png"}}]);
//# sourceMappingURL=Home.b1c5a2fe.js.map