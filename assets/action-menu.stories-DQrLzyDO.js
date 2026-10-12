import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{r,t as i}from"./button-2sX3CX4q.js";import{n as a,t as o}from"./action-menu-fHBqgUXK.js";var s,c,l,u,d;function f(){return(f=e((()=>{s=t(),a(),r(),c=n(),l={title:`Overlays/Action menu`,component:o,tags:[`autodocs`],args:{title:`Item actions`,onClose:()=>{},actions:[{label:`Play`,icon:`play`,shortcut:`P`,onSelect:()=>{}},{label:`Move to folder`,icon:`folder`,shortcut:`M`,onSelect:()=>{}},{label:`Mark as done`,icon:`check`,shortcut:`E`,onSelect:()=>{}},{label:`Copy link`,icon:`copy`,onSelect:()=>{}},{label:`Refresh metadata`,icon:`refresh`,disabled:!0,onSelect:()=>{}},{label:`Delete`,icon:`trash`,shortcut:`D`,danger:!0,separated:!0,onSelect:()=>{}}]}},u={render:e=>{let[t,n]=(0,s.useState)(!1),[r,a]=(0,s.useState)(``);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{onClick:()=>n(!0),children:`Open item actions`}),t&&(0,c.jsx)(o,{...e,position:{x:100,y:90},onClose:()=>n(!1),actions:e.actions.map(e=>({...e,onSelect:()=>a(e.label)}))}),(0,c.jsx)(`p`,{role:`status`,children:r})]})}},d=[`KeyboardMenu`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false),
      [action, setAction] = useState("");
    return <>
        <Button onClick={() => setOpen(true)}>Open item actions</Button>
        {open && <ActionMenu {...args} position={{
        x: 100,
        y: 90
      }} onClose={() => setOpen(false)} actions={args.actions.map(item => ({
        ...item,
        onSelect: () => setAction(item.label)
      }))} />}
        <p role="status">{action}</p>
      </>;
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as KeyboardMenu,d as __namedExportsOrder,l as default};