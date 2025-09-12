import{j as e}from"./jsx-runtime-BWu1kHaf.js";import{n as a}from"./image-Cyqetlp2.js";import"./iframe-r3xvHQKk.js";import"./preload-helper-D9Z9MdNV.js";var q={small:"_1v58sip1 _1v58sip0",medium:"_1v58sip2 _1v58sip0"},U={small:"_1v58sip4 _1v58sip3",medium:"_1v58sip5 _1v58sip3"},S="_1v58sip6",A="_1v58sip7",b="_1v58sip8",I="_1v58sip9",O="_1v58sipa",k="_1v58sipb",D="_1v58sipc",L="_1v58sipd",W="_1v58sipe",E="_1v58sipf",M="_1v58sipg",R="_1v58siph",C="_1v58sipi",i="_1v58sipj",o="_1v58sipk",P="_1v58sipl";function c({type:s,width:p="100%",imageUrl:g,profileImageUrl:u,name:d,location:v,address:h,title:x,views:_,comments:y,timeAgo:j,tags:f,onClick:w}){const m=s==="medium",N=m?162:150,T=m?242:225;return e.jsxs("div",{className:q[s],style:{width:p},onClick:w,children:[e.jsxs("div",{className:U[s],children:[e.jsx(a,{src:g,alt:d,width:N,height:T,className:S}),e.jsx("div",{className:A,children:e.jsxs("div",{className:b,children:[e.jsx(a,{src:u,alt:`${d}의 프로필 이미지`,width:22,height:22,className:I}),e.jsx("span",{className:O,children:d})]})})]}),m&&e.jsxs("div",{className:k,children:[e.jsxs("div",{className:D,children:[e.jsxs("div",{className:L,children:[v," · ",e.jsx("span",{className:W,children:h})]}),e.jsx("div",{className:E,children:x}),e.jsx("div",{className:M,children:f?.map(l=>e.jsx("span",{className:R,children:l},l))})]}),e.jsxs("div",{className:C,children:[e.jsxs("div",{className:i,children:[e.jsx(a,{src:"/assets/icon12/eye-outlined.svg",alt:"조회수",width:12,height:12}),e.jsx("span",{className:o,children:_?.toLocaleString()})]}),e.jsx("div",{className:i,children:"·"}),e.jsxs("div",{className:i,children:[e.jsx(a,{alt:"댓글",width:12,height:12,src:"/assets/icon12/bookmark_filled.svg"}),e.jsx("span",{className:o,children:y?.toLocaleString()})]}),e.jsx("div",{className:i,children:"·"}),e.jsx("div",{className:P,children:j})]})]})]})}c.__docgenInfo={description:"",methods:[],displayName:"DanglePlay",props:{type:{required:!0,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"컴포넌트 타입"},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"컴포넌트 너비",defaultValue:{value:'"100%"',computed:!1}},imageUrl:{required:!0,tsType:{name:"string"},description:"배경 이미지 URL"},profileImageUrl:{required:!0,tsType:{name:"string"},description:"프로필 이미지 URL"},name:{required:!0,tsType:{name:"string"},description:"사용자 이름"},location:{required:!1,tsType:{name:"string"},description:"위치 정보 (medium 타입 전용)"},address:{required:!1,tsType:{name:"string"},description:"위치 정보 (medium 타입 전용)"},title:{required:!1,tsType:{name:"string"},description:"제목 (medium 타입 전용)"},views:{required:!1,tsType:{name:"number"},description:"조회수 (medium 타입 전용)"},comments:{required:!1,tsType:{name:"number"},description:"댓글 수 (medium 타입 전용)"},timeAgo:{required:!1,tsType:{name:"string"},description:"업로드 시간 (medium 타입 전용)"},tags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"해시태그 (medium 타입 전용)"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"클릭 이벤트 핸들러"}}};const{fn:F}=__STORYBOOK_MODULE_TEST__,Y={title:"Dangle/DanglePlay",component:c,parameters:{layout:"centered"},args:{profileImageUrl:"/assets/curation/avatar.svg",name:"만두두두",onClick:F()},tags:["autodocs"],argTypes:{type:{control:"radio",options:["small","medium"]},width:{control:"text"}}},r={args:{type:"small",width:"150px",imageUrl:"/assets/dangle/dog.png"}},t={args:{type:"medium",width:"162px",imageUrl:"/assets/dangle/dog.png",location:"협재해수욕장",address:"제주시 한림읍",title:`발바닥에 닿는 파도, 제주에서
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
}`,...n.parameters?.docs?.source}}};const z=["Small","Medium","FullWidth"];export{n as FullWidth,t as Medium,r as Small,z as __namedExportsOrder,Y as default};
