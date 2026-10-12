import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{r,t as i}from"./button-2sX3CX4q.js";import{n as a,t as o}from"./modal-CciCAqca.js";var s,c,l,u,d;function f(){return(f=e((()=>{s=t(),a(),r(),c=n(),l={title:`Overlays/Modal`,component:o,tags:[`autodocs`],args:{title:`Delete forever?`,onClose:()=>{},children:`This item will be permanently removed. This cannot be undone.`}},u={render:e=>{let[t,n]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{onClick:()=>n(!0),children:`Open confirmation`}),t&&(0,c.jsx)(o,{...e,onClose:()=>n(!1),footer:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{onClick:()=>n(!1),children:`Cancel`}),(0,c.jsx)(i,{variant:`danger`,onClick:()=>n(!1),children:`Delete forever`})]})})]})}},d=[`Confirmation`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open confirmation</Button>
        {open && <Modal {...args} onClose={() => setOpen(false)} footer={<>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button variant="danger" onClick={() => setOpen(false)}>
                  Delete forever
                </Button>
              </>} />}
      </>;
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Confirmation,d as __namedExportsOrder,l as default};