import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BkoUrVHl.js";import{i as n,n as r,r as i,t as a}from"./icon-BbyO9P5r.js";import{n as o,t as s}from"./brand-PVwXqAWO.js";import{n as c,t as l}from"./thumbnail-D90fd3ak.js";function u({title:e,value:t,detail:n,icon:r,onOpen:i}){return(0,d.jsxs)(`button`,{className:`qf-stat-card`,onClick:i,children:[(0,d.jsx)(a,{name:r,size:20}),(0,d.jsx)(`span`,{className:`qf-stat-value`,children:t}),(0,d.jsx)(`strong`,{children:e}),(0,d.jsx)(`span`,{className:`qf-muted`,children:n})]})}var d;function f(){return(f=e((()=>{r(),d=t(),u.__docgenInfo={description:``,methods:[],displayName:`StatCard`,props:{title:{required:!0,tsType:{name:`string`},description:``},value:{required:!0,tsType:{name:`string`},description:``},detail:{required:!0,tsType:{name:`string`},description:``},icon:{required:!0,tsType:{name:`union`,raw:`keyof typeof iconMarkup`,elements:[{name:`literal`,value:`folder`},{name:`literal`,value:`check`},{name:`literal`,value:`trash`},{name:`literal`,value:`play`},{name:`literal`,value:`more`},{name:`literal`,value:`grip`},{name:`literal`,value:`up`},{name:`literal`,value:`down`},{name:`literal`,value:`chevR`},{name:`literal`,value:`chevL`},{name:`literal`,value:`link`},{name:`literal`,value:`plus`},{name:`literal`,value:`offline`},{name:`literal`,value:`pause`},{name:`literal`,value:`fwd`},{name:`literal`,value:`sidebar`},{name:`literal`,value:`logo`},{name:`literal`,value:`close`},{name:`literal`,value:`gear`},{name:`literal`,value:`sliders`},{name:`literal`,value:`device`},{name:`literal`,value:`laptop`},{name:`literal`,value:`phone`},{name:`literal`,value:`puzzle`},{name:`literal`,value:`refresh`},{name:`literal`,value:`sync`},{name:`literal`,value:`cloudoff`},{name:`literal`,value:`lock`},{name:`literal`,value:`copy`},{name:`literal`,value:`external`},{name:`literal`,value:`info`},{name:`literal`,value:`warn`},{name:`literal`,value:`star`},{name:`literal`,value:`sparkle`},{name:`literal`,value:`wand`},{name:`literal`,value:`clock`},{name:`literal`,value:`mail`},{name:`literal`,value:`eye`},{name:`literal`,value:`search`},{name:`literal`,value:`pip`},{name:`literal`,value:`stop`},{name:`literal`,value:`next`},{name:`literal`,value:`back`},{name:`literal`,value:`speed`},{name:`literal`,value:`list`},{name:`literal`,value:`globe`},{name:`literal`,value:`palette`},{name:`literal`,value:`user`},{name:`literal`,value:`logout`},{name:`literal`,value:`upload`},{name:`literal`,value:`download`},{name:`literal`,value:`hourglass`},{name:`literal`,value:`xcircle`},{name:`literal`,value:`checkcircle`},{name:`literal`,value:`bell`},{name:`literal`,value:`inbox`},{name:`literal`,value:`playcircle`},{name:`literal`,value:`wave`},{name:`literal`,value:`home`},{name:`literal`,value:`edit`},{name:`literal`,value:`bolt`},{name:`literal`,value:`crown`},{name:`literal`,value:`shield`},{name:`literal`,value:`arrowR`},{name:`literal`,value:`arrowL`},{name:`literal`,value:`chevD`},{name:`literal`,value:`chevU`},{name:`literal`,value:`minus`},{name:`literal`,value:`hamburger`},{name:`literal`,value:`tabs`},{name:`literal`,value:`translate`},{name:`literal`,value:`trashX`},{name:`literal`,value:`restore`},{name:`literal`,value:`youtube`},{name:`literal`,value:`google`}]},description:``},onOpen:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})))()}var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{o(),r(),n(),c(),f(),p=t(),m={title:`Foundations/Library`,component:s,tags:[`autodocs`]},h={},g={args:{compact:!0}},_={render:()=>(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill,minmax(110px,1fr))`,gap:24},children:Object.keys(i).map(e=>(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,fontSize:12},children:[(0,p.jsx)(a,{name:e,size:e===`youtube`||e===`google`?24:16}),e]},e))})},v={render:()=>(0,p.jsxs)(`div`,{className:`qf-inline`,children:[(0,p.jsx)(l,{preview:[`#455448`,`#747c5c`,`#ae9274`,`#48422c`,`#859971`,`#c1c29b`,`#968d73`,`#596248`,`#829070`,`#c4b481`,`#adb697`,`#546545`,`#728054`,`#a4a780`,`#baa579`,`#6c7555`]}),(0,p.jsx)(l,{}),(0,p.jsx)(l,{src:`data:image/png;base64,broken`})]})},y={render:()=>(0,p.jsx)(`div`,{style:{maxWidth:240},children:(0,p.jsx)(u,{title:`Your queue`,value:`24`,detail:`3.2 hours, some durations unknown`,icon:`inbox`,onOpen:()=>{}})})},b=[`Wordmark`,`Compact`,`Icons`,`ArtworkPreview`,`Summary`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    compact: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(110px,1fr))",
    gap: 24
  }}>
      {Object.keys(iconMarkup).map(name => <div key={name} style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 12
    }}>
          <Icon name={name as IconName} size={name === "youtube" || name === "google" ? 24 : 16} />
          {name}
        </div>)}
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="qf-inline">
      <Thumbnail preview={["#455448", "#747c5c", "#ae9274", "#48422c", "#859971", "#c1c29b", "#968d73", "#596248", "#829070", "#c4b481", "#adb697", "#546545", "#728054", "#a4a780", "#baa579", "#6c7555"]} />
      <Thumbnail />
      <Thumbnail src="data:image/png;base64,broken" />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 240
  }}>
      <StatCard title="Your queue" value="24" detail="3.2 hours, some durations unknown" icon="inbox" onOpen={() => {}} />
    </div>
}`,...y.parameters?.docs?.source}}}})))()}x();export{v as ArtworkPreview,g as Compact,_ as Icons,y as Summary,h as Wordmark,b as __namedExportsOrder,m as default};