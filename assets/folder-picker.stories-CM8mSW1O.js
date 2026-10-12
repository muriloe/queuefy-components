import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-BkoUrVHl.js";import{n as r,t as i}from"./folder-picker-DlYjHW8e.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{a=n(),r(),o=t(),s={title:`Folders/Folder picker`,component:i,tags:[`autodocs`],args:{choices:[{id:`inbox`,name:`Recently added`,icon:`inbox`,count:12},{id:`music`,name:`Music`,count:8},{id:`learn`,name:`Learn something`,count:15},{id:`done`,name:`Done`,icon:`check`,count:4},{id:`trash`,name:`Trash`,icon:`trash`,count:1}],onSelect:()=>{}}},c={render:e=>{let[t,n]=(0,a.useState)(`inbox`);return(0,o.jsxs)(`div`,{style:{width:320,maxWidth:`100%`},children:[(0,o.jsx)(i,{...e,selectedId:t,onSelect:n}),(0,o.jsxs)(`p`,{children:[`Selected: `,t]})]})}},l={args:{choices:[]}},u={args:{choices:[{id:`inbox`,name:`Recently added`,disabledReason:`Sign in before saving.`}]}},d=[`SearchFirst`,`Empty`,`Unavailable`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [id, setId] = useState("inbox");
    return <div style={{
      width: 320,
      maxWidth: "100%"
    }}>
        <FolderPicker {...args} selectedId={id} onSelect={setId} />
        <p>Selected: {id}</p>
      </div>;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    choices: []
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    choices: [{
      id: "inbox",
      name: "Recently added",
      disabledReason: "Sign in before saving."
    }]
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as Empty,c as SearchFirst,u as Unavailable,d as __namedExportsOrder,s as default};