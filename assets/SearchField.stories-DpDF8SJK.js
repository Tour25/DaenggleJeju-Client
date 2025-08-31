import{j as u}from"./jsx-runtime-C-MUwnpA.js";import{f as c,w as l,u as p}from"./index-C05L6HUw.js";import{S as d}from"./SearchField-CxEbrveL.js";import"./iframe-7y5ZWx-m.js";import"./preload-helper-D9Z9MdNV.js";import"./image-ClD1LWYp.js";const f={title:"Input/SearchField",component:d,parameters:{layout:"centered"},tags:["autodocs"],args:{onChange:c(),onBlur:c(),onFocus:c()},decorators:[e=>u.jsx("div",{style:{width:375,padding:"20px"},children:u.jsx(e,{})})],argTypes:{placeholder:{control:"text"},value:{control:"text"}}},n={args:{placeholder:"제주 지역 또는 장소명 검색"}},t={args:{placeholder:"제주 지역 또는 장소명 검색"},play:async({canvasElement:e})=>{const a=l(e).getByRole("textbox");await p.click(a)}},s={args:{placeholder:"제주 지역 또는 장소명 검색",defaultValue:"애월"},play:async({canvasElement:e})=>{const a=l(e).getByRole("textbox");await p.type(a,"애월")}},r={args:{placeholder:"제주 지역 또는 장소명 검색"},play:async({canvasElement:e})=>{const a=l(e).getByRole("textbox");await p.pointer({keys:"[MouseLeft]",target:a})}},o={args:{placeholder:"제주 지역 또는 장소명 검색",defaultValue:"애월"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "제주 지역 또는 장소명 검색"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "제주 지역 또는 장소명 검색"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.click(input);
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "제주 지역 또는 장소명 검색",
    defaultValue: "애월"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.type(input, "애월");
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "제주 지역 또는 장소명 검색"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.pointer({
      keys: "[MouseLeft]",
      target: input
    });
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "제주 지역 또는 장소명 검색",
    defaultValue: "애월"
  }
}`,...o.parameters?.docs?.source}}};const w=["Default","Focused","Typing","Pressed","Filled"];export{n as Default,o as Filled,t as Focused,r as Pressed,s as Typing,w as __namedExportsOrder,f as default};
