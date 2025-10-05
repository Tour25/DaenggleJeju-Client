import{j as r}from"./jsx-runtime-GaRzEz2W.js";import"./iframe-CBZjcRd8.js";import"./preload-helper-PPVm8Dsz.js";var c="o31nwv0",a="o31nwv1";function i({topics:t,onSelectTopic:n}){return r.jsx("div",{className:c,children:t.map(s=>r.jsx("button",{className:a,onClick:()=>n(s),children:s},s))})}i.__docgenInfo={description:"",methods:[],displayName:"TopicSelector",props:{topics:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"버튼으로 표시할 주제 목록 (문자열 배열)"},onSelectTopic:{required:!0,tsType:{name:"signature",type:"function",raw:"(topic: string) => void",signature:{arguments:[{type:{name:"string"},name:"topic"}],return:{name:"void"}}},description:"특정 주제 버튼을 클릭했을 때 호출될 함수"}}};const u={title:"Chat/TopicSelector",component:i,tags:["autodocs"],argTypes:{topics:{control:"object",description:"버튼으로 표시할 주제 목록 (문자열 배열)"},onSelectTopic:{action:"onSelectTopic",description:"주제 버튼 클릭 시 호출되는 함수"}},decorators:[t=>r.jsx("div",{style:{width:"500px"},children:r.jsx(t,{})})]},e={args:{topics:["이동 스트레스 관리","진드기·벌레 예방","먹어도 되는 해산물, 과일 확인","탈수·피로 증상 체크"]}},o={args:{topics:["자동차","배","비행기","버스"]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    topics: ["이동 스트레스 관리", "진드기·벌레 예방", "먹어도 되는 해산물, 과일 확인", "탈수·피로 증상 체크"]
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    topics: ["자동차", "배", "비행기", "버스"]
  }
}`,...o.parameters?.docs?.source}}};const l=["InitialTopics","SubTopics"];export{e as InitialTopics,o as SubTopics,l as __namedExportsOrder,u as default};
