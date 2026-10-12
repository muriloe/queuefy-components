import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./color-palette-CvWv7X2e.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{a=t(),r(),o=n(),s=[{label:`QueueFy`,value:`#904b40`},{label:`Ocean`,value:`#1d5e8c`},{label:`Forest`,value:`#3d6b4a`},{label:`Sunset`,value:`#b8663a`},{label:`Lavender`,value:`#6d5aa3`},{label:`Slate`,value:`#4a5a6b`}],c={title:`Settings/Color palette`,component:i,tags:[`autodocs`],args:{label:`Theme color`,choices:s,value:`#904b40`,onChange(){}}},l={render(e){let[t,n]=(0,a.useState)(e.value);return(0,o.jsx)(i,{...e,value:t,onChange:n})}},u={args:{choices:s.map((e,t)=>({...e,disabled:t>0}))}},d=[`SelectColor`,`LimitedPlan`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [value, setValue] = useState(args.value);
    return <ColorPalette {...args} value={value} onChange={setValue} />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    choices: choices.map((choice, index) => ({
      ...choice,
      disabled: index > 0
    }))
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as LimitedPlan,l as SelectColor,d as __namedExportsOrder,c as default};