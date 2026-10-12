import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-BkoUrVHl.js";function r({label:e,choices:t,value:n,onChange:r}){return(0,i.jsx)(`div`,{className:`qf-color-palette`,role:`group`,"aria-label":e,children:t.map(e=>(0,i.jsx)(`button`,{type:`button`,title:e.label,"aria-label":e.label,"aria-pressed":e.value.toLowerCase()===n.toLowerCase(),disabled:e.disabled,style:{background:e.value},onClick:()=>r(e.value)},e.value))})}var i;function a(){return(a=e((()=>{i=t(),r.__docgenInfo={description:``,methods:[],displayName:`ColorPalette`,props:{label:{required:!0,tsType:{name:`string`},description:``},choices:{required:!0,tsType:{name:`unknown`},description:``},value:{required:!0,tsType:{name:`string`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(color: string) => void`,signature:{arguments:[{type:{name:`string`},name:`color`}],return:{name:`void`}}},description:``}}}})))()}var o,s,c,l,u,d,f;function p(){return(p=e((()=>{o=n(),a(),s=t(),c=[{label:`QueueFy`,value:`#904b40`},{label:`Ocean`,value:`#1d5e8c`},{label:`Forest`,value:`#3d6b4a`},{label:`Sunset`,value:`#b8663a`},{label:`Lavender`,value:`#6d5aa3`},{label:`Slate`,value:`#4a5a6b`}],l={title:`Settings/Color palette`,component:r,tags:[`autodocs`],args:{label:`Theme color`,choices:c,value:`#904b40`,onChange(){}}},u={render(e){let[t,n]=(0,o.useState)(e.value);return(0,s.jsx)(r,{...e,value:t,onChange:n})}},d={args:{choices:c.map((e,t)=>({...e,disabled:t>0}))}},f=[`SelectColor`,`LimitedPlan`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [value, setValue] = useState(args.value);
    return <ColorPalette {...args} value={value} onChange={setValue} />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    choices: choices.map((choice, index) => ({
      ...choice,
      disabled: index > 0
    }))
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as LimitedPlan,u as SelectColor,f as __namedExportsOrder,l as default};