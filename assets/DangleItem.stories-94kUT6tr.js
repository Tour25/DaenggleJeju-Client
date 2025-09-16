import{j as e}from"./jsx-runtime-aNr_z4sC.js";import{n as m}from"./image-CC2PxE_n.js";import"./iframe-BE6NuO9g.js";import"./preload-helper-D9Z9MdNV.js";var c="_168s34d0",d={after:"_168s34d2 _168s34d1",before:"_168s34d3 _168s34d1"},l="_168s34d4",p="_168s34d5";function s({state:n,imageUrl:o,text:a,onClick:i}){return e.jsxs("button",{type:"button",className:c,onClick:i,"aria-label":`${a} 아이템`,children:[e.jsx("div",{className:d[n],children:e.jsx(m,{src:o,alt:a,width:70,height:70,className:l})}),e.jsx("span",{className:p,children:a})]})}s.__docgenInfo={description:"",methods:[],displayName:"DangleItem",props:{state:{required:!0,tsType:{name:"union",raw:'"before" | "after"',elements:[{name:"literal",value:'"before"'},{name:"literal",value:'"after"'}]},description:"아이템의 상태: 'before' 또는 'after'"},imageUrl:{required:!0,tsType:{name:"string"},description:"아이템에 표시될 이미지 URL"},text:{required:!0,tsType:{name:"string"},description:"아이템 하단에 표시될 텍스트"},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"클릭 이벤트 핸들러"}}};const{fn:g}=__STORYBOOK_MODULE_TEST__,b={title:"Dangle/DangleItem",component:s,parameters:{layout:"centered"},args:{onClick:g()},argTypes:{state:{control:"radio",options:["before","after"]},imageUrl:{control:"text"},text:{control:"text"}},tags:["autodocs"]},t={args:{state:"after",imageUrl:"/assets/dangle/beach.png",text:"애월·한림"}},r={args:{state:"before",imageUrl:"/assets/dangle/beach.png",text:"애월·한림"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const h=["After","Before"];export{t as After,r as Before,h as __namedExportsOrder,b as default};
