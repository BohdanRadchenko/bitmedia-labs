(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[1],{1:function(e,S,E){"use strict";E.d(S,"a",(function(){return t}));var t={HANDLER_PAGE:"HANDLER_PAGE",FETCH_USERS_REQUEST:"FETCH_USERS_REQUEST",FETCH_USERS_SUCCESS:"FETCH_USERS_SUCCESS",FETCH_USERS_ERROR:"FETCH_USERS_ERROR",FETCH_USERS_BY_ID_REQUEST:"FETCH_USERS_BY_ID_REQUEST",FETCH_USERS_BY_ID_SUCCESS:"FETCH_USERS_BY_ID_SUCCESS",FETCH_USERS_BY_ID_ERROR:"FETCH_USERS_BY_ID_ERROR",FETCH_STATS_REQUEST:"FETCH_STATS_REQUEST",FETCH_STATS_SUCCESS:"FETCH_STATS_SUCCESS",FETCH_STATS_ERROR:"FETCH_STATS_ERROR",FETCH_STATS_BY_ID_REQUEST:"FETCH_STATS_BY_ID_REQUEST",FETCH_STATS_BY_ID_SUCCESS:"FETCH_STATS_BY_ID_SUCCESS",FETCH_STATS_BY_ID_ERROR:"FETCH_STATS_BY_ID_ERROR"}},26:function(e,S,E){e.exports=E(57)},55:function(e,S,E){},56:function(e,S,E){},57:function(e,S,E){"use strict";E.r(S);var t=E(0),_=E.n(t),a=E(11),n=E.n(a),T=E(18),r=E(5),c=E(22),l=E(1),R=Object(r.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],S=arguments.length>1?arguments[1]:void 0,E=S.type,t=S.payload;switch(E){case l.a.FETCH_USERS_SUCCESS:return t.users;case l.a.FETCH_USERS_BY_ID_SUCCESS:return t.user;default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],S=arguments.length>1?arguments[1]:void 0,E=S.type;S.payload;switch(E){case l.a.FETCH_USERS_REQUEST:case l.a.FETCH_USERS_BY_ID_REQUEST:return!0;case l.a.FETCH_USERS_SUCCESS:case l.a.FETCH_USERS_BY_ID_SUCCESS:case l.a.FETCH_USERS_ERROR:case l.a.FETCH_USERS_BY_ID_ERROR:return!1;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,S=arguments.length>1?arguments[1]:void 0,E=S.type,t=S.payload;switch(E){case l.a.FETCH_USERS_REQUEST:case l.a.FETCH_USERS_SUCCESS:case l.a.FETCH_USERS_BY_ID_REQUEST:case l.a.FETCH_USERS_BY_ID_SUCCESS:return null;case l.a.FETCH_USERS_ERROR:case l.a.FETCH_USERS_BY_ID_ERROR:return t.error;default:return e}}}),C=Object(r.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],S=arguments.length>1?arguments[1]:void 0,E=S.type,t=S.payload;switch(E){case l.a.FETCH_STATS_SUCCESS:case l.a.FETCH_STATS_BY_ID_SUCCESS:return t.stats;default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],S=arguments.length>1?arguments[1]:void 0,E=S.type;S.payload;switch(E){case l.a.FETCH_STATS_REQUEST:case l.a.FETCH_STATS_BY_ID_REQUEST:return!0;case l.a.FETCH_STATS_SUCCESS:case l.a.FETCH_STATS_BY_ID_SUCCESS:case l.a.FETCH_STATS_ERROR:case l.a.FETCH_STATS_BY_ID_ERROR:return!1;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,S=arguments.length>1?arguments[1]:void 0,E=S.type,t=S.payload;switch(E){case l.a.FETCH_STATS_REQUEST:case l.a.FETCH_STATS_BY_ID_REQUEST:case l.a.FETCH_STATS_SUCCESS:case l.a.FETCH_STATS_BY_ID_SUCCESS:return null;case l.a.FETCH_STATS_ERROR:case l.a.FETCH_STATS_BY_ID_ERROR:return t.error;default:return e}}}),u=Object(r.combineReducers)({paginationPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,S=arguments.length>1?arguments[1]:void 0,E=S.type,t=S.payload;switch(E){case l.a.HANDLER_PAGE:return t;default:return e}}}),s=E(23),o=Object(r.combineReducers)({users:R,stats:C,controller:u}),i=[s.a],U=r.applyMiddleware.apply(void 0,i),H=Object(r.createStore)(o,Object(c.composeWithDevTools)(U)),F=E(13),d=E(9),h=Object(t.lazy)((function(){return E.e(6).then(E.bind(null,108))})),p=Object(t.lazy)((function(){return Promise.all([E.e(0),E.e(5)]).then(E.bind(null,107))})),A=Object(t.lazy)((function(){return Promise.all([E.e(0),E.e(4)]).then(E.bind(null,109))})),m=E(25),D=E.n(m),f={display:"block",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},v=function(){return _.a.createElement("div",{style:f},_.a.createElement(D.a,{type:"Rings",color:"#ccc",height:100,width:100}))},B=function(){var e=_.a.createElement("div",null,_.a.createElement(d.d,null,_.a.createElement(d.b,{path:"/home",exact:!0},_.a.createElement(h,null)),_.a.createElement(d.b,{path:"/users",exact:!0},_.a.createElement(p,null)),_.a.createElement(d.b,{path:"/users/:id"},_.a.createElement(A,null)),_.a.createElement(d.a,{to:"/home"})));return _.a.createElement(t.Suspense,{fallback:_.a.createElement(v,null)},_.a.createElement(F.a,null,e))};E(55),E(56);n.a.render(_.a.createElement(T.a,{store:H},_.a.createElement(B,null)),document.getElementById("root"))}},[[26,2,3]]]);
//# sourceMappingURL=main.f3130e1e.chunk.js.map