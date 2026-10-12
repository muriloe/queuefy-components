import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./ai-model-card-BYI5C4YS.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{t(),r={title:`Extension/AI model`,component:n,tags:[`autodocs`],args:{status:`available`,progress:0,title:`On-device AI`,statusLabel:`The model is ready on this computer.`,downloadLabel:`Download AI model`,cancelLabel:`Cancel`,helpLabel:`Check Chrome’s requirements`,onDownload(){},onCancel(){}}},i={},a={args:{status:`downloadable`,statusLabel:`Download Chrome’s model to enable local suggestions.`}},o={args:{status:`downloading`,progress:.42,statusLabel:`Downloading model… 42%`}},s={args:{status:`unavailable`,statusLabel:`Manual choices and keyword matching still work.`}},c=[`Ready`,`Download`,`Downloading`,`Unavailable`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: "downloadable",
    statusLabel: "Download Chrome’s model to enable local suggestions."
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "downloading",
    progress: 0.42,
    statusLabel: "Downloading model… 42%"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: "unavailable",
    statusLabel: "Manual choices and keyword matching still work."
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{a as Download,o as Downloading,i as Ready,s as Unavailable,c as __namedExportsOrder,r as default};