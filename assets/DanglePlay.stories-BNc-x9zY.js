import{j as e}from"./jsx-runtime-DVp8H8Pv.js";import{n as i}from"./image-DCPsgAzQ.js";import"./iframe-CsAyzd_A.js";import"./preload-helper-PPVm8Dsz.js";var S={small:"_1v58sip1 _1v58sip0",medium:"_1v58sip2 _1v58sip0"},U={small:"_1v58sip4 _1v58sip3",medium:"_1v58sip5 _1v58sip3"},A="_1v58sip6",I="_1v58sip7",b="_1v58sip8",O="_1v58sip9",k="_1v58sipa",D="_1v58sipb",L="_1v58sipc",W="_1v58sipd",E="_1v58sipe",M="_1v58sipf",R="_1v58sipg",V="_1v58siph",C="_1v58sipi",t="_1v58sipj",p="_1v58sipk",F="_1v58sipl";function g({type:s,width:u="100%",imageUrl:a,profileImageUrl:v,name:l,location:h,address:o,title:x,views:y,comments:_,timeAgo:j,tags:f,onClick:w}){const m=s==="medium",N=m?162:150,T=m?242:225,q=typeof a=="string"&&a!=="사진 없음"&&/^https?:\/\//i.test(a)?a:"/assets/jeju.png";return e.jsxs("div",{className:S[s],style:{width:u},onClick:w,children:[e.jsxs("div",{className:U[s],children:[e.jsx(i,{src:q,alt:"이미지",width:N,height:T,className:A}),e.jsx("div",{className:I,children:e.jsxs("div",{className:b,children:[e.jsx(i,{src:v,alt:`${l}의 프로필 이미지`,width:22,height:22,className:O}),e.jsx("span",{className:k,children:l})]})})]}),m&&e.jsxs("div",{className:D,children:[e.jsxs("div",{className:L,children:[e.jsxs("div",{className:W,children:[h,o&&e.jsxs(e.Fragment,{children:[" · ",e.jsx("span",{className:E,children:o})]})]}),e.jsx("div",{className:M,children:x}),e.jsx("div",{className:R,children:f?.map(c=>e.jsx("span",{className:V,children:c},c))})]}),e.jsxs("div",{className:C,children:[e.jsxs("div",{className:t,children:[e.jsx(i,{src:"/assets/icon12/eye-outlined.svg",alt:"조회수",width:12,height:12}),e.jsx("span",{className:p,children:y?.toLocaleString()})]}),e.jsx("div",{className:t,children:"·"}),e.jsxs("div",{className:t,children:[e.jsx(i,{alt:"댓글",width:12,height:12,src:"/assets/icon12/bookmark_filled.svg"}),e.jsx("span",{className:p,children:_?.toLocaleString()})]}),e.jsx("div",{className:t,children:"·"}),e.jsx("div",{className:F,children:j})]})]})]})}g.__docgenInfo={description:"",methods:[],displayName:"DanglePlay",props:{type:{required:!0,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"컴포넌트 타입"},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"컴포넌트 너비",defaultValue:{value:'"100%"',computed:!1}},imageUrl:{required:!0,tsType:{name:"string"},description:"배경 이미지 URL"},profileImageUrl:{required:!0,tsType:{name:"string"},description:"프로필 이미지 URL"},name:{required:!0,tsType:{name:"string"},description:"사용자 이름"},location:{required:!1,tsType:{name:"string"},description:"위치 정보 (medium 타입 전용)"},address:{required:!1,tsType:{name:"string"},description:"위치 정보 (medium 타입 전용)"},title:{required:!1,tsType:{name:"string"},description:"제목 (medium 타입 전용)"},views:{required:!1,tsType:{name:"number"},description:"조회수 (medium 타입 전용)"},comments:{required:!1,tsType:{name:"number"},description:"댓글 수 (medium 타입 전용)"},timeAgo:{required:!1,tsType:{name:"string"},description:"업로드 시간 (medium 타입 전용)"},tags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"해시태그 (medium 타입 전용)"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"클릭 이벤트 핸들러"}}};const{fn:P}=__STORYBOOK_MODULE_TEST__,G={title:"Dangle/DanglePlay",component:g,parameters:{layout:"centered"},args:{profileImageUrl:"/assets/curation/avatar.svg",name:"만두두두",onClick:P()},tags:["autodocs"],argTypes:{type:{control:"radio",options:["small","medium"]},width:{control:"text"}}},r={args:{type:"small",width:"150px",imageUrl:"/assets/dangle/dog.png"}},n={args:{type:"medium",width:"162px",imageUrl:"/assets/dangle/dog.png",location:"협재해수욕장",address:"제주시 한림읍",title:`발바닥에 닿는 파도, 제주에서
가장 순한 바다는 여기`,views:1274,comments:131,timeAgo:"1개월 전",tags:["모든크기","야외","목줄착용"]}},d={args:{type:"medium",width:"100%",imageUrl:"/assets/dangle/dog.png",location:"협재해수욕장",address:"제주시 한림읍",title:`발바닥에 닿는 파도, 제주에서
가장 순한 바다는 여기`,views:1274,comments:131,timeAgo:"1개월 전",tags:["모든크기","야외","목줄착용"]},parameters:{layout:"padded"},decorators:[s=>e.jsx("div",{style:{width:375,padding:"20px"},children:e.jsx(s,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: "small",
    width: "150px",
    imageUrl: "/assets/dangle/dog.png"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: "medium",
    width: "162px",
    imageUrl: "/assets/dangle/dog.png",
    location: "협재해수욕장",
    address: "제주시 한림읍",
    title: "발바닥에 닿는 파도, 제주에서\\n가장 순한 바다는 여기",
    views: 1274,
    comments: 131,
    timeAgo: "1개월 전",
    tags: ["모든크기", "야외", "목줄착용"]
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: "medium",
    width: "100%",
    imageUrl: "/assets/dangle/dog.png",
    location: "협재해수욕장",
    address: "제주시 한림읍",
    title: "발바닥에 닿는 파도, 제주에서\\n가장 순한 바다는 여기",
    views: 1274,
    comments: 131,
    timeAgo: "1개월 전",
    tags: ["모든크기", "야외", "목줄착용"]
  },
  parameters: {
    layout: "padded"
  },
  decorators: [Story => <div style={{
    width: 375,
    padding: "20px"
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};const J=["Small","Medium","FullWidth"];export{d as FullWidth,n as Medium,r as Small,J as __namedExportsOrder,G as default};
