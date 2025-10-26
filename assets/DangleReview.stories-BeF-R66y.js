import{j as e}from"./jsx-runtime-CxwdZc2u.js";import{n as c}from"./image-BW9A_cHq.js";import"./iframe-D8JAR8DA.js";import"./preload-helper-PPVm8Dsz.js";var I="_110cgz00",h="_110cgz01",y="_110cgz02",T="_110cgz03",j="_110cgz04",C="_110cgz05",E="_110cgz06",L="_110cgz07",H="_110cgz08",M="_110cgz09",w="_110cgz0a",z="_110cgz0b",A="_110cgz0c",R="_110cgz0d",P="_110cgz0e",S="_110cgz0f",q="_110cgz0g";const D=["출입 가능 여부","출입 조건","반려견 친화도"],B=({rating:a})=>e.jsx("div",{className:w,children:[...Array(5)].map((i,n)=>e.jsx(c,{alt:n<a?"paw-filled":"paw-empty",width:16,height:16,src:n<a?"/assets/icon24/dogfootprint-blue.svg":"/assets/icon24/dogfootprint-white.svg"},n))});function l({profileImageUrl:a,userName:i,dogInfo:n,locationCategory:d,placeName:g,isMine:p,rating:m,date:u,chips:f,content:_,onClick:v}){return e.jsxs("div",{className:I,onClick:v,children:[p?e.jsxs("div",{className:y,children:[e.jsx("span",{className:T,children:d}),e.jsx("div",{className:j,children:g})]}):e.jsxs("div",{className:h,children:[e.jsx(c,{src:a||"/assets/dangle/dog.png",alt:i||"user",width:24,height:24,className:C}),e.jsxs("div",{className:E,children:[e.jsx("span",{className:L,children:i}),n&&e.jsx("span",{className:H,children:n})]})]}),e.jsxs("div",{className:A,children:[e.jsxs("div",{className:M,children:[e.jsx(B,{rating:m}),e.jsx("span",{className:z,children:u})]}),f.map((x,N)=>{const o=D[N];return o?e.jsxs("div",{className:R,children:[e.jsx("span",{className:P,children:o}),e.jsx("span",{className:S,children:x})]},o):null})]}),e.jsx("p",{className:q,children:_})]})}l.__docgenInfo={description:"",methods:[],displayName:"DangleReview",props:{profileImageUrl:{required:!1,tsType:{name:"string"},description:"[isMine=false] 리뷰 작성자의 프로필 이미지 URL"},userName:{required:!1,tsType:{name:"string"},description:"[isMine=false] 리뷰 작성자의 이름"},dogInfo:{required:!1,tsType:{name:"string"},description:"[isMine=false] 리뷰 작성자의 반려견 정보"},locationCategory:{required:!1,tsType:{name:"string"},description:"[isMine=true] 장소 위치/카테고리"},placeName:{required:!1,tsType:{name:"string"},description:"[isMine=true] 장소명"},isMine:{required:!0,tsType:{name:"boolean"},description:"내가 쓴 리뷰인지 여부"},rating:{required:!0,tsType:{name:"number"},description:"평점 (1-5 사이의 숫자)"},date:{required:!0,tsType:{name:"string"},description:"리뷰 작성 날짜 (API: createdAtText)"},chips:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"리뷰 칩 배열 (API: chips)"},content:{required:!0,tsType:{name:"string"},description:"리뷰 본문 내용 (API: body)"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"[isMine=true] 카드 클릭 이벤트 핸들러"}}};const F={title:"Dangle/DangleReview",component:l,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{rating:{control:{type:"range",min:0,max:5,step:1}},isMine:{control:"boolean"},profileImageUrl:{control:"text"},userName:{control:"text"},dogInfo:{control:"text"},locationCategory:{control:"text"},placeName:{control:"text"},date:{control:"text"},content:{control:"text"}},decorators:[a=>e.jsx("div",{style:{width:375,display:"flex",flexDirection:"column",gap:"16px"},children:e.jsx(a,{})})]},r={name:"다른 사람 리뷰 (Default)",args:{isMine:!1,profileImageUrl:"/assets/dangle/dog_profile1.png",userName:"해투 견주님",dogInfo:"골든리트리버 · 7살 · 대형견 · 20kg 이상",rating:5,date:"2025.03.14",chips:["실내 모든 곳 이용 가능","목줄 착용 필수","매우 친절"],content:"대형견도 편하게 머물 수 있었어요 깔끔하고 깨끗한 방, 실내 전 구역 출입 가능해요 우디플레이트엔 매우 다양한 디저트가 있어 입도 즐거웠어요. 주변에 맛집도 있고 산책...",locationCategory:void 0,placeName:void 0}},s={name:"다른 사람 리뷰 (4점)",args:{isMine:!1,profileImageUrl:"/assets/dangle/dog_profile2.png",userName:"댕댕이 견주님",dogInfo:"푸들 · 3살 · 소형견 · 5kg 미만",rating:4,date:"2025.03.12",chips:["실내 일부만 가능","이동가방 필수","친절"],content:"사장님이 친절하셨어요. 소형견 친구들이 놀기 좋은 곳 같아요. 공간이 넓지는 않지만 아기자기하게 잘 꾸며져 있습니다.",locationCategory:void 0,placeName:void 0}},t={name:"내 리뷰 (isMine=true)",args:{isMine:!0,locationCategory:"제주시 애월읍 · 콘도",placeName:"한화리조트 제주",rating:5,date:"2025.03.14",chips:["실내 일부만 가능","이동가방 필수","친절"],content:"대형견도 편하게 머물 수 있었어요 깔끔하고 깨끗한 방, 실내 전 구역 출입 가능해요 우디플레이트엔 매우 다양한 디저트가 있어 입도 즐거웠어요. 주변에 맛집도 있고 산책...",profileImageUrl:void 0,userName:void 0,dogInfo:void 0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "다른 사람 리뷰 (Default)",
  args: {
    isMine: false,
    profileImageUrl: "/assets/dangle/dog_profile1.png",
    userName: "해투 견주님",
    dogInfo: "골든리트리버 · 7살 · 대형견 · 20kg 이상",
    rating: 5,
    date: "2025.03.14",
    chips: ["실내 모든 곳 이용 가능",
    // CHIP_LABELS_OTHER[0] "출입 가능 여부"
    "목줄 착용 필수",
    // CHIP_LABELS_OTHER[1] "출입 조건"
    "매우 친절" // CHIP_LABELS_OTHER[2] "반려견 친화도"
    ],
    content: "대형견도 편하게 머물 수 있었어요 깔끔하고 깨끗한 방, 실내 전 구역 출입 가능해요 우디플레이트엔 매우 다양한 디저트가 있어 입도 즐거웠어요. 주변에 맛집도 있고 산책...",
    locationCategory: undefined,
    placeName: undefined
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "다른 사람 리뷰 (4점)",
  args: {
    isMine: false,
    // [UPDATE]
    profileImageUrl: "/assets/dangle/dog_profile2.png",
    userName: "댕댕이 견주님",
    dogInfo: "푸들 · 3살 · 소형견 · 5kg 미만",
    rating: 4,
    date: "2025.03.12",
    chips: ["실내 일부만 가능",
    // CHIP_LABELS_OTHER[0] "출입 가능 여부"
    "이동가방 필수",
    // CHIP_LABELS_OTHER[1] "출입 조건"
    "친절" // CHIP_LABELS_OTHER[2] "반려견 친화도"
    ],
    content: "사장님이 친절하셨어요. 소형견 친구들이 놀기 좋은 곳 같아요. 공간이 넓지는 않지만 아기자기하게 잘 꾸며져 있습니다.",
    locationCategory: undefined,
    placeName: undefined
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "내 리뷰 (isMine=true)",
  args: {
    isMine: true,
    locationCategory: "제주시 애월읍 · 콘도",
    placeName: "한화리조트 제주",
    rating: 5,
    date: "2025.03.14",
    chips: ["실내 일부만 가능",
    // CHIP_LABELS_OTHER[0] "출입 가능 여부"
    "이동가방 필수",
    // CHIP_LABELS_OTHER[1] "출입 조건"
    "친절" // CHIP_LABELS_OTHER[2] "반려견 친화도"
    ],
    content: "대형견도 편하게 머물 수 있었어요 깔끔하고 깨끗한 방, 실내 전 구역 출입 가능해요 우디플레이트엔 매우 다양한 디저트가 있어 입도 즐거웠어요. 주변에 맛집도 있고 산책...",
    profileImageUrl: undefined,
    userName: undefined,
    dogInfo: undefined
  }
}`,...t.parameters?.docs?.source}}};const V=["Default","FourStars","MyReview"];export{r as Default,s as FourStars,t as MyReview,V as __namedExportsOrder,F as default};
