import{j as e}from"./jsx-runtime-WZc-e3qG.js";import{n as o}from"./image-B1RZsmN9.js";import"./iframe-CXsgwT7s.js";import"./preload-helper-PPVm8Dsz.js";var f="_110cgz00",_="_110cgz01",v="_110cgz02",h="_110cgz03",I="_110cgz04",x="_110cgz05",N="_110cgz06",j="_110cgz07",y="_110cgz08",L="_110cgz09",w="_110cgz0a",z="_110cgz0b",A="_110cgz0c",P="_110cgz0d";const S=["출입 가능 여부","출입 조건","반려견 친화도"],T=({rating:r})=>e.jsx("div",{className:j,children:[...Array(5)].map((t,s)=>e.jsx(o,{alt:s<r?"paw-filled":"paw-empty",width:16,height:16,src:s<r?"/assets/icon24/dogfootprint-blue.svg":"/assets/icon24/dogfootprint-white.svg"},s))});function c({profileImageUrl:r,userName:t,dogInfo:s,rating:d,date:l,chips:g,content:p}){return e.jsxs("div",{className:f,children:[e.jsxs("div",{className:_,children:[e.jsx(o,{src:r,alt:t,width:24,height:24,className:v}),e.jsxs("div",{className:h,children:[e.jsx("span",{className:I,children:t}),s&&e.jsx("span",{className:x,children:s})]})]}),e.jsxs("div",{className:L,children:[e.jsxs("div",{className:N,children:[e.jsx(T,{rating:d}),e.jsx("span",{className:y,children:l})]}),g.map((m,u)=>{const i=S[u];return i?e.jsxs("div",{className:w,children:[e.jsx("span",{className:z,children:i}),e.jsx("span",{className:A,children:m})]},i):null})]}),e.jsx("p",{className:P,children:p})]})}c.__docgenInfo={description:"",methods:[],displayName:"DangleReview",props:{profileImageUrl:{required:!0,tsType:{name:"string"},description:"리뷰 작성자의 프로필 이미지 URL"},userName:{required:!0,tsType:{name:"string"},description:"리뷰 작성자의 이름"},dogInfo:{required:!1,tsType:{name:"string"},description:"리뷰 작성자의 반려견 정보"},rating:{required:!0,tsType:{name:"number"},description:"평점 (1-5 사이의 숫자, API: welcome)"},date:{required:!0,tsType:{name:"string"},description:"리뷰 작성 날짜 (API: createdAtText)"},chips:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"리뷰 칩 배열 (API: chips)"},content:{required:!0,tsType:{name:"string"},description:"리뷰 본문 내용 (API: body)"}}};const q={title:"Dangle/DangleReview",component:c,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{rating:{control:{type:"range",min:0,max:5,step:1}}},decorators:[r=>e.jsx("div",{style:{width:375},children:e.jsx(r,{})})]},a={args:{profileImageUrl:"/assets/dangle/dog_profile1.png",userName:"해투 견주님",dogInfo:"골든리트리버 · 7살 · 대형견 · 20kg 이상",rating:5,date:"2025.03.14",chips:["실내 모든 곳 이용 가능","목줄 착용 필수","매우 친절"],content:"대형견도 편하게 머물 수 있었어요 깔끔하고 깨끗한 방, 실내 전 구역 출입 가능해요 우디플레이트엔 매우 다양한 디저트가 있어 입도 즐거웠어요. 주변에 맛집도 있고 산책..."}},n={args:{...a.args,profileImageUrl:"/assets/dangle/dog_profile2.png",userName:"댕댕이 견주님",dogInfo:"푸들 · 3살 · 소형견 · 5kg 미만",rating:4,date:"2025.03.12",chips:["실내 일부만 가능","이동가방 필수","친절"],content:"사장님이 친절하셨어요. 소형견 친구들이 놀기 좋은 곳 같아요. 공간이 넓지는 않지만 아기자기하게 잘 꾸며져 있습니다."}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    profileImageUrl: "/assets/dangle/dog_profile1.png",
    userName: "해투 견주님",
    dogInfo: "골든리트리버 · 7살 · 대형견 · 20kg 이상",
    rating: 5,
    date: "2025.03.14",
    chips: ["실내 모든 곳 이용 가능",
    // CHIP_LABELS[0] "출입 가능 여부"
    "목줄 착용 필수",
    // CHIP_LABELS[1] "출입 조건"
    "매우 친절" // CHIP_LABELS[2] "반려견 친화도"
    ],
    content: "대형견도 편하게 머물 수 있었어요 깔끔하고 깨끗한 방, 실내 전 구역 출입 가능해요 우디플레이트엔 매우 다양한 디저트가 있어 입도 즐거웠어요. 주변에 맛집도 있고 산책..."
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    profileImageUrl: "/assets/dangle/dog_profile2.png",
    userName: "댕댕이 견주님",
    dogInfo: "푸들 · 3살 · 소형견 · 5kg 미만",
    rating: 4,
    date: "2025.03.12",
    chips: ["실내 일부만 가능",
    // CHIP_LABELS[0] "출입 가능 여부"
    "이동가방 필수",
    // CHIP_LABELS[1] "출입 조건"
    "친절" // CHIP_LABELS[2] "반려견 친화도"
    ],
    content: "사장님이 친절하셨어요. 소형견 친구들이 놀기 좋은 곳 같아요. 공간이 넓지는 않지만 아기자기하게 잘 꾸며져 있습니다."
  }
}`,...n.parameters?.docs?.source}}};const B=["Default","FourStars"];export{a as Default,n as FourStars,B as __namedExportsOrder,q as default};
