import{j as u}from"./jsx-runtime-GaRzEz2W.js";import{S as d}from"./SearchField-3Sma4mXT.js";import"./iframe-CBZjcRd8.js";import"./preload-helper-PPVm8Dsz.js";import"./image-DsqMXRQe.js";const{fn:c,userEvent:l,within:p}=__STORYBOOK_MODULE_TEST__,h={title:"Input/SearchField",component:d,parameters:{layout:"centered"},tags:["autodocs"],args:{onChange:c(),onBlur:c(),onFocus:c()},decorators:[e=>u.jsx("div",{style:{width:375,padding:"20px"},children:u.jsx(e,{})})],argTypes:{placeholder:{control:"text"},value:{control:"text"}}},n={args:{placeholder:"제주 지역 또는 장소명 검색"}},t={args:{placeholder:"제주 지역 또는 장소명 검색"},play:async({canvasElement:e})=>{const a=p(e).getByRole("textbox");await l.click(a)}},s={args:{placeholder:"제주 지역 또는 장소명 검색",defaultValue:"애월"},play:async({canvasElement:e})=>{const a=p(e).getByRole("textbox");await l.type(a,"애월")}},r={args:{placeholder:"제주 지역 또는 장소명 검색"},play:async({canvasElement:e})=>{const a=p(e).getByRole("textbox");await l.pointer({keys:"[MouseLeft]",target:a})}},o={args:{placeholder:"제주 지역 또는 장소명 검색",defaultValue:"애월"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const E=["Default","Focused","Typing","Pressed","Filled"];export{n as Default,o as Filled,t as Focused,r as Pressed,s as Typing,E as __namedExportsOrder,h as default};
