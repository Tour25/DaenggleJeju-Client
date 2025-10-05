import{j as e}from"./jsx-runtime-aPIVv175.js";import{n as l}from"./image-BLuzO4NK.js";import"./iframe-OrTElwF4.js";import"./preload-helper-PPVm8Dsz.js";var T="sngi910",I="sngi911",w="sngi912",u="sngi913",g="sngi915",x="sngi916 sngi915",j="sngi917",B="sngi918",N="sngi919";function m({backIconHandler:s,title:a,isShowLogo:c=!1,rightIcons:h=[],sticky:f=!1,transparent:v=!1,whiteIcon:d=!1,className:k}){return e.jsxs("header",{className:[T,f&&I,v&&w,k].filter(Boolean).join(" "),role:"banner",children:[e.jsx("div",{className:x,children:s?e.jsx("button",{type:"button",className:[g,d&&u].filter(Boolean).join(" "),onClick:s,"aria-label":"뒤로가기",children:e.jsx(l,{src:"/assets/icon24/arrow-left_line.svg",alt:"뒤로가기",width:24,height:24})}):null}),e.jsx("div",{className:j,"aria-live":"polite",children:c?e.jsx(l,{src:"/assets/logo/logo-top.svg",alt:"댕글 로고",width:72.56,height:24}):a?e.jsx("div",{className:B,title:a,children:a}):null}),e.jsx("nav",{className:N,"aria-label":"topbar-actions",children:h.map(({icon:y,onClick:b},p)=>e.jsx("button",{type:"button",className:[g,d&&u].filter(Boolean).join(" "),onClick:b,"aria-label":`action-${p+1}`,children:y},p))})]})}m.__docgenInfo={description:`TopBar
- backIconHandler 있으면 자동으로 back 아이콘 노출
- isShowLogo면 logo-top.svg 노출
- rightIcons는 오른쪽 끝부터 보이도록 row-reverse 배치`,methods:[],displayName:"TopBar",props:{backIconHandler:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"back 아이콘 핸들러: 주면 자동으로 아이콘 노출 + 핸들러 등록"},title:{required:!1,tsType:{name:"string"},description:"제목 텍스트"},isShowLogo:{required:!1,tsType:{name:"boolean"},description:"상단 로고 노출 여부",defaultValue:{value:"false",computed:!1}},rightIcons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon: ReactNode; // 24x24 아이콘
  onClick?: () => void; // 아이콘 클릭
}`,signature:{properties:[{key:"icon",value:{name:"ReactNode",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:`{
  icon: ReactNode; // 24x24 아이콘
  onClick?: () => void; // 아이콘 클릭
}[]`},description:"우측 아이콘들(오른쪽 끝부터 보임)",defaultValue:{value:"[]",computed:!1}},sticky:{required:!1,tsType:{name:"boolean"},description:"상단 고정 여부",defaultValue:{value:"false",computed:!1}},transparent:{required:!1,tsType:{name:"boolean"},description:"배경 투명 여부",defaultValue:{value:"false",computed:!1}},whiteIcon:{required:!1,tsType:{name:"boolean"},description:"아이콘 흰색 여부",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"추가 클래스"}}};const A={title:"Common/TopBar",component:m,parameters:{layout:"centered"},decorators:[s=>e.jsx("div",{style:{width:375},children:e.jsx(s,{})})],tags:["autodocs"],argTypes:{title:{control:"text"},isShowLogo:{control:"boolean"},sticky:{control:"boolean"}}},r=(s,a,c=()=>alert("icon clicked"))=>({icon:e.jsx(l,{src:s,alt:a,width:24,height:24}),onClick:c}),o={parameters:{docs:{description:{story:"브랜드 로고가 중앙에 노출되는 TopBar."}}},args:{isShowLogo:!0,backIconHandler:()=>alert("back clicked"),rightIcons:[r("/assets/icon24/search.svg","검색")]}},n={parameters:{docs:{description:{story:"큐레이션/영상 재생 페이지 등 액션 아이콘이 있는 TopBar."}}},args:{backIconHandler:()=>alert("back clicked"),rightIcons:[r("/assets/icon24/search.svg","검색")]}},t={parameters:{docs:{description:{story:"여행케어 화면에 쓰이는 기본 TopBar(타이틀만)."}}},args:{title:"AI 여행케어",sticky:!0}},i={args:{title:"댕글추천",isShowLogo:!1,backIconHandler:()=>alert("back clicked"),rightIcons:[r("/assets/icon24/search.svg","검색"),r("/assets/icon24/share_line.svg","공유"),r("/assets/icon24/bookmark_line.svg","북마크")]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "브랜드 로고가 중앙에 노출되는 TopBar."
      }
    }
  },
  args: {
    isShowLogo: true,
    backIconHandler: () => alert("back clicked"),
    rightIcons: [ri("/assets/icon24/search.svg", "검색")]
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "큐레이션/영상 재생 페이지 등 액션 아이콘이 있는 TopBar."
      }
    }
  },
  args: {
    backIconHandler: () => alert("back clicked"),
    rightIcons: [ri("/assets/icon24/search.svg", "검색")]
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "여행케어 화면에 쓰이는 기본 TopBar(타이틀만)."
      }
    }
  },
  args: {
    title: "AI 여행케어",
    sticky: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "댕글추천",
    isShowLogo: false,
    backIconHandler: () => alert("back clicked"),
    rightIcons: [ri("/assets/icon24/search.svg", "검색"), ri("/assets/icon24/share_line.svg", "공유"), ri("/assets/icon24/bookmark_line.svg", "북마크")]
  }
}`,...i.parameters?.docs?.source}}};const H=["WithLogo","WithAction","TitleOnly","All"];export{i as All,t as TitleOnly,n as WithAction,o as WithLogo,H as __namedExportsOrder,A as default};
