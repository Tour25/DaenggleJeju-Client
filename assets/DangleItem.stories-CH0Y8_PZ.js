import{f as m}from"./index-C05L6HUw.js";import{j as e}from"./jsx-runtime-C-MUwnpA.js";import{n as c}from"./image-ClD1LWYp.js";import"./iframe-7y5ZWx-m.js";import"./preload-helper-D9Z9MdNV.js";var d="_168s34d0",l={after:"_168s34d2 _168s34d1",before:"_168s34d3 _168s34d1"},p="_168s34d4",g="_168s34d5";function s({state:n,imageUrl:o,text:a,onClick:i}){return e.jsxs("button",{type:"button",className:d,onClick:i,"aria-label":`${a} 아이템`,children:[e.jsx("div",{className:l[n],children:e.jsx(c,{src:o,alt:a,width:70,height:70,className:p})}),e.jsx("span",{className:g,children:a})]})}s.__docgenInfo={description:"",methods:[],displayName:"DangleItem",props:{state:{required:!0,tsType:{name:"union",raw:'"before" | "after"',elements:[{name:"literal",value:'"before"'},{name:"literal",value:'"after"'}]},description:"아이템의 상태: 'before' 또는 'after'"},imageUrl:{required:!0,tsType:{name:"string"},description:"아이템에 표시될 이미지 URL"},text:{required:!0,tsType:{name:"string"},description:"아이템 하단에 표시될 텍스트"},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"클릭 이벤트 핸들러"}}};const h={title:"Dangle/DangleItem",component:s,parameters:{layout:"centered"},args:{onClick:m()},argTypes:{state:{control:"radio",options:["before","after"]},imageUrl:{control:"text"},text:{control:"text"}},tags:["autodocs"]},t={args:{state:"after",imageUrl:"/assets/dangle/beach.png",text:"애월·한림"}},r={args:{state:"before",imageUrl:"/assets/dangle/beach.png",text:"애월·한림"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    state: "after",
    imageUrl: "/assets/dangle/beach.png",
    text: "애월·한림"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    state: "before",
    imageUrl: "/assets/dangle/beach.png",
    text: "애월·한림"
  }
}`,...r.parameters?.docs?.source}}};const v=["After","Before"];export{t as After,r as Before,v as __namedExportsOrder,h as default};
