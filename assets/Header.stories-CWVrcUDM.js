import{j as e}from"./jsx-runtime-BiUJcBgC.js";import{n as m}from"./image-CaSTLPX6.js";import"./iframe-DDcCWJ9s.js";import"./preload-helper-PPVm8Dsz.js";var p="_7ch7oe0",u="_7ch7oe1",g="_7ch7oe2",h="_7ch7oe3",f="_7ch7oe4";function i({title:c,desc:a,onArrowClick:r,onReClick:o,marginTop:d}){const l=r||o;return e.jsxs("div",{className:p,style:{marginTop:d},children:[e.jsxs("div",{className:u,children:[e.jsx("h2",{className:g,children:c}),l&&e.jsx("button",{className:f,onClick:r||o,"aria-label":r?"더보기":"새로고침",children:e.jsx(m,{src:r?"/assets/icon24/chevron-right.svg":"/assets/icon24/rotate-cw.svg",alt:r?"화살표 아이콘":"새로고침 아이콘",width:24,height:24})})]}),a&&e.jsx("p",{className:h,children:a})]})}i.__docgenInfo={description:"",methods:[],displayName:"Header",props:{title:{required:!0,tsType:{name:"string"},description:"제목"},desc:{required:!1,tsType:{name:"string"},description:"설명"},onArrowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"화살표 클릭 핸들러"},onReClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"새로고침 클릭 핸들러"},marginTop:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"컴포넌트 상단 여백"}}};const{fn:v}=__STORYBOOK_MODULE_TEST__,w={title:"Common/Header",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},desc:{control:"text"},onArrowClick:{action:"arrow clicked"},marginTop:{control:"text"}}},t={args:{title:"진짜 견주가 다녀온 제주 여행!",desc:"15초로 댕댕이와 어디 갈지 고민 끝",onArrowClick:void 0,marginTop:"20px"}},s={args:{title:"진짜 견주가 다녀온 제주 여행!",desc:void 0,onArrowClick:void 0}},n={args:{title:"짖어도 OK! 소음 안심 독채 숙소",onArrowClick:v()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "진짜 견주가 다녀온 제주 여행!",
    desc: "15초로 댕댕이와 어디 갈지 고민 끝",
    onArrowClick: undefined,
    marginTop: "20px"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "진짜 견주가 다녀온 제주 여행!",
    desc: undefined,
    onArrowClick: undefined
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "짖어도 OK! 소음 안심 독채 숙소",
    onArrowClick: fn()
  }
}`,...n.parameters?.docs?.source}}};const O=["Default","TitleOnly","WithArrow"];export{t as Default,s as TitleOnly,n as WithArrow,O as __namedExportsOrder,w as default};
