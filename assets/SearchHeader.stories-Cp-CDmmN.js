import{j as e}from"./jsx-runtime-BWu1kHaf.js";import{n as d}from"./image-Cyqetlp2.js";import{S as u}from"./SearchField-D1HTCDwf.js";import"./iframe-r3xvHQKk.js";import"./preload-helper-D9Z9MdNV.js";var m="src8jj0",p="src8jj1",h={fullWidth:"src8jj3 src8jj2",withBackButton:"src8jj4 src8jj2"};function n({backIconHandler:a,backIconColor:c="black",searchFieldProps:i}){const l=c==="white"?"/assets/icon24/arrow-left_line_white.svg":"/assets/icon24/arrow-left_line.svg";return e.jsxs("div",{className:m,children:[a&&e.jsx("button",{className:p,onClick:a,children:e.jsx(d,{src:l,alt:"뒤로가기",width:24,height:24})}),e.jsx("div",{className:h[a?"withBackButton":"fullWidth"],children:e.jsx(u,{...i})})]})}n.__docgenInfo={description:"",methods:[],displayName:"SearchHeader",props:{backIconHandler:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"back 아이콘 핸들러: 주면 자동으로 아이콘 노출 + 핸들러 등록"},backIconColor:{required:!1,tsType:{name:"union",raw:'"black" | "white"',elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"white"'}]},description:"back 아이콘 색상",defaultValue:{value:'"black"',computed:!1}},searchFieldProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof SearchField>",elements:[{name:"SearchField"}]},description:"SearchField의 props"}}};const{fn:o}=__STORYBOOK_MODULE_TEST__,v={title:"Molecules/SearchHeader",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{searchFieldProps:{placeholder:"제주 지역 또는 장소명 검색"}},decorators:[a=>e.jsx("div",{style:{width:375},children:e.jsx(a,{})})]},r={args:{backIconHandler:void 0}},s={args:{backIconHandler:o()}},t={args:{backIconHandler:o(),backIconColor:"white"},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#333"}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    backIconHandler: undefined
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    backIconHandler: fn()
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    backIconHandler: fn(),
    backIconColor: "white"
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{
        name: "dark",
        value: "#333"
      }]
    }
  }
}`,...t.parameters?.docs?.source}}};const w=["Default","WithBackButton","BackButtonWhite"];export{t as BackButtonWhite,r as Default,s as WithBackButton,w as __namedExportsOrder,v as default};
