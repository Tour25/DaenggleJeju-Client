import{j as o}from"./jsx-runtime-C-rOzme_.js";import{n as p}from"./image-HAIvf0i9.js";import"./iframe--qV5V2YS.js";import"./preload-helper-CQGs7Tvr.js";var d="_17afx4r0",m="_17afx4r1",u={kakao:"_17afx4r2",naver:"_17afx4r3",google:"_17afx4r4"},g="_17afx4r5";function i({provider:r,title:n,className:c,...l}){return o.jsxs("button",{type:"button",className:[d,u[r],c].filter(Boolean).join(" "),"aria-label":n,...l,children:[o.jsx(p,{src:`/assets/login/${r}.svg`,alt:"",width:24,height:24,className:m,priority:!0}),o.jsx("span",{className:g,children:n})]})}i.__docgenInfo={description:"",methods:[],displayName:"LoginButton",props:{provider:{required:!0,tsType:{name:"literal",value:"`${LOGIN_TYPE}`"},description:""},title:{required:!0,tsType:{name:"string"},description:""}},composes:["Omit"]};var e=(function(r){return r.KAKAO="kakao",r.NAVER="naver",r.GOOGLE="google",r})({});const G={title:"Button/LoginButton",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{provider:{control:"inline-radio",options:[e.KAKAO,e.NAVER,e.GOOGLE]},onClick:{action:"clicked"}},decorators:[r=>o.jsx("div",{style:{width:375},children:o.jsx(r,{})})]},a={args:{provider:e.KAKAO,title:"Kakao로 시작하기"}},t={args:{provider:e.NAVER,title:"Naver로 시작하기"}},s={args:{provider:e.GOOGLE,title:"Google로 시작하기"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    provider: LOGIN_TYPE.KAKAO,
    title: "Kakao로 시작하기"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    provider: LOGIN_TYPE.NAVER,
    title: "Naver로 시작하기"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    provider: LOGIN_TYPE.GOOGLE,
    title: "Google로 시작하기"
  }
}`,...s.parameters?.docs?.source}}};const N=["Kakao","Naver","Google"];export{s as Google,a as Kakao,t as Naver,N as __namedExportsOrder,G as default};
