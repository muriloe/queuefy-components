import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-BkoUrVHl.js";import{i as r,n as i,r as a,t as o}from"./toggle-BHmoxF9w.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{s=n(),r(),i(),c=t(),l={title:`Settings/Setting row`,component:a,tags:[`autodocs`],args:{title:`Open picture-in-picture`,description:`Each next video pops out too.`,children:null}},u={render:e=>{let[t,n]=(0,s.useState)(!1);return(0,c.jsx)(`div`,{style:{maxWidth:600},children:(0,c.jsx)(a,{...e,children:(0,c.jsx)(o,{label:`Open picture-in-picture`,checked:t,onChange:n})})})}},d={args:{disabledReason:`Install the extension on this computer to use this setting.`,children:(0,c.jsx)(o,{label:`Open picture-in-picture`,checked:!1,onChange:()=>{},disabled:!0})}},f=[`AutoSaveSwitch`,`Disabled`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <div style={{
      maxWidth: 600
    }}>
        <SettingRow {...args}>
          <Toggle label="Open picture-in-picture" checked={checked} onChange={setChecked} />
        </SettingRow>
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabledReason: "Install the extension on this computer to use this setting.",
    children: <Toggle label="Open picture-in-picture" checked={false} onChange={() => {}} disabled />
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as AutoSaveSwitch,d as Disabled,f as __namedExportsOrder,l as default};