import{j as r}from"./jsx-runtime-DVp8H8Pv.js";import{n as i}from"./image-DCPsgAzQ.js";import"./iframe-CsAyzd_A.js";import"./preload-helper-PPVm8Dsz.js";var d={selected:"_1nq9g1z1 _1nq9g1z0",default:"_1nq9g1z2 _1nq9g1z0"},p={selected:"_1nq9g1z3",default:"_1nq9g1z4"};function o({text:l,iconUrl:a,selected:n=!1,onClick:c}){return r.jsxs("button",{className:d[n?"selected":"default"],onClick:c,role:"button",children:[a&&r.jsx(i,{src:a,alt:"",width:16,height:16}),r.jsx("span",{className:p[n?"selected":"default"],children:l})]})}o.__docgenInfo={description:"",methods:[],displayName:"FilterChip",props:{text:{required:!0,tsType:{name:"string"},description:"칩에 표시될 텍스트"},iconUrl:{required:!1,tsType:{name:"string"},description:"아이콘 URL"},selected:{required:!1,tsType:{name:"boolean"},description:"선택 상태",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"클릭 이벤트 핸들러"}}};const{fn:u}=__STORYBOOK_MODULE_TEST__,x={title:"Chip/FilterChip",component:o,parameters:{layout:"centered"},args:{text:"댕글",onClick:u()},tags:["autodocs"],argTypes:{selected:{control:"boolean"}}},e={args:{selected:!1,iconUrl:"/assets/icon12/play_filled.svg"}},s={args:{selected:!0,iconUrl:"/assets/icon12/play_filled.svg"}},t={args:{text:"숙소",selected:!1,iconUrl:void 0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    iconUrl: "/assets/icon12/play_filled.svg"
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    iconUrl: "/assets/icon12/play_filled.svg"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: "숙소",
    selected: false,
    iconUrl: undefined
  }
}`,...t.parameters?.docs?.source}}};const y=["Default","Selected","TextOnly"];export{e as Default,s as Selected,t as TextOnly,y as __namedExportsOrder,x as default};
