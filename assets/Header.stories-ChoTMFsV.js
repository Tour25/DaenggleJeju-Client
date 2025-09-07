import{j as e}from"./jsx-runtime-CGqWG-oB.js";import{n as l}from"./image-Do-vj_X4.js";import"./iframe-BDqbsAxU.js";import"./preload-helper-D9Z9MdNV.js";var m="_7ch7oe0",p="_7ch7oe1",i="_7ch7oe2",u="_7ch7oe3";function c({title:n,desc:o,onArrowClick:a,marginTop:d}){return e.jsxs("div",{className:m,style:{marginTop:d},children:[a?e.jsxs("button",{className:p,onClick:a,"aria-label":"더보기",children:[e.jsx("h2",{className:i,children:n}),e.jsx(l,{src:"/assets/icon24/chevron-right.svg",alt:"화살표 아이콘",width:24,height:24})]}):e.jsx("h2",{className:i,children:n}),o&&e.jsx("p",{className:u,children:o})]})}c.__docgenInfo={description:"",methods:[],displayName:"Header",props:{title:{required:!0,tsType:{name:"string"},description:"제목"},desc:{required:!1,tsType:{name:"string"},description:"설명"},onArrowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"화살표 클릭 핸들러"},marginTop:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"컴포넌트 상단 여백"}}};const{fn:g}=__STORYBOOK_MODULE_TEST__,T={title:"Common/Header",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},desc:{control:"text"},onArrowClick:{action:"arrow clicked"},marginTop:{control:"text"}}},r={args:{title:"진짜 견주가 다녀온 제주 여행!",desc:"15초로 댕댕이와 어디 갈지 고민 끝",onArrowClick:void 0,marginTop:"20px"}},t={args:{title:"진짜 견주가 다녀온 제주 여행!",desc:void 0,onArrowClick:void 0}},s={args:{title:"짖어도 OK! 소음 안심 독채 숙소",onArrowClick:g()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "진짜 견주가 다녀온 제주 여행!",
    desc: "15초로 댕댕이와 어디 갈지 고민 끝",
    onArrowClick: undefined,
    marginTop: "20px"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "진짜 견주가 다녀온 제주 여행!",
    desc: undefined,
    onArrowClick: undefined
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "짖어도 OK! 소음 안심 독채 숙소",
    onArrowClick: fn()
  }
}`,...s.parameters?.docs?.source}}};const w=["Default","TitleOnly","WithArrow"];export{r as Default,t as TitleOnly,s as WithArrow,w as __namedExportsOrder,T as default};
