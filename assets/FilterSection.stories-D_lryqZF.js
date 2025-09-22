import{j as i}from"./jsx-runtime-CgpeoKLX.js";import{F as d}from"./FilterChipExpand-DhM0Yuvn.js";import{r as p}from"./iframe-BRWoMK0V.js";import"./preload-helper-PPVm8Dsz.js";var u="_17gfkok0",m="_17gfkok1",g="_17gfkok2",k="_17gfkok3";function l({title:n,chips:s,multiSelect:a,selectedChips:o,onChipClick:t}){return i.jsxs("div",{className:u,children:[i.jsxs("div",{className:m,children:[n,i.jsxs("span",{className:g,children:[" ",a?"중복 가능":void 0]})]}),i.jsx("div",{className:k,children:s.map(e=>i.jsx(d,{title:e.title,caption:e.caption,selected:o.includes(e.id),onClick:()=>t(e.id)},e.id))})]})}l.__docgenInfo={description:"",methods:[],displayName:"FilterSection",props:{title:{required:!0,tsType:{name:"string"},description:"섹션 헤더 타이틀"},chips:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: string; title: string; caption?: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"caption",value:{name:"string",required:!1}}]}}],raw:"{ id: string; title: string; caption?: string }[]"},description:"칩 목록 데이터"},multiSelect:{required:!1,tsType:{name:"boolean"},description:"다중 선택 가능 여부"},selectedChips:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"선택된 칩 ID 목록"},onChipClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(chipId: string) => void",signature:{arguments:[{type:{name:"string"},name:"chipId"}],return:{name:"void"}}},description:"칩 클릭 이벤트 핸들러"}}};const{fn:C}=__STORYBOOK_MODULE_TEST__,v={title:"Molecules/FilterSection",component:l,parameters:{layout:"centered"},args:{title:"반려견 크기",multiSelect:!0,chips:[{id:"s1",title:"소형견",caption:"10kg 미만"},{id:"s2",title:"중형견",caption:"10~24kg"},{id:"s3",title:"대형견",caption:"25~44kg"},{id:"s4",title:"초대형견",caption:"45kg 이상"},{id:"s5",title:"모든 크기",caption:"(소형~초대형 모두)"}]},tags:["autodocs"],argTypes:{multiSelect:{control:"boolean"},onChipClick:{action:"onChipClick"},selectedChips:{control:"object"}},decorators:[n=>i.jsx("div",{style:{width:375},children:i.jsx(n,{})})]},h=n=>{const[s,a]=p.useState([]),o=t=>{a(e=>n.multiSelect?e.includes(t)?e.filter(c=>c!==t):[...e,t]:e.includes(t)?[]:[t]),n.onChipClick?.(t)};return i.jsx(l,{...n,selectedChips:s,onChipClick:o})},r={render:h,args:{title:"반려견 크기",multiSelect:!0,chips:[{id:"s1",title:"소형견",caption:"10kg 미만"},{id:"s2",title:"중형견",caption:"10~24kg"},{id:"s3",title:"대형견",caption:"25~44kg"},{id:"s4",title:"초대형견",caption:"45kg 이상"},{id:"s5",title:"모든 크기",caption:"(소형~초대형 모두)"}],selectedChips:[],onChipClick:C()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: InteractiveFilterSection,
  args: {
    title: "반려견 크기",
    multiSelect: true,
    chips: [{
      id: "s1",
      title: "소형견",
      caption: "10kg 미만"
    }, {
      id: "s2",
      title: "중형견",
      caption: "10~24kg"
    }, {
      id: "s3",
      title: "대형견",
      caption: "25~44kg"
    }, {
      id: "s4",
      title: "초대형견",
      caption: "45kg 이상"
    }, {
      id: "s5",
      title: "모든 크기",
      caption: "(소형~초대형 모두)"
    }],
    selectedChips: [],
    onChipClick: fn()
  }
}`,...r.parameters?.docs?.source}}};const S=["Default"];export{r as Default,S as __namedExportsOrder,v as default};
