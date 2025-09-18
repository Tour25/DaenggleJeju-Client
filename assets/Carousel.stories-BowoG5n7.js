import{j as t}from"./jsx-runtime-RFOrsK3e.js";import{R as m}from"./iframe-BZ4jl8x2.js";import"./preload-helper-PPVm8Dsz.js";var l="_1700c5s0",u="_1700c5s1",g="_1700c5s2";function c({children:a,gap:n=16,itemHeight:i,itemWidth:e,paddingHoriz:o}){return t.jsx("div",{className:l,children:t.jsx("div",{className:u,style:{gap:`${n}px`,paddingLeft:o,paddingRight:o},children:m.Children.map(a,p=>t.jsx("div",{className:g,style:{...i?{height:`${i}px`}:{},...e?{width:`${e}px`}:{}},children:p}))})})}c.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},gap:{required:!1,tsType:{name:"number"},description:"아이템 사이의 간격 (단위: px)",defaultValue:{value:"16",computed:!1}},itemHeight:{required:!1,tsType:{name:"number"},description:"아이템의 높이 (단위: px)"},itemWidth:{required:!1,tsType:{name:"number"},description:"아이템의 너비 (단위: px)"},paddingHoriz:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"컴포넌트 좌우 여백"}}};const d=(a,n=200)=>Array.from({length:a},(i,e)=>t.jsx("div",{style:{backgroundColor:"#ccc",display:"flex",justifyContent:"center",alignItems:"center",color:"#666",fontSize:"16px",borderRadius:"8px",border:"1px solid #ddd"},children:t.jsx("img",{src:`https://placehold.co/${n}x200?text=Item+${e+1}`,alt:`Item ${e+1}`,style:{width:"100%",height:"100%",objectFit:"cover"}})},e)),y={title:"Molecules/Carousel",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{gap:{control:"number",description:"아이템 간의 간격 (px)"},itemHeight:{control:"number",description:"아이템의 높이 (px)"},itemWidth:{control:"number",description:"아이템의 너비 (px)"}}},r={args:{children:d(10,150),gap:16,itemWidth:150,itemHeight:200}},s={args:{children:d(8,200),gap:10,itemHeight:250}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: generateItems(10, 150),
    gap: 16,
    itemWidth: 150,
    itemHeight: 200
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: generateItems(8, 200),
    gap: 10,
    itemHeight: 250
  }
}`,...s.parameters?.docs?.source}}};const b=["Default","WithCustomHeight"];export{r as Default,s as WithCustomHeight,b as __namedExportsOrder,y as default};
