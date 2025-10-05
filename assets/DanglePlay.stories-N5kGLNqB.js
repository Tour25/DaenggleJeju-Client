import{j as e}from"./jsx-runtime-BngD4z-9.js";import{n as r}from"./image-D693ViB_.js";import"./iframe-BE4Yn59z.js";import"./preload-helper-PPVm8Dsz.js";var b={short:"_1v58sip1 _1v58sip0",small:"_1v58sip2 _1v58sip0",medium:"_1v58sip3 _1v58sip0"},O={short:"_1v58sip5 _1v58sip4",small:"_1v58sip6 _1v58sip4",medium:"_1v58sip7 _1v58sip4"},k="_1v58sip8",D="_1v58sip9",L="_1v58sipa",W="_1v58sipb",E="_1v58sipc",_="_1v58sipd",F="_1v58sipe",j="_1v58sipf",y="_1v58sipg",M="_1v58siph",R="_1v58sipi",V="_1v58sipj",C="_1v58sipk",t="_1v58sipl",f="_1v58sipm",P="_1v58sipn";function N({type:s,width:w="100%",imageUrl:a,profileImageUrl:o,name:c,location:p,address:i,title:T,views:g,comments:q,timeAgo:S,tags:U,onClick:A}){const v=s==="medium",m=s==="short";let u=150,h=225;(v||m)&&(u=162,h=242);const I=typeof a=="string"&&a!=="사진 없음"&&/^https?:\/\//i.test(a)?a:"/assets/jeju.png";return e.jsxs("div",{className:b[s],style:{width:w},onClick:A,children:[e.jsxs("div",{className:O[s],children:[e.jsx(r,{src:I,alt:"이미지",width:u,height:h,className:k}),!m&&o&&e.jsx("div",{className:D,children:e.jsxs("div",{className:L,children:[e.jsx(r,{src:o,alt:`${c}의 프로필 이미지`,width:22,height:22,className:W}),e.jsx("span",{className:E,children:c})]})})]}),v&&e.jsxs("div",{className:_,children:[e.jsxs("div",{className:F,children:[e.jsxs("div",{className:j,children:[p,i&&e.jsxs(e.Fragment,{children:[" · ",e.jsx("span",{className:y,children:i})]})]}),e.jsx("div",{className:M,children:T}),e.jsx("div",{className:R,children:U?.map(x=>e.jsx("span",{className:V,children:x},x))})]}),g&&e.jsxs("div",{className:C,children:[e.jsxs("div",{className:t,children:[e.jsx(r,{src:"/assets/icon12/eye-outlined.svg",alt:"조회수",width:12,height:12}),e.jsx("span",{className:f,children:g?.toLocaleString()})]}),e.jsx("div",{className:t,children:"·"}),e.jsxs("div",{className:t,children:[e.jsx(r,{alt:"댓글",width:12,height:12,src:"/assets/icon12/bookmark_filled.svg"}),e.jsx("span",{className:f,children:q?.toLocaleString()})]}),e.jsx("div",{className:t,children:"·"}),e.jsx("div",{className:P,children:S})]})]}),m&&e.jsx("div",{className:_,children:e.jsxs("div",{className:j,children:[p,i&&e.jsxs(e.Fragment,{children:[" · ",e.jsx("span",{className:y,children:i})]})]})})]})}N.__docgenInfo={description:"",methods:[],displayName:"DanglePlay",props:{type:{required:!0,tsType:{name:"union",raw:'"small" | "medium" | "short"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"short"'}]},description:"컴포넌트 타입"},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"컴포넌트 너비",defaultValue:{value:'"100%"',computed:!1}},imageUrl:{required:!0,tsType:{name:"string"},description:"배경 이미지 URL"},profileImageUrl:{required:!1,tsType:{name:"string"},description:"프로필 이미지 URL"},name:{required:!1,tsType:{name:"string"},description:"사용자 이름"},location:{required:!1,tsType:{name:"string"},description:"위치 정보"},address:{required:!1,tsType:{name:"string"},description:"주소 정보"},title:{required:!1,tsType:{name:"string"},description:"제목 (medium 타입 전용)"},views:{required:!1,tsType:{name:"number"},description:"조회수 (medium 타입 전용)"},comments:{required:!1,tsType:{name:"number"},description:"댓글 수 (medium 타입 전용)"},timeAgo:{required:!1,tsType:{name:"string"},description:"업로드 시간 (medium 타입 전용)"},tags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"해시태그 (medium 타입 전용)"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"클릭 이벤트 핸들러"}}};const{fn:B}=__STORYBOOK_MODULE_TEST__,J={title:"Dangle/DanglePlay",component:N,parameters:{layout:"centered"},args:{profileImageUrl:"/assets/curation/avatar.svg",name:"만두두두",onClick:B()},tags:["autodocs"],argTypes:{type:{control:"radio",options:["small","medium"]},width:{control:"text"}}},n={args:{type:"small",width:"150px",imageUrl:"/assets/dangle/dog.png"}},l={args:{type:"medium",width:"162px",imageUrl:"/assets/dangle/dog.png",location:"협재해수욕장",address:"제주시 한림읍",title:`발바닥에 닿는 파도, 제주에서
가장 순한 바다는 여기`,views:1274,comments:131,timeAgo:"1개월 전",tags:["모든크기","야외","목줄착용"]}},d={args:{type:"medium",width:"100%",imageUrl:"/assets/dangle/dog.png",location:"협재해수욕장",address:"제주시 한림읍",title:`발바닥에 닿는 파도, 제주에서
가장 순한 바다는 여기`,views:1274,comments:131,timeAgo:"1개월 전",tags:["모든크기","야외","목줄착용"]},parameters:{layout:"padded"},decorators:[s=>e.jsx("div",{style:{width:375,padding:"20px"},children:e.jsx(s,{})})]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: "small",
    width: "150px",
    imageUrl: "/assets/dangle/dog.png"
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Q=["Small","Medium","FullWidth"];export{d as FullWidth,l as Medium,n as Small,Q as __namedExportsOrder,J as default};
