import{j as e}from"./jsx-runtime-CftkWm33.js";import{n as i}from"./image-CJAEc1XA.js";import"./iframe-BhUroWvF.js";import"./preload-helper-PPVm8Dsz.js";var v="_110cgz00",f="_110cgz01",_="_110cgz02",h="_110cgz03",I="_110cgz04",x="_110cgz05",N="_110cgz06",j="_110cgz07",w="_110cgz08",b="_110cgz09",y="_110cgz0a",z="_110cgz0b",T="_110cgz0c",A="_110cgz0d";const D=["출입 가능 여부","출입 조건","반려견 친화도"],q=({rating:a})=>e.jsx("div",{className:j,children:[...Array(5)].map((t,r)=>e.jsx(i,{alt:r<a?"paw-filled":"paw-empty",width:16,height:16,src:r<a?"/assets/icon24/dogfootprint-blue.svg":"/assets/icon24/dogfootprint-white.svg"},r))});function o({profileImageUrl:a,userName:t,dogInfo:r,rating:c,date:d,chips:g,content:m}){return e.jsxs("div",{className:v,children:[e.jsxs("div",{className:f,children:[e.jsx(i,{src:a,alt:t,width:24,height:24,className:_}),e.jsxs("div",{className:h,children:[e.jsx("span",{className:I,children:t}),r&&e.jsx("span",{className:x,children:r})]})]}),e.jsxs("div",{className:b,children:[e.jsxs("div",{className:N,children:[e.jsx(q,{rating:c}),e.jsx("span",{className:w,children:d})]}),g.map((p,u)=>{const l=D[u];return l?e.jsxs("div",{className:y,children:[e.jsx("span",{className:z,children:l}),e.jsx("span",{className:T,children:p})]},l):null})]}),e.jsx("p",{className:A,children:m})]})}o.__docgenInfo={description:"",methods:[],displayName:"DangleReview",props:{profileImageUrl:{required:!0,tsType:{name:"string"},description:"리뷰 작성자의 프로필 이미지 URL"},userName:{required:!0,tsType:{name:"string"},description:"리뷰 작성자의 이름"},dogInfo:{required:!1,tsType:{name:"string"},description:"리뷰 작성자의 반려견 정보"},rating:{required:!0,tsType:{name:"number"},description:"평점 (1-5 사이의 숫자, API: welcome)"},date:{required:!0,tsType:{name:"string"},description:"리뷰 작성 날짜 (API: createdAtText)"},chips:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"리뷰 칩 배열 (API: chips)"},content:{required:!0,tsType:{name:"string"},description:"리뷰 본문 내용 (API: body)"}}};const k={title:"Dangle/DangleReview",component:o,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{rating:{control:{type:"range",min:0,max:5,step:1}}},decorators:[a=>e.jsx("div",{style:{width:375},children:e.jsx(a,{})})]},s={args:{profileImageUrl:"/assets/dangle/dog_profile1.png",userName:"해투 견주님",dogInfo:"골든리트리버 · 7살 · 대형견 · 20kg 이상",rating:5,date:"2025.03.14",reviewItems:[{label:"출입가능여부",value:"실내 모든 곳 이용 가능"},{label:"동반 조건",value:"목줄 착용 필수"},{label:"반려견 친화도",value:"매우 친절"}],content:"대형견도 편하게 머물 수 있었어요 깔끔하고 깨끗한 방, 실내 전 구역 출입 가능해요 우디플레이트엔 매우 다양한 디저트가 있어 입도 즐거웠어요. 주변에 맛집도 있고 산책..."}},n={args:{...s.args,profileImageUrl:"/assets/dangle/dog_profile2.png",userName:"댕댕이 견주님",dogInfo:"푸들 · 3살 · 소형견 · 5kg 미만",rating:4,date:"2025.03.12",reviewItems:[{label:"출입가능여부",value:"실내 일부만 가능"},{label:"동반 조건",value:"이동가방 필수"},{label:"반려견 친화도",value:"친절"}],content:"사장님이 친절하셨어요. 소형견 친구들이 놀기 좋은 곳 같아요. 공간이 넓지는 않지만 아기자기하게 잘 꾸며져 있습니다."}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    profileImageUrl: "/assets/dangle/dog_profile1.png",
    userName: "해투 견주님",
    dogInfo: "골든리트리버 · 7살 · 대형견 · 20kg 이상",
    rating: 5,
    date: "2025.03.14",
    reviewItems: [{
      label: "출입가능여부",
      value: "실내 모든 곳 이용 가능"
    }, {
      label: "동반 조건",
      value: "목줄 착용 필수"
    }, {
      label: "반려견 친화도",
      value: "매우 친절"
    }],
    content: "대형견도 편하게 머물 수 있었어요 깔끔하고 깨끗한 방, 실내 전 구역 출입 가능해요 우디플레이트엔 매우 다양한 디저트가 있어 입도 즐거웠어요. 주변에 맛집도 있고 산책..."
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    profileImageUrl: "/assets/dangle/dog_profile2.png",
    userName: "댕댕이 견주님",
    dogInfo: "푸들 · 3살 · 소형견 · 5kg 미만",
    rating: 4,
    date: "2025.03.12",
    reviewItems: [{
      label: "출입가능여부",
      value: "실내 일부만 가능"
    }, {
      label: "동반 조건",
      value: "이동가방 필수"
    }, {
      label: "반려견 친화도",
      value: "친절"
    }],
    content: "사장님이 친절하셨어요. 소형견 친구들이 놀기 좋은 곳 같아요. 공간이 넓지는 않지만 아기자기하게 잘 꾸며져 있습니다."
  }
}`,...n.parameters?.docs?.source}}};const L=["Default","FourStars"];export{s as Default,n as FourStars,L as __namedExportsOrder,k as default};
