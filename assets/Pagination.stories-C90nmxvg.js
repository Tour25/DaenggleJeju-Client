import{j as o}from"./jsx-runtime-WcuYolSS.js";import{r as u}from"./iframe-DjuOFIyK.js";import"./preload-helper-PPVm8Dsz.js";var c="_17dr5rr0",m="_17dr5rr1",p="_17dr5rr2";function s({currentPage:e,totalPages:a,onPageChange:t}){if(a<=1)return null;const g=Array.from({length:a},(r,i)=>i+1);return o.jsx("nav",{className:c,"aria-label":"페이지네이션",children:g.map(r=>o.jsx("button",{className:`${m} ${e===r?p:""}`,onClick:()=>t(r),"aria-current":e===r?"page":void 0},r))})}s.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:"현재 페이지"},totalPages:{required:!0,tsType:{name:"number"},description:"전체 페이지 수"},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"페이지 변경 핸들러"}}};const f={title:"common/Pagination",component:s,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{currentPage:1,totalPages:5,onPageChange:()=>{}},render:e=>{const[a,t]=u.useState(e.currentPage);return o.jsx(s,{...e,currentPage:a,onPageChange:t})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 5,
    onPageChange: () => {}
  },
  render: args => {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  }
}`,...n.parameters?.docs?.source}}};const h=["Default"];export{n as Default,h as __namedExportsOrder,f as default};
