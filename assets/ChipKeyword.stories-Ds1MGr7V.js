import{j as e}from"./jsx-runtime-CQmzGqhp.js";import{n as d}from"./image-BdrD5O64.js";import"./iframe-D1k47D1g.js";import"./preload-helper-PPVm8Dsz.js";var c={selected:"upmpil1 upmpil0",default:"upmpil2 upmpil0"},p="upmpil3";function a({text:r,selected:o=!1,onClose:i,onClick:l}){return e.jsxs("div",{className:c[o?"selected":"default"],onClick:l,role:"button",children:[e.jsx("span",{children:r}),o&&e.jsx("button",{className:p,onClick:i,"aria-label":"닫기",children:e.jsx(d,{src:"/assets/icon16/x_line.svg",alt:"닫기",width:16,height:16})})]})}a.__docgenInfo={description:"",methods:[],displayName:"ChipKeyword",props:{text:{required:!0,tsType:{name:"string"},description:"칩에 표시될 텍스트"},selected:{required:!1,tsType:{name:"boolean"},description:"선택 상태",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"닫기 아이콘 클릭 이벤트 핸들러"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"칩 전체 클릭 이벤트 핸들러"}}};const{fn:n}=__STORYBOOK_MODULE_TEST__,x={title:"Chip/ChipKeyword",component:a,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:n()},argTypes:{selected:{control:"boolean"},onClose:{action:"close"}},decorators:[r=>e.jsx("div",{style:{padding:"20px"},children:e.jsx(r,{})})]},t={args:{text:"숙박",selected:!1,onClose:void 0}},s={args:{text:"숙박",selected:!0,onClose:n()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: "숙박",
    selected: false,
    onClose: undefined
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: "숙박",
    selected: true,
    onClose: fn()
  }
}`,...s.parameters?.docs?.source}}};const h=["Default","WithCloseButton"];export{t as Default,s as WithCloseButton,h as __namedExportsOrder,x as default};
