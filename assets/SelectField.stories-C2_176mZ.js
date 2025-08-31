import{j as e}from"./jsx-runtime-CNHGY5eS.js";import{f as u}from"./index-C05L6HUw.js";import{r as p}from"./iframe-Cn4TxATR.js";import{n as _}from"./image-BuzQsCPt.js";import"./preload-helper-D9Z9MdNV.js";var y="_1q00hw00",w="_1q00hw01",j="_1q00hw02",i={default:"_1q00hw03",filled:"_1q00hw04",disabled:"_1q00hw05"},T="_1q00hw06",C="_1q00hw07";function m({label:a,placeholder:f="선택해주세요",value:o,disabled:h,onClick:b,className:d,id:g}){const v=p.useId(),c=g??v,s=o!=null&&o.trim().length>0,n=!!h,x=p.useMemo(()=>{const q=n?i.disabled:s?i.filled:i.default;return[j,q,d].filter(Boolean).join(" ")},[s,n,d]);return e.jsxs("div",{className:y,children:[a&&e.jsx("label",{htmlFor:c,className:w,children:a}),e.jsxs("button",{id:c,type:"button",className:x,onClick:b,disabled:n,"aria-haspopup":"listbox",children:[e.jsx("span",{className:s?T:C,children:s?o:f}),e.jsx(_,{src:"/assets/icon24/chevron-down.svg",alt:"선택",width:24,height:24})]})]})}m.__docgenInfo={description:"",methods:[],displayName:"SelectField",props:{label:{required:!1,tsType:{name:"string"},description:"라벨 텍스트"},placeholder:{required:!1,tsType:{name:"string"},description:"placeholder",defaultValue:{value:'"선택해주세요"',computed:!1}},value:{required:!1,tsType:{name:"string"},description:"선택된 값"},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 여부"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"클릭 이벤트 핸들러"},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Input/SelectField",component:m,parameters:{layout:"centered"},tags:["autodocs"],decorators:[a=>e.jsx("div",{style:{width:500},children:e.jsx(a,{})})],argTypes:{onClick:{action:"clicked"}}},r={args:{label:"label",placeholder:"placeholder",onClick:u()}},l={args:{label:"label",value:"selected value",onClick:u()}},t={args:{label:"비활성화",placeholder:"선택 불가",disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "label",
    placeholder: "placeholder",
    onClick: fn()
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "label",
    value: "selected value",
    onClick: fn()
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "비활성화",
    placeholder: "선택 불가",
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const B=["Default","Filled","Disabled"];export{r as Default,t as Disabled,l as Filled,B as __namedExportsOrder,N as default};
