import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u,u as d}from"./device-row-D27WeNh-.js";var f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{s(),d(),i(),o(),r(),f=t(),p={title:`Feedback/Sync status`,component:n,tags:[`autodocs`],args:{online:!0,pending:0,blocked:!1,label:`All changes synced`,onOpen:()=>{}}},m={},h={args:{online:!1,pending:3,label:`Offline · changes kept here`}},g={args:{blocked:!0,pending:2,label:`Changes need attention`}},_={args:{pending:3,label:`Syncing 3 changes…`}},v={render:()=>(0,f.jsx)(a,{title:`Make a little room for later.`,description:`Add a link. Your next good watch starts here.`})},y={render:()=>(0,f.jsx)(`ul`,{style:{padding:0},children:(0,f.jsx)(c,{title:`Move items`,message:`The destination folder was removed on another device.`,attemptsLabel:`12 attempts`,retryLabel:`Retry`,discardLabel:`Discard`,sending:!1,onRetry:()=>{},onDiscard:()=>{}})})},b={render:()=>(0,f.jsx)(u,{name:`Chrome · Mac`,generatedName:`Purple Zebra 204`,status:`Online · plays media`,role:`executor`,selected:!0,selectLabel:`Play here`,onSelect:()=>{}})},x={render:()=>(0,f.jsx)(l,{message:`Moved to Trash`,actionLabel:`Undo`,onAction:()=>{},progress:.6})},S=[`Synced`,`Offline`,`Blocked`,`Waiting`,`Empty`,`FailedAction`,`Device`,`UndoToast`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    online: false,
    pending: 3,
    label: "Offline · changes kept here"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    blocked: true,
    pending: 2,
    label: "Changes need attention"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    pending: 3,
    label: "Syncing 3 changes…"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <EmptyState title="Make a little room for later." description="Add a link. Your next good watch starts here." />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ul style={{
    padding: 0
  }}>
      <PendingActionRow title="Move items" message="The destination folder was removed on another device." attemptsLabel="12 attempts" retryLabel="Retry" discardLabel="Discard" sending={false} onRetry={() => {}} onDiscard={() => {}} />
    </ul>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <DeviceRow name="Chrome · Mac" generatedName="Purple Zebra 204" status="Online · plays media" role="executor" selected selectLabel="Play here" onSelect={() => {}} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Toast message="Moved to Trash" actionLabel="Undo" onAction={() => {}} progress={0.6} />
}`,...x.parameters?.docs?.source}}}})))()}C();export{g as Blocked,b as Device,v as Empty,y as FailedAction,h as Offline,m as Synced,x as UndoToast,_ as Waiting,S as __namedExportsOrder,p as default};