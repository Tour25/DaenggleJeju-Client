import{j as m}from"./jsx-runtime-CftkWm33.js";import"./iframe-BhUroWvF.js";import"./preload-helper-PPVm8Dsz.js";var I="md6o1v0",v={large:"md6o1v1",medium:"md6o1v2"},T={default:"md6o1v3",active:"md6o1v4",disabled:"md6o1v5",selected:"md6o1v6",primary:"md6o1v7"},x="md6o1v8",s=(function(t){return t.MEDIUM="medium",t.LARGE="large",t})({}),e=(function(t){return t.ACTIVE="active",t.DISABLED="disabled",t.DEFAULT="default",t.SELECTED="selected",t.PRIMARY="primary",t})({});const B={[e.ACTIVE]:"active",[e.DISABLED]:"disabled",[e.DEFAULT]:"default",[e.SELECTED]:"selected",[e.PRIMARY]:"primary"},b={[s.MEDIUM]:"medium",[s.LARGE]:"large"};function p({size:t,status:D,text:S,className:A,disabled:g,...L}){const E=b[t],l=B[D],M=[I,v[E],T[l],A].filter(Boolean).join(" "),z=g||l==="disabled";return m.jsx("button",{type:"button",className:M,disabled:z||void 0,"data-size":E,"data-status":l,...L,children:m.jsx("span",{className:x,children:S})})}p.__docgenInfo={description:"",methods:[],displayName:"Button",props:{size:{required:!0,tsType:{name:"ButtonSize"},description:"button size"},status:{required:!0,tsType:{name:"ButtonStatus"},description:"visual status"},text:{required:!0,tsType:{name:"string"},description:"main label"}},composes:["Omit"]};const C={title:"Button/Button",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"inline-radio",options:["large","medium"],mapping:{large:s.LARGE,medium:s.MEDIUM}},status:{control:"inline-radio",options:["default","active","disabled","selected"],mapping:{default:e.DEFAULT,active:e.ACTIVE,disabled:e.DISABLED,selected:e.SELECTED}},onClick:{action:"clicked"}},decorators:[t=>m.jsx("div",{style:{width:375},children:m.jsx(t,{})})]},a={args:{size:s.LARGE,status:e.DEFAULT,text:"다음"}},r={args:{size:s.LARGE,status:e.ACTIVE,text:"다음"}},o={args:{size:s.LARGE,status:e.DISABLED,text:"다음",disabled:!0}},n={args:{size:s.LARGE,status:e.SELECTED,text:"다음"}},i={args:{size:s.MEDIUM,status:e.DEFAULT,text:"다음"}},d={args:{size:s.MEDIUM,status:e.ACTIVE,text:"다음"}},u={args:{size:s.MEDIUM,status:e.DISABLED,text:"다음",disabled:!0}},c={args:{size:s.MEDIUM,status:e.SELECTED,text:"다음"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: ButtonSize.LARGE,
    status: ButtonStatus.DEFAULT,
    text: "다음"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: ButtonSize.LARGE,
    status: ButtonStatus.ACTIVE,
    text: "다음"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: ButtonSize.LARGE,
    status: ButtonStatus.DISABLED,
    text: "다음",
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: ButtonSize.LARGE,
    status: ButtonStatus.SELECTED,
    text: "다음"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: ButtonSize.MEDIUM,
    status: ButtonStatus.DEFAULT,
    text: "다음"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: ButtonSize.MEDIUM,
    status: ButtonStatus.ACTIVE,
    text: "다음"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: ButtonSize.MEDIUM,
    status: ButtonStatus.DISABLED,
    text: "다음",
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: ButtonSize.MEDIUM,
    status: ButtonStatus.SELECTED,
    text: "다음"
  }
}`,...c.parameters?.docs?.source}}};const y=["Default","Active","Disabled","Selected","MediumDefault","MediumActive","MediumDisabled","MediumSelected"];export{r as Active,a as Default,o as Disabled,d as MediumActive,i as MediumDefault,u as MediumDisabled,c as MediumSelected,n as Selected,y as __namedExportsOrder,C as default};
