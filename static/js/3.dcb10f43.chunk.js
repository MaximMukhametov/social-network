(this.webpackJsonpreactnew=this.webpackJsonpreactnew||[]).push([[3],{289:function(t,e,a){"use strict";var n=a(35),s=a(36),r=a(39),o=a(37),u=a(40),c=a(29),i=a(0),l=a(15),p=function(t){return{isAuth:t.auth.isAuth}};e.a=function(t){var e=function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return this.props.isAuth?i.createElement(t,this.props):i.createElement(c.a,{to:"/login"})}}]),a}(i.Component);return Object(l.b)(p)(e)}},290:function(t,e,a){t.exports={panorama:"ProfileInfo_panorama__WMt1P",descriptionBlock:"ProfileInfo_descriptionBlock__262oR"}},291:function(t,e,a){t.exports={item:"Posts_item__1mEr7"}},292:function(t,e,a){t.exports={content:"MyPosts_content__6ySMF",panorama:"MyPosts_panorama__2gYXg",postsBlock:"MyPosts_postsBlock__1YXJ_",posts:"MyPosts_posts__27T7_"}},293:function(t,e,a){"use strict";a.r(e);var n=a(35),s=a(36),r=a(39),o=a(37),u=a(40),c=a(0),i=a.n(c),l=a(290),p=a.n(l),m=a(126),f=function(t){var e=Object(c.useState)(t.status),a=Object(m.a)(e,2),n=a[0],s=a[1],r=Object(c.useState)(!1),o=Object(m.a)(r,2),u=o[0],l=o[1];Object(c.useEffect)((function(){s(t.status)}),[t.status]);var p=function(){l(!u),t.updateStatus(n)};return i.a.createElement("div",null,!u&&i.a.createElement("div",null,i.a.createElement("span",{onClick:p},t.status||"...loading status")),u&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(t){s(t.currentTarget.value)},autoFocus:!0,onBlur:p,value:n})))},d=function(t){var e=t.profile,a=t.status,n=t.updateStatus;return e?i.a.createElement("div",null,i.a.createElement("div",{className:p.a.descriptionBlock},i.a.createElement("img",{src:e.photos.large}),i.a.createElement(f,{status:a,updateStatus:n}))):i.a.createElement("div",null,"...loading status")},h=a(92),g=a(291),b=a.n(g),v=function(t){return i.a.createElement("div",{className:b.a.item},i.a.createElement("img",{alt:"sdf",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_WYzaA1BQvvu0FN7Zu1MsxawEDpzFdG7uczm3cp8_kPigMMFO"}),t.messages," ",t.likesCount)},E=a(292),O=a.n(E),P=a(125),_=a(65),j=a(33),k=Object(_.a)(10),S=Object(P.a)({form:"MyPostsForm"})((function(t){return i.a.createElement("form",{onSubmit:t.handleSubmit},Object(j.c)("Post","text",j.b,{validate:[_.b,k],placeholder:"New Post"}),i.a.createElement("button",null,"send"))})),y=i.a.memo((function(t){var e=t.posts.map((function(t){return i.a.createElement(v,{key:t.id,messages:t.message,likesCount:t.likesCount})}));return i.a.createElement("div",{className:O.a.postsBlock},"mypost",i.a.createElement("div",null,i.a.createElement("h3",null,"My post")),i.a.createElement("div",null,i.a.createElement(S,{onSubmit:function(e){t.addPostActionCreator(e.Post)}})),i.a.createElement("div",{className:O.a.posts},e))}),(function(t,e){return console.log("prevMovie, nextMovie",t,e),t===e&&t===e})),F=a(15),M=Object(F.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),{addPostActionCreator:h.a})(y),A=function(t){return i.a.createElement("div",null,i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),i.a.createElement(M,null)))},C=a(29),w=a(24),x=a(289),B=a(7),I=function(t){function e(){return Object(n.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.props.toggleIsFetching(!0);var e=this.props.match.params.userId;e||(e=7799),Promise.all([this.props.getUserProfile(e),this.props.getStatus(e)]).then((function(e){t.props.toggleIsFetching(!1)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(A,Object.assign({},this.props,{profile:this.props.profile,isFetching:this.props.isFetching,status:this.props.status,updateStatus:this.props.updateStatus})))}}]),e}(i.a.Component);Object(x.a)(I),e.default=Object(B.d)(C.f,x.a,Object(F.b)((function(t){return{profile:t.profilePage.profile,isFetching:t.usersPage.isFetching,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{toggleIsFetching:w.g,getUserProfile:h.d,getStatus:h.c,updateStatus:h.e}))(I)}}]);
//# sourceMappingURL=3.dcb10f43.chunk.js.map