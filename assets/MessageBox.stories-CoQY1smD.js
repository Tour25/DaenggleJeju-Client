import{j as s}from"./jsx-runtime-BN8NeK2A.js";import"./iframe-Bts6Hg5i.js";import"./preload-helper-PPVm8Dsz.js";var n="_6dwux80",c="_6dwux82 _6dwux81",d="_6dwux83 _6dwux81";function t({children:r,variant:i="ai"}){const o=i==="user"?d:c;return s.jsx("div",{className:n,children:s.jsx("div",{className:o,children:r})})}t.__docgenInfo={description:"",methods:[],displayName:"MessageBox",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"ai" | "user"',elements:[{name:"literal",value:'"ai"'},{name:"literal",value:'"user"'}]},description:"메시지 주체 ('ai' 또는 'user')",defaultValue:{value:'"ai"',computed:!1}}}};const m={title:"Chat/MessageBox",component:t,tags:["autodocs"],argTypes:{children:{control:"text",description:"메시지 박스 내부에 표시될 내용"},variant:{control:{type:"radio"},options:["ai","user"],description:"메시지 주체 (ai 또는 user)"}},decorators:[r=>s.jsx("div",{style:{width:"500px"},children:s.jsx(r,{})})]},e={args:{variant:"ai",children:"안녕하세요! 무엇이 궁금하신가요? 제주여행 중 반려견 건강 걱정은 AI 여행케어가 함께 덜어드릴게요."}},a={args:{variant:"user",children:"이동 스트레스 관리에 대해 알려주세요."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ai",
    children: "안녕하세요! 무엇이 궁금하신가요? 제주여행 중 반려견 건강 걱정은 AI 여행케어가 함께 덜어드릴게요."
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "user",
    children: "이동 스트레스 관리에 대해 알려주세요."
  }
}`,...a.parameters?.docs?.source}}};const x=["AiMessage","UserMessage"];export{e as AiMessage,a as UserMessage,x as __namedExportsOrder,m as default};
