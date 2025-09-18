import{j as e}from"./jsx-runtime-umi0XAHA.js";import{n as v}from"./image-vALkEAEJ.js";import{u as d}from"./iframe-BBltwebj.js";import"./preload-helper-PPVm8Dsz.js";var g="_16fhpz40",m="_16fhpz41",l="_16fhpz43 _16fhpz42",u="_16fhpz44 _16fhpz42";const h=[{id:"near",text:"내근처",iconFill:"/assets/nav/map_active.svg",iconLine:"/assets/nav/map.svg",path:"/map"},{id:"dangle",text:"댕글영상",iconFill:"/assets/nav/video_active.svg",iconLine:"/assets/nav/video.svg",path:"/shorts"},{id:"ai",text:"AI여행케어",iconFill:"/assets/nav/ai_active.svg",iconLine:"/assets/nav/ai.svg",path:"/chat"},{id:"jeju",text:"제주이동",iconFill:"/assets/nav/move_active.svg",iconLine:"/assets/nav/move.svg",path:"/jeju"},{id:"my",text:"마이",iconFill:"/assets/nav/my_active.svg",iconLine:"/assets/nav/my.svg",path:"/my"}];function i({activePage:c}){const p=d();return e.jsx("nav",{className:g,children:h.map(a=>e.jsxs("button",{className:m,onClick:()=>p.push(a.path),children:[e.jsx(v,{src:c===a.id?a.iconFill:a.iconLine,alt:a.text,width:24,height:24}),e.jsx("span",{className:c===a.id?u:l,children:a.text})]},a.id))})}i.__docgenInfo={description:"",methods:[],displayName:"NavBar",props:{activePage:{required:!0,tsType:{name:'unknown[number]["id"]',raw:'(typeof NAV_ITEMS)[number]["id"]'},description:"현재 활성화된 페이지를 나타내는 식별자"}}};const y={title:"Navigation/NavBar",component:i,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{activePage:{control:"radio",options:["near","dangle","ai","search","my"]}}},s={args:{activePage:"near"}},r={args:{activePage:"dangle"}},t={args:{activePage:"ai"}},n={args:{activePage:"jeju"}},o={args:{activePage:"my"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    activePage: "near"
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    activePage: "dangle"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    activePage: "ai"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    activePage: "jeju"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    activePage: "my"
  }
}`,...o.parameters?.docs?.source}}};const N=["Near","Dangle","AI","Search","My"];export{t as AI,r as Dangle,o as My,s as Near,n as Search,N as __namedExportsOrder,y as default};
