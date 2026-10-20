import type { ReactNode } from "react";

type ArtProps = { children: ReactNode; title: string };
type ArtKind = "services" | "governance" | "microsoft" | "delivery" | "insights" | "architecture" | "assessment" | "agent-service" | "modernization" | "modernization-article" | "platform" | "remediation" | "schedule" | "chain" | "authorization" | "operating" | "privacy" | "terms" | "accessibility" | "not-found" | "about" | "contact";
type Scene = { label: string; note: string; kind: ArtKind };

function Art({ children, title }: ArtProps) {
  return <svg className="page-hero-artwork" viewBox="0 0 520 300" role="img" aria-label={title}>{children}</svg>;
}

function DiagramLabel({ x, y, children, size = 20, color = "#26332e", weight = 600, anchor = "middle" }: { x: number; y: number; children: ReactNode; size?: number; color?: string; weight?: number; anchor?: "start" | "middle" | "end" }) {
  return <text x={x} y={y} textAnchor={anchor} fill={color} fontFamily="Arial, sans-serif" fontSize={size} fontWeight={weight}>{children}</text>;
}

function Dot({ x, y, fill = "#52745b", r = 6 }: { x: number; y: number; fill?: string; r?: number }) {
  return <circle cx={x} cy={y} r={r} fill={fill} stroke="#f6f4ee" strokeWidth="3" />;
}

function ServicesArt() {
  return <Art title="A central AI workflow connected to information, applications, and human decisions">
    <path d="M158 111h28M326 111h28" fill="none" stroke="#577f90" strokeWidth="4"/>
    <path d="M178 102l12 9-12 9m156-18l12 9-12 9" fill="none" stroke="#577f90" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="24" y="68" width="134" height="88" rx="16" fill="#e2edf1" stroke="#577f90" strokeWidth="2"/>
    <path d="M46 91h28m-28 11h42m-42 11h34" stroke="#577f90" strokeWidth="3" strokeLinecap="round"/>
    <DiagramLabel x={103} y={139} size={19}>Company data</DiagramLabel>
    <rect x="196" y="57" width="130" height="110" rx="18" fill="#31586b"/>
    <circle cx="261" cy="89" r="14" fill="#d6a94f"/>
    <DiagramLabel x={261} y={94} size={14} color="#31586b" weight={700}>AI</DiagramLabel>
    <DiagramLabel x={261} y={140} size={19} color="#fffdf7">AI agent</DiagramLabel>
    <rect x="362" y="68" width="134" height="88" rx="16" fill="#f4e8d6" stroke="#bd7d55" strokeWidth="2"/>
    <rect x="382" y="85" width="24" height="24" rx="6" fill="#bd7d55"/>
    <path d="M389 97l5 5 9-11" fill="none" stroke="#fffdf7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <DiagramLabel x={429} y={139} size={19}>Business app</DiagramLabel>
    <rect x="163" y="207" width="196" height="58" rx="16" fill="#f5e1dc" stroke="#b96555" strokeWidth="2"/>
    <circle cx="190" cy="235" r="9" fill="#b96555"/><path d="M179 250c2-12 20-12 22 0" fill="#b96555"/>
    <DiagramLabel x={270} y={242} size={19} color="#663e38">Human review</DiagramLabel>
    <path d="M261 168v23q0 10-10 10h-49" fill="none" stroke="#b96555" strokeWidth="3" strokeDasharray="5 5"/>
    <path d="M211 193l-9 7 9 7" fill="none" stroke="#b96555" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </Art>;
}

function GovernanceArt({ ledger = false }: { ledger?: boolean }) {
  if (ledger) return <Art title="A governance record with a named sponsor, defined scope, review date, and supporting evidence">
    <path d="M64 44h246l65 64v151H64z" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M310 44v64h65" fill="#e8ebd8" stroke="#bac095" strokeWidth="2"/>
    <DiagramLabel x={94} y={77} anchor="start" size={16} color="#31586b" weight={700}>AGENT AUTHORIZATION</DiagramLabel>
    <DiagramLabel x={94} y={111} anchor="start" size={17}>Purpose</DiagramLabel><path d="M94 120h151" stroke="#c6d2d4" strokeWidth="2"/>
    <DiagramLabel x={94} y={151} anchor="start" size={17}>Allowed actions</DiagramLabel><path d="M94 160h151" stroke="#e5c9b8" strokeWidth="2"/>
    <DiagramLabel x={94} y={191} anchor="start" size={17}>Business sponsor</DiagramLabel><path d="M94 200h151" stroke="#d7cae2" strokeWidth="2"/>
    <DiagramLabel x={94} y={231} anchor="start" size={17}>Review date</DiagramLabel><path d="M94 240h129" stroke="#c6d2d4" strokeWidth="2"/>
    <circle cx="345" cy="217" r="62" fill="#e8ebd8"/><circle cx="345" cy="217" r="45" fill="#52745b"/><circle cx="345" cy="217" r="31" fill="none" stroke="#d4de95" strokeWidth="2"/><path d="M329 217l11 12 23-27" fill="none" stroke="#f6f4ee" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="252" y="139" width="95" height="39" rx="19" fill="#f2e6c9" stroke="#d6a94f" strokeWidth="2"/><Dot x={275} y={158} fill="#d6a94f" r={5}/><DiagramLabel x={310} y={164} size={14} color="#655126">SPONSOR</DiagramLabel>
  </Art>;
  return <Art title="Agent authority shown as nested boundaries around a permitted action">
    <circle cx="254" cy="151" r="125" fill="#eef0e3" stroke="#bac095" strokeWidth="2" strokeDasharray="3 7"/><circle cx="254" cy="151" r="91" fill="#e4e9d7" stroke="#9aa988" strokeWidth="2"/><circle cx="254" cy="151" r="58" fill="#d4de95" stroke="#879478" strokeWidth="2"/>
    <rect x="207" y="126" width="94" height="50" rx="14" fill="#52745b"/><path d="M226 151h56" stroke="#f6f4ee" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="254" cy="26" r="10" fill="#52745b"/><circle cx="380" cy="151" r="10" fill="#bac095"/><circle cx="254" cy="276" r="10" fill="#52745b"/><circle cx="128" cy="151" r="10" fill="#bac095"/>
    <path d="M254 26v-8M380 151h22M254 276v8M128 151h-22" stroke="#52745b" strokeWidth="2"/>
  </Art>;
}

function MicrosoftArt() {
  return <Art title="Microsoft AI layers connected through permissions, identity, tool access, and audit evidence">
    <path d="M93 38v222" stroke="#9aa988" strokeWidth="3" strokeDasharray="5 8"/>
    {["#577f90", "#856a9f", "#bd7d55", "#52745b"].map((fill, i) => <g key={i}>
      <circle cx="93" cy={66 + i*57} r="13" fill={fill} stroke="#52745b" strokeWidth="2"/>
      <rect x="122" y={43 + i*57} width="296" height="45" rx="13" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/>
      <DiagramLabel x={143} y={70 + i*57} anchor="start" size={17} color="#26332e">{["M365 · content permissions", "Entra · agent identity", "Studio / Foundry · tools", "Purview · logs + environments"][i]}</DiagramLabel>
    </g>)}
    <path d="M87 97l6 6 6-6m-12 57l6 6 6-6m-12 57l6 6 6-6" fill="none" stroke="#31586b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Art>;
}

function DeliveryArt() {
  return <Art title="A four-stage delivery route that bends through a review point before handover">
    <path d="M74 220 C74 128 181 174 181 84 S301 60 301 150 S435 211 435 77" fill="none" stroke="#9aa988" strokeWidth="5" strokeLinecap="round" strokeDasharray="2 11"/>
    <circle cx="74" cy="220" r="31" fill="#fffdf7" stroke="#bac095" strokeWidth="3"/><circle cx="70" cy="216" r="10" fill="none" stroke="#52745b" strokeWidth="3"/><path d="M77 224l9 9" stroke="#52745b" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="181" cy="84" r="31" fill="#e4e9d7" stroke="#bac095" strokeWidth="3"/><path d="M170 96l20-23 7 6-20 23-9 3zM188 75l7 6" fill="none" stroke="#52745b" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="301" cy="150" r="42" fill="#31586b"/><path d="M280 150l14 14 29-31" fill="none" stroke="#f6f4ee" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="435" cy="77" r="31" fill="#d4de95" stroke="#bac095" strokeWidth="3"/><path d="M420 77h30M443 67l10 10-10 10" fill="none" stroke="#52745b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <DiagramLabel x={74} y={271} size={17} color="#31586b">Understand</DiagramLabel>
    <DiagramLabel x={181} y={131} size={17} color="#52745b">Design</DiagramLabel>
    <DiagramLabel x={301} y={213} size={16} color="#31586b">Implement</DiagramLabel>
    <DiagramLabel x={435} y={128} size={16} color="#655126">Operate</DiagramLabel>
  </Art>;
}

function NetworkArt() {
  return <Art title="An editorial research map connecting architecture, authorization, engineering, and operations">
    <path d="M98 78L240 134 386 62M98 78l38 145 104-89 119 111 27-183M240 134l-104 89M240 134l119 111M386 62l-27 183" fill="none" stroke="#a8b397" strokeWidth="2"/>
    <circle cx="240" cy="134" r="48" fill="#31586b"/><DiagramLabel x={240} y={140} size={16} color="#fffdf7">RESEARCH</DiagramLabel>
    <circle cx="98" cy="78" r="27" fill="#e2edf1" stroke="#577f90" strokeWidth="2"/><path d="M86 72h24M86 81h17" stroke="#577f90" strokeWidth="2" strokeLinecap="round"/><DiagramLabel x={98} y={121} size={15} color="#31586b">Architecture</DiagramLabel>
    <circle cx="386" cy="62" r="22" fill="#f5eacc" stroke="#d6a94f" strokeWidth="2"/><circle cx="386" cy="62" r="8" fill="#8b6823"/><DiagramLabel x={386} y={101} size={14} color="#655126">Authorization</DiagramLabel>
    <circle cx="136" cy="223" r="25" fill="#eae2f2" stroke="#856a9f" strokeWidth="2"/><path d="M125 223h22M136 212v22" stroke="#856a9f" strokeWidth="2"/><DiagramLabel x={136} y={271} size={15} color="#59456e">Engineering</DiagramLabel>
    <circle cx="359" cy="245" r="27" fill="#f1dfd5" stroke="#bd7d55" strokeWidth="2"/><path d="M348 245l8 8 15-17" fill="none" stroke="#bd7d55" strokeWidth="3"/><DiagramLabel x={359} y={289} size={15} color="#663e38">Operations</DiagramLabel>
    <Dot x={288} y={69} fill="#bac095" r={5}/><Dot x={322} y={198} fill="#bac095" r={5}/>
  </Art>;
}

function AssessmentArt() {
  return <Art title="Illustrative assessment matrix comparing intended use with configured access and available evidence">
    <path d="M132 48v202M240 48v202M348 48v202M456 48v202M132 94h324M132 146h324M132 198h324M132 250h324" fill="none" stroke="#bac095" strokeWidth="2"/>
    <rect x="140" y="56" width="92" height="30" rx="8" fill="#d9e8ed"/><rect x="248" y="56" width="92" height="30" rx="8" fill="#f5eacc"/><rect x="356" y="56" width="92" height="30" rx="8" fill="#eae2f2"/>
    <DiagramLabel x={186} y={77} size={14} color="#31586b">INTENDED</DiagramLabel><DiagramLabel x={294} y={77} size={14} color="#655126">CONFIGURED</DiagramLabel><DiagramLabel x={402} y={77} size={14} color="#59456e">EVIDENCE</DiagramLabel>
    <DiagramLabel x={74} y={126} size={15} color="#31586b">READ</DiagramLabel><DiagramLabel x={74} y={178} size={15} color="#bd7d55">WRITE</DiagramLabel><DiagramLabel x={74} y={230} size={15} color="#856a9f">REVIEW</DiagramLabel>
    {[{x:186,y:120,ok:true},{x:294,y:120,ok:false},{x:402,y:120,ok:true},{x:186,y:172,ok:true},{x:294,y:172,ok:true},{x:402,y:172,ok:false},{x:186,y:224,ok:false},{x:294,y:224,ok:true},{x:402,y:224,ok:false}].map(({x,y,ok}) => <g key={`${x}-${y}`}>
      <circle cx={x} cy={y} r="13" fill={ok ? "#e4e9d7" : "#f0e5d8"}/><path d={ok ? `M${x-6} ${y}l4 5 9-10` : `M${x-5} ${y-5}l10 10m0-10l-10 10`} fill="none" stroke={ok ? "#52745b" : "#9b7050"} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </g>)}
    <DiagramLabel x={180} y={278} size={14} color="#52745b">✓ MATCH</DiagramLabel><DiagramLabel x={360} y={278} size={14} color="#9b7050">× INVESTIGATE</DiagramLabel>
  </Art>;
}

function ArchitectureArt() {
  return <Art title="A layered AI architecture connecting an application, governed tools, and bounded data">
    <path d="M88 74l172-45 172 45-172 48z" fill="#d9e8ed" stroke="#577f90" strokeWidth="2"/><path d="M88 74v50l172 50v-52z" fill="#b8ced5" stroke="#577f90" strokeWidth="2"/><path d="M432 74v50l-172 50v-52z" fill="#e2edf1" stroke="#577f90" strokeWidth="2"/>
    <path d="M88 155l172 50 172-50M88 155v50l172 50v-50M432 155v50l-172 50v-50" fill="#f1dfd5" stroke="#bd7d55" strokeWidth="2"/>
    <path d="M149 77l110-29 110 29-110 31z" fill="#fffdf7" stroke="#d6a94f" strokeWidth="2"/><DiagramLabel x={259} y={87} size={15} color="#31586b">AGENT TASK</DiagramLabel>
    <DiagramLabel x={260} y={148} size={16} color="#663e38">TOOLS + IDENTITY</DiagramLabel>
    <DiagramLabel x={260} y={220} size={16} color="#663e38">DATA BOUNDARY</DiagramLabel>
    <path d="M260 109v25m0 28v25" stroke="#31586b" strokeWidth="3" strokeDasharray="5 6"/><path d="M254 129l6 7 6-7m-12 47l6 7 6-7" fill="none" stroke="#31586b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Art>;
}

function AgentServiceArt() {
  return <Art title="An agent identity at the center of separate owner, sponsor, tool, and lifecycle relationships">
    <path d="M260 145L111 74M260 145l151-71M260 145l-149 94M260 145l151 94" stroke="#9aa988" strokeWidth="3" fill="none"/>
    <circle cx="260" cy="145" r="63" fill="#d9e8ed" stroke="#577f90" strokeWidth="3"/><circle cx="260" cy="145" r="35" fill="#31586b"/><DiagramLabel x={260} y={151} size={16} color="#fffdf7">AGENT</DiagramLabel>
    <rect x="48" y="42" width="126" height="64" rx="18" fill="#e2edf1" stroke="#577f90" strokeWidth="2"/><DiagramLabel x={111} y={68} size={15} color="#31586b">TECHNICAL</DiagramLabel><DiagramLabel x={111} y={91} size={17} color="#31586b">OWNER</DiagramLabel>
    <rect x="346" y="42" width="126" height="64" rx="18" fill="#f5eacc" stroke="#d6a94f" strokeWidth="2"/><DiagramLabel x={409} y={68} size={15} color="#655126">BUSINESS</DiagramLabel><DiagramLabel x={409} y={91} size={17} color="#655126">SPONSOR</DiagramLabel>
    <rect x="48" y="207" width="126" height="64" rx="18" fill="#f1dfd5" stroke="#bd7d55" strokeWidth="2"/><DiagramLabel x={111} y={233} size={15} color="#663e38">PERMITTED</DiagramLabel><DiagramLabel x={111} y={256} size={17} color="#663e38">ACTIONS</DiagramLabel>
    <rect x="346" y="207" width="126" height="64" rx="18" fill="#eae2f2" stroke="#856a9f" strokeWidth="2"/><DiagramLabel x={409} y={233} size={15} color="#59456e">LIFECYCLE</DiagramLabel><DiagramLabel x={409} y={256} size={17} color="#59456e">REVIEW</DiagramLabel>
    <Dot x={185} y={109} r={5}/><Dot x={335} y={109} r={5}/><Dot x={185} y={181} r={5}/><Dot x={335} y={181} r={5}/>
  </Art>;
}

function IntegrationArt({ transformation = false }: { transformation?: boolean }) {
  if (transformation) return <Art title="Legacy business rules made explicit as approved operations before AI integration">
    <path d="M48 244h424" stroke="#bac095" strokeWidth="2"/><path d="M68 244V111l50-40 50 40v133M82 125h72M82 148h72M82 171h72M82 194h72" fill="#e4e9d7" stroke="#52745b" strokeWidth="2"/>
    <DiagramLabel x={118} y={230} size={17} color="#52745b">Legacy app</DiagramLabel>
    <path d="M171 147h84" stroke="#577f90" strokeWidth="3"/><path d="M245 138l12 9-12 9" fill="none" stroke="#577f90" strokeWidth="3"/>
    <rect x="258" y="97" width="100" height="112" rx="14" fill="#f5eacc" stroke="#d6a94f" strokeWidth="2"/><DiagramLabel x={308} y={119} size={15} color="#655126" weight={700}>API GATE</DiagramLabel><DiagramLabel x={308} y={145} size={14}>Check ID</DiagramLabel><DiagramLabel x={308} y={169} size={14}>Limit action</DiagramLabel><DiagramLabel x={308} y={193} size={14}>Record call</DiagramLabel>
    <path d="M359 147h35" stroke="#bd7d55" strokeWidth="3"/><path d="M385 138l12 9-12 9" fill="none" stroke="#bd7d55" strokeWidth="3"/>
    <rect x="398" y="108" width="78" height="132" rx="14" fill="#eae2f2" stroke="#856a9f" strokeWidth="2"/><circle cx="437" cy="146" r="14" fill="#856a9f"/><path d="M428 146h18m-9-9v18" stroke="#fffdf7" strokeWidth="2"/><DiagramLabel x={437} y={184} size={16} color="#59456e">AI agent</DiagramLabel><DiagramLabel x={437} y={207} size={13} color="#59456e">approved tools</DiagramLabel>
  </Art>;
  return <Art title="An old business application connected to AI through a deliberate, permission-checking API bridge">
    <path d="M39 235h442" stroke="#bac095" strokeWidth="2"/>
    <path d="M58 234V123l50-43 50 43v111" fill="#e4e9d7" stroke="#52745b" strokeWidth="2"/><path d="M77 142h62M77 161h62M77 180h62M77 199h62" stroke="#7b8f74" strokeWidth="4" strokeLinecap="round"/>
    <DiagramLabel x={108} y={229} size={17} color="#52745b">Legacy app</DiagramLabel>
    <path d="M158 177h54M307 177h52" stroke="#577f90" strokeWidth="3"/><path d="M205 166l13 11-13 11M352 166l13 11-13 11" fill="none" stroke="#577f90" strokeWidth="3"/>
    <rect x="219" y="104" width="88" height="146" rx="20" fill="#31586b"/><rect x="232" y="121" width="62" height="32" rx="9" fill="#d6a94f"/><DiagramLabel x={263} y={143} size={14} color="#31586b" weight={700}>API</DiagramLabel><DiagramLabel x={263} y={177} size={15} color="#fffdf7">CHECK</DiagramLabel><DiagramLabel x={263} y={198} size={15} color="#fffdf7">LIMIT</DiagramLabel><DiagramLabel x={263} y={219} size={15} color="#fffdf7">LOG</DiagramLabel>
    <rect x="366" y="106" width="103" height="131" rx="14" fill="#eae2f2" stroke="#856a9f" strokeWidth="2"/><rect x="382" y="122" width="70" height="36" rx="7" fill="#d6c5e2"/><DiagramLabel x={417} y={147} size={14} color="#59456e">AGENT</DiagramLabel><DiagramLabel x={417} y={187} size={16} color="#59456e">AI agent</DiagramLabel><DiagramLabel x={417} y={210} size={13} color="#59456e">approved tools</DiagramLabel>
  </Art>;
}

function PlatformArt() {
  return <Art title="A circular software operations loop linking change, release, observation, and recovery">
    <path d="M182 66a106 106 0 0 1 145 26M356 123a106 106 0 0 1-39 137M268 274a106 106 0 0 1-128-58M118 170A106 106 0 0 1 165 83" fill="none" stroke="#9aa988" strokeWidth="5" strokeLinecap="round"/>
    <path d="M318 76l13 13-19 1M347 244l-18 4 5-19M143 229l-5-18 19 6M149 79l17-7-1 19" fill="#52745b"/>
    <circle cx="260" cy="170" r="66" fill="#d9e8ed"/><circle cx="260" cy="170" r="40" fill="#31586b"/><DiagramLabel x={260} y={176} size={17} color="#fffdf7">OPERATE</DiagramLabel>
    <rect x="206" y="31" width="108" height="44" rx="20" fill="#f5eacc" stroke="#d6a94f" strokeWidth="2"/><rect x="362" y="149" width="116" height="44" rx="20" fill="#eae2f2" stroke="#856a9f" strokeWidth="2"/><rect x="206" y="264" width="108" height="30" rx="15" fill="#f1dfd5" stroke="#bd7d55" strokeWidth="2"/><rect x="42" y="149" width="116" height="44" rx="20" fill="#e2edf1" stroke="#577f90" strokeWidth="2"/>
    <DiagramLabel x={260} y={59} size={16} color="#655126">CHANGE</DiagramLabel><DiagramLabel x={420} y={177} size={16} color="#59456e">RELEASE</DiagramLabel><DiagramLabel x={260} y={286} size={15} color="#663e38">RECOVER</DiagramLabel><DiagramLabel x={100} y={177} size={16} color="#31586b">MONITOR</DiagramLabel>
    <circle cx="260" cy="53" r="6" fill="#52745b"/><circle cx="420" cy="171" r="6" fill="#52745b"/><circle cx="260" cy="279" r="6" fill="#52745b"/><circle cx="100" cy="171" r="6" fill="#52745b"/>
  </Art>;
}

function RemediationArt() {
  return <Art title="A finding moving through a controlled change into a verified operating state">
    <path d="M57 53h142v192H57z" fill="#e2edf1" stroke="#577f90" strokeWidth="2"/><DiagramLabel x={128} y={83} size={18} color="#31586b">FINDING</DiagramLabel><path d="M83 104h89M83 128h66M83 153h89M83 178h51" stroke="#9bb5bd" strokeWidth="4" strokeLinecap="round"/><DiagramLabel x={128} y={218} size={15} color="#31586b">Access too broad</DiagramLabel>
    <path d="M190 147h94" stroke="#bd7d55" strokeWidth="3"/><path d="M270 136l14 11-14 11" fill="none" stroke="#bd7d55" strokeWidth="3"/>
    <circle cx="260" cy="147" r="41" fill="#f5eacc" stroke="#d6a94f" strokeWidth="2"/><path d="M240 147h39M260 127v40" stroke="#8c6b27" strokeWidth="3" strokeLinecap="round"/><DiagramLabel x={260} y={211} size={15} color="#655126">CHANGE</DiagramLabel>
    <path d="M321 147h53" stroke="#856a9f" strokeWidth="3"/><path d="M360 136l14 11-14 11" fill="none" stroke="#856a9f" strokeWidth="3"/>
    <rect x="375" y="53" width="92" height="192" rx="16" fill="#eae2f2" stroke="#856a9f" strokeWidth="2"/><circle cx="421" cy="105" r="22" fill="#52745b"/><path d="M410 105l8 8 15-17" fill="none" stroke="#f6f4ee" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><DiagramLabel x={421} y={155} size={18} color="#59456e">VERIFY</DiagramLabel><DiagramLabel x={421} y={180} size={14} color="#59456e">Test result</DiagramLabel><DiagramLabel x={421} y={208} size={13} color="#59456e">Owner + review</DiagramLabel>
  </Art>;
}

function ScheduleArt() {
  return <Art title="A scheduled trigger orbiting a clock, with an explicit review checkpoint">
    <circle cx="255" cy="151" r="108" fill="#eef0e3" stroke="#bac095" strokeWidth="2" strokeDasharray="3 8"/><circle cx="255" cy="151" r="76" fill="#fffdf7" stroke="#9aa988" strokeWidth="3"/>
    <path d="M255 93v61l43 24" fill="none" stroke="#52745b" strokeWidth="6" strokeLinecap="round"/><circle cx="255" cy="151" r="9" fill="#d4de95"/>
    <path d="M255 43v-20M363 151h31M255 259v20M147 151h-31" stroke="#52745b" strokeWidth="3"/><circle cx="255" cy="23" r="13" fill="#d4de95" stroke="#52745b" strokeWidth="2"/><circle cx="394" cy="151" r="13" fill="#52745b"/><circle cx="255" cy="279" r="13" fill="#bac095" stroke="#52745b" strokeWidth="2"/><circle cx="116" cy="151" r="13" fill="#fffdf7" stroke="#52745b" strokeWidth="2"/>
    <path d="M255 43a108 108 0 0 1 108 108" fill="none" stroke="#d4de95" strokeWidth="7" strokeLinecap="round"/><path d="M353 144l11 8-10 9" fill="none" stroke="#52745b" strokeWidth="3"/>
    <DiagramLabel x={255} y={20} size={14} color="#655126">SCHEDULE</DiagramLabel><DiagramLabel x={441} y={155} size={14} color="#59456e">AGENT RUN</DiagramLabel><DiagramLabel x={255} y={294} size={14} color="#663e38">REVIEW DATE</DiagramLabel><DiagramLabel x={78} y={155} size={14} color="#31586b">SPONSOR</DiagramLabel>
  </Art>;
}

function ChainArt() {
  return <Art title="A delegated agent chain showing a user request, orchestration, specialized agents, and an external action">
    <path d="M74 150h115M189 150h70M261 150h83M344 150h100M260 150v-87M260 150v88" fill="none" stroke="#9aa988" strokeWidth="3" strokeDasharray="5 7"/>
    <rect x="25" y="114" width="91" height="72" rx="19" fill="#e2edf1" stroke="#577f90" strokeWidth="2"/><circle cx="69" cy="142" r="13" fill="#577f90"/><path d="M49 166h40" stroke="#577f90" strokeWidth="4" strokeLinecap="round"/><DiagramLabel x={70} y={210} size={16} color="#31586b">REQUEST</DiagramLabel>
    <circle cx="220" cy="150" r="40" fill="#31586b"/><path d="M220 129v42m0-21h-14m14 0h14" stroke="#f6f4ee" strokeWidth="3" strokeLinecap="round"/><circle cx="206" cy="150" r="4" fill="#d6a94f"/><circle cx="234" cy="150" r="4" fill="#bd7d55"/><circle cx="220" cy="129" r="4" fill="#eae2f2"/><circle cx="220" cy="171" r="4" fill="#eae2f2"/><DiagramLabel x={220} y={207} size={15} color="#31586b">ROUTER</DiagramLabel>
    <rect x="342" y="44" width="86" height="62" rx="15" fill="#f5eacc" stroke="#d6a94f" strokeWidth="2"/><path d="M361 65h47M361 81h31" stroke="#8b6823" strokeWidth="4" strokeLinecap="round"/><DiagramLabel x={385} y={36} size={15} color="#655126">AGENT A</DiagramLabel>
    <rect x="342" y="194" width="86" height="62" rx="15" fill="#eae2f2" stroke="#856a9f" strokeWidth="2"/><circle cx="369" cy="225" r="11" fill="#856a9f"/><path d="M389 219h25M389 231h19" stroke="#59456e" strokeWidth="3" strokeLinecap="round"/><DiagramLabel x={385} y={278} size={15} color="#59456e">AGENT B</DiagramLabel>
    <rect x="444" y="115" width="62" height="70" rx="15" fill="#f1dfd5" stroke="#bd7d55" strokeWidth="2"/><path d="M461 138h29M461 151h29M461 164h18" stroke="#8c563f" strokeWidth="3" strokeLinecap="round"/><DiagramLabel x={475} y={207} size={14} color="#663e38">ACTION</DiagramLabel>
    <Dot x={301} y={150} fill="#d6a94f" r={7}/>
  </Art>;
}

function AuthorizationArt() {
  return <Art title="An authority boundary around agent identity, scoped tools, and denied actions">
    <path d="M74 85h372v146H74z" fill="#eef0e3" stroke="#9aa988" strokeWidth="2" strokeDasharray="5 7"/><path d="M104 112h312v92H104z" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/>
    <DiagramLabel x={149} y={101} size={14} color="#31586b">AGENT ID</DiagramLabel><DiagramLabel x={255} y={101} size={14} color="#655126">TOOL SCOPE</DiagramLabel><DiagramLabel x={367} y={101} size={14} color="#52745b">ALLOW</DiagramLabel><DiagramLabel x={425} y={101} size={14} color="#8c563f">DENY</DiagramLabel>
    <circle cx="149" cy="158" r="24" fill="#d4de95"/><path d="M140 158h18M149 149v18" stroke="#52745b" strokeWidth="2.5"/>
    <path d="M175 158h53m52 0h53" stroke="#52745b" strokeWidth="3" strokeDasharray="5 6"/><path d="M218 149l11 9-11 9M324 149l11 9-11 9" fill="none" stroke="#52745b" strokeWidth="2.5"/>
    <rect x="232" y="136" width="47" height="44" rx="12" fill="#e4e9d7" stroke="#bac095" strokeWidth="2"/><rect x="338" y="136" width="60" height="44" rx="12" fill="#52745b"/><path d="M355 158l9 9 18-19" fill="none" stroke="#f6f4ee" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M412 109v98" stroke="#a46d51" strokeWidth="4"/><circle cx="412" cy="158" r="16" fill="#f0e5d8" stroke="#a46d51" strokeWidth="2"/><path d="M405 151l14 14m0-14l-14 14" stroke="#a46d51" strokeWidth="2"/>
    <Dot x={73} y={158} r={7}/><Dot x={445} y={158} r={7}/>
  </Art>;
}

function OperatingArt() {
  return <Art title="A recurring governance loop linking policy, configuration, operation, evidence, and review">
    <path d="M125 71a145 95 0 0 1 258 21M395 126a145 95 0 0 1-24 108M328 255a145 95 0 0 1-201-20M103 205A145 95 0 0 1 125 71" fill="none" stroke="#9aa988" strokeWidth="4" strokeLinecap="round"/>
    <path d="M372 79l15 12-19 3M378 220l-6 17-12-14M144 239l-19-1 10-16M115 88l12-15 6 19" fill="#52745b"/>
    <rect x="196" y="113" width="128" height="88" rx="22" fill="#31586b"/><DiagramLabel x={260} y={153} size={15} color="#fffdf7">GOVERNANCE</DiagramLabel><DiagramLabel x={260} y={174} size={15} color="#d9e8ed">IN PRACTICE</DiagramLabel>
    <circle cx="254" cy="52" r="27" fill="#f5eacc" stroke="#d6a94f" strokeWidth="2"/><DiagramLabel x={254} y={58} size={14} color="#655126">POLICY</DiagramLabel>
    <circle cx="403" cy="166" r="27" fill="#eae2f2" stroke="#856a9f" strokeWidth="2"/><DiagramLabel x={403} y={172} size={13} color="#59456e">SETTING</DiagramLabel>
    <circle cx="255" cy="267" r="23" fill="#f1dfd5" stroke="#bd7d55" strokeWidth="2"/><DiagramLabel x={255} y={272} size={11} color="#663e38">REVIEW</DiagramLabel>
    <circle cx="105" cy="166" r="27" fill="#e2edf1" stroke="#577f90" strokeWidth="2"/><DiagramLabel x={105} y={172} size={13} color="#31586b">LOG</DiagramLabel>
  </Art>;
}

function PrivacyArt() {
  return <Art title="Separate paths for a website request and an email inquiry">
    <path d="M80 95h357M80 205h357" stroke="#9aa988" strokeWidth="3" strokeDasharray="5 8"/>
    <DiagramLabel x={80} y={66} anchor="start" size={15} color="#31586b" weight={700}>WEBSITE VISIT</DiagramLabel><DiagramLabel x={80} y={176} anchor="start" size={15} color="#8b6823" weight={700}>EMAIL INQUIRY</DiagramLabel>
    <rect x="48" y="81" width="112" height="43" rx="12" fill="#e2edf1" stroke="#577f90" strokeWidth="2"/><rect x="216" y="81" width="114" height="43" rx="12" fill="#d9e8ed" stroke="#577f90" strokeWidth="2"/><rect x="384" y="81" width="112" height="43" rx="12" fill="#e2edf1" stroke="#577f90" strokeWidth="2"/>
    <rect x="48" y="191" width="112" height="43" rx="12" fill="#f5eacc" stroke="#d6a94f" strokeWidth="2"/><rect x="216" y="191" width="114" height="43" rx="12" fill="#f1dfd5" stroke="#bd7d55" strokeWidth="2"/><rect x="384" y="191" width="112" height="43" rx="12" fill="#f5eacc" stroke="#d6a94f" strokeWidth="2"/>
    <Dot x={180} y={102} fill="#bac095" r={5}/><Dot x={354} y={102} fill="#bac095" r={5}/><Dot x={180} y={212} fill="#bac095" r={5}/><Dot x={354} y={212} fill="#bac095" r={5}/>
    <path d="M160 102h20m150 0h54M160 212h20m150 0h54" stroke="#52745b" strokeWidth="2" strokeDasharray="4 5"/>
    <DiagramLabel x={104} y={108} size={15} color="#31586b">Visitor</DiagramLabel><DiagramLabel x={273} y={108} size={15} color="#31586b">Hosting log</DiagramLabel><DiagramLabel x={440} y={108} size={15} color="#31586b">Site served</DiagramLabel>
    <DiagramLabel x={104} y={218} size={15} color="#655126">Sender</DiagramLabel><DiagramLabel x={273} y={218} size={15} color="#663e38">Email service</DiagramLabel><DiagramLabel x={440} y={218} size={15} color="#655126">Response</DiagramLabel>
  </Art>;
}

function TermsArt() {
  return <Art title="A written engagement document with separate scope, responsibility, and delivery sections">
    <path d="M113 27h213l81 81v167H113z" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M326 27v81h81" fill="#e8ebd8" stroke="#bac095" strokeWidth="2"/>
    <DiagramLabel x={150} y={56} anchor="start" size={14} color="#31586b" weight={700}>WRITTEN TERMS</DiagramLabel><path d="M150 83h190M150 98h161" stroke="#c6d2d4" strokeWidth="3" strokeLinecap="round"/>
    <rect x="150" y="116" width="181" height="39" rx="9" fill="#e2edf1"/><rect x="150" y="162" width="181" height="39" rx="9" fill="#f5eacc"/><rect x="150" y="208" width="181" height="39" rx="9" fill="#eae2f2"/>
    <DiagramLabel x={240} y={141} size={16} color="#31586b">Scope + delivery</DiagramLabel><DiagramLabel x={240} y={187} size={15} color="#655126">Fees + responsibilities</DiagramLabel><DiagramLabel x={240} y={233} size={16} color="#59456e">Content + rights</DiagramLabel>
    <path d="M348 135v92" stroke="#9aa988" strokeWidth="3"/><circle cx="348" cy="135" r="9" fill="#577f90"/><circle cx="348" cy="181" r="9" fill="#d6a94f"/><circle cx="348" cy="227" r="9" fill="#856a9f"/>
    <DiagramLabel x={257} y={292} size={15} color="#663e38">Set out in writing</DiagramLabel>
  </Art>;
}

function AccessibilityArt() {
  return <Art title="Keyboard, screen, and reduced-motion paths converging on readable page content">
    <path d="M92 70c53 0 74 18 100 70m-100 90c53 0 74-18 100-70m136-1c26-52 47-89 100-89m-100 89c26 52 47 71 100 71" fill="none" stroke="#9aa988" strokeWidth="3"/>
    <rect x="40" y="42" width="104" height="56" rx="14" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M58 61h68M58 76h53" stroke="#7b8f74" strokeWidth="3" strokeLinecap="round"/>
    <rect x="40" y="202" width="104" height="56" rx="14" fill="#e4e9d7" stroke="#bac095" strokeWidth="2"/><path d="M62 218h14v12H62zM82 218h14v12H82zM102 218h14v12h-14zM62 237h14M82 237h14M102 237h14" fill="none" stroke="#52745b" strokeWidth="2"/>
    <circle cx="92" cy="140" r="27" fill="#f5eacc" stroke="#d6a94f" strokeWidth="2"/><rect x="80" y="130" width="24" height="20" rx="3" fill="none" stroke="#8b6823" strokeWidth="2"/><path d="M84 136h3m3 0h3m3 0h3m-12 5h3m3 0h3m3 0h3" stroke="#8b6823" strokeWidth="2" strokeLinecap="round"/>
    <rect x="376" y="42" width="104" height="56" rx="14" fill="#e2edf1" stroke="#577f90" strokeWidth="2"/><circle cx="402" cy="70" r="10" fill="none" stroke="#577f90" strokeWidth="2"/><path d="M423 63h42M423 76h32" stroke="#577f90" strokeWidth="3" strokeLinecap="round"/>
    <rect x="376" y="202" width="104" height="56" rx="14" fill="#eae2f2" stroke="#856a9f" strokeWidth="2"/><path d="M418 220v18m9-18v18" stroke="#856a9f" strokeWidth="3" strokeLinecap="round"/>
    <rect x="207" y="103" width="108" height="77" rx="18" fill="#31586b"/><DiagramLabel x={261} y={135} size={16} color="#fffdf7">PAGE</DiagramLabel><DiagramLabel x={261} y={158} size={16} color="#d9e8ed">CONTENT</DiagramLabel><Dot x={196} y={140} fill="#577f90" r={5}/><Dot x={326} y={140} fill="#856a9f" r={5}/>
    <DiagramLabel x={92} y={121} size={14} color="#655126">Keyboard</DiagramLabel><DiagramLabel x={92} y={281} size={14} color="#31586b">Screen reader</DiagramLabel><DiagramLabel x={428} y={121} size={14} color="#31586b">Responsive</DiagramLabel><DiagramLabel x={428} y={281} size={14} color="#59456e">Reduced motion</DiagramLabel>
  </Art>;
}

function RouteArt() {
  return <Art title="A broken route that branches toward two working destinations">
    <path d="M53 150h164m44 0h105m-105 0c63 0 75-75 138-75m-138 75c63 0 75 75 138 75" fill="none" stroke="#9aa988" strokeWidth="4" strokeDasharray="6 7" strokeLinecap="round"/>
    <circle cx="75" cy="150" r="27" fill="#e2edf1" stroke="#577f90" strokeWidth="2"/><path d="M63 150h23m-12-12v24" stroke="#577f90" strokeWidth="2"/><DiagramLabel x={75} y={199} size={15} color="#31586b">REQUEST</DiagramLabel>
    <path d="M216 129l14 14m0-14l-14 14m0 14l14 14m0-14l-14 14" stroke="#bd7d55" strokeWidth="4" strokeLinecap="round"/><DiagramLabel x={223} y={184} size={14} color="#8c563f">NOT FOUND</DiagramLabel>
    <rect x="393" y="42" width="88" height="62" rx="17" fill="#d9e8ed" stroke="#577f90" strokeWidth="2"/><path d="M414 73h46m-12-12l12 12-12 12" fill="none" stroke="#31586b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><DiagramLabel x={437} y={129} size={16} color="#31586b">HOME</DiagramLabel>
    <rect x="393" y="196" width="88" height="62" rx="17" fill="#f5eacc" stroke="#d6a94f" strokeWidth="2"/><path d="M417 218h40m-40 13h31" stroke="#8b6823" strokeWidth="3" strokeLinecap="round"/><DiagramLabel x={437} y={281} size={16} color="#655126">SERVICES</DiagramLabel>
    <circle cx="340" cy="75" r="8" fill="#52745b"/><circle cx="340" cy="225" r="8" fill="#52745b"/>
  </Art>;
}

function AboutArt() {
  return <Art title="A connected enterprise system map across people, applications, data, and AI">
    <path d="M260 150L122 79m138 71L398 79m-138 71-30 119m30-119 138 119M122 79l108 190m168-190L230 269" fill="none" stroke="#a8b397" strokeWidth="2"/>
    <rect x="198" y="103" width="124" height="94" rx="24" fill="#31586b"/><DiagramLabel x={260} y={145} size={17} color="#fffdf7">ENGINEERING</DiagramLabel><DiagramLabel x={260} y={167} size={14} color="#d9e8ed">integration + controls</DiagramLabel>
    <circle cx="122" cy="79" r="38" fill="#e2edf1" stroke="#577f90" strokeWidth="2"/><circle cx="122" cy="79" r="14" fill="#577f90"/><path d="M98 104c5-15 42-15 48 0" fill="#c5dce2"/><DiagramLabel x={122} y={132} size={16} color="#31586b">PEOPLE</DiagramLabel>
    <circle cx="398" cy="79" r="38" fill="#f5eacc" stroke="#d6a94f" strokeWidth="2"/><rect x="380" y="64" width="36" height="28" rx="4" fill="#fffdf7" stroke="#8b6823" strokeWidth="2"/><path d="M386 72h23M386 80h15" stroke="#8b6823" strokeWidth="2"/><DiagramLabel x={398} y={132} size={16} color="#655126">APPLICATIONS</DiagramLabel>
    <circle cx="230" cy="269" r="28" fill="#eae2f2" stroke="#856a9f" strokeWidth="2"/><path d="M218 269h24m-12-12v24" stroke="#856a9f" strokeWidth="2"/><DiagramLabel x={230} y={233} size={16} color="#59456e">DATA</DiagramLabel>
    <circle cx="398" cy="269" r="34" fill="#f1dfd5" stroke="#bd7d55" strokeWidth="2"/><path d="M384 269h28M398 255v28" stroke="#bd7d55" strokeWidth="2"/><DiagramLabel x={398} y={224} size={16} color="#663e38">AI SYSTEMS</DiagramLabel>
  </Art>;
}

function ContactArt() {
  return <Art title="A project conversation organized around a workflow, systems, and an open decision">
    <rect x="57" y="46" width="406" height="207" rx="18" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M57 92h406" stroke="#bac095" strokeWidth="2"/><circle cx="82" cy="69" r="6" fill="#577f90"/><circle cx="103" cy="69" r="6" fill="#d6a94f"/><circle cx="124" cy="69" r="6" fill="#bd7d55"/><DiagramLabel x={160} y={76} anchor="start" size={15} color="#31586b" weight={700}>PROJECT CONVERSATION</DiagramLabel>
    <rect x="88" y="113" width="170" height="49" rx="16" fill="#e2edf1"/><DiagramLabel x={173} y={143} size={18} color="#31586b">Workflow + systems</DiagramLabel>
    <rect x="268" y="175" width="158" height="49" rx="16" fill="#f5eacc"/><DiagramLabel x={347} y={205} size={17} color="#655126">Open decision</DiagramLabel>
    <path d="M257 137c62 0 66 18 38 45" fill="none" stroke="#bd7d55" strokeWidth="3" strokeDasharray="5 6"/><circle cx="300" cy="181" r="5" fill="#bd7d55"/>
    <path d="M410 122l24 62-25-17-17 24z" fill="#52745b"/><path d="M403 165l12-16" stroke="#f6f4ee" strokeWidth="2"/>
  </Art>;
}

const scenes: Record<ArtKind, Scene> = {
  services: { label: "HOW AN AI WORKFLOW CONNECTS", note: "Company information reaches a scoped agent; actions can pass through human review before changing a business app.", kind: "services" },
  governance: { label: "AUTHORIZATION RECORD", note: "Record the agent’s purpose, allowed actions, business sponsor, and next review.", kind: "governance" },
  microsoft: { label: "MICROSOFT AI STACK", note: "Follow content access through agent identity and tools to audit records and environment controls.", kind: "microsoft" },
  delivery: { label: "FROM UNDERSTANDING TO OPERATION", note: "Understand the workflow, design controls, implement and test the system, then establish ongoing operations.", kind: "delivery" },
  insights: { label: "ENGINEERING QUESTIONS", note: "Explore how architecture, authorization, implementation, and operations connect in enterprise AI.", kind: "insights" },
  architecture: { label: "LAYERED ARCHITECTURE", note: "Separate the agent task, tool access, and data boundary in the design.", kind: "architecture" },
  assessment: { label: "EXAMPLE ASSESSMENT MATRIX", note: "Illustrative only. Compare intended use with configured access and the evidence available; marks here are not assessment findings.", kind: "assessment" },
  "agent-service": { label: "AGENT RESPONSIBILITY", note: "Technical owners manage configuration and access. Business sponsors decide the agent’s purpose and whether it remains needed.", kind: "agent-service" },
  modernization: { label: "APPLICATION BRIDGE", note: "Use an API boundary to expose approved operations and preserve system rules.", kind: "modernization" },
  "modernization-article": { label: "MAKE THE BOUNDARY EXPLICIT", note: "Expose named operations only after checking identity, limiting actions, and recording each call.", kind: "modernization-article" },
  platform: { label: "OPERATIONS CYCLE", note: "Release, observation, recovery, and handover stay connected over time.", kind: "platform" },
  remediation: { label: "FINDING TO VERIFIED CHANGE", note: "Move a confirmed issue through a controlled fix and a behavior check.", kind: "remediation" },
  schedule: { label: "SCHEDULE AUTHORITY", note: "Name who approved the recurring run, which agent acts, and when its authority must be reviewed.", kind: "schedule" },
  chain: { label: "DELEGATION CHAIN", note: "A request is routed to specialist agents; assess the combined permissions before any system action.", kind: "chain" },
  authorization: { label: "ACTION BOUNDARY", note: "Map the agent identity to a limited tool scope, then test both permitted and denied actions.", kind: "authorization" },
  operating: { label: "GOVERNANCE FEEDBACK LOOP", note: "Connect policy, configuration, daily operation, evidence, and review.", kind: "operating" },
  privacy: { label: "WEBSITE + EMAIL DATA", note: "A site visit creates technical request records. Email is processed separately so we can respond to an inquiry.", kind: "privacy" },
  terms: { label: "WRITTEN ENGAGEMENT", note: "Website descriptions are general. Scope, fees, responsibilities, and delivery terms are agreed in writing.", kind: "terms" },
  accessibility: { label: "WAYS INTO THE CONTENT", note: "Keyboard access, screen readers, responsive layouts, and reduced motion support access to the same content.", kind: "accessibility" },
  "not-found": { label: "ROUTE RECOVERY", note: "The requested page is unavailable. Follow a working path to continue.", kind: "not-found" },
  about: { label: "SYSTEMS PRACTICE", note: "Engineering work follows how people, applications, data, and AI interact.", kind: "about" },
  contact: { label: "PROJECT CONVERSATION", note: "Start with the workflow, the systems involved, and the decision still open.", kind: "contact" },
};

function sceneForPath(path: string): Scene {
  if (path === "/services") return scenes.services;
  if (path === "/agent-governance") return scenes.governance;
  if (path === "/microsoft-ai" || path.includes("microsoft-ai-governance")) return scenes.microsoft;
  if (path === "/how-we-work") return scenes.delivery;
  if (path === "/insights") return scenes.insights;
  if (path === "/about") return scenes.about;
  if (path === "/contact") return scenes.contact;
  if (path === "/privacy") return scenes.privacy;
  if (path === "/terms") return scenes.terms;
  if (path === "/accessibility") return scenes.accessibility;
  if (path === "/404") return scenes["not-found"];
  if (path.includes("authorize-the-schedule")) return scenes.schedule;
  if (path.includes("authorize-the-agent-chain")) return scenes.chain;
  if (path.includes("agent-authorization-before")) return scenes.authorization;
  if (path.includes("modernization-is-an-ai-control")) return scenes["modernization-article"];
  if (path.includes("modernization")) return scenes.modernization;
  if (path.includes("governance-that-survives")) return scenes.operating;
  if (path.startsWith("/services/")) {
    if (path.includes("architecture")) return scenes.architecture;
    if (path.includes("assessment")) return scenes.assessment;
    if (path.includes("agent-governance")) return scenes["agent-service"];
    if (path.includes("integration")) return scenes.modernization;
    if (path.includes("platform")) return scenes.platform;
    if (path.includes("remediation")) return scenes.remediation;
    return scenes.services;
  }
  return scenes.authorization;
}

function Artwork({ kind }: { kind: ArtKind }) {
  switch (kind) {
    case "services": return <ServicesArt/>;
    case "governance": return <GovernanceArt ledger/>;
    case "microsoft": return <MicrosoftArt/>;
    case "delivery": return <DeliveryArt/>;
    case "insights": return <NetworkArt/>;
    case "architecture": return <ArchitectureArt/>;
    case "assessment": return <AssessmentArt/>;
    case "agent-service": return <AgentServiceArt/>;
    case "modernization": return <IntegrationArt/>;
    case "modernization-article": return <IntegrationArt transformation/>;
    case "platform": return <PlatformArt/>;
    case "remediation": return <RemediationArt/>;
    case "schedule": return <ScheduleArt/>;
    case "chain": return <ChainArt/>;
    case "authorization": return <AuthorizationArt/>;
    case "operating": return <OperatingArt/>;
    case "privacy": return <PrivacyArt/>;
    case "terms": return <TermsArt/>;
    case "accessibility": return <AccessibilityArt/>;
    case "not-found": return <RouteArt/>;
    case "about": return <AboutArt/>;
    case "contact": return <ContactArt/>;
  }
}

export function PageHeroVisual({ path }: { path: string }) {
  const scene = sceneForPath(path);
  return <figure className="page-hero-visual" aria-label={scene.label}>
    <figcaption><span><i aria-hidden="true" />{scene.label}</span></figcaption>
    <div className={`page-hero-diagram page-hero-diagram-${scene.kind}`}>
      <Artwork kind={scene.kind}/>
    </div>
    <p className="page-hero-note">{scene.note}</p>
  </figure>;
}
