import{j as r}from"./jsx-runtime-Dd6cNktq.js";import{r as s}from"./iframe-2rb6Bo2I.js";import"./preload-helper-PPVm8Dsz.js";var S="_4bee1l0",L="_4bee1l1",l={default:"_4bee1l2",focused:"_4bee1l3",pressed:"_4bee1l4",filled:"_4bee1l5",error:"_4bee1l6",disabled:"_4bee1l7"},Q="_4bee1l8",W="_4bee1l9",X="_4bee1la";function I({label:a,placeholder:V="Placeholder",value:f,defaultValue:q,onChange:D,onBlur:P,onFocus:B,disabled:C,validator:g,errorText:b,helperText:w,className:h,id:N,...M}){const K=s.useId(),p=N??K,v=`${p}-desc`,[x,T]=s.useState(!1),[y,t]=s.useState(!1),_=f!=null,[O,U]=s.useState(q??""),j=_?String(f):O,[E,R]=s.useState(void 0),F=j.trim().length>0,n=!!(b??E),o=!!C,k=s.useMemo(()=>{const e=n?l.error:o?l.disabled:x?l.focused:y?l.pressed:F?l.filled:l.default;return[S,e,h].filter(Boolean).join(" ")},[x,y,F,n,o,h]),z=e=>{_||U(e.target.value),D?.(e)},A=e=>{if(!g)return;const J=g(e);R(J??void 0)},G=e=>{T(!1),A(e.currentTarget.value),P?.(e)},H=e=>{T(!0),B?.(e)},m=n?b??E:w;return r.jsxs("div",{className:S,children:[a&&r.jsx("label",{htmlFor:p,className:L,children:a}),r.jsx("div",{className:k,"aria-disabled":o||void 0,children:r.jsx("input",{id:p,className:Q,placeholder:V,value:j,onChange:z,onFocus:H,onBlur:G,onMouseDown:()=>t(!0),onMouseUp:()=>t(!1),onKeyDown:()=>t(!0),onKeyUp:()=>t(!1),"aria-invalid":n||void 0,"aria-describedby":m?v:void 0,disabled:o,...M})}),m?r.jsx("div",{id:v,className:n?X:W,children:m}):null]})}I.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!1,tsType:{name:"string"},description:"라벨 텍스트"},placeholder:{required:!1,tsType:{name:"string"},description:"placeholder",defaultValue:{value:'"Placeholder"',computed:!1}},value:{required:!1,tsType:{name:"string"},description:"컨트롤드 값"},defaultValue:{required:!1,tsType:{name:"string"},description:"언컨트롤드 초기값"},validator:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string | undefined | null",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"union",raw:"string | undefined | null",elements:[{name:"string"},{name:"undefined"},{name:"null"}]}}},description:"유효성 검사 함수: 에러 메시지(string) 반환 시 에러, undefined/null이면 통과"},errorText:{required:!1,tsType:{name:"string"},description:"외부에서 강제로 에러 표시하고 싶을 때"},helperText:{required:!1,tsType:{name:"string"},description:"보조설명(힌트/에러 밑문구 우선순위: errorText > helperText)"}},composes:["Omit"]};const ee={title:"Input/TextField",component:I,parameters:{layout:"centered"},tags:["autodocs"],decorators:[a=>r.jsx("div",{style:{width:500},children:r.jsx(a,{})})],argTypes:{onChange:{action:"change"},onBlur:{action:"blur"}}},d={args:{label:"input",placeholder:"Place holder"}},i={args:{label:"filled input",defaultValue:"사용자 입력 후"}},u={args:{label:"error input",defaultValue:"bad email",validator:a=>a.includes("@")?void 0:"올바른 이메일 형식이 아닙니다.",helperText:"올바른 이메일을 입력해주세요."}},c={args:{label:"disabled input",placeholder:"Place holder",disabled:!0}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "input",
    placeholder: "Place holder"
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "filled input",
    defaultValue: "사용자 입력 후"
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "error input",
    defaultValue: "bad email",
    validator: v => v.includes("@") ? undefined : "올바른 이메일 형식이 아닙니다.",
    helperText: "올바른 이메일을 입력해주세요."
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "disabled input",
    placeholder: "Place holder",
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};const re=["Default","Filled","Error","Disabled"];export{d as Default,c as Disabled,u as Error,i as Filled,re as __namedExportsOrder,ee as default};
