import{j as e}from"./jsx-runtime-Cmza723I.js";import{n as i}from"./image-C4YxENtf.js";import"./iframe-C4RoJUwQ.js";import"./preload-helper-CQGs7Tvr.js";var u="_110cgz00",p="_110cgz01",v="_110cgz02",f="_110cgz03",_="_110cgz04",I="_110cgz05",x="_110cgz06",N="_110cgz07",b="_110cgz08",h="_110cgz09",y="_110cgz0a",j="_110cgz0b",w="_110cgz0c",z="_110cgz0d";const q=({rating:s})=>e.jsx("div",{className:N,children:[...Array(5)].map((t,a)=>e.jsx(i,{alt:a<s?"star-filled":"star-empty",width:16,height:16,src:a<s?"/assets/icon24/star-filled-colored.svg":"/assets/icon24/star-filled.svg"},a))});function o({profileImageUrl:s,userName:t,dogInfo:a,rating:d,date:c,reviewItems:g,content:m}){return e.jsxs("div",{className:u,children:[e.jsxs("div",{className:p,children:[e.jsx(i,{src:s,alt:t,width:24,height:24,className:v}),e.jsxs("div",{className:f,children:[e.jsx("span",{className:_,children:t}),e.jsx("span",{className:I,children:a})]})]}),e.jsxs("div",{className:h,children:[e.jsxs("div",{className:x,children:[e.jsx(q,{rating:d}),e.jsx("span",{className:b,children:c})]}),g.map(l=>e.jsxs("div",{className:y,children:[e.jsx("span",{className:j,children:l.label}),e.jsx("span",{className:w,children:l.value})]},l.label))]}),e.jsx("p",{className:z,children:m})]})}o.__docgenInfo={description:"",methods:[],displayName:"DangleReview",props:{profileImageUrl:{required:!0,tsType:{name:"string"},description:"리뷰 작성자의 프로필 이미지 URL"},userName:{required:!0,tsType:{name:"string"},description:"리뷰 작성자의 이름"},dogInfo:{required:!0,tsType:{name:"string"},description:"리뷰 작성자의 반려견 정보 (종, 나이, 크기 등)"},rating:{required:!0,tsType:{name:"number"},description:"별점 (1-5 사이의 숫자)"},date:{required:!0,tsType:{name:"string"},description:"리뷰 작성 날짜 (YYYY.MM.DD 형식)"},reviewItems:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  variant?: keyof typeof s.detailValue;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"variant",value:{name:"unknown",required:!1}}]}}],raw:"ReviewItem[]"},description:"리뷰 상세 항목 배열 (예: 출입가능여부, 동반조건 등)"},content:{required:!0,tsType:{name:"string"},description:"리뷰 본문 내용"}}};const U={title:"Dangle/DangleReview",component:o,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{rating:{control:{type:"range",min:0,max:5,step:1}}}},r={args:{profileImageUrl:"/assets/dangle/dog_profile1.png",userName:"해투 견주님",dogInfo:"골든리트리버 · 7살 · 대형견 · 20kg 이상",rating:5,date:"2025.03.14",reviewItems:[{label:"출입가능여부",value:"실내 모든 곳 이용 가능"},{label:"동반 조건",value:"목줄 착용 필수"},{label:"반려견 친화도",value:"매우 친절"}],content:"대형견도 편하게 머물 수 있었어요 깔끔하고 깨끗한 방, 실내 전 구역 출입 가능해요 우디플레이트엔 매우 다양한 디저트가 있어 입도 즐거웠어요. 주변에 맛집도 있고 산책..."}},n={args:{...r.args,profileImageUrl:"/assets/dangle/dog_profile2.png",userName:"댕댕이 견주님",dogInfo:"푸들 · 3살 · 소형견 · 5kg 미만",rating:4,date:"2025.03.12",reviewItems:[{label:"출입가능여부",value:"실내 일부만 가능"},{label:"동반 조건",value:"이동가방 필수"},{label:"반려견 친화도",value:"친절"}],content:"사장님이 친절하셨어요. 소형견 친구들이 놀기 좋은 곳 같아요. 공간이 넓지는 않지만 아기자기하게 잘 꾸며져 있습니다."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const S=["Default","FourStars"];export{r as Default,n as FourStars,S as __namedExportsOrder,U as default};
