import{j as n}from"./jsx-runtime-aPIVv175.js";import{r as g}from"./iframe-OrTElwF4.js";import"./preload-helper-PPVm8Dsz.js";var b="r8myna0",m={default:"r8myna1",selected:"r8myna2",disabled:"r8myna3"},y="r8myna4",x="r8myna5";function u({title:o,desc:d,selected:t=!1,disabled:a=!1,className:e,onClick:s,...p}){const f=[b,t?m.selected:m.default,a?m.disabled:"",e].filter(Boolean).join(" ");return n.jsxs("button",{type:"button",className:f,disabled:a,onClick:s,role:"checkbox","aria-checked":t,"data-selected":t||void 0,...p,children:[n.jsx("span",{className:y,children:o}),d?n.jsx("span",{className:x,children:d}):null]})}u.__docgenInfo={description:"",methods:[],displayName:"Location",props:{title:{required:!0,tsType:{name:"string"},description:"상단 굵은 타이틀"},desc:{required:!1,tsType:{name:"string"},description:"하단 보조 설명(선택)"},selected:{required:!1,tsType:{name:"boolean"},description:"선택 상태 (다중 선택 가능 시 외부에서 관리)",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const{fn:S}=__STORYBOOK_MODULE_TEST__,h={title:"Button/Location",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},desc:{control:"text"},selected:{control:"boolean"},disabled:{control:"boolean"},onClick:{action:"clicked"}},args:{title:"기본 타이틀",desc:"기본 설명",onClick:S()}},r={args:{title:"제주 전체",desc:"제주 전지역",selected:!1,disabled:!1}},i={args:{title:"제주시(도심)",desc:"공항·쇼핑·맛집·야경",selected:!0}},l={args:{title:"안덕/대정",desc:"산방산·해안·마라도",disabled:!0}},c={args:{},render:()=>{const o=[{id:1,title:"제주 전체",desc:"제주 전지역"},{id:2,title:"제주시(도심)",desc:"공항·쇼핑·맛집·야경"},{id:3,title:"애월/한림/한경",desc:"바다·카페·노을"},{id:4,title:"조천/구좌/우도",desc:"해변·자연·드라이브"},{id:5,title:"서귀포시(중문)",desc:"리조트·폭포·올레길"},{id:6,title:"성산/표선/남원",desc:"일출·해변·해녀"},{id:7,title:"안덕/대정",desc:"산방산·해안·마라도"}],[d,t]=g.useState([1]),a=e=>t(s=>s.includes(e)?s.filter(p=>p!==e):[...s,e]);return n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",width:375},children:o.map(e=>n.jsx(u,{title:e.title,desc:e.desc,selected:d.includes(e.id),onClick:()=>a(e.id)},e.id))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "제주 전체",
    desc: "제주 전지역",
    selected: false,
    disabled: false
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "제주시(도심)",
    desc: "공항·쇼핑·맛집·야경",
    selected: true
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "안덕/대정",
    desc: "산방산·해안·마라도",
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const items = [{
      id: 1,
      title: "제주 전체",
      desc: "제주 전지역"
    }, {
      id: 2,
      title: "제주시(도심)",
      desc: "공항·쇼핑·맛집·야경"
    }, {
      id: 3,
      title: "애월/한림/한경",
      desc: "바다·카페·노을"
    }, {
      id: 4,
      title: "조천/구좌/우도",
      desc: "해변·자연·드라이브"
    }, {
      id: 5,
      title: "서귀포시(중문)",
      desc: "리조트·폭포·올레길"
    }, {
      id: 6,
      title: "성산/표선/남원",
      desc: "일출·해변·해녀"
    }, {
      id: 7,
      title: "안덕/대정",
      desc: "산방산·해안·마라도"
    }];
    const [selected, setSelected] = useState<number[]>([1]);
    const toggle = (id: number) => setSelected(prev => prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]);
    return <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "16px",
      width: 375
    }}>
        {items.map(it => <Location key={it.id} title={it.title} desc={it.desc} selected={selected.includes(it.id)} onClick={() => toggle(it.id)} />)}
      </div>;
  }
}`,...c.parameters?.docs?.source}}};const j=["Default","Selected","Disabled","GridSelectable"];export{r as Default,l as Disabled,c as GridSelectable,i as Selected,j as __namedExportsOrder,h as default};
