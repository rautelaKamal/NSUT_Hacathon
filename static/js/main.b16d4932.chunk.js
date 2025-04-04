(this.webpackJsonpkavyapath=this.webpackJsonpkavyapath||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r);a(13),a(14);var s=function(e){let{darkMode:t,toggleDarkMode:a,currentView:n,setCurrentView:r}=e;return l.a.createElement("header",{className:"header "+(t?"dark":"light")},l.a.createElement("div",{className:"logo"},l.a.createElement("h1",null,"\u0915\u0935\u094d\u092f\u092a\u0925"),l.a.createElement("p",null,"A Digital Poetry Platform")),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",{onClick:()=>r("all"),className:"all"===n?"active":""},"\u0938\u0930\u094d\u0935\u092e\u094d (All)"),l.a.createElement("li",{onClick:()=>r("visual"),className:"visual"===n?"active":""},"\u091a\u0915\u094d\u0937\u0941\u0930\u0927\u094d\u092f\u092f\u0928\u092e\u094d (Visual)"),l.a.createElement("li",{onClick:()=>r("audio"),className:"audio"===n?"active":""},"\u0935\u091a\u0928\u0902 \u0936\u094d\u0930\u0935\u0923\u092e\u094d (Audio)"),l.a.createElement("li",{onClick:()=>r("integration"),className:"integration"===n?"active":""},"\u090f\u0915\u0915\u0943\u0924\u092e\u094d (Integration)"),l.a.createElement("li",{onClick:()=>r("transcendence"),className:"transcendence"===n?"active":""},"\u0936\u093f\u0935\u094b\u093d\u0939\u092e\u094d (Transcendence)"),l.a.createElement("li",{onClick:()=>r("memory"),className:"memory"===n?"active":""},"\u0938\u0902\u0917\u094d\u0930\u0939\u0915\u0938\u094d\u092f (Memory)"))),l.a.createElement("button",{className:"theme-toggle",onClick:a},t?"\u2600\ufe0f":"\ud83c\udf19"))};var o=function(e){let{darkMode:t,addMemory:a}=e;const[r,c]=Object(n.useState)([]),[s,o]=Object(n.useState)(""),i=Object(n.useRef)(null);return l.a.createElement("section",{className:"section visual-section "+(t?"dark":"light")},l.a.createElement("div",{className:"section-content"},l.a.createElement("h2",null,"\u091a\u0915\u094d\u0937\u0941\u0930\u0927\u094d\u092f\u092f\u0928\u092e\u094d (Visual Learning)"),l.a.createElement("p",{className:"shloka-meaning"},'"\u0926\u0947\u0916\u0928\u093e \u0905\u0927\u094d\u092f\u092f\u0928 \u0939\u0948" - "Seeing is studying"'),l.a.createElement("div",{className:"visual-upload"},l.a.createElement("h3",null,"Upload Images for Visual Learning"),l.a.createElement("input",{type:"file",accept:"image/*",multiple:!0,onChange:e=>{const t=Array.from(e.target.files).map(e=>new Promise(t=>{const a=new FileReader;a.onload=e=>t(e.target.result),a.readAsDataURL(e)}));Promise.all(t).then(e=>{c([...r,...e])})},ref:i}),l.a.createElement("div",{className:"image-preview"},r.map((e,t)=>l.a.createElement("img",{key:t,src:e,alt:"Upload "+(t+1)}))),l.a.createElement("textarea",{placeholder:"Share your reflections on what you see...",value:s,onChange:e=>{o(e.target.value)},rows:5}),l.a.createElement("button",{className:"save-button",onClick:()=>{r.length>0&&(a({type:"visual",images:r,reflection:s,timestamp:(new Date).toISOString()}),c([]),o(""),i.current&&(i.current.value=""))},disabled:0===r.length},"Save Visual Experience"))))};var i=function(e){let{darkMode:t,addMemory:a}=e;const[r,c]=Object(n.useState)([]),[s,o]=Object(n.useState)(!1),[i,m]=Object(n.useState)(""),d=Object(n.useRef)(null),u=Object(n.useRef)([]);return l.a.createElement("section",{className:"section audio-section "+(t?"dark":"light")},l.a.createElement("div",{className:"section-content"},l.a.createElement("h2",null,"\u0935\u091a\u0928\u0902 \u0936\u094d\u0930\u0935\u0923\u092e\u094d (Audio Learning)"),l.a.createElement("p",{className:"shloka-meaning"},'"\u0938\u0941\u0928\u0928\u093e \u0936\u094d\u0930\u0935\u0923 \u0939\u0948" - "Listening is hearing"'),l.a.createElement("div",{className:"audio-recorder"},l.a.createElement("h3",null,"Record Audio for Learning"),l.a.createElement("div",{className:"recording-controls"},s?l.a.createElement("button",{className:"stop-button",onClick:()=>{d.current&&s&&(d.current.stop(),o(!1))}},"Stop Recording"):l.a.createElement("button",{className:"record-button",onClick:async()=>{try{const e=await navigator.mediaDevices.getUserMedia({audio:!0}),t=new MediaRecorder(e);d.current=t,u.current=[],t.ondataavailable=e=>{e.data.size>0&&u.current.push(e.data)},t.onstop=()=>{const e=new Blob(u.current,{type:"audio/mpeg"}),t=URL.createObjectURL(e);c([...r,t])},t.start(),o(!0)}catch(e){console.error("Error accessing microphone:",e),alert("Could not access microphone. Please check your permissions.")}}},"Start Recording")),l.a.createElement("div",{className:"audio-list"},r.map((e,t)=>l.a.createElement("div",{key:t,className:"audio-item"},l.a.createElement("audio",{controls:!0,src:e}),l.a.createElement("span",null,"Recording ",t+1)))),l.a.createElement("textarea",{placeholder:"Share your reflections on what you hear...",value:i,onChange:e=>{m(e.target.value)},rows:5}),l.a.createElement("button",{className:"save-button",onClick:()=>{r.length>0&&(a({type:"audio",recordings:r,reflection:i,timestamp:(new Date).toISOString()}),c([]),m(""))},disabled:0===r.length},"Save Audio Experience"))))};var m=function(e){let{darkMode:t,memories:a,addMemory:r}=e;const[c,s]=Object(n.useState)(""),[o,i]=Object(n.useState)(null),[m,d]=Object(n.useState)(null),u=a.filter(e=>"visual"===e.type),E=a.filter(e=>"audio"===e.type);return l.a.createElement("section",{className:"section integration-section "+(t?"dark":"light")},l.a.createElement("div",{className:"section-content"},l.a.createElement("h2",null,"\u0938\u0930\u094d\u0935\u092e\u0947\u0915\u0915\u0943\u0924\u092e\u094d (Integration)"),l.a.createElement("p",{className:"shloka-meaning"},'"\u0938\u092c \u0915\u0941\u091b \u090f\u0915\u0940\u0915\u0943\u0924 \u0939\u0948" - "Everything is integrated"'),l.a.createElement("div",{className:"integration-form"},l.a.createElement("h3",null,"Integrate Visual and Audio Experiences"),l.a.createElement("div",{className:"memory-selectors"},l.a.createElement("div",{className:"visual-selector"},l.a.createElement("h4",null,"Select a Visual Memory"),l.a.createElement("div",{className:"memory-grid"},u.length>0?u.map(e=>l.a.createElement("div",{key:e.id,className:"memory-card "+(o===e.id?"selected":""),onClick:()=>i(e.id)},e.images&&e.images[0]&&l.a.createElement("img",{src:e.images[0],alt:"Visual memory"}),l.a.createElement("span",null,new Date(e.timestamp).toLocaleDateString()))):l.a.createElement("p",null,"No visual memories saved yet. Add some in the Visual section."))),l.a.createElement("div",{className:"audio-selector"},l.a.createElement("h4",null,"Select an Audio Memory"),l.a.createElement("div",{className:"memory-grid"},E.length>0?E.map(e=>l.a.createElement("div",{key:e.id,className:"memory-card "+(m===e.id?"selected":""),onClick:()=>d(e.id)},e.recordings&&e.recordings[0]&&l.a.createElement("audio",{controls:!0,src:e.recordings[0]}),l.a.createElement("span",null,new Date(e.timestamp).toLocaleDateString()))):l.a.createElement("p",null,"No audio memories saved yet. Add some in the Audio section.")))),l.a.createElement("textarea",{placeholder:"Reflect on how these experiences connect and integrate...",value:c,onChange:e=>{s(e.target.value)},rows:5}),l.a.createElement("button",{className:"save-button",onClick:()=>{o&&m&&c&&(r({type:"integrated",visualReference:o,audioReference:m,reflection:c,timestamp:(new Date).toISOString()}),i(null),d(null),s(""))},disabled:!o||!m||!c},"Save Integrated Experience"))))};var d=function(e){let{darkMode:t,isActive:a,toggleActive:r}=e;const[c,s]=Object(n.useState)(0),[o,i]=Object(n.useState)(!1),[m,d]=Object(n.useState)(0);return Object(n.useEffect)(()=>{let e=null;return o?e=setInterval(()=>{d(e=>e+1)},1e3):clearInterval(e),()=>clearInterval(e)},[o]),l.a.createElement("section",{className:`section transcendence-section ${t?"dark":"light"} ${a?"transcendence-active":""}`},l.a.createElement("div",{className:"section-content"},l.a.createElement("h2",null,"\u0936\u093f\u0935\u094b\u093d\u0939\u092e\u094d (Transcendence)"),l.a.createElement("p",{className:"shloka-meaning"},'"\u092e\u0948\u0902 \u0936\u0941\u0926\u094d\u0927 \u0906\u0924\u094d\u092e\u093e \u0939\u0942\u0901, \u091c\u094b \u0907\u0928 \u0938\u092c\u0938\u0947 \u092a\u0930\u0947 \u0939\u0948, \u0914\u0930 \u092e\u0948\u0902 \u0939\u0940 \u0936\u093f\u0935 \u0939\u0942\u0901" - "I am pure consciousness, beyond all physical limitations"'),l.a.createElement("button",{className:"transcendence-toggle",onClick:r},a?"Exit Transcendence Mode":"Enter Transcendence Mode"),a&&l.a.createElement("div",{className:"meditation-container"},l.a.createElement("div",{className:"meditation-circle"},l.a.createElement("div",{className:"breath-animation "+(o?"breathing":"")}),l.a.createElement("div",{className:"meditation-stats"},l.a.createElement("p",null,"Time: ",(e=>{const t=e%60;return`${Math.floor(e/60)}:${t<10?"0"+t:t}`})(m)),l.a.createElement("p",null,"Breaths: ",c))),l.a.createElement("div",{className:"meditation-controls"},o?l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"meditation-button breath",onClick:()=>{s(e=>e+1)}},"Record Breath"),l.a.createElement("button",{className:"meditation-button stop",onClick:()=>{i(!1)}},"End Meditation")):l.a.createElement("button",{className:"meditation-button start",onClick:()=>{i(!0),d(0),s(0)}},"Begin Meditation")),l.a.createElement("div",{className:"transcendence-message"},l.a.createElement("p",null,"In this state of meditation, realize that you are beyond physical existence. Not defined by breath (\u092a\u094d\u0930\u093e\u0923), elements (\u0927\u093e\u0924\u0941), or bodily functions. You are pure consciousness (\u091a\u093f\u0926\u093e\u0928\u0928\u094d\u0926) - simply observe and be.")))))};var u=function(e){let{darkMode:t,memories:a,deleteMemory:r}=e;const[c,s]=Object(n.useState)("all"),[o,i]=Object(n.useState)("newest"),m=[...a.filter(e=>"all"===c||e.type===c)].sort((e,t)=>{const a=new Date(e.timestamp),n=new Date(t.timestamp);return"newest"===o?n-a:a-n});return l.a.createElement("section",{className:"section memory-section "+(t?"dark":"light")},l.a.createElement("div",{className:"section-content"},l.a.createElement("h2",null,"\u0938\u0902\u0917\u094d\u0930\u0939\u0915\u0938\u094d\u092f \u092f\u0928\u094d\u0924\u094d\u0930 (Memory Machine)"),l.a.createElement("p",{className:"shloka-meaning"},'"\u0938\u0902\u0917\u094d\u0930\u0939\u0915\u0930\u094d\u0924\u093e \u0915\u0940 \u092e\u0936\u0940\u0928, \u0935\u0930\u094d\u0924\u092e\u093e\u0928 \u0915\u093e \u092a\u0925, \u0906\u0927\u093e\u0930 \u0915\u093e \u0936\u093f\u0932\u094d\u092a" - "The collector\'s machine, the path of the present, the craft of the foundation"'),l.a.createElement("div",{className:"memory-controls"},l.a.createElement("div",{className:"filter-sort"},l.a.createElement("select",{value:c,onChange:e=>s(e.target.value),className:"memory-filter"},l.a.createElement("option",{value:"all"},"All Memories"),l.a.createElement("option",{value:"visual"},"Visual Only"),l.a.createElement("option",{value:"audio"},"Audio Only"),l.a.createElement("option",{value:"integrated"},"Integrated Only")),l.a.createElement("select",{value:o,onChange:e=>i(e.target.value),className:"memory-sort"},l.a.createElement("option",{value:"newest"},"Newest First"),l.a.createElement("option",{value:"oldest"},"Oldest First")))),l.a.createElement("div",{className:"memories-grid"},m.length>0?m.map(e=>l.a.createElement("div",{key:e.id,className:"memory-card "+e.type},l.a.createElement("div",{className:"memory-header"},l.a.createElement("span",{className:"memory-type"},"visual"===e.type&&"\u091a\u0915\u094d\u0937\u0941\u0930\u0927\u094d\u092f\u092f\u0928\u092e\u094d (Visual)","audio"===e.type&&"\u0935\u091a\u0928\u0902 \u0936\u094d\u0930\u0935\u0923\u092e\u094d (Audio)","integrated"===e.type&&"\u0938\u0930\u094d\u0935\u092e\u0947\u0915\u0915\u0943\u0924\u092e\u094d (Integrated)"),l.a.createElement("span",{className:"memory-date"},(e=>{const t=new Date(e);return t.toLocaleDateString()+" "+t.toLocaleTimeString()})(e.timestamp))),l.a.createElement("div",{className:"memory-content"},"visual"===e.type&&e.images&&e.images[0]&&l.a.createElement("div",{className:"memory-images"},l.a.createElement("img",{src:e.images[0],alt:"Visual memory"}),e.images.length>1&&l.a.createElement("span",null,"+",e.images.length-1," more")),"audio"===e.type&&e.recordings&&e.recordings[0]&&l.a.createElement("div",{className:"memory-audio"},l.a.createElement("audio",{controls:!0,src:e.recordings[0]}),e.recordings.length>1&&l.a.createElement("span",null,"+",e.recordings.length-1," more")),"integrated"===e.type&&l.a.createElement("div",{className:"memory-integrated"},l.a.createElement("p",null,"Integrated reflection connecting visual and audio experiences")),e.reflection&&l.a.createElement("div",{className:"memory-reflection"},l.a.createElement("p",null,e.reflection))),l.a.createElement("div",{className:"memory-actions"},l.a.createElement("button",{className:"delete-memory",onClick:()=>r(e.id)},"Delete")))):l.a.createElement("p",{className:"no-memories"},"No memories found. Add some using the sections above."))))};var E=function(e){let{darkMode:t}=e;return l.a.createElement("footer",{className:"footer "+(t?"dark":"light")},l.a.createElement("div",{className:"footer-content"},l.a.createElement("div",{className:"footer-section"},l.a.createElement("h3",null,"\u0915\u0935\u094d\u092f\u092a\u0925 - Kavyapath"),l.a.createElement("p",null,"A Digital Poetry Platform inspired by Sanskrit wisdom")),l.a.createElement("div",{className:"footer-section"},l.a.createElement("h3",null,"Sanskrit Shlokas"),l.a.createElement("p",null,'"\u091a\u0915\u094d\u0937\u0941\u0930\u0927\u094d\u092f\u092f\u0928\u092e\u094d, \u0935\u091a\u0928\u0902 \u0936\u094d\u0930\u0935\u0923\u092e\u094d, \u0938\u0930\u094d\u0935\u092e\u0947\u0915\u0915\u0943\u0924\u092e\u094d"'),l.a.createElement("p",null,'"\u0928 \u091a \u092a\u094d\u0930\u093e\u0923 \u0938\u0902\u091c\u094d\u091e\u094b \u0928 \u0935\u0948 \u092a\u091e\u094d\u091a\u0935\u093e\u092f\u0941..."'),l.a.createElement("p",null,'"\u0938\u0902\u0917\u094d\u0930\u0939\u0915\u0938\u094d\u092f \u092f\u0928\u094d\u0924\u094d\u0930, \u0935\u0930\u094d\u0924\u092e\u093e\u0928\u0938\u094d\u092f \u0917\u0924\u093f, \u0906\u0927\u093e\u0930\u0938\u094d\u092f \u0936\u093f\u0932\u094d\u092a"')),l.a.createElement("div",{className:"footer-section"},l.a.createElement("h3",null,"Created with"),l.a.createElement("p",null,"React \u2022 Poetry \u2022 Ancient Wisdom"),l.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," Kavyapath"))))};var g=function(){const[e,t]=Object(n.useState)(!1),[a,r]=Object(n.useState)([]),[c,g]=Object(n.useState)("all"),[v,p]=Object(n.useState)(!1);Object(n.useEffect)(()=>{const e=localStorage.getItem("kavyapathMemories");e&&r(JSON.parse(e))},[]),Object(n.useEffect)(()=>{localStorage.setItem("kavyapathMemories",JSON.stringify(a))},[a]);const h=e=>{r([...a,{...e,id:Date.now()}])};return l.a.createElement("div",{className:"app "+(e?"dark-mode":"light-mode")},l.a.createElement(s,{darkMode:e,toggleDarkMode:()=>{t(!e)},currentView:c,setCurrentView:g}),("all"===c||"visual"===c)&&l.a.createElement(o,{darkMode:e,addMemory:h}),("all"===c||"audio"===c)&&l.a.createElement(i,{darkMode:e,addMemory:h}),("all"===c||"integration"===c)&&l.a.createElement(m,{darkMode:e,memories:a,addMemory:h}),("all"===c||"transcendence"===c)&&l.a.createElement(d,{darkMode:e,isActive:v,toggleActive:()=>p(!v)}),("all"===c||"memory"===c)&&l.a.createElement(u,{darkMode:e,memories:a,deleteMemory:e=>{r(a.filter(t=>t.id!==e))}}),l.a.createElement(E,{darkMode:e}))};var v=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:c}=t;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null))),v()},4:function(e,t,a){e.exports=a(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.b16d4932.chunk.js.map