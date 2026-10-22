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
    "A late-order request moves from the customer to support, which checks the order system and emails the warehouse by hand",
    "Use cases are compared by business value and readiness, with policy answers from approved sources as a contained starting point",
    "A governed implementation moves from approved purpose through scoped build and tests to an operational release gate",
  ];
  const arrowId = `${id}-delivery-arrow`;
  return <svg className={`workflow-scene workflow-scene-delivery workflow-scene-delivery-${variant}`} viewBox="0 0 720 360" role="img" aria-labelledby={`${id}-title`}>
    <title id={`${id}-title`}>{titles[variant]}</title>
    <defs>
      <linearGradient id={`${id}-delivery-bg`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fbfaf5"/><stop offset="1" stopColor="#e7ebdc"/></linearGradient>
      <marker id={arrowId} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#587565"/></marker>
    </defs>
    <rect x="8" y="8" width="704" height="344" rx="20" fill={`url(#${id}-delivery-bg)`}/>
    {variant === 0 && <g fontFamily="inherit" strokeLinejoin="round">
      <text x="36" y="39" fill="#56705c" fontSize="13" fontWeight="700" letterSpacing="1.4">CURRENT-STATE WORKFLOW</text>
      <text x="36" y="64" fill="#53684f" fontSize="15">A late-order update crosses one system and one manual handoff.</text>
      <rect x="28" y="88" width="664" height="235" rx="17" fill="#fffdf8" stroke="#d3dacd"/>
      <text x="48" y="115" fill="#71806f" fontSize="11" fontWeight="700" letterSpacing="1.1">WHAT HAPPENS TODAY</text>
      <rect x="48" y="139" width="168" height="113" rx="12" fill="#f4ebdc" stroke="#c6a574" strokeWidth="1.4"/>
      <circle cx="69" cy="161" r="6" fill="#c88557"/><text x="83" y="164" fill="#715b3b" fontSize="11" fontWeight="700" letterSpacing=".7">CUSTOMER REQUEST</text>
      <text x="64" y="199" fill="#26342d" fontSize="18" fontWeight="700">Late order</text><text x="64" y="222" fill="#53684f" fontSize="13">Needs an update</text>
      <rect x="276" y="139" width="168" height="113" rx="12" fill="#e8efea" stroke="#7d9883" strokeWidth="1.4"/>
      <circle cx="297" cy="161" r="6" fill="#587565"/><text x="311" y="164" fill="#395846" fontSize="10.5" fontWeight="700" letterSpacing=".5">SUPPORT + SYSTEM</text>
      <text x="292" y="199" fill="#26342d" fontSize="17" fontWeight="700">Check status</text><text x="292" y="222" fill="#53684f" fontSize="12">Support looks up the order</text>
      <rect x="504" y="139" width="168" height="113" rx="12" fill="#e7edf0" stroke="#88a2aa" strokeWidth="1.4"/>
      <circle cx="525" cy="161" r="6" fill="#6389a0"/><text x="539" y="164" fill="#355e72" fontSize="11" fontWeight="700" letterSpacing=".7">WAREHOUSE</text>
      <text x="520" y="199" fill="#26342d" fontSize="17" fontWeight="700">Confirm delay</text><text x="520" y="222" fill="#53684f" fontSize="12">Replies to shared mailbox</text>
      <path d="M218 194H266M446 194H494" fill="none" stroke="#78917c" strokeWidth="2.4" markerEnd={`url(#${arrowId})`}/>
      <rect x="396" y="264" width="148" height="27" rx="13.5" fill="#f5e8df" stroke="#cd9473"/>
      <path d="M470 252v12" stroke="#c57d56" strokeWidth="1.5" strokeDasharray="3 3"/>
      <text x="470" y="282" textAnchor="middle" fill="#794f3a" fontSize="10.5" fontWeight="700" letterSpacing=".5">MANUAL EMAIL HANDOFF</text>
      <text x="48" y="305" fill="#53684f" fontSize="11">Support checks status, then emails the warehouse; nothing updates itself.</text>
    </g>}
    {variant === 1 && <g fontFamily="inherit" strokeLinejoin="round">
      <text x="36" y="39" fill="#56705c" fontSize="13" fontWeight="700" letterSpacing="1.4">USE-CASE PRIORITIZATION</text>
      <text x="36" y="64" fill="#53684f" fontSize="15">Compare likely business value with readiness to build and verify.</text>
      <rect x="112" y="104" width="568" height="204" rx="12" fill="#fffdf8" stroke="#cad4c8" strokeWidth="1.4"/>
      <path d="M396 105v202M113 206h566" stroke="#cbd4c4" strokeWidth="1.2" strokeDasharray="4 5"/>
      <rect x="114" y="106" width="281" height="98" rx="10" fill="#f1f2e9"/>
      <rect x="398" y="106" width="280" height="98" rx="10" fill="#e8efe4"/>
      <rect x="114" y="208" width="281" height="98" rx="10" fill="#f5eee4"/>
      <rect x="398" y="208" width="280" height="98" rx="10" fill="#f3f3ec"/>
      <path d="M88 290V127m0 0-5 8m5-8 5 8M113 326h548m0 0-8-5m8 5-8 5" fill="none" stroke="#637e6b" strokeWidth="1.7"/>
      <text x="21" y="213" transform="rotate(-90 21 213)" textAnchor="middle" fill="#526d5a" fontSize="11" fontWeight="700" letterSpacing=".7">BUSINESS VALUE · LOW TO HIGH</text>
      <text x="302" y="346" textAnchor="middle" fill="#697969" fontSize="11" fontWeight="700" letterSpacing=".5">DELIVERY READINESS</text>
      <text x="114" y="322" fill="#697969" fontSize="10" fontWeight="700" letterSpacing=".5">LOW</text>
      <text x="660" y="322" textAnchor="end" fill="#697969" fontSize="10" fontWeight="700" letterSpacing=".5">HIGH →</text>
      <text x="128" y="127" fill="#6c796a" fontSize="9.5" fontWeight="700" letterSpacing=".6">HIGH VALUE · UNREADY</text>
      <text x="412" y="127" fill="#49644e" fontSize="9.5" fontWeight="700" letterSpacing=".6">HIGH VALUE · READY</text>
      <text x="128" y="230" fill="#78634c" fontSize="9.5" fontWeight="700" letterSpacing=".6">LOW VALUE · UNREADY</text>
      <text x="412" y="230" fill="#6c796a" fontSize="9.5" fontWeight="700" letterSpacing=".6">LOW VALUE · READY</text>
      <rect x="128" y="141" width="251" height="51" rx="8" fill="#fffefa" stroke="#91a3a2"/>
      <circle cx="144" cy="157" r="4.5" fill="#6389a0"/><text x="157" y="160" fill="#35596a" fontSize="11.5" fontWeight="700">Summarize case history</text><text x="157" y="178" fill="#53684f" fontSize="10.5">Confirm record-level access first</text>
      <rect x="412" y="141" width="250" height="51" rx="8" fill="#fffefa" stroke="#6c8b74" strokeWidth="1.5"/>
      <circle cx="428" cy="157" r="4.5" fill="#55765b"/><text x="441" y="160" fill="#314b3b" fontSize="11.5" fontWeight="700">Answer policy questions</text><text x="441" y="178" fill="#53684f" fontSize="10">Approved sources · citations included</text>
      <rect x="128" y="244" width="251" height="51" rx="8" fill="#fffefa" stroke="#c8ae87"/>
      <circle cx="144" cy="260" r="4.5" fill="#b8874c"/><text x="157" y="263" fill="#705835" fontSize="11.5" fontWeight="700">Automate record archiving</text><text x="157" y="281" fill="#6e6454" fontSize="10">Ownership and retention unclear</text>
      <rect x="412" y="244" width="250" height="51" rx="8" fill="#fffefa" stroke="#bac095"/>
      <circle cx="428" cy="260" r="4.5" fill="#80946d"/><text x="441" y="263" fill="#435a49" fontSize="11.5" fontWeight="700">Draft meeting notes</text><text x="441" y="281" fill="#53684f" fontSize="10">Contained sources · easy to verify</text>
      <rect x="600" y="148" width="54" height="16" rx="8" fill="#52745b"/><text x="627" y="159" textAnchor="middle" fill="#fffdf8" fontSize="7" fontWeight="700" letterSpacing=".5">START</text>
    </g>}
    {variant === 2 && <g fontFamily="inherit" strokeLinejoin="round">
      <text x="36" y="39" fill="#56705c" fontSize="13" fontWeight="700" letterSpacing="1.4">IMPLEMENTATION + RELEASE</text>
      <text x="36" y="64" fill="#53684f" fontSize="15">A controlled path from approved design to software the team can operate.</text>
      <rect x="28" y="91" width="664" height="232" rx="16" fill="#fffdf8" stroke="#d3dacd"/>
      <path d="M178 179h23m146 0h23m146 0h23" fill="none" stroke="#78917c" strokeWidth="2.3" markerEnd={`url(#${arrowId})`}/>
      <rect x="42" y="120" width="136" height="136" rx="12" fill="#f2f1e6" stroke="#a2aa85" strokeWidth="1.4"/>
      <circle cx="64" cy="144" r="12" fill="#dfe8bb"/><text x="64" y="148" textAnchor="middle" fill="#48624f" fontSize="10" fontWeight="700">01</text>
      <text x="58" y="181" fill="#314b3b" fontSize="14" fontWeight="700">Approve scope</text><text x="58" y="202" fill="#53684f" fontSize="12">Purpose · owner</text><text x="58" y="217" fill="#53684f" fontSize="12">Actions + limits</text>
      <rect x="201" y="120" width="146" height="136" rx="12" fill="#e8edf0" stroke="#819eaa" strokeWidth="1.4"/>
      <circle cx="223" cy="144" r="12" fill="#d7e5e9"/><text x="223" y="148" textAnchor="middle" fill="#355e72" fontSize="10" fontWeight="700">02</text>
      <text x="217" y="181" fill="#35596a" fontSize="14" fontWeight="700">Build in staging</text><text x="217" y="202" fill="#53684f" fontSize="12">Scoped identity</text><text x="217" y="217" fill="#53684f" fontSize="12">Approved tools only</text>
      <rect x="371" y="120" width="146" height="136" rx="12" fill="#f4f4ee" stroke="#9aaa91" strokeWidth="1.4"/>
      <circle cx="393" cy="144" r="12" fill="#e5eddf"/><text x="393" y="148" textAnchor="middle" fill="#52745b" fontSize="10" fontWeight="700">03</text>
      <text x="387" y="181" fill="#314b3b" fontSize="14" fontWeight="700">Verify behavior</text><text x="387" y="202" fill="#53684f" fontSize="12">Allowed tests pass</text><text x="387" y="217" fill="#53684f" fontSize="12">Denied actions blocked</text>
      <rect x="541" y="120" width="136" height="136" rx="12" fill="#e7eee3" stroke="#81977b" strokeWidth="1.4"/>
      <circle cx="563" cy="144" r="12" fill="#dce8d5"/><text x="563" y="148" textAnchor="middle" fill="#52745b" fontSize="10" fontWeight="700">04</text>
      <text x="557" y="181" fill="#314b3b" fontSize="11.5" fontWeight="700">Release + hand over</text><text x="557" y="202" fill="#53684f" fontSize="12">Monitor · recover</text><text x="557" y="217" fill="#53684f" fontSize="12">Named operator</text>
      <rect x="42" y="276" width="635" height="31" rx="8" fill="#f2e9d8" stroke="#d2bb91"/>
      <circle cx="60" cy="291.5" r="6" fill="#b8874c"/><path d="M57 291.5h6" stroke="#fff" strokeWidth="1.5"/>
      <text x="75" y="295" fill="#705835" fontSize="10" fontWeight="700" letterSpacing=".6">PRODUCTION GATE</text>
      <text x="186" y="295" fill="#6e6454" fontSize="11">Owner named · scope tested · rollback understood</text>
    </g>}
  </svg>;
}
