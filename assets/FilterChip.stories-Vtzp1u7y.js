import{j as e}from"./jsx-runtime-DilAWgcM.js";import{n as i}from"./image-C-72UcDH.js";import"./iframe-sH1feWpq.js";import"./preload-helper-PPVm8Dsz.js";var d={selected:"_1nq9g1z1 _1nq9g1z0",default:"_1nq9g1z2 _1nq9g1z0"},p={selected:"_1nq9g1z3",default:"_1nq9g1z4"},u={selected:"_1nq9g1z5",default:"_1nq9g1z6"};function l({text:o,iconUrl:n,selected:a=!1,onClick:c}){return e.jsxs("button",{className:d[a?"selected":"default"],onClick:c,role:"button",children:[n&&e.jsx("div",{className:u[a?"selected":"default"],children:e.jsx(i,{src:n,alt:"",width:16,height:16})}),e.jsx("span",{className:p[a?"selected":"default"],children:o})]})}l.__docgenInfo={description:"",methods:[],displayName:"FilterChip",props:{text:{required:!0,tsType:{name:"string"},description:"칩에 표시될 텍스트"},iconUrl:{required:!1,tsType:{name:"string"},description:"아이콘 URL"},selected:{required:!1,tsType:{name:"boolean"},description:"선택 상태",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"클릭 이벤트 핸들러"}}};const{fn:m}=__STORYBOOK_MODULE_TEST__,y={title:"Chip/FilterChip",component:l,parameters:{layout:"centered"},args:{text:"댕글",onClick:m()},tags:["autodocs"],argTypes:{selected:{control:"boolean"}}},s={args:{selected:!1,iconUrl:"/assets/icon12/play_filled.svg"}},t={args:{selected:!0,iconUrl:"/assets/icon12/play_filled.svg"}},r={args:{text:"숙소",selected:!1,iconUrl:void 0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    iconUrl: "/assets/icon12/play_filled.svg"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    iconUrl: "/assets/icon12/play_filled.svg"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: "숙소",
    selected: false,
    iconUrl: undefined
  }
}`,...r.parameters?.docs?.source}}};const h=["Default","Selected","TextOnly"];export{s as Default,t as Selected,r as TextOnly,h as __namedExportsOrder,y as default};
