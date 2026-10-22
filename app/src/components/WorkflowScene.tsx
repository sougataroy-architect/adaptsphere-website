import { useId } from "react";

const labels = [
  ["Source files", "Extract fields", "Draft for review"],
  ["Approved sources", "Access check", "Cited answer"],
  ["Requested change", "Human decision", "System updated"],
];

/** Three distinct workflow examples. These are illustrative patterns, not client deployments. */
export function WorkflowScene({ variant = 0, mode = "example" }: { variant?: number; mode?: "example" | "delivery" }) {
  const id = useId().replace(/:/g, "");
  if (mode === "delivery") return <DeliveryWorkflowScene variant={variant} id={id}/>;
  const title = [
    "Invoice details extracted into a draft that a person reviews",
    "An employee question is answered only from permitted sources, with citations",
    "A proposed customer-record change pauses for approval before the system is updated",
  ][variant];
  const [source, gate, outcome] = labels[variant];

  return (
    <svg className={`workflow-scene workflow-scene-${variant}`} viewBox="0 0 600 300" role="img" aria-labelledby={`${id}-title`}>
      <title id={`${id}-title`}>{title}</title>
      <defs>
        <linearGradient id={`${id}-canvas`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fbfaf5"/><stop offset="1" stopColor="#e7ebdc"/></linearGradient>
        <linearGradient id={`${id}-card`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fffefa"/><stop offset="1" stopColor="#f4f3e9"/></linearGradient>
        <filter id={`${id}-shadow`} x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#455b4c" floodOpacity=".12"/></filter>
        <marker id={`${id}-arrow`} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#66816d"/></marker>
      </defs>
      <rect x="10" y="12" width="580" height="276" rx="22" fill={`url(#${id}-canvas)`}/>
      <path d="M33 239 H568" stroke="#aab59d" strokeWidth="1" opacity=".55"/>

      {variant === 0 && <g stroke="#52745b" strokeWidth="2" strokeLinejoin="round">
        {/* Incoming invoice stack */}
        <g filter={`url(#${id}-shadow)`}>
          <path d="M58 83 l82 -18 22 17 v112 l-82 18 -22 -17z" fill="#dce3d2"/>
          <path d="M74 66 l82 -18 22 17 v112 l-82 18 -22 -17z" fill={`url(#${id}-card)`}/>
          <path d="M156 48 v26 l22 -9 M92 91 l48 -11 M92 108 l48 -11 M92 125 l34 -8" fill="none" stroke="#8c9d87"/>
          <path d="M98 147 h44 v22 h-44z" fill="#e7edba" stroke="#bac095"/>
          <path d="M107 158 h26" stroke="#71836e"/>
        </g>
        <path d="M188 128 C220 128 226 128 249 128" fill="none" stroke="#8c9d87" strokeDasharray="5 6" markerEnd={`url(#${id}-arrow)`}/>
        {/* Extraction fields */}
        <g filter={`url(#${id}-shadow)`}>
          <rect x="258" y="74" width="128" height="111" rx="15" fill={`url(#${id}-card)`}/>
          <text x="322" y="98" textAnchor="middle" fill="#607564" stroke="none" fontSize="11" fontFamily="inherit" fontWeight="700" letterSpacing="1.2">EXTRACTED FIELDS</text>
          <path d="M278 114 h47 M278 132 h70 M278 150 h57" stroke="#9cac95" strokeWidth="3" strokeLinecap="round"/>
          <rect x="335" y="108" width="34" height="13" rx="6" fill="#e7edba" stroke="none"/>
          <rect x="353" y="127" width="18" height="13" rx="6" fill="#dcebe5" stroke="none"/>
        </g>
        <path d="M386 128 C411 128 418 128 440 128" fill="none" stroke="#8c9d87" strokeDasharray="5 6" markerEnd={`url(#${id}-arrow)`}/>
        {/* Human sees and reviews a draft */}
        <g filter={`url(#${id}-shadow)`}>
          <rect x="450" y="70" width="104" height="120" rx="14" fill={`url(#${id}-card)`}/>
          <path d="M450 94 h104"/>
          <circle cx="466" cy="82" r="3" fill="#c88557" stroke="none"/><circle cx="477" cy="82" r="3" fill="#d4b15a" stroke="none"/>
          <path d="M467 112 h67 M467 128 h58 M467 145 h44" stroke="#a2ad93" strokeWidth="3" strokeLinecap="round"/>
          <rect x="467" y="157" width="66" height="20" rx="10" fill="#e9eddf" stroke="#bac095"/>
          <path d="M477 167 l5 5 10 -11" stroke="#52745b" fill="none"/>
          <text x="512" y="171" textAnchor="middle" fill="#435a49" stroke="none" fontSize="8" fontFamily="inherit" fontWeight="700">REVIEW</text>
        </g>
      </g>}

      {variant === 1 && <g stroke="#52745b" strokeWidth="2" strokeLinejoin="round">
        {/* Sources with permission scope */}
        <g filter={`url(#${id}-shadow)`}>
          <rect x="43" y="78" width="120" height="112" rx="15" fill={`url(#${id}-card)`}/>
          <path d="M43 106 h120"/>
          <circle cx="59" cy="92" r="4" fill="#6389a0"/><circle cx="73" cy="92" r="4" fill="#bac095"/>
          <path d="M61 126 h77 M61 143 h64 M61 160 h53" stroke="#9cac95" strokeWidth="3" strokeLinecap="round"/>
          <rect x="58" y="169" width="83" height="15" rx="7" fill="#e7edba" stroke="none"/>
          <text x="99" y="180" textAnchor="middle" fill="#53684f" stroke="none" fontSize="8" fontFamily="inherit" fontWeight="700">PERMITTED FILES</text>
        </g>
        <path d="M164 135 H208" fill="none" stroke="#8c9d87" strokeDasharray="5 6" markerEnd={`url(#${id}-arrow)`}/>
        {/* Identity gate */}
        <g filter={`url(#${id}-shadow)`}>
          <path d="M247 74 l44 17 v37 c0 32 -21 48 -44 59 -23 -11 -44 -27 -44 -59 V91z" fill="#e5ead7"/>
          <circle cx="247" cy="120" r="20" fill="#fffdf7" stroke="#bac095"/>
          <path d="M247 107 v26 M234 120 h26" stroke="#52745b" strokeWidth="3" strokeLinecap="round"/>
          <text x="247" y="207" textAnchor="middle" fill="#435a49" stroke="none" fontSize="10" fontFamily="inherit" fontWeight="700">ACCESS CHECK</text>
        </g>
        <path d="M292 135 H337" fill="none" stroke="#8c9d87" strokeDasharray="5 6" markerEnd={`url(#${id}-arrow)`}/>
        {/* Answer with grounded citations */}
        <g filter={`url(#${id}-shadow)`}>
          <rect x="348" y="64" width="204" height="143" rx="16" fill={`url(#${id}-card)`}/>
          <path d="M348 94 h204"/>
          <circle cx="365" cy="79" r="4" fill="#6389a0"/><circle cx="379" cy="79" r="4" fill="#bac095"/>
          <path d="M369 116 h149 M369 133 h121 M369 150 h139" stroke="#a2ad93" strokeWidth="3" strokeLinecap="round"/>
          <rect x="369" y="167" width="116" height="24" rx="7" fill="#e5edf0" stroke="#8baaba"/>
          <path d="M381 179 h13" stroke="#6389a0" strokeWidth="3"/><text x="439" y="183" textAnchor="middle" fill="#355e72" stroke="none" fontSize="9" fontFamily="inherit" fontWeight="700">2 SOURCES CITED</text>
          <circle cx="526" cy="178" r="13" fill="#edf0e3" stroke="#bac095"/><path d="M519 178 l5 5 9 -11" fill="none" strokeWidth="2.5"/>
        </g>
      </g>}

      {variant === 2 && <g stroke="#52745b" strokeWidth="2" strokeLinejoin="round">
        {/* Change request */}
        <g filter={`url(#${id}-shadow)`}>
          <rect x="39" y="81" width="130" height="106" rx="15" fill={`url(#${id}-card)`}/>
          <path d="M39 109 h130"/><circle cx="55" cy="95" r="4" fill="#6389a0"/><circle cx="69" cy="95" r="4" fill="#bac095"/>
          <text x="104" y="132" textAnchor="middle" fill="#607564" stroke="none" fontSize="9" fontFamily="inherit" fontWeight="700" letterSpacing=".7">CHANGE REQUEST</text>
          <path d="M58 150 h47 M58 166 h78" stroke="#9cac95" strokeWidth="3" strokeLinecap="round"/>
          <rect x="117" y="143" width="37" height="24" rx="6" fill="#f2e4d8" stroke="#cc8a64"/><path d="M128 155 h15" stroke="#b97753"/>
        </g>
        <path d="M170 135 H218" fill="none" stroke="#8c9d87" strokeDasharray="5 6" markerEnd={`url(#${id}-arrow)`}/>
        {/* Actual human approval gate */}
        <g filter={`url(#${id}-shadow)`}>
          <rect x="226" y="56" width="156" height="158" rx="20" fill="#fffdf7" stroke="#d8c98b" strokeDasharray="6 5"/>
          <circle cx="304" cy="99" r="25" fill="#f1e3bc" stroke="#c7a85c"/>
          <path d="M288 137 q16 -15 32 0 v18 h-32z" fill="#52745b" stroke="none"/>
          <circle cx="304" cy="92" r="10" fill="#fffdf7" stroke="#52745b"/>
          <rect x="247" y="165" width="114" height="30" rx="15" fill="#f2e9c9" stroke="#c7a85c"/>
          <text x="304" y="184" textAnchor="middle" fill="#715b2b" stroke="none" fontSize="9" fontFamily="inherit" fontWeight="700">PERSON DECIDES</text>
        </g>
        {/* Branches: approve or block */}
        <path d="M382 108 C410 108 412 88 437 88" fill="none" stroke="#66816d" strokeWidth="3" markerEnd={`url(#${id}-arrow)`}/>
        <path d="M382 166 C410 166 412 192 437 192" fill="none" stroke="#c16d57" strokeWidth="3" strokeDasharray="6 5"/>
        <g filter={`url(#${id}-shadow)`}>
          <rect x="447" y="58" width="111" height="62" rx="13" fill="#e8efe1" stroke="#81987c"/>
          <circle cx="469" cy="89" r="12" fill="#52745b" stroke="none"/><path d="M463 89 l4 4 8 -9" stroke="#fffdf7" fill="none" strokeWidth="2.5"/>
          <text x="513" y="86" textAnchor="middle" fill="#435a49" stroke="none" fontSize="9" fontFamily="inherit" fontWeight="700">APPROVED</text>
          <text x="513" y="101" textAnchor="middle" fill="#607564" stroke="none" fontSize="8" fontFamily="inherit">update record</text>
          <rect x="447" y="160" width="111" height="62" rx="13" fill="#f4e5df" stroke="#c9826d"/>
          <circle cx="469" cy="191" r="12" fill="#c16d57" stroke="none"/><path d="M465 187 l8 8 m0 -8 l-8 8" stroke="#fffdf7" fill="none" strokeWidth="2.5"/>
          <text x="513" y="188" textAnchor="middle" fill="#794a3e" stroke="none" fontSize="9" fontFamily="inherit" fontWeight="700">DECLINED</text>
          <text x="513" y="203" textAnchor="middle" fill="#794a3e" stroke="none" fontSize="8" fontFamily="inherit">no change</text>
        </g>
      </g>}

      <g fill="#435a49" fontFamily="inherit" fontSize="18" fontWeight="600" textAnchor="middle">
        <text x="104" y="260">{source}</text><text x="300" y="260">{gate}</text><text x="500" y="260">{outcome}</text>
      </g>
    </svg>
  );
}

/** A three-part view of our engagement: map the work, select a use case, then verify the implementation. */
function DeliveryWorkflowScene({ variant, id }: { variant: number; id: string }) {
  const titles = [
    "A current-state workflow map connects the business task to its systems and manual handoffs",
    "Candidate AI tasks are compared by business value and implementation readiness",
    "An implementation passes through scoped access and verification before release",
  ];
  return <svg className={`workflow-scene workflow-scene-delivery workflow-scene-delivery-${variant}`} viewBox="0 0 720 330" role="img" aria-labelledby={`${id}-title`}>
    <title id={`${id}-title`}>{titles[variant]}</title>
    <defs>
      <linearGradient id={`${id}-delivery-bg`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fbfaf5"/><stop offset="1" stopColor="#e7ebdc"/></linearGradient>
      <marker id={`${id}-delivery-arrow`} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#6b826d"/></marker>
      <filter id={`${id}-delivery-shadow`} x="-15%" y="-20%" width="130%" height="145%"><feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#455b4c" floodOpacity=".10"/></filter>
    </defs>
    <rect x="8" y="8" width="704" height="314" rx="20" fill={`url(#${id}-delivery-bg)`}/>
    {variant === 0 && <g fontFamily="inherit" strokeLinejoin="round">
      <text x="36" y="42" fill="#56705c" fontSize="12" fontWeight="700" letterSpacing="1.7">CURRENT-STATE WORKFLOW</text>
      <text x="36" y="69" fill="#53684f" fontSize="14">One business task, mapped across people and systems</text>
      <g filter={`url(#${id}-delivery-shadow)`}>
        <rect x="35" y="106" width="142" height="142" rx="15" fill="#fffdf7" stroke="#9aaa91" strokeWidth="2"/>
        <path d="M35 139h142" stroke="#d7ddcf" strokeWidth="2"/>
        <circle cx="53" cy="123" r="5" fill="#c88658"/><text x="68" y="127" fill="#506356" fontSize="10" fontWeight="700" letterSpacing=".8">BUSINESS TASK</text>
        <text x="52" y="166" fill="#1f2a27" fontSize="14" fontWeight="700">Resolve a late</text><text x="52" y="185" fill="#1f2a27" fontSize="14" fontWeight="700">customer order</text>
        <path d="M52 205h99" stroke="#aab59d" strokeWidth="3" strokeLinecap="round"/><path d="M52 220h72" stroke="#aab59d" strokeWidth="3" strokeLinecap="round"/>
      </g>
      <path d="M179 177h31" fill="none" stroke="#879b81" strokeWidth="2.5" markerEnd={`url(#${id}-delivery-arrow)`}/>
      <rect x="219" y="91" width="464" height="183" rx="15" fill="#fdfcf7" stroke="#cbd4c4" strokeWidth="1.5"/>
      <text x="240" y="119" fill="#6a7b69" fontSize="10" fontWeight="700" letterSpacing="1.3">PEOPLE + SYSTEMS INVOLVED</text>
      <path d="M257 175h370" stroke="#aab59d" strokeWidth="2" markerEnd={`url(#${id}-delivery-arrow)`}/>
      <g filter={`url(#${id}-delivery-shadow)`}>
        <rect x="241" y="142" width="106" height="72" rx="10" fill="#e7eee7" stroke="#78927c" strokeWidth="1.5"/>
        <circle cx="261" cy="162" r="8" fill="#63816b"/><path d="M247 190q14-21 28 0" fill="#63816b"/><text x="294" y="170" fill="#314b3b" fontSize="11" fontWeight="700">Support</text><text x="294" y="188" fill="#53684f" fontSize="10">checks request</text>
        <rect x="378" y="142" width="106" height="72" rx="10" fill="#e5edf0" stroke="#7899a4" strokeWidth="1.5"/>
        <rect x="395" y="157" width="21" height="26" rx="3" fill="none" stroke="#52798b" strokeWidth="2"/><path d="M400 165h11m-11 6h11m-11 6h7" stroke="#52798b" strokeWidth="1.5"/><text x="425" y="170" fill="#35596a" fontSize="11" fontWeight="700">Order system</text><text x="425" y="188" fill="#53684f" fontSize="10">checks status</text>
        <rect x="515" y="142" width="140" height="72" rx="10" fill="#f3eadb" stroke="#c6a574" strokeWidth="1.5"/>
        <path d="M533 160h21v22h-21z m5-6h21v22" fill="none" stroke="#987648" strokeWidth="2"/><text x="565" y="170" fill="#705835" fontSize="11" fontWeight="700">Shared mailbox</text><text x="565" y="188" fill="#53684f" fontSize="10">contacts warehouse</text>
      </g>
      <circle cx="366" cy="175" r="8" fill="#c8835c" stroke="#fffdf7" strokeWidth="3"/><path d="M366 186v35" stroke="#c8835c" strokeWidth="1.5" strokeDasharray="4 4"/><rect x="317" y="224" width="99" height="27" rx="13" fill="#f4e7dc" stroke="#cc9b7d"/><text x="366" y="242" textAnchor="middle" fill="#754d39" fontSize="9" fontWeight="700" letterSpacing=".5">MANUAL HANDOFF</text>
      <text x="37" y="288" fill="#53684f" fontSize="11">Map where information lives, who moves it, and where work waits.</text>
    </g>}
    {variant === 1 && <g fontFamily="inherit" strokeLinejoin="round">
      <text x="36" y="42" fill="#56705c" fontSize="12" fontWeight="700" letterSpacing="1.7">USE-CASE PRIORITIZATION</text>
      <text x="36" y="69" fill="#53684f" fontSize="14">Compare business value with delivery readiness</text>
      <rect x="84" y="96" width="570" height="180" rx="12" fill="#fffdf7" stroke="#d3dacd"/>
      <path d="M369 96v180M84 186h570" stroke="#d3dacd" strokeDasharray="5 5"/>
      <path d="M101 259V117m0 0-6 9m6-9 6 9M103 259h530m0 0-9-6m9 6-9 6" fill="none" stroke="#708771" strokeWidth="1.5"/>
      <text x="96" y="106" fill="#677866" fontSize="9" fontWeight="700" letterSpacing=".8">HIGH BUSINESS VALUE</text>
      <text x="589" y="294" fill="#677866" fontSize="9" fontWeight="700" letterSpacing=".8">READY TO IMPLEMENT</text>
      <text x="115" y="167" fill="#798676" fontSize="9">Worth exploring</text><text x="114" y="251" fill="#798676" fontSize="9">Defer</text>
      <text x="426" y="169" fill="#45634e" fontSize="9" fontWeight="700">PRIORITIZE</text><text x="429" y="251" fill="#798676" fontSize="9">Low value</text>
      <g filter={`url(#${id}-delivery-shadow)`}>
        <rect x="413" y="112" width="183" height="43" rx="9" fill="#e7eedf" stroke="#81977b" strokeWidth="1.5"/><circle cx="432" cy="133" r="6" fill="#55765b"/><text x="447" y="130" fill="#314b3b" fontSize="10" fontWeight="700">Answer policy questions</text><text x="447" y="144" fill="#53684f" fontSize="9">Approved knowledge · low impact</text>
        <rect x="137" y="131" width="176" height="43" rx="9" fill="#e7edf0" stroke="#8ca7ae"/><circle cx="156" cy="152" r="6" fill="#5d8290"/><text x="171" y="149" fill="#35596a" fontSize="10" fontWeight="700">Summarize case history</text><text x="171" y="163" fill="#53684f" fontSize="9">Useful · data access to resolve</text>
        <rect x="424" y="203" width="177" height="43" rx="9" fill="#f3e9dc" stroke="#c9a578"/><circle cx="443" cy="224" r="6" fill="#b8874c"/><text x="458" y="221" fill="#705835" fontSize="10" fontWeight="700">Approve supplier payments</text><text x="458" y="235" fill="#6e6454" fontSize="9">High consequence · human decision</text>
      </g>
      <rect x="411" y="106" width="187" height="55" rx="12" fill="none" stroke="#52745b" strokeWidth="2" strokeDasharray="5 4"/>
      <text x="36" y="310" fill="#53684f" fontSize="11">Select a task whose value, data access, risk, and test plan are all understood.</text>
    </g>}
    {variant === 2 && <g fontFamily="inherit" strokeLinejoin="round">
      <text x="36" y="42" fill="#56705c" fontSize="12" fontWeight="700" letterSpacing="1.7">IMPLEMENTATION + RELEASE</text>
      <text x="36" y="69" fill="#53684f" fontSize="14">A controlled path from approved design to operating software</text>
      <path d="M148 176h104m122 0h74m111 0h67" fill="none" stroke="#879b81" strokeWidth="2.5" markerEnd={`url(#${id}-delivery-arrow)`}/>
      <g filter={`url(#${id}-delivery-shadow)`}>
        <rect x="36" y="114" width="112" height="123" rx="14" fill="#fffdf7" stroke="#9aaa91" strokeWidth="1.5"/><circle cx="59" cy="139" r="10" fill="#e7edba"/><path d="M55 139h8m-4-4v8" stroke="#63785e" strokeWidth="1.5"/><text x="53" y="171" fill="#314b3b" fontSize="11" fontWeight="700">Approved</text><text x="53" y="187" fill="#314b3b" fontSize="11" fontWeight="700">design</text><text x="53" y="213" fill="#53684f" fontSize="9">Purpose · scope</text><text x="53" y="226" fill="#53684f" fontSize="9">· owner · limits</text>
        <rect x="256" y="114" width="118" height="123" rx="14" fill="#e8edf0" stroke="#7598a5" strokeWidth="1.5"/><path d="M281 134h22v19h-22z M286 129v10m12-10v10" fill="none" stroke="#52798b" strokeWidth="1.8"/><text x="275" y="177" fill="#35596a" fontSize="11" fontWeight="700">Test boundary</text><text x="275" y="196" fill="#53684f" fontSize="9">Scoped identity</text><text x="275" y="210" fill="#53684f" fontSize="9">Allowed tools only</text>
        <rect x="450" y="114" width="112" height="123" rx="14" fill="#fffdf7" stroke="#9aaa91" strokeWidth="1.5"/><rect x="470" y="131" width="72" height="31" rx="7" fill="#e8efe1" stroke="#90a48b"/><path d="M480 147l6 6 12-14" fill="none" stroke="#52745b" strokeWidth="2.5"/><text x="486" y="185" fill="#314b3b" fontSize="11" fontWeight="700">Verification</text><text x="467" y="203" fill="#53684f" fontSize="9">Expected behavior</text><text x="467" y="217" fill="#53684f" fontSize="9">· failure cases</text>
        <rect x="580" y="114" width="104" height="123" rx="14" fill="#e7eedf" stroke="#81977b" strokeWidth="1.5"/><path d="M603 153v-13a8 8 0 0 1 16 0v13m-19 0h22v17h-22z" fill="none" stroke="#55765b" strokeWidth="2"/><text x="597" y="192" fill="#314b3b" fontSize="11" fontWeight="700">Release</text><text x="597" y="210" fill="#53684f" fontSize="9">Monitor · hand over</text>
      </g>
      <rect x="239" y="257" width="144" height="27" rx="13" fill="#f3e9dc" stroke="#c9a578"/><text x="311" y="275" textAnchor="middle" fill="#705835" fontSize="9" fontWeight="700" letterSpacing=".5">TEST IN A SAFE ENVIRONMENT</text>
      <text x="36" y="309" fill="#53684f" fontSize="11">Verify permissions and failure behavior before the team relies on it.</text>
    </g>}
  </svg>;
}
