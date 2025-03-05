"use strict";(self.webpackChunkskote=self.webpackChunkskote||[]).push([[851],{8851:(E,u,i)=>{i.r(u),i.d(u,{AccountModule:()=>t});var m=i(6019),l=i(9861),c=i(3668);const v=[{path:"auth",loadChildren:()=>Promise.resolve().then(i.bind(i,6421)).then(a=>a.AuthModule)}];let C=(()=>{class a{}return a.\u0275fac=function(h){return new(h||a)},a.\u0275mod=c.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=c.\u0275\u0275defineInjector({imports:[[l.Bz.forChild(v)],l.Bz]}),a})();var d=i(6421);let t=(()=>{class a{}return a.\u0275fac=function(h){return new(h||a)},a.\u0275mod=c.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=c.\u0275\u0275defineInjector({imports:[[m.CommonModule,C,d.AuthModule]]}),a})()},6421:(E,u,i)=>{i.r(u),i.d(u,{AuthModule:()=>L});var m=i(6019),l=i(9133),c=i(3527),v=i(7720),C=i(3091),d=i(9861),t=i(3668),a=i(7723),p=i(4099);let h=(()=>{class e{constructor(){this.captchSource=new p.X(null),this.captchStatus=this.captchSource.asObservable()}setCaptchaStatus(o){this.captchSource.next(o)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=t.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function S(e,r){if(1&e&&(t.\u0275\u0275elementStart(0,"ngb-alert",40),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&e){const o=t.\u0275\u0275nextContext();t.\u0275\u0275property("dismissible",!1),t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(o.error)}}function y(e,r){1&e&&(t.\u0275\u0275elementStart(0,"div"),t.\u0275\u0275text(1,"Email \u0111\u0103ng nh\u1eadp b\u1eb7t bu\u1ed9c nh\u1eadp"),t.\u0275\u0275elementEnd())}function x(e,r){1&e&&(t.\u0275\u0275elementStart(0,"div"),t.\u0275\u0275text(1,"Email ph\u1ea3i l\xe0 \u0111\u1ecba ch\u1ec9 email h\u1ee3p l\u1ec7"),t.\u0275\u0275elementEnd())}function M(e,r){if(1&e&&(t.\u0275\u0275elementStart(0,"div",41),t.\u0275\u0275template(1,y,2,0,"div",42),t.\u0275\u0275template(2,x,2,0,"div",42),t.\u0275\u0275elementEnd()),2&e){const o=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",o.f.email.errors.required),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",o.f.email.errors.email)}}function k(e,r){1&e&&(t.\u0275\u0275elementStart(0,"span"),t.\u0275\u0275text(1,"M\u1eadt kh\u1ea9u b\u1eaft bu\u1ed9c nh\u1eadp"),t.\u0275\u0275elementEnd())}function A(e,r){if(1&e&&(t.\u0275\u0275elementStart(0,"div",41),t.\u0275\u0275template(1,k,2,0,"span",42),t.\u0275\u0275elementEnd()),2&e){const o=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",o.f.password.errors.required)}}function I(e,r){1&e&&(t.\u0275\u0275elementStart(0,"span"),t.\u0275\u0275text(1,"captcha b\u1eaft bu\u1ed9c nh\u1eadp"),t.\u0275\u0275elementEnd())}function w(e,r){if(1&e&&(t.\u0275\u0275elementStart(0,"div",41),t.\u0275\u0275template(1,I,2,0,"span",42),t.\u0275\u0275elementEnd()),2&e){const o=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",o.f.captch_input.errors.required)}}const b=function(e){return{"is-invalid":e}},F=[{path:"login",component:(()=>{class e{constructor(o,n,s,f,g){this.formBuilder=o,this.route=n,this.router=s,this.authenticationService=f,this.captchService=g,this.submitted=!1,this.error="",this.show=!1,this.year=(new Date).getFullYear(),this.captchaStatus="",this.config={type:1,length:6,cssClass:"custom",back:{stroke:"#2F9688",solid:"#f2efd2"},font:{color:"#000000",size:"35px"}},this.captch_input=null,this.code=null,this.resultCode=null}ngOnInit(){this.loginForm=this.formBuilder.group({email:["",[l.kI.required]],password:["",[l.kI.required]],captch_input:["",[l.kI.required]]}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/",this.password="password",this.ngOnChanges()}ShowPass(){"password"===this.password?(this.password="text",this.show=!0):(this.password="password",this.show=!1)}get f(){return this.loginForm.controls}onSubmit(){if(this.submitted=!0,!this.loginForm.invalid){if(this.f.captch_input.value!=this.resultCode)return void alert("Nh\xe2\u0323p sai ma\u0303 Captcha");this.authenticationService.login(this.f.email.value,this.f.password.value).subscribe(o=>{o.token?this.router.navigate(["/dashboard"]):this.error=o.messages})}}ngOnChanges(){this.config&&((!this.config.font||!this.config.font.size)&&(this.config.font.size="40px"),(!this.config.font||!this.config.font.family)&&(this.config.font.family="Arial"),this.config.strokeColor||(this.config.strokeColor="#f20c6c"),this.config.length||(this.config.length=6),this.config.cssClass||(this.config.cssClass=""),this.config.type||(this.config.type=1),(!this.config.back||!this.config.back.stroke)&&(this.config.back.stroke=""),(!this.config.back||!this.config.back.solid)&&(this.config.back.solid="#f2efd2"),this.createCaptcha())}createCaptcha(){switch(this.config.type){case 1:let o=Math.random().toString(24).substring(2,this.config.length)+Math.random().toString(24).substring(2,4);this.code=this.resultCode=o.toUpperCase();break;case 2:let n=Math.floor(99*Math.random()),s=Math.floor(9*Math.random()),f=["+","-"],g=f[Math.floor(Math.random()*f.length)];this.code=n+g+s+"=?",this.resultCode="+"==g?n+s:n-s}setTimeout(()=>{let o=document.getElementById("captcahCanvas");var n=o.getContext("2d");if(n.fillStyle=this.config.back.solid,n.fillRect(0,0,o.width,o.height),n.beginPath(),o.style.letterSpacing="15px",n.font=this.config.font.size+" "+this.config.font.family,n.fillStyle=this.config.font.color,n.textBaseline="middle",n.fillText(this.code,40,50),this.config.back.stroke){n.strokeStyle=this.config.back.stroke;for(var s=0;s<150;s++)n.moveTo(300*Math.random(),300*Math.random()),n.lineTo(300*Math.random(),300*Math.random());n.stroke()}},100)}checkCaptcha(){this.f.captch_input.value!=this.resultCode?alert("Nh\xe2\u0323p sai ma\u0303 Captcha"):alert("Ma\u0303 Captcha \u0111u\u0301ng")}}return e.\u0275fac=function(o){return new(o||e)(t.\u0275\u0275directiveInject(l.qu),t.\u0275\u0275directiveInject(d.gz),t.\u0275\u0275directiveInject(d.F0),t.\u0275\u0275directiveInject(a.$),t.\u0275\u0275directiveInject(h))},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-login"]],features:[t.\u0275\u0275NgOnChangesFeature],decls:54,vars:18,consts:[[1,"account-pages","my-5","pt-sm-5"],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-8","col-lg-6","col-xl-5"],[1,"card","overflow-hidden"],[1,"bg-soft","bg-primary"],[1,"row"],[1,"col-7"],[1,"text-primary","p-4"],[1,"text-primary"],[1,"text-primary",2,"margin-top","-18px"],[1,"col-5","align-self-end"],["src","assets/images/profile-img.png","alt","",1,"img-fluid"],[1,"card-body","pt-0"],["routerLink","/"],[1,"avatar-md","profile-user-wid","mb-4"],[1,"avatar-title","rounded-circle","bg-light"],["src","assets/images/users/image-app.png","alt","","height","34",1,"rounded-circle"],[1,"p-2"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","danger",3,"dismissible",4,"ngIf"],[1,"mb-3"],["for","email"],["type","text","formControlName","email","id","email","placeholder","T\xean \u0111\u0103ng nh\u1eadp",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","password"],[1,"input-group","auth-pass-inputgroup"],["formControlName","password","placeholder","M\u1eadt kh\u1ea9u","aria-label","Password","aria-describedby","password-addon",1,"form-control",3,"type","ngClass"],["type","button","id","password-addon",1,"btn","btn-light","ms-0",3,"click"],[1,"mdi","mdi-eye-outline"],["id","captcahCanvas","width","316","height","80",2,"height","49px","width","316px"],[1,"captcha-actions","input-group","auth-captcha-inputgroup"],["type","text","formControlName","captch_input","placeholder","Enter captcha",1,"form-control",3,"ngClass"],["type","button","value","Ki\xea\u0309m tra",3,"click"],["href","javascript:void(0)",1,"cpt-btn","reload",3,"click"],[1,"form-check"],["type","checkbox","id","remember-check",1,"form-check-input"],["for","remember-check",1,"form-check-label"],[1,"mt-3","d-grid"],["type","submit",1,"btn","btn-primary"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(o,n){1&o&&(t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275elementStart(1,"div",1),t.\u0275\u0275elementStart(2,"div",2),t.\u0275\u0275elementStart(3,"div",3),t.\u0275\u0275elementStart(4,"div",4),t.\u0275\u0275elementStart(5,"div",5),t.\u0275\u0275elementStart(6,"div",6),t.\u0275\u0275elementStart(7,"div",7),t.\u0275\u0275elementStart(8,"div",8),t.\u0275\u0275elementStart(9,"h5",9),t.\u0275\u0275text(10,"MIKITECH "),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(11,"br"),t.\u0275\u0275elementStart(12,"h5",10),t.\u0275\u0275text(13,"Automation Solutions"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(14,"div",11),t.\u0275\u0275element(15,"img",12),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(16,"div",13),t.\u0275\u0275elementStart(17,"div"),t.\u0275\u0275elementStart(18,"a",14),t.\u0275\u0275elementStart(19,"div",15),t.\u0275\u0275elementStart(20,"span",16),t.\u0275\u0275element(21,"img",17),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(22,"div",18),t.\u0275\u0275elementStart(23,"form",19),t.\u0275\u0275listener("ngSubmit",function(){return n.onSubmit()}),t.\u0275\u0275template(24,S,2,2,"ngb-alert",20),t.\u0275\u0275elementStart(25,"div",21),t.\u0275\u0275elementStart(26,"label",22),t.\u0275\u0275text(27,"T\xean \u0111\u0103ng nh\u1eadp"),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(28,"input",23),t.\u0275\u0275template(29,M,3,2,"div",24),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(30,"div",21),t.\u0275\u0275elementStart(31,"label",25),t.\u0275\u0275text(32,"M\u1eadt kh\u1ea9u"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(33,"div",26),t.\u0275\u0275element(34,"input",27),t.\u0275\u0275elementStart(35,"button",28),t.\u0275\u0275listener("click",function(){return n.ShowPass()}),t.\u0275\u0275element(36,"i",29),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(37,A,2,1,"div",24),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(38,"div",21),t.\u0275\u0275elementStart(39,"div"),t.\u0275\u0275element(40,"canvas",30),t.\u0275\u0275elementStart(41,"div",31),t.\u0275\u0275element(42,"input",32),t.\u0275\u0275template(43,w,2,1,"div",24),t.\u0275\u0275elementStart(44,"input",33),t.\u0275\u0275listener("click",function(){return n.checkCaptcha()}),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(45,"a",34),t.\u0275\u0275listener("click",function(){return n.createCaptcha()}),t.\u0275\u0275text(46,"\u21bb"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(47,"div",35),t.\u0275\u0275element(48,"input",36),t.\u0275\u0275elementStart(49,"label",37),t.\u0275\u0275text(50," Ghi nh\u1edb "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(51,"div",38),t.\u0275\u0275elementStart(52,"button",39),t.\u0275\u0275text(53,"\u0110\u0102NG NH\u1eacP"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&o&&(t.\u0275\u0275advance(23),t.\u0275\u0275property("formGroup",n.loginForm),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",n.error),t.\u0275\u0275advance(4),t.\u0275\u0275property("ngClass",t.\u0275\u0275pureFunction1(12,b,n.submitted&&n.f.email.errors)),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",n.submitted&&n.f.email.errors),t.\u0275\u0275advance(5),t.\u0275\u0275property("type",n.password)("ngClass",t.\u0275\u0275pureFunction1(14,b,n.submitted&&n.f.password.errors)),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngIf",n.submitted&&n.f.password.errors),t.\u0275\u0275advance(2),t.\u0275\u0275classMapInterpolate1("captcha-container ",n.config.cssClass,""),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngClass",t.\u0275\u0275pureFunction1(16,b,n.submitted&&n.f.captch_input.errors)),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",n.f.captch_input.errors&&(n.f.captch_input.touched||n.submitted)))},directives:[d.yS,l._Y,l.JL,l.sg,m.NgIf,l.Fj,l.JJ,l.u,m.NgClass,c.xm],styles:[".captcha-container[_ngcontent-%COMP%]{width:315px;box-shadow:1px 1px 1px #ccc}.captcha-actions[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{padding:5px;border:1px solid #CCC;border-radius:10px 0 0 10px;outline:none}.captcha-actions[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]{outline:none;padding:6px;border:none;background:#CCC;border-radius:0 10px 10px 0}.captcha-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px;cursor:pointer;font-size:15px;font-weight:bold;text-decoration:none;color:#222}.captcha-container[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%]{font-size:11px;font-family:Arial;color:#ccc;padding:5px;display:block!important}"]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[d.Bz.forChild(F)],d.Bz]}),e})(),L=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[m.CommonModule,l.UX,l.u5,c._A,C.v,T,v.bB]]}),e})()}}]);