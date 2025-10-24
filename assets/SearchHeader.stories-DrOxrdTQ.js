import{j as e}from"./jsx-runtime-DilAWgcM.js";import{n as u}from"./image-C-72UcDH.js";import{S as m}from"./SearchField-D8g_K8YR.js";import"./iframe-sH1feWpq.js";import"./preload-helper-PPVm8Dsz.js";var p="src8jj0",h="src8jj1",f={fullWidth:"src8jj3 src8jj2",withBackButton:"src8jj4 src8jj2"},k="src8jj5";function o({backIconHandler:a,backIconColor:i="black",searchFieldProps:l,onClick:n}){const d=i==="white"?"/assets/icon24/arrow-left_line_white.svg":"/assets/icon24/arrow-left_line.svg";return e.jsxs("div",{className:p,children:[a&&e.jsx("button",{className:h,onClick:a,children:e.jsx(u,{src:d,alt:"뒤로가기",width:24,height:24})}),e.jsxs("div",{className:f[a?"withBackButton":"fullWidth"],children:[e.jsx(m,{...l,readOnly:!!n}),n&&e.jsx("div",{className:k,onClick:n})]})]})}o.__docgenInfo={description:"",methods:[],displayName:"SearchHeader",props:{backIconHandler:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"back 아이콘 핸들러: 주면 자동으로 아이콘 노출 + 핸들러 등록"},backIconColor:{required:!1,tsType:{name:"union",raw:'"black" | "white"',elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"white"'}]},description:"back 아이콘 색상",defaultValue:{value:'"black"',computed:!1}},searchFieldProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof SearchField>",elements:[{name:"SearchField"}]},description:"SearchField의 props"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"클릭 핸들러: 전달하면 SearchField가 버튼처럼 동작"}}};const{fn:c}=__STORYBOOK_MODULE_TEST__,S={title:"Molecules/SearchHeader",component:o,parameters:{layout:"centered"},tags:["autodocs"],args:{searchFieldProps:{placeholder:"제주 지역 또는 장소명 검색"}},decorators:[a=>e.jsx("div",{style:{width:375},children:e.jsx(a,{})})]},r={args:{backIconHandler:void 0}},s={args:{backIconHandler:c()}},t={args:{backIconHandler:c(),backIconColor:"white"},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#333"}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const _=["Default","WithBackButton","BackButtonWhite"];export{t as BackButtonWhite,r as Default,s as WithBackButton,_ as __namedExportsOrder,S as default};
