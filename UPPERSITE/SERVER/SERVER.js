global.CONNS=OBJECT({init:function(t,e,a){"use strict";var o,r=t.socketPack,i=[];a.addDisconnectListener=o=function(t){i.push(t)},r.on("connection",function(t){var e={};t.addListener("disconnect",function(){EACH(i,function(e){e(t.id)})}),t.emit("__CONNECTED",t.id),t.addListener("__ENTER_ROOM",function(a){void 0===e[a]?(t.join(a),e[a]=1):e[a]+=1}),t.addListener("__EXIT_ROOM",function(a){e[a]-=1,0===e[a]&&(t.leave(a),delete e[a])})})}}),FOR_BOX(function(t){"use strict";t.DB=CLASS({init:function(e,a,o,r){var i,n,d,c,s,f,v,u,m,E,D,S,l,h,g,O,R,_,p,b,C=UPPERSITE.MODULE("mongolian").ObjectId;SERVER_CONFIG.isNotUsingDB===!0?(o.createData=E=function(){},o.createDataSafely=D=function(){},o.getData=S=function(){},o.updateData=l=function(){},o.updateDataSafely=h=function(){},o.removeData=g=function(){},o.removeDataSafely=O=function(){},o.findData=R=function(){},o.findDataSet=_=function(){},o.countDataSet=p=function(){},o.checkIsExists=b=function(){}):(i=UPPERSITE.db.collection(t.boxName+"."+r),n=UPPERSITE.db.collection(t.boxName+"."+r+"_backup"),d=UPPERSITE.db.collection(t.boxName+"."+r+"_error"),c=function(t){return new C(t)},s=function(t){return void 0!==t._id&&(t.id=t._id.toString()),delete t._id,delete t._isEnable,t},f=function(t){EACH(t,function(e,a){e===TO_DELETE?REMOVE_AT({data:t,key:a}):(CHECK_IS_DATA(e)===!0||CHECK_IS_ARRAY(e)===!0)&&f(e)})},v=function(t){void 0!==t.id&&(CHECK_IS_DATA(t.id)===!0?(EACH(t.id,function(e,a){CHECK_IS_DATA(e)===!0||CHECK_IS_ARRAY(e)===!0?EACH(e,function(t,a){e[a]=c(t)}):t.id[a]=c(e)}),t._id=t.id):t._id=c(id),delete t.id),t._isEnable=!0,EACH(t,function(e,a){void 0===e&&delete t[a]})},u=function(t){var e=t.call,a=t.data,o=new Date;n.save({call:e,time:o,data:a})},m=function(t){t.time=new Date,d.save(t)},o.createData=E=function(t,e){var a;try{t._isEnable=!0,t.createTime=new Date,f(t),i.save(t),u({method:"createData",data:t}),void 0!==e&&(s(t),e(void 0,t))}catch(o){a=o.toString(),m({method:"createData",data:t,errorMsg:a}),void 0!==e&&e(a)}},o.createDataSafely=D=function(t,e){var a;try{t._isEnable=!0,t.createTime=new Date,f(t),i.save(t,function(o,r){null===o?(u({method:"createDataSafely",data:r}),s(r),e(void 0,r)):(a=o.toString(),m({method:"createDataSafely",data:t,errorMsg:a}),e(a))})}catch(o){a=o.toString(),m({method:"createDataSafely",data:t,errorMsg:a}),e(a)}},o.getData=S=function(t,e){var a,o;try{a={_id:c(t),_isEnable:!0},i.findOne(a,function(a,r){null===a?(void 0!==r&&s(r),e(void 0,r)):(o=a.toString(),m({method:"getData",id:t,errorMsg:o}),e(o))})}catch(r){o=r.toString(),m({method:"getData",id:t,errorMsg:o}),e(o)}},o.updateData=l=function(t,e){var a,o,r=t.id;try{a={_id:c(r),_isEnable:!0},i.findOne(a,function(a,r){delete t.id,null===a?void 0===r?void 0!==e&&e():(EACH(r,function(e,a){(void 0===t[a]||"_id"===a||"_isEnable"===a||"createTime"===a)&&(t[a]=e)}),f(t),t.lastUpdateTime=new Date,i.save(t),u({method:"updateData",data:t}),void 0!==e&&(s(t),e(void 0,t))):(o=a.toString(),m({method:"updateData",data:t,errorMsg:o}),void 0!==e&&e(o))})}catch(n){o=n.toString(),m({method:"updateData",data:t,errorMsg:o}),void 0!==e&&e(o)}},o.updateDataSafely=h=function(t,e){var a,o,r=t.id;try{a={_id:c(r),_isEnable:!0},i.findOne(a,function(a,r){delete t.id,null===a?void 0===r?e():(EACH(r,function(e,a){(void 0===t[a]||"_id"===a||"_isEnable"===a||"createTime"===a)&&(t[a]=e)}),f(t),t.lastUpdateTime=new Date,i.save(t,function(a,r){null===a?(u({method:"updateDataSafely",data:r}),s(r),e(void 0,r)):(o=a.toString(),m({method:"updateDataSafely",data:t,errorMsg:o}),e(o))})):(o=a.toString(),m({method:"updateDataSafely",data:t,errorMsg:o}),e(o))})}catch(n){o=n.toString(),m({method:"updateDataSafely",data:t,errorMsg:o}),e(o)}},o.removeData=g=function(t,e){var a,o;try{a={_id:c(t),_isEnable:!0},i.findOne(a,function(a,r){null===a?void 0===r?void 0!==e&&e():(r._isEnable=!1,r.removeTime=new Date,i.save(r),u({method:"removeData",data:r}),void 0!==e&&(s(r),e(void 0,r))):(o=a.toString(),m({method:"removeData",id:t,errorMsg:o}),void 0!==e&&e(o))})}catch(r){o=r.toString(),m({method:"removeData",id:t,errorMsg:o}),void 0!==e&&e(o)}},o.removeDataSafely=O=function(t,e){var a,o;try{a={_id:c(t),_isEnable:!0},i.findOne(a,function(a,r){null===a?void 0===r?e():(r._isEnable=!1,r.removeTime=new Date,i.save(r,function(a,r){null===a?(u({method:"removeDataSafely",data:r}),s(r),e(void 0,r)):(o=a.toString(),m({method:"removeDataSafely",id:t,errorMsg:o}),e(o))})):(o=a.toString(),m({method:"removeDataSafely",id:t,errorMsg:o}),e(o))})}catch(r){o=r.toString(),m({method:"removeDataSafely",id:t,errorMsg:o}),e(o)}},o.findData=R=function(t,e){var a;void 0!==t&&void 0===e&&(e=t),void 0===t&&(t={});try{v(t),i.findOne(t,function(o,r){null===o?(void 0!==r&&s(r),e(void 0,r)):(a=o.toString(),m({method:"findData",filter:t,errorMsg:a}),e(a))})}catch(o){a=o.toString(),m({method:"findData",filter:t,errorMsg:a}),e(a)}},o.findDataSet=_=function(t,e){var a,o,r=void 0===t?void 0:t.filter,n=void 0===t?void 0:t.sort,d=void 0===t?void 0:t.start,c=void 0===t||void 0===t.count?void 0:parseInt(t.count,10),f=void 0===t||void 0===t.isFindAll?void 0:parseInt(t.isFindAll,10);void 0!==t&&void 0===e&&(e=t);try{void 0===r&&(r={}),void 0===n&&(n={}),void 0===d&&(d=0),f!==!0&&(void 0===c||c>SERVER_CONFIG.maxDataCount||isNaN(c)===!0?c=SERVER_CONFIG.maxDataCount:1>c&&(c=1)),v(r),o=function(o,r){null===o?(void 0!==r&&EACH(r,function(t){s(t)}),e(void 0,r)):(a=o.toString(),m({method:"findDataSet",params:t,errorMsg:a}),e(a))},f===!0?i.find(r).sort(n).skip(d).toArray(o):i.find(r).sort(n).skip(d).limit(c).toArray(o)}catch(u){a=u.toString(),m({method:"findDataSet",params:t,errorMsg:a}),e(a)}},o.countDataSet=p=function(t,e){var a;void 0!==t&&void 0===e&&(e=t),void 0===t&&(t={});try{v(t),i.find(t).count(function(o,r){null===o?e(void 0,r):(a=o.toString(),m({method:"countDataSet",filter:t,errorMsg:a}),e(a))})}catch(o){a=o.toString(),m({method:"countDataSet",filter:t,errorMsg:a}),e(a)}},o.checkIsExists=b=function(t,e){var a;void 0!==t&&void 0===e&&(e=t),void 0===t&&(t={});try{v(t),i.find(t).count(function(o,r){null===o?e(void 0,void 0!==r&&r>0):(a=o.toString(),m({method:"checkIsExists",filter:t,errorMsg:a}),e(a))})}catch(o){a=o.toString(),m({method:"checkIsExists",filter:t,errorMsg:a}),e(a)}})}})}),FOR_BOX(function(t){"use strict";t.LOG_DB=CLASS({init:function(e,a,o,r){var i,n;SERVER_CONFIG.isNotUsingDB===!0?o.log=n=function(){}:(i=UPPERSITE.db.collection(t.boxName+"."+r),o.log=n=function(t){t.time=new Date,i.save(t)})}})}),FOR_BOX(function(t){"use strict";OVERRIDE(t.MODEL,function(){t.MODEL=CLASS({init:function(e,a,o,r){var i,n,d,c,s,f,v,u,m,E,D,S,l,h,g,O,R,_,p,b,C,M,A,y=r.name,N=void 0===r.propertyNamesForNewEvent?[]:r.propertyNamesForNewEvent,I=r.config,T=t.DB(y),U=t.ROOM(y),k=t.ROOM(y+"/{id}");void 0!==I&&(i=I.create,n=I.getData,d=I.update,c=I.remove,s=I.findData,f=I.findDataSet,v=I.countDataSet,u=I.checkIsExists,void 0!==i&&(m=i.valid),void 0!==d&&(E=d.valid)),a.getCreateValid=D=function(){return m},a.getUpdateValid=S=function(){return E},i!==!1&&U.on("create",function(e,o,r,i,n,d){var c,s=m.check({data:o});s.checkHasError()===!0?d({hasError:!0,errors:s.getErrors()}):(c=function(){T.createDataSafely(o,function(o,r){void 0!==o?d({hasError:!0,errorMsg:o}):(void 0!==a.afterCreate&&a.afterCreate(r),void 0!==a.afterCreateRoom&&a.afterCreateRoom({savedData:r,room:U,socketId:e,ip:i,headers:n}),t.ROOMS(y+"/create").broadcast({methodName:"create",data:r}),EACH(N,function(e){var a=r[e];t.ROOMS(y+"/"+e+"/"+a+"/create").broadcast({methodName:"create",data:r})}),d({hasError:!1,savedData:r}))})},void 0===a.beforeCreateRoom?void 0!==a.beforeCreate?a.beforeCreate(o,{ret:d,proc:c})!==!1&&c():c():a.beforeCreateRoom({data:o,room:U,socketId:e,ip:i,headers:n},{ret:d,proc:c}))}),d!==!1&&k.on("update",function(e,o,r,i,n,d){var c,s=r.id,f=E.check({data:o,isExceptUndefined:!0});o.id=s,f.checkHasError()===!0?d({hasError:!0,errors:f.getErrors()}):(c=function(){T.updateDataSafely(o,function(o,r){void 0!==o?d({hasError:!0,errorMsg:o}):(void 0!==r&&(void 0!==a.afterUpdate&&a.afterUpdate(r),void 0!==a.afterUpdateRoom&&a.afterUpdateRoom({savedData:r,room:k,socketId:e,ip:i,headers:n}),t.ROOMS(y+"/"+s).broadcast({methodName:"update",data:r})),d({hasError:!1,savedData:r}))})},void 0===a.beforeUpdateRoom?void 0!==a.beforeUpdate?a.beforeUpdate(o,{ret:d,proc:c})!==!1&&c():c():a.beforeUpdateRoom({data:o,room:k,socketId:e,ip:i,headers:n},{ret:d,proc:c})!==!1&&c())}),c!==!1&&k.on("remove",function(e,o,r,i,n,d){var c;c=function(){T.removeDataSafely(o,function(r,c){void 0!==r?d({hasError:!0,errorMsg:r}):(void 0!==c&&(void 0!==a.afterRemove&&a.afterRemove(c),void 0!==a.afterRemoveRoom&&a.afterRemoveRoom({savedData:c,room:k,socketId:e,ip:i,headers:n}),t.ROOMS(y+"/"+o).broadcast({methodName:"remove",data:c}),EACH(N,function(e){var a=c[e];t.ROOMS(y+"/"+e+"/"+a+"/remove").broadcast({methodName:"remove",data:c})})),d({hasError:!1,savedData:c}))})},void 0===a.beforeRemoveRoom?void 0!==a.beforeRemove?a.beforeRemove(o,{ret:d,proc:c})!==!1&&c():c():a.beforeRemoveRoom({id:o,room:k,socketId:e,ip:i,headers:n},{ret:d,proc:c})!==!1&&c()}),a.getDB=l=function(){return T},a.getRoom=h=function(){return U},i!==!1&&(o.create=g=function(e,o){var r,i=m.check({data:e});i.checkHasError()===!0?void 0!==o&&o({hasError:!0,errors:i.getErrors()}):(r=function(){T.createDataSafely(e,function(e,r){void 0!==e?void 0!==o&&o({hasError:!0,errorMsg:e}):(void 0!==a.afterCreate&&a.afterCreate(r),t.ROOMS(y+"/create").broadcast({methodName:"create",data:r}),EACH(N,function(e){var a=r[e];t.ROOMS(y+"/"+e+"/"+a+"/create").broadcast({methodName:"create",data:r})}),void 0!==o&&o({hasError:!1,savedData:r}))})},void 0!==a.beforeCreate?a.beforeCreate(e,{ret:o,proc:r})!==!1&&r():r())}),n!==!1&&(o.getData=O=function(t,e){T.getData(t,function(t,o){void 0!==t?void 0!==e&&e({hasError:!0,errorMsg:t}):(void 0===a.getData||a.getData(o,e)!==!1)&&void 0!==e&&e({hasError:!1,savedData:o})})}),d!==!1&&(o.update=R=function(e,o){var r,i=E.check({data:e,isExceptUndefined:!0});i.checkHasError()===!0?void 0!==o&&o({hasError:!0,errors:i.getErrors()}):(r=function(){T.updateDataSafely(e,function(r,i){void 0!==r?void 0!==o&&o({hasError:!0,errorMsg:r}):(void 0!==i&&(void 0!==a.afterUpdate&&a.afterUpdate(i),t.ROOMS(y+"/"+e.id).broadcast({methodName:"update",data:i})),void 0!==o&&o({hasError:!1,savedData:i}))})},void 0!==a.beforeUpdate?a.beforeUpdate(e,{ret:o,proc:r})!==!1&&r():r())}),c!==!1&&(o.remove=_=function(e,o){var r;r=function(){T.removeDataSafely(e,function(e,r){void 0!==e?void 0!==o&&o({hasError:!0,errorMsg:e}):(void 0!==r&&(void 0!==a.afterRemove&&a.afterRemove(r),t.ROOMS(y+"/"+r.id).broadcast({methodName:"remove",data:r}),EACH(N,function(e){var a=r[e];t.ROOMS(y+"/"+e+"/"+a+"/remove").broadcast({methodName:"remove",data:r})})),void 0!==o&&o({hasError:!1,savedData:r}))})},void 0!==a.beforeRemove?a.beforeRemove(e,{ret:o,proc:r})!==!1&&r():r()}),s!==!1&&(o.findData=p=function(t,e){T.findData(t,function(t,o){void 0!==t?void 0!==e&&e({hasError:!0,errorMsg:t}):(void 0===a.findData||a.findData(o,e)!==!1)&&void 0!==e&&e({hasError:!1,savedData:o})})}),f!==!1&&(o.findDataSet=b=function(t,e){T.findDataSet(t,function(t,o){void 0!==t?void 0!==e&&e({hasError:!0,errorMsg:t}):(void 0===a.findDataSet||a.findDataSet(o,e)!==!1)&&void 0!==e&&e({hasError:!1,savedDataSet:o})})}),v!==!1&&(o.countDataSet=C=function(t,e){T.countDataSet(t,function(t,o){void 0!==t?void 0!==e&&e({hasError:!0,errorMsg:t}):(void 0===a.countDataSet||a.countDataSet(o,e)!==!1)&&void 0!==e&&e({hasError:!1,count:o})})}),u!==!1&&(o.checkIsExists=M=function(t,e){T.checkIsExists(t,function(t,o){void 0!==t?void 0!==e&&e({hasError:!0,errorMsg:t}):(void 0===a.checkIsExists||a.checkIsExists(o,e)!==!1)&&void 0!==e&&e({hasError:!1,isExists:o})})}),n!==!1&&U.on("getData",function(t,e,a,o,r,i){O(e,i)}),s!==!1&&U.on("findData",function(t,e,a,o,r,i){p(e,i)}),f!==!1&&U.on("findDataSet",function(t,e,a,o,r,i){delete e.isFindAll,b(e,i)}),v!==!1&&U.on("countDataSet",function(t,e,a,o,r,i){C(e,i)}),u!==!1&&U.on("checkIsExists",function(t,e,a,o,r,i){M(e,i)}),a.getName=A=function(){return y}}})})}),FOR_BOX(function(t){"use strict";t.MODULE=METHOD({run:function(e,a){var o=__dirname+"/../..";return require(o+"/"+t.boxName+"/SERVER/node_modules/"+a)}})}),FOR_BOX(function(t){"use strict";t.REQUEST=METHOD({statics:function(t){t.funcs={},t.checkURI=function(e,a){var o=e.uri,r=e.paramStr,i=e.ip,n=e.headers,d=a.response,c=a.serveErrorPage;return EACH(t.funcs,function(t,e){var a,s="",f=e,v={};return a=function(t){var e,a;return-1!==f.indexOf("{")&&-1!==f.indexOf("}")&&(a=f.substring(0,f.indexOf("{")),s+"/"===a)?(e=f.substring(f.indexOf("{")+1,f.indexOf("}")),f=a+t+f.substring(f.indexOf("}")+1),{name:e,value:t}):void 0},EACH(o.split("/"),function(t,e){var o=a(t);return void 0!==o&&(v[o.name]=o.value),0===e?s=t:s+="/"+t,s===f?!1:void 0}),o===f?(t(r,v,i,n,d,c),!1):void 0})===!1}},run:function(t,e,a){t.funcs[e]=a}})}),FOR_BOX(function(t){"use strict";t.REQUEST_JSON=METHOD({run:function(e,a,o){t.REQUEST.funcs[a]=function(t,e,a,r,i,n){var d;try{d=JSON.parse(t)}catch(c){return void n()}return o(d,e,a,r,i,n)}}})}),FOR_BOX(function(t){"use strict";t.ROOM=CLASS({init:function(e,a,o,r){var i,n;o.on=i=function(e,a){t.REQUEST_JSON("__FOR_ROOM/"+r+"/"+e,function(t,e,o,r,i){t=UNPACK_DATA(t),a(t.socketId,t.data,e,o,r,function(t){i({content:JSON.stringify(CHECK_IS_DATA(t)===!0?PACK_DATA(t):t),contentType:"application/json",encoding:"utf-8"})})})},o.addDisconnectListener=n=function(t){CONNS.addDisconnectListener(t)}}})}),FOR_BOX(function(t){"use strict";t.ROOMS=CLASS({init:function(e,a,o,r){var i,n=t.boxName+"/"+r;o.broadcast=i=function(t){var e=t.methodName,a=CHECK_IS_DATA(t.data)===!0?PACK_DATA(t.data):t.data,o=n+"/"+e;CONNS.type.socketPack["in"](n).emit(o,a)}}})}),global.SERVER_CONFIG={dbName:"UPPERSITE-testdb",dbUsername:"test",dbPassword:"test",maxDataCount:1e3,errorPageUrl:"/UPPERSITE/ERROR.html"},global.SHA1=METHOD({run:function(t,e){"use strict";var a=e.key,o=e.password,r=require("crypto");return r.createHmac("sha1",a).update(o).digest("hex")}}),global.TIME_SYNC=OBJECT({init:function(){"use strict";var t=UPPERSITE.ROOM("timeSync");t.on("sync",function(t,e,a,o,r,i){var n=new Date,d=e.now;i({diff:d-n})})}});