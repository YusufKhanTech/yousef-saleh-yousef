import{A as b,B as g,D as A,E as D,F as S,G as c,H as s,I as _,J as I,K as R,M as k,P as F,R as U,U as y,f as x,g as u,h as f,k as N,l as a,m as P,n as h,o as m,q as T,r as E,s as j,t as C,u as o,v as i,w as d,z as O}from"./chunk-AGVMA3OV.js";var p=class{static getAllTabs(){return[{id:0,name:"All"},{id:1,name:"Constructions"},{id:2,name:"Maintenance And Operations"},{id:3,name:"Water Proofing"}]}static getAllProjects(){return[{id:1,name:"Electrical Substation",projectType:"CONSTRUCTIONS",image:"assets/img/website-images/electric-substation.jpg",description:"",projectInfo:{id:1,clientName:"Saudi Electricity Company",images:["assets/img/website-images/elec-sub-1.jpg","assets/img/website-images/elec-subs-2.jpg","assets/img/website-images/elec-sub-3.jpg"],startDate:"11 Nov 2021",endDate:"20 January 2022"}},{id:2,name:"Civil Maintenance",projectType:"MAINTENANCE_AND_OPERATIONS",image:"assets/img/website-images/electro-mech.jpg",description:"",projectInfo:{id:2,clientName:"NCR",images:["assets/img/website-images/civil-1.jpg","assets/img/website-images/civil-2.jpg"],startDate:"11 Nov 2021",endDate:"20 January 2022"}},{id:3,name:"Industrial & Commercial building construction",projectType:"CONSTRUCTIONS",image:"assets/img/website-images/industrial.jpg",description:"",projectInfo:{id:3,clientName:"Bank Al Bilad",images:[],startDate:"11 Jan 2021",endDate:"20 Dec 2022"}},{id:4,name:"Electrical Maintenance",projectType:"MAINTENANCE_AND_OPERATIONS",image:"assets/img/website-images/electrical-m-1.jpg",description:"",projectInfo:{id:4,clientName:"Riyad Bank",images:["assets/img/website-images/elec-m-1.jpg","assets/img/website-images/elec-m-2.jpg"],startDate:"11 Nov 2021",endDate:"20 January 2022"}},{id:5,name:"Pre Engineered Steel Buildings",projectType:"CONSTRUCTIONS",image:"assets/img/website-images/steel-building.jpg",description:"",projectInfo:{id:5,clientName:"Arab National Bank",images:[],startDate:"11 Nov 2021",endDate:"20 January 2022"}},{id:6,name:"Water Proofing & Insulation Services",projectType:"WATER_PROOFING",image:"assets/img/website-images/water-proofing.jpeg",description:"",projectInfo:{id:6,clientName:"Saudi Electricity Company",images:[],startDate:"11 Nov 2021",endDate:"20 January 2022"}},{id:7,name:"Cladding and Glass solutions",projectType:"CONSTRUCTIONS",image:"assets/img/website-images/cladding-and-glass.jpg",description:"",projectInfo:{id:7,clientName:"AL Rajhi Bank",images:[],startDate:"11 Nov 2021",endDate:"20 January 2022"}},{id:8,name:"Asphalting & Road works",projectType:"CONSTRUCTIONS",image:"assets/img/website-images/asphalting.jpg",description:"",projectInfo:{id:8,clientName:"National Grid",images:[],startDate:"11 Nov 2021",endDate:"20 January 2022"}},{id:9,name:"Fending Installations",projectType:"CONSTRUCTIONS",image:"assets/img/website-images/fencing.jpg",description:"",projectInfo:{id:9,clientName:"Royal Commission for Jubail & Yanbu",images:[],startDate:"11 Nov 2021",endDate:"20 January 2022"}},{id:10,name:"Concrete repair",projectType:"MAINTENANCE_AND_OPERATIONS",image:"assets/img/website-images/concrete.jpg",description:"",projectInfo:{id:10,clientName:"Alawwal Bank",images:[],startDate:"11 Nov 2021",endDate:"20 January 2022"}},{id:11,name:"Electro Mechanical Works",projectType:"CONSTRUCTIONS",image:"assets/img/website-images/electro-mech.jpg",description:"",projectInfo:{id:11,clientName:"Ascott",images:[],startDate:"11 Nov 2021",endDate:"20 January 2022"}},{id:12,name:"Portable office & Accommodation",projectType:"CONSTRUCTIONS",image:"assets/img/website-images/portable-office.jpg",description:"",projectInfo:{id:12,clientName:"Al Toukhi",images:[],startDate:"11 Nov 2021",endDate:"20 January 2022"}},{id:13,name:"Electro Mechanical Repair / Maintenance",projectType:"MAINTENANCE_AND_OPERATIONS",image:"assets/img/website-images/electrical-m-2.jpg",description:"",projectInfo:{id:13,clientName:"SAB Bank",images:[],startDate:"11 Nov 2021",endDate:"20 January 2022"}}]}};var B=["carousel"];function L(n,r){return this.project==null?null:this.project.id}function H(n,r){if(n&1&&(o(0,"p"),c(1),i()),n&2){let e=g();a(),_(" ",e.project==null?null:e.project.subDescription," ")}}function Q(n,r){if(n&1&&(o(0,"li",6),c(1),i()),n&2){let e=r.$implicit;a(),_(" ",e," ")}}function q(n,r){if(n&1&&(o(0,"div",10)(1,"div",11),c(2,"Category:"),i(),o(3,"div",12),c(4),i()()),n&2){let e=g();a(4),s(e.project==null?null:e.project.projectType)}}function K(n,r){n&1&&(o(0,"div",10)(1,"div",11),c(2,"Website:"),i(),o(3,"div",12),c(4,"http://rrdevs.com"),i()())}function X(n,r){if(n&1&&d(0,"img",15),n&2){let e=r.$implicit;m("src",e,N)}}var w=class n{constructor(r){this.activatedRoute=r;this.setProjectId()}carousel;projectId;project;scrollAmount=430;breadcrumbTexts=["Home","Projects","Project Details"];scrollLeft(){this.carousel.nativeElement.scrollBy({left:-this.scrollAmount,behavior:"smooth"})}scrollRight(){this.carousel.nativeElement.scrollBy({left:this.scrollAmount,behavior:"smooth"})}setProjectId(){this.activatedRoute.params.subscribe(r=>{this.projectId=+r.projectId,this.project=p.getAllProjects().find(e=>e?.id===this.projectId)})}static \u0275fac=function(e){return new(e||n)(P(F))};static \u0275cmp=x({type:n,selectors:[["app-project-detail"]],viewQuery:function(e,t){if(e&1&&A(B,5),e&2){let l;D(l=S())&&(t.carousel=l.first)}},standalone:!0,features:[I],decls:43,vars:9,consts:[["carousel",""],["title","Project detail","bannerHeight","400px",3,"breadcrumbTexts"],[1,"project-container"],[1,"project-detail-image"],["src","https://html.rrdevs.net/ribuild/assets/imgs/project-details/project-details.jpg","alt",""],[1,"project-detail"],[1,"list-item-project-detail"],[1,"related-info"],[1,"heading-container"],[1,"related-item-content"],[1,"related-item"],[1,"title"],[1,"sub-title"],[1,"projects-carousel"],[1,"project-card-detail"],[3,"src"],[1,"project-button"],[1,"ti","ti-arrow-narrow-left",3,"click"],[1,"ti","ti-arrow-narrow-right",3,"click"]],template:function(e,t){if(e&1){let l=O();o(0,"div"),d(1,"app-banner-content",1),i(),o(2,"div",2)(3,"div",3),d(4,"img",4),i(),o(5,"div",5)(6,"h2"),c(7),i(),o(8,"p"),c(9),i(),h(10,H,2,1,"p"),j(11,Q,2,1,"li",6,L,!0),i(),o(13,"div",7)(14,"div",8)(15,"h3"),c(16,"Project Information"),i()(),o(17,"div",9)(18,"div",10)(19,"div",11),c(20,"Client Name:"),i(),o(21,"div",12),c(22),i()(),h(23,q,5,1,"div",10),o(24,"div",10)(25,"div",11),c(26,"Start Date:"),i(),o(27,"div",12),c(28),i()(),o(29,"div",10)(30,"div",11),c(31,"End Date:"),i(),o(32,"div",12),c(33),i()(),h(34,K,5,0,"div",10),i()(),o(35,"div",13)(36,"div",14,0),j(38,X,1,1,"img",15,E),i(),o(40,"div",16)(41,"i",17),b("click",function(){return u(l),f(t.scrollLeft())}),i(),o(42,"i",18),b("click",function(){return u(l),f(t.scrollRight())}),i()()()()}e&2&&(a(),m("breadcrumbTexts",t.breadcrumbTexts),a(6),s(t.project==null?null:t.project.name),a(2),_(" ",t.project==null?null:t.project.description," "),a(),T(t.project!=null&&t.project.subDescription?10:-1),a(),C(t.project==null||t.project.projectInfo==null?null:t.project.projectInfo.keyPoints),a(11),s(t.project==null||t.project.projectInfo==null?null:t.project.projectInfo.clientName),a(),T(t.project!=null&&t.project.projectType?23:-1),a(5),s(t.project==null||t.project.projectInfo==null?null:t.project.projectInfo.startDate),a(5),s(t.project==null||t.project.projectInfo==null?null:t.project.projectInfo.endDate),a(),T(!(t.project==null||t.project.projectInfo==null)&&t.project.projectInfo.website?34:-1),a(4),C(t.project==null||t.project.projectInfo==null?null:t.project.projectInfo.images))},dependencies:[y],styles:[".project-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;max-width:85%;margin:40px auto}.project-detail[_ngcontent-%COMP%]{flex:0 0 66.67%}.project-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px;font-weight:700;margin-bottom:20px;color:#52565e}.project-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;color:#364d59;margin-bottom:10px}.related-info[_ngcontent-%COMP%]{flex:0 0 33.33%;padding-left:30px;margin-top:-6%}.related-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:30px;color:#6a6a6a}.related-info[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:18px;line-height:30px;color:#15181b;padding-bottom:10px}.related-info[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]{font-size:16px;color:var(--color-orange);cursor:pointer}.heading-container[_ngcontent-%COMP%]{background-color:var(--color-orange);width:100%;padding:30px;color:#fff;border-top-left-radius:12px;border-top-right-radius:12px;font-size:20px}.related-item-content[_ngcontent-%COMP%]{background-color:#f9f9f8;padding:30px}.related-item[_ngcontent-%COMP%]{border-bottom:1px solid rgba(21,24,27,.1);margin-bottom:12px}.btn[_ngcontent-%COMP%]{padding:8px 40px;background:var(--color-orange);color:#fff;border-radius:50px;transition:.3s;outline:none;border:none}.btn[_ngcontent-%COMP%]:hover{background-color:#0056b3}.project-detail-image[_ngcontent-%COMP%]{overflow:hidden}.project-detail-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;margin-bottom:30px}.list-item-project-detail[_ngcontent-%COMP%]{font-size:18px;line-height:40px;font-weight:500;color:#15181b}.projects-carousel[_ngcontent-%COMP%]{overflow:hidden;margin-top:30px;position:relative}.project-card-detail[_ngcontent-%COMP%]{display:flex;gap:25px;overflow-x:auto;scroll-behavior:smooth;padding-bottom:10px;scrollbar-width:none}.project-card-detail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:8px;width:430px}.project-button[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);width:100%;display:flex;justify-content:space-between;pointer-events:none}.project-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:38px;cursor:pointer;color:var(--color-orange);pointer-events:auto;padding:8px;background-color:#ffffffb3;border-radius:50%;margin:22px}@media (max-width: 768px){.project-detail[_ngcontent-%COMP%], .related-info[_ngcontent-%COMP%]{flex:0 0 100%}}"]})};var z=(n,r)=>r==null?null:r.id,Z=n=>({"active-tab":n});function Y(n,r){if(n&1){let e=O();o(0,"div",6),b("click",function(){let l=u(e),v=l.$implicit,W=l.$index,V=g();return f(V.selectedTab(W,v))}),c(1),i()}if(n&2){let e=r.$implicit,t=r.$index,l=g();m("ngClass",R(2,Z,t===l.activeTabIndex)),a(),_(" ",e==null?null:e.name," ")}}function ee(n,r){if(n&1){let e=O();o(0,"div",5),d(1,"img",7),o(2,"div",8)(3,"div",9)(4,"div",10),b("click",function(){let l=u(e).$implicit,v=g();return f(v.navigateToProjectDetails(l))}),d(5,"i",11),i(),o(6,"div",12)(7,"div",13),c(8),i(),o(9,"div",14),c(10),i()()()()()}if(n&2){let e=r.$implicit;a(),m("src",e==null?null:e.image,N),a(7),s(e==null?null:e.projectType),a(2),s(e==null?null:e.name)}}var M=class n{constructor(r){this.router=r}tabs=p.getAllTabs();projects=p.getAllProjects();activeTabIndex=0;breadcrumbTexts=["Home","Our Projects"];selectedTab(r,e){this.activeTabIndex=r,e?.name==="All"?this.projects=p.getAllProjects():this.projects=p.getAllProjects().filter(t=>t.projectType?.replaceAll("_"," ").toLowerCase()===e.name?.toLowerCase())}navigateToProjectDetails(r){this.router.navigate(["/project",r?.id])}static \u0275fac=function(e){return new(e||n)(P(U))};static \u0275cmp=x({type:n,selectors:[["app-our-projects"]],standalone:!0,features:[I],decls:8,vars:1,consts:[["title","Our Projects","bannerHeight","400px",3,"breadcrumbTexts"],[1,"our-projects-container"],[1,"tabs-container"],[1,"all",3,"ngClass"],[1,"project-container"],[1,"project-card"],[1,"all",3,"click","ngClass"],["alt","Project Image",3,"src"],[1,"overlay"],[1,"overlay-content"],[1,"icon",3,"click"],[1,"ti","ti-arrow-right"],[1,"description-container"],[1,"title"],[1,"sub-title"]],template:function(e,t){e&1&&(d(0,"app-banner-content",0),o(1,"div",1)(2,"div",2),j(3,Y,2,4,"div",3,z),i(),o(5,"div",4),j(6,ee,11,3,"div",5,z),i()()),e&2&&(m("breadcrumbTexts",t.breadcrumbTexts),a(3),C(t.tabs),a(3),C(t.projects))},dependencies:[y,k],styles:[".our-projects-container[_ngcontent-%COMP%]{width:85%;margin:40px auto}.tabs-container[_ngcontent-%COMP%]{width:max-content;padding:12px;margin:auto;gap:30px;display:flex;text-align:center}.all[_ngcontent-%COMP%]{color:#15181b;padding:2px 13.5px;border-radius:3px;font-style:normal;font-weight:400;font-size:16px;line-height:26px;cursor:pointer}.active-tab[_ngcontent-%COMP%]{color:#fff;background-color:var(--color-orange)}.project-container[_ngcontent-%COMP%]{display:grid;margin-top:40px;grid-template-columns:1fr 1fr 1fr;gap:20px}.project-card[_ngcontent-%COMP%]{position:relative;height:450px;overflow:hidden;width:auto;background-color:#ff0;border-radius:12px;cursor:pointer}.project-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;transition:transform .3s ease}.project-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.1)}.overlay[_ngcontent-%COMP%]{position:absolute;top:-100%;left:0;right:0;height:100%;background-color:#0009;display:flex;justify-content:center;align-items:center;color:#fff;transition:top .3s ease}.project-card[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{top:0}.overlay-content[_ngcontent-%COMP%]{padding:20px}.icon[_ngcontent-%COMP%]{border-radius:50%;background-color:#fff;color:#000;top:10%;left:auto;right:auto;display:flex;justify-content:center;align-items:center;height:80px;width:80px;font-size:32px;transition:.5s ease-in-out}.icon[_ngcontent-%COMP%]:hover{background-color:var(--color-orange)}.description-container[_ngcontent-%COMP%]{background-color:#15181b;color:#fff;position:absolute;width:100%;left:0;display:grid;padding:30px 30px 25px;justify-content:flex-start;bottom:0}.sub-title[_ngcontent-%COMP%]{font-size:24px;font-weight:700}.title[_ngcontent-%COMP%]{font-size:18px}@media (max-width: 600px){.our-projects-container[_ngcontent-%COMP%]{width:100%}.tabs-container[_ngcontent-%COMP%]{flex-wrap:wrap!important;gap:10px;justify-content:center;width:100%}.project-container[_ngcontent-%COMP%]{display:block;padding:12px}.project-card[_ngcontent-%COMP%]{margin-bottom:12px}}"]})};var ve=[{path:"",component:M},{path:":projectId",component:w}];export{ve as projectRoutes};
