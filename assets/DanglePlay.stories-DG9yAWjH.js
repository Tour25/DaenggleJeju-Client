import{j as e}from"./jsx-runtime-C-rOzme_.js";import{f as q}from"./index-C05L6HUw.js";import{n as a}from"./image-HAIvf0i9.js";import"./iframe--qV5V2YS.js";import"./preload-helper-CQGs7Tvr.js";var U={small:"_1v58sip1 _1v58sip0",medium:"_1v58sip2 _1v58sip0"},S={small:"_1v58sip4 _1v58sip3",medium:"_1v58sip5 _1v58sip3"},A="_1v58sip6",b="_1v58sip7",I="_1v58sip8",k="_1v58sip9",W="_1v58sipa",D="_1v58sipb",L="_1v58sipc",C="_1v58sipd",M="_1v58sipe",P="_1v58sipf",R="_1v58sipg",E="_1v58siph",F="_1v58sipi",i="_1v58sipj",o="_1v58sipk",O="_1v58sipl";function c({type:s,width:p="100%",imageUrl:g,profileImageUrl:u,name:d,location:v,address:h,title:x,views:y,comments:_,timeAgo:f,tags:j,onClick:w}){const m=s==="medium",N=m?162:150,T=m?242:225;return e.jsxs("div",{className:U[s],style:{width:p},onClick:w,children:[e.jsxs("div",{className:S[s],children:[e.jsx(a,{src:g,alt:d,width:N,height:T,className:A}),e.jsx("div",{className:b,children:e.jsxs("div",{className:I,children:[e.jsx(a,{src:u,alt:`${d}의 프로필 이미지`,width:22,height:22,className:k}),e.jsx("span",{className:W,children:d})]})})]}),m&&e.jsxs("div",{className:D,children:[e.jsxs("div",{className:L,children:[e.jsxs("div",{className:C,children:[v," · ",e.jsx("span",{className:M,children:h})]}),e.jsx("div",{className:P,children:x}),e.jsx("div",{className:R,children:j?.map(l=>e.jsx("span",{className:E,children:l},l))})]}),e.jsxs("div",{className:F,children:[e.jsxs("div",{className:i,children:[e.jsx(a,{src:"/assets/icon12/eye-outlined.svg",alt:"조회수",width:12,height:12}),e.jsx("span",{className:o,children:y?.toLocaleString()})]}),e.jsx("div",{className:i,children:"·"}),e.jsxs("div",{className:i,children:[e.jsx(a,{alt:"댓글",width:12,height:12,src:"/assets/icon12/bookmark_filled.svg"}),e.jsx("span",{className:o,children:_?.toLocaleString()})]}),e.jsx("div",{className:i,children:"·"}),e.jsx("div",{className:O,children:f})]})]})]})}c.__docgenInfo={description:"",methods:[],displayName:"DanglePlay",props:{type:{required:!0,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"컴포넌트 타입"},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"컴포넌트 너비",defaultValue:{value:'"100%"',computed:!1}},imageUrl:{required:!0,tsType:{name:"string"},description:"배경 이미지 URL"},profileImageUrl:{required:!0,tsType:{name:"string"},description:"프로필 이미지 URL"},name:{required:!0,tsType:{name:"string"},description:"사용자 이름"},location:{required:!1,tsType:{name:"string"},description:"위치 정보 (medium 타입 전용)"},address:{required:!1,tsType:{name:"string"},description:"위치 정보 (medium 타입 전용)"},title:{required:!1,tsType:{name:"string"},description:"제목 (medium 타입 전용)"},views:{required:!1,tsType:{name:"number"},description:"조회수 (medium 타입 전용)"},comments:{required:!1,tsType:{name:"number"},description:"댓글 수 (medium 타입 전용)"},timeAgo:{required:!1,tsType:{name:"string"},description:"업로드 시간 (medium 타입 전용)"},tags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"해시태그 (medium 타입 전용)"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"클릭 이벤트 핸들러"}}};const J={title:"Dangle/DanglePlay",component:c,parameters:{layout:"centered"},args:{profileImageUrl:"/assets/curation/avatar.svg",name:"만두두두",onClick:q()},tags:["autodocs"],argTypes:{type:{control:"radio",options:["small","medium"]},width:{control:"text"}}},r={args:{type:"small",width:"150px",imageUrl:"/assets/dangle/dog.png"}},t={args:{type:"medium",width:"162px",imageUrl:"/assets/dangle/dog.png",location:"협재해수욕장",address:"제주시 한림읍",title:`발바닥에 닿는 파도, 제주에서
가장 순한 바다는 여기`,views:1274,comments:131,timeAgo:"1개월 전",tags:["모든크기","야외","목줄착용"]}},n={args:{type:"medium",width:"100%",imageUrl:"/assets/dangle/dog.png",location:"협재해수욕장",address:"제주시 한림읍",title:`발바닥에 닿는 파도, 제주에서
가장 순한 바다는 여기`,views:1274,comments:131,timeAgo:"1개월 전",tags:["모든크기","야외","목줄착용"]},parameters:{layout:"padded"},decorators:[s=>e.jsx("div",{style:{width:375,padding:"20px"},children:e.jsx(s,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: "small",
    width: "150px",
    imageUrl: "/assets/dangle/dog.png"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const K=["Small","Medium","FullWidth"];export{n as FullWidth,t as Medium,r as Small,K as __namedExportsOrder,J as default};
