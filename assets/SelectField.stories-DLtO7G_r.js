import{j as e}from"./jsx-runtime-BWu1kHaf.js";import{r as p}from"./iframe-r3xvHQKk.js";import{n as q}from"./image-Cyqetlp2.js";import"./preload-helper-D9Z9MdNV.js";var y="_1q00hw00",T="_1q00hw01",w="_1q00hw02",i={default:"_1q00hw03",filled:"_1q00hw04",disabled:"_1q00hw05"},j="_1q00hw06",S="_1q00hw07";function u({label:a,placeholder:h="선택해주세요",value:n,disabled:f,onClick:b,className:d,id:g}){const _=p.useId(),c=g??_,s=n!=null&&n.trim().length>0,o=!!f,v=p.useMemo(()=>{const x=o?i.disabled:s?i.filled:i.default;return[w,x,d].filter(Boolean).join(" ")},[s,o,d]);return e.jsxs("div",{className:y,children:[a&&e.jsx("label",{htmlFor:c,className:T,children:a}),e.jsxs("button",{id:c,type:"button",className:v,onClick:b,disabled:o,"aria-haspopup":"listbox",children:[e.jsx("span",{className:s?j:S,children:s?n:h}),e.jsx(q,{src:"/assets/icon24/chevron-down.svg",alt:"선택",width:24,height:24})]})]})}u.__docgenInfo={description:"",methods:[],displayName:"SelectField",props:{label:{required:!1,tsType:{name:"string"},description:"라벨 텍스트"},placeholder:{required:!1,tsType:{name:"string"},description:"placeholder",defaultValue:{value:'"선택해주세요"',computed:!1}},value:{required:!1,tsType:{name:"string"},description:"선택된 값"},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 여부"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"클릭 이벤트 핸들러"},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const{fn:m}=__STORYBOOK_MODULE_TEST__,E={title:"Input/SelectField",component:u,parameters:{layout:"centered"},tags:["autodocs"],decorators:[a=>e.jsx("div",{style:{width:500},children:e.jsx(a,{})})],argTypes:{onClick:{action:"clicked"}}},r={args:{label:"label",placeholder:"placeholder",onClick:m()}},l={args:{label:"label",value:"selected value",onClick:m()}},t={args:{label:"비활성화",placeholder:"선택 불가",disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const I=["Default","Filled","Disabled"];export{r as Default,t as Disabled,l as Filled,I as __namedExportsOrder,E as default};
