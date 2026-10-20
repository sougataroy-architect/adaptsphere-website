import type { ReactNode } from "react";

type ArtProps = { children: ReactNode; title: string };
type ArtKind = "services" | "governance" | "microsoft" | "delivery" | "insights" | "architecture" | "assessment" | "agent-service" | "modernization" | "modernization-article" | "platform" | "remediation" | "schedule" | "chain" | "authorization" | "operating" | "privacy" | "terms" | "accessibility" | "not-found" | "about" | "contact";
type Scene = { label: string; note: string; kind: ArtKind };

function Art({ children, title }: ArtProps) {
  return <svg className="page-hero-artwork" viewBox="0 0 520 300" role="img" aria-label={title}>{children}</svg>;
}

function Dot({ x, y, fill = "#52745b", r = 6 }: { x: number; y: number; fill?: string; r?: number }) {
  return <circle cx={x} cy={y} r={r} fill={fill} stroke="#f6f4ee" strokeWidth="3" />;
}

function Hub({ cx, cy, r = 40 }: { cx: number; cy: number; r?: number }) {
  return <g><circle cx={cx} cy={cy} r={r + 12} fill="#e8ebd8"/><circle cx={cx} cy={cy} r={r} fill="#52745b"/><path d={`M${cx-12} ${cy}h24M${cx} ${cy-12}v24`} stroke="#f6f4ee" strokeWidth="3" strokeLinecap="round"/></g>;
}

function ServicesArt() {
  return <Art title="A central AI workflow connected to information, applications, and human decisions">
    <path d="M94 88 C160 88 170 138 230 148 M94 212 C160 212 170 162 230 152 M290 150 C348 150 350 86 418 86 M290 150 C348 150 350 214 418 214" fill="none" stroke="#9aa988" strokeWidth="3" strokeDasharray="5 8"/>
    <rect x="32" y="54" width="114" height="68" rx="18" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M56 78h42M56 90h58M56 102h34" stroke="#7b8f74" strokeWidth="3" strokeLinecap="round"/>
    <rect x="32" y="178" width="114" height="68" rx="18" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><rect x="52" y="198" width="28" height="28" rx="6" fill="#d4de95"/><path d="M90 205h34M90 217h24" stroke="#7b8f74" strokeWidth="3" strokeLinecap="round"/>
    <Hub cx={260} cy={150} r={42}/>
    <rect x="374" y="54" width="114" height="68" rx="18" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><circle cx="403" cy="88" r="14" fill="#d4de95"/><path d="M430 80h36M430 92h28" stroke="#7b8f74" strokeWidth="3" strokeLinecap="round"/>
    <rect x="374" y="178" width="114" height="68" rx="18" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M400 219l13-15 12 9 23-25" fill="none" stroke="#52745b" strokeWidth="3" strokeLinecap="round"/><Dot x={448} y={187} r={4}/>
    <Dot x={153} y={88} fill="#bac095"/><Dot x={153} y={212} fill="#bac095"/><Dot x={367} y={86} fill="#bac095"/><Dot x={367} y={214} fill="#bac095"/>
  </Art>;
}

function GovernanceArt({ ledger = false }: { ledger?: boolean }) {
  if (ledger) return <Art title="A governance record with a named sponsor, defined scope, review date, and supporting evidence">
    <path d="M64 44h246l65 64v151H64z" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M310 44v64h65" fill="#e8ebd8" stroke="#bac095" strokeWidth="2"/>
    <path d="M94 94h154M94 116h210M94 162h148M94 184h182M94 230h130" stroke="#bac095" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="345" cy="217" r="62" fill="#e8ebd8"/><circle cx="345" cy="217" r="45" fill="#52745b"/><circle cx="345" cy="217" r="31" fill="none" stroke="#d4de95" strokeWidth="2"/><path d="M329 217l11 12 23-27" fill="none" stroke="#f6f4ee" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="252" y="139" width="95" height="39" rx="19" fill="#d4de95" stroke="#bac095" strokeWidth="2"/><Dot x={275} y={158} r={5}/>
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
    {["#bac095", "#d4de95", "#e4e9d7", "#bac095"].map((fill, i) => <g key={i}>
      <circle cx="93" cy={66 + i*57} r="13" fill={fill} stroke="#52745b" strokeWidth="2"/>
      <rect x="122" y={43 + i*57} width="296" height="45" rx="13" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/>
      <rect x="143" y={57 + i*57} width={i===0 ? 204 : i===1 ? 150 : i===2 ? 224 : 176} height="7" rx="4" fill="#7b8f74" opacity=".82"/>
      <rect x="143" y={70 + i*57} width={i===0 ? 122 : i===1 ? 190 : i===2 ? 112 : 154} height="5" rx="3" fill="#c7cfb7"/>
    </g>)}
    <path d="M418 65h38v172h-38" fill="none" stroke="#52745b" strokeWidth="2"/><path d="M445 145h25" stroke="#52745b" strokeWidth="2"/><Dot x={465} y={145} r={5}/>
  </Art>;
}

function DeliveryArt() {
  return <Art title="A four-stage delivery route that bends through a review point before handover">
    <path d="M74 220 C74 128 181 174 181 84 S301 60 301 150 S435 211 435 77" fill="none" stroke="#9aa988" strokeWidth="5" strokeLinecap="round" strokeDasharray="2 11"/>
    <circle cx="74" cy="220" r="31" fill="#fffdf7" stroke="#bac095" strokeWidth="3"/><path d="M61 220h26M74 207v26" stroke="#52745b" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="181" cy="84" r="31" fill="#e4e9d7" stroke="#bac095" strokeWidth="3"/><path d="M166 84h30M181 69v30" stroke="#52745b" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="301" cy="150" r="42" fill="#52745b"/><path d="M280 150l14 14 29-31" fill="none" stroke="#f6f4ee" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="435" cy="77" r="31" fill="#d4de95" stroke="#bac095" strokeWidth="3"/><path d="M420 77h30M443 67l10 10-10 10" fill="none" stroke="#52745b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </Art>;
}

function NetworkArt() {
  return <Art title="An editorial research map connecting architecture, authorization, engineering, and operations">
    <path d="M98 78L240 134 386 62M98 78l38 145 104-89 119 111 27-183M240 134l-104 89M240 134l119 111M386 62l-27 183" fill="none" stroke="#a8b397" strokeWidth="2"/>
    <circle cx="240" cy="134" r="48" fill="#52745b"/><circle cx="240" cy="134" r="23" fill="#d4de95"/><path d="M229 134h22M240 123v22" stroke="#52745b" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="98" cy="78" r="27" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M86 72h24M86 81h17" stroke="#52745b" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="386" cy="62" r="22" fill="#e4e9d7" stroke="#bac095" strokeWidth="2"/><circle cx="386" cy="62" r="8" fill="#52745b"/>
    <circle cx="136" cy="223" r="25" fill="#d4de95" stroke="#bac095" strokeWidth="2"/><path d="M125 223h22M136 212v22" stroke="#52745b" strokeWidth="2"/>
    <circle cx="359" cy="245" r="27" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M348 245l8 8 15-17" fill="none" stroke="#52745b" strokeWidth="3"/>
    <Dot x={288} y={69} fill="#bac095" r={5}/><Dot x={322} y={198} fill="#bac095" r={5}/>
  </Art>;
}

function AssessmentArt() {
  return <Art title="Assessment matrix comparing intended actions with configured access and observed evidence">
    <path d="M106 47v205M106 47h350M106 98h350M106 149h350M106 200h350M193 47v205M280 47v205M367 47v205" fill="none" stroke="#bac095" strokeWidth="2"/>
    <rect x="116" y="58" width="68" height="30" rx="8" fill="#d4de95"/><rect x="203" y="58" width="68" height="30" rx="8" fill="#e4e9d7"/><rect x="290" y="58" width="68" height="30" rx="8" fill="#d4de95"/><rect x="377" y="58" width="68" height="30" rx="8" fill="#fffdf7"/>
    {[{x:150,y:123,ok:true},{x:237,y:123,ok:false},{x:324,y:123,ok:true},{x:411,y:123,ok:true},{x:150,y:174,ok:true},{x:237,y:174,ok:true},{x:324,y:174,ok:false},{x:411,y:174,ok:true},{x:150,y:225,ok:false},{x:237,y:225,ok:true},{x:324,y:225,ok:true},{x:411,y:225,ok:false}].map(({x,y,ok}) => <g key={`${x}-${y}`}>
      <circle cx={x} cy={y} r="13" fill={ok ? "#e4e9d7" : "#f0e5d8"}/><path d={ok ? `M${x-6} ${y}l4 5 9-10` : `M${x-5} ${y-5}l10 10m0-10l-10 10`} fill="none" stroke={ok ? "#52745b" : "#9b7050"} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </g>)}
  </Art>;
}

function ArchitectureArt() {
  return <Art title="A layered AI architecture connecting an application, governed tools, and bounded data">
    <path d="M88 74l172-45 172 45-172 48z" fill="#d4de95" stroke="#52745b" strokeWidth="2"/><path d="M88 74v50l172 50v-52z" fill="#bac095" stroke="#52745b" strokeWidth="2"/><path d="M432 74v50l-172 50v-52z" fill="#e4e9d7" stroke="#52745b" strokeWidth="2"/>
    <path d="M88 155l172 50 172-50M88 155v50l172 50v-50M432 155v50l-172 50v-50" fill="#eef0e3" stroke="#52745b" strokeWidth="2"/>
    <path d="M149 77l110-29 110 29-110 31z" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><circle cx="259" cy="76" r="15" fill="#52745b"/><path d="M249 76h20M259 66v20" stroke="#f6f4ee" strokeWidth="2"/>
    <path d="M260 108v42m0 52v31" stroke="#52745b" strokeWidth="3" strokeDasharray="5 6"/><Dot x={260} y={151} r={5}/><Dot x={260} y={203} r={5}/>
  </Art>;
}

function AgentServiceArt() {
  return <Art title="An agent identity at the center of separate owner, sponsor, tool, and lifecycle relationships">
    <path d="M260 145L111 74M260 145l151-71M260 145l-149 94M260 145l151 94" stroke="#9aa988" strokeWidth="3" fill="none"/>
    <circle cx="260" cy="145" r="63" fill="#e4e9d7" stroke="#52745b" strokeWidth="3"/><circle cx="260" cy="145" r="35" fill="#52745b"/><path d="M246 145h28m-14-14v28" stroke="#f6f4ee" strokeWidth="3" strokeLinecap="round"/>
    <rect x="48" y="42" width="126" height="64" rx="18" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><circle cx="75" cy="74" r="12" fill="#d4de95"/><path d="M98 67h55M98 79h42" stroke="#7b8f74" strokeWidth="3" strokeLinecap="round"/>
    <rect x="346" y="42" width="126" height="64" rx="18" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M374 83l12-21 13 21z" fill="#e4e9d7" stroke="#52745b" strokeWidth="2"/><path d="M411 67h46M411 79h35" stroke="#7b8f74" strokeWidth="3" strokeLinecap="round"/>
    <rect x="48" y="207" width="126" height="64" rx="18" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M66 228h32v22H66zM72 222h20" fill="none" stroke="#52745b" strokeWidth="2"/><path d="M108 230h47M108 242h37" stroke="#7b8f74" strokeWidth="3" strokeLinecap="round"/>
    <rect x="346" y="207" width="126" height="64" rx="18" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><circle cx="377" cy="239" r="13" fill="none" stroke="#52745b" strokeWidth="2"/><path d="M377 231v9l6 4M402 232h52M402 244h37" fill="none" stroke="#7b8f74" strokeWidth="3" strokeLinecap="round"/>
    <Dot x={185} y={109} r={5}/><Dot x={335} y={109} r={5}/><Dot x={185} y={181} r={5}/><Dot x={335} y={181} r={5}/>
  </Art>;
}

function IntegrationArt({ transformation = false }: { transformation?: boolean }) {
  if (transformation) return <Art title="Legacy business rules made explicit as approved operations before AI integration">
    <path d="M48 244h424" stroke="#bac095" strokeWidth="2"/><path d="M68 244V111l50-40 50 40v133M82 125h72M82 148h72M82 171h72M82 194h72" fill="#e4e9d7" stroke="#52745b" strokeWidth="2"/>
    <path d="M171 147h84" stroke="#52745b" strokeWidth="3" strokeDasharray="6 6"/><path d="M245 138l12 9-12 9" fill="none" stroke="#52745b" strokeWidth="3"/>
    <rect x="258" y="97" width="100" height="112" rx="14" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M277 125h62M277 146h47M277 167h62M277 188h39" stroke="#7b8f74" strokeWidth="4" strokeLinecap="round"/><circle cx="308" cy="225" r="16" fill="#d4de95" stroke="#52745b" strokeWidth="2"/>
    <path d="M359 147h82" stroke="#52745b" strokeWidth="3" strokeDasharray="6 6"/><path d="M431 138l12 9-12 9" fill="none" stroke="#52745b" strokeWidth="3"/>
    <rect x="440" y="116" width="28" height="102" rx="10" fill="#bac095"/><path d="M447 133h14M447 151h14M447 169h14M447 187h14" stroke="#52745b" strokeWidth="3"/>
  </Art>;
  return <Art title="An old business application connected to AI through a deliberate, permission-checking API bridge">
    <path d="M39 235h442" stroke="#bac095" strokeWidth="2"/>
    <path d="M58 234V123l50-43 50 43v111" fill="#e4e9d7" stroke="#52745b" strokeWidth="2"/><path d="M77 142h62M77 161h62M77 180h62M77 199h62" stroke="#7b8f74" strokeWidth="4" strokeLinecap="round"/>
    <path d="M158 177h54M307 177h52" stroke="#52745b" strokeWidth="3" strokeDasharray="6 7"/><path d="M205 166l13 11-13 11M352 166l13 11-13 11" fill="none" stroke="#52745b" strokeWidth="3"/>
    <rect x="219" y="104" width="88" height="146" rx="20" fill="#52745b"/><rect x="232" y="121" width="62" height="32" rx="9" fill="#d4de95"/><path d="M236 177h54M236 195h54M236 213h40" stroke="#edf0e3" strokeWidth="4" strokeLinecap="round"/><circle cx="263" cy="235" r="5" fill="#d4de95"/>
    <rect x="366" y="106" width="103" height="131" rx="14" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><rect x="382" y="122" width="70" height="36" rx="7" fill="#e8ebd8"/><path d="M382 176h70M382 192h54M382 208h61" stroke="#7b8f74" strokeWidth="3" strokeLinecap="round"/>
    <Dot x={184} y={177} fill="#d4de95"/><Dot x={335} y={177} fill="#d4de95"/>
  </Art>;
}

function PlatformArt() {
  return <Art title="A circular software operations loop linking change, release, observation, and recovery">
    <path d="M182 66a106 106 0 0 1 145 26M356 123a106 106 0 0 1-39 137M268 274a106 106 0 0 1-128-58M118 170A106 106 0 0 1 165 83" fill="none" stroke="#9aa988" strokeWidth="5" strokeLinecap="round"/>
    <path d="M318 76l13 13-19 1M347 244l-18 4 5-19M143 229l-5-18 19 6M149 79l17-7-1 19" fill="#52745b"/>
    <circle cx="260" cy="170" r="66" fill="#e4e9d7"/><circle cx="260" cy="170" r="40" fill="#52745b"/><path d="M243 170h34M260 153v34" stroke="#f6f4ee" strokeWidth="3" strokeLinecap="round"/>
    <rect x="206" y="31" width="108" height="44" rx="20" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><rect x="362" y="149" width="116" height="44" rx="20" fill="#d4de95" stroke="#bac095" strokeWidth="2"/><rect x="206" y="264" width="108" height="30" rx="15" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><rect x="42" y="149" width="116" height="44" rx="20" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/>
    <circle cx="260" cy="53" r="6" fill="#52745b"/><circle cx="420" cy="171" r="6" fill="#52745b"/><circle cx="260" cy="279" r="6" fill="#52745b"/><circle cx="100" cy="171" r="6" fill="#52745b"/>
  </Art>;
}

function RemediationArt() {
  return <Art title="A finding moving through a controlled change into a verified operating state">
    <path d="M57 53h142v192H57z" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M83 86h89M83 112h66M83 139h89M83 166h51M83 193h78" stroke="#bac095" strokeWidth="5" strokeLinecap="round"/>
    <path d="M190 147h94" stroke="#52745b" strokeWidth="3" strokeDasharray="6 7"/><path d="M270 136l14 11-14 11" fill="none" stroke="#52745b" strokeWidth="3"/>
    <circle cx="260" cy="147" r="41" fill="#e8ebd8" stroke="#bac095" strokeWidth="2"/><path d="M240 147h39M260 127v40" stroke="#52745b" strokeWidth="3" strokeLinecap="round"/>
    <path d="M321 147h53" stroke="#52745b" strokeWidth="3" strokeDasharray="6 7"/><path d="M360 136l14 11-14 11" fill="none" stroke="#52745b" strokeWidth="3"/>
    <rect x="375" y="53" width="92" height="192" rx="16" fill="#e4e9d7" stroke="#52745b" strokeWidth="2"/><circle cx="421" cy="105" r="22" fill="#52745b"/><path d="M410 105l8 8 15-17" fill="none" stroke="#f6f4ee" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M393 154h56M393 176h42M393 198h56" stroke="#8a9a7e" strokeWidth="4" strokeLinecap="round"/>
  </Art>;
}

function ScheduleArt() {
  return <Art title="A scheduled trigger orbiting a clock, with an explicit review checkpoint">
    <circle cx="255" cy="151" r="108" fill="#eef0e3" stroke="#bac095" strokeWidth="2" strokeDasharray="3 8"/><circle cx="255" cy="151" r="76" fill="#fffdf7" stroke="#9aa988" strokeWidth="3"/>
    <path d="M255 93v61l43 24" fill="none" stroke="#52745b" strokeWidth="6" strokeLinecap="round"/><circle cx="255" cy="151" r="9" fill="#d4de95"/>
    <path d="M255 43v-20M363 151h31M255 259v20M147 151h-31" stroke="#52745b" strokeWidth="3"/><circle cx="255" cy="23" r="13" fill="#d4de95" stroke="#52745b" strokeWidth="2"/><circle cx="394" cy="151" r="13" fill="#52745b"/><circle cx="255" cy="279" r="13" fill="#bac095" stroke="#52745b" strokeWidth="2"/><circle cx="116" cy="151" r="13" fill="#fffdf7" stroke="#52745b" strokeWidth="2"/>
    <path d="M255 43a108 108 0 0 1 108 108" fill="none" stroke="#d4de95" strokeWidth="7" strokeLinecap="round"/><path d="M353 144l11 8-10 9" fill="none" stroke="#52745b" strokeWidth="3"/>
  </Art>;
}

function ChainArt() {
  return <Art title="A delegated agent chain showing a user request, orchestration, specialized agents, and an external action">
    <path d="M74 150h115M189 150h70M261 150h83M344 150h100M260 150v-87M260 150v88" fill="none" stroke="#9aa988" strokeWidth="3" strokeDasharray="5 7"/>
    <rect x="25" y="114" width="91" height="72" rx="19" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><circle cx="69" cy="142" r="13" fill="#d4de95"/><path d="M49 166h40" stroke="#7b8f74" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="220" cy="150" r="40" fill="#52745b"/><path d="M201 150h38M220 131v38" stroke="#f6f4ee" strokeWidth="3" strokeLinecap="round"/>
    <rect x="342" y="44" width="86" height="62" rx="15" fill="#e4e9d7" stroke="#bac095" strokeWidth="2"/><path d="M361 65h47M361 81h31" stroke="#52745b" strokeWidth="4" strokeLinecap="round"/>
    <rect x="342" y="194" width="86" height="62" rx="15" fill="#d4de95" stroke="#bac095" strokeWidth="2"/><circle cx="369" cy="225" r="11" fill="#52745b"/><path d="M389 219h25M389 231h19" stroke="#52745b" strokeWidth="3" strokeLinecap="round"/>
    <rect x="444" y="115" width="62" height="70" rx="15" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M461 138h29M461 151h29M461 164h18" stroke="#52745b" strokeWidth="3" strokeLinecap="round"/>
    <Dot x={301} y={150} fill="#d4de95" r={7}/>
  </Art>;
}

function AuthorizationArt() {
  return <Art title="An authority boundary around agent identity, scoped tools, and denied actions">
    <path d="M74 85h372v146H74z" fill="#eef0e3" stroke="#9aa988" strokeWidth="2" strokeDasharray="5 7"/><path d="M104 112h312v92H104z" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/>
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
    <rect x="196" y="113" width="128" height="88" rx="22" fill="#52745b"/><path d="M222 140h76M222 157h52M222 176h65" stroke="#d4de95" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="254" cy="52" r="27" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M241 52h26M254 39v26" stroke="#52745b" strokeWidth="2"/>
    <circle cx="403" cy="166" r="27" fill="#d4de95" stroke="#bac095" strokeWidth="2"/><path d="M391 166l8 8 16-18" fill="none" stroke="#52745b" strokeWidth="3"/>
    <circle cx="255" cy="267" r="23" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M244 261h22M244 270h17" stroke="#52745b" strokeWidth="2"/>
    <circle cx="105" cy="166" r="27" fill="#e4e9d7" stroke="#bac095" strokeWidth="2"/><path d="M93 166h24M105 154v24" stroke="#52745b" strokeWidth="2"/>
  </Art>;
}

function PrivacyArt() {
  return <Art title="Separate paths for a website request and an email inquiry">
    <path d="M80 95h357M80 205h357" stroke="#9aa988" strokeWidth="3" strokeDasharray="5 8"/>
    <text x="80" y="66" fill="#435a49" fontSize="17" fontFamily="inherit">WEB</text><text x="80" y="176" fill="#435a49" fontSize="17" fontFamily="inherit">EMAIL</text>
    <rect x="48" y="81" width="88" height="43" rx="12" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><rect x="216" y="81" width="114" height="43" rx="12" fill="#e4e9d7" stroke="#bac095" strokeWidth="2"/><rect x="384" y="81" width="88" height="43" rx="12" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/>
    <rect x="48" y="191" width="88" height="43" rx="12" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><rect x="216" y="191" width="114" height="43" rx="12" fill="#d4de95" stroke="#bac095" strokeWidth="2"/><rect x="384" y="191" width="88" height="43" rx="12" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/>
    <Dot x={180} y={102} fill="#bac095" r={5}/><Dot x={354} y={102} fill="#bac095" r={5}/><Dot x={180} y={212} fill="#bac095" r={5}/><Dot x={354} y={212} fill="#bac095" r={5}/>
    <path d="M136 102h44m150 0h54M136 212h44m150 0h54" stroke="#52745b" strokeWidth="2" strokeDasharray="4 5"/>
    <path d="M78 95v14m-8-7h16M256 95v14m-8-7h16M428 95v14m-8-7h16M78 205v14m-8-7h16M256 205v14m-8-7h16M428 205v14m-8-7h16" stroke="#52745b" strokeWidth="2" strokeLinecap="round"/>
  </Art>;
}

function TermsArt() {
  return <Art title="A written engagement document with separate scope, responsibility, and delivery sections">
    <path d="M113 27h213l81 81v167H113z" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M326 27v81h81" fill="#e8ebd8" stroke="#bac095" strokeWidth="2"/>
    <rect x="150" y="66" width="100" height="15" rx="7" fill="#d4de95"/><path d="M150 104h190M150 120h161" stroke="#bac095" strokeWidth="4" strokeLinecap="round"/>
    <rect x="150" y="147" width="181" height="36" rx="9" fill="#e4e9d7"/><rect x="150" y="193" width="181" height="36" rx="9" fill="#eef0e3"/>
    <path d="M164 165h96m-96 44h122" stroke="#7b8f74" strokeWidth="4" strokeLinecap="round"/>
    <path d="M348 148v78" stroke="#bac095" strokeWidth="3"/><circle cx="348" cy="148" r="10" fill="#52745b"/><circle cx="348" cy="187" r="10" fill="#d4de95" stroke="#52745b" strokeWidth="2"/><circle cx="348" cy="226" r="10" fill="#fffdf7" stroke="#52745b" strokeWidth="2"/>
    <path d="M393 208c-19 22-40 21-55 18" fill="none" stroke="#52745b" strokeWidth="2" strokeDasharray="4 5"/>
  </Art>;
}

function AccessibilityArt() {
  return <Art title="Keyboard, screen, and reduced-motion paths converging on readable page content">
    <path d="M92 70c53 0 74 18 100 70m-100 90c53 0 74-18 100-70m136-1c26-52 47-89 100-89m-100 89c26 52 47 71 100 71" fill="none" stroke="#9aa988" strokeWidth="3"/>
    <rect x="40" y="42" width="104" height="56" rx="14" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M58 61h68M58 76h53" stroke="#7b8f74" strokeWidth="3" strokeLinecap="round"/>
    <rect x="40" y="202" width="104" height="56" rx="14" fill="#e4e9d7" stroke="#bac095" strokeWidth="2"/><path d="M62 218h14v12H62zM82 218h14v12H82zM102 218h14v12h-14zM62 237h14M82 237h14M102 237h14" fill="none" stroke="#52745b" strokeWidth="2"/>
    <circle cx="92" cy="140" r="27" fill="#d4de95" stroke="#bac095" strokeWidth="2"/><path d="M80 140h24M92 128v24" stroke="#52745b" strokeWidth="2"/>
    <rect x="376" y="42" width="104" height="56" rx="14" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><circle cx="402" cy="70" r="10" fill="none" stroke="#52745b" strokeWidth="2"/><path d="M423 63h42M423 76h32" stroke="#7b8f74" strokeWidth="3" strokeLinecap="round"/>
    <rect x="376" y="202" width="104" height="56" rx="14" fill="#e8ebd8" stroke="#bac095" strokeWidth="2"/><path d="M401 229l12 12m0-12l-12 12m39-12v12m-9-6h18" stroke="#52745b" strokeWidth="2" strokeLinecap="round"/>
    <rect x="207" y="103" width="108" height="77" rx="18" fill="#52745b"/><path d="M226 126h70M226 143h59M226 160h64" stroke="#d4de95" strokeWidth="4" strokeLinecap="round"/><Dot x={196} y={140} r={5}/><Dot x={326} y={140} r={5}/>
  </Art>;
}

function RouteArt() {
  return <Art title="A broken route that branches toward two working destinations">
    <path d="M53 150h164m44 0h105m-105 0c63 0 75-75 138-75m-138 75c63 0 75 75 138 75" fill="none" stroke="#9aa988" strokeWidth="4" strokeDasharray="6 7" strokeLinecap="round"/>
    <circle cx="75" cy="150" r="27" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M63 150h23m-12-12v24" stroke="#52745b" strokeWidth="2"/>
    <path d="M216 129l14 14m0-14l-14 14m0 14l14 14m0-14l-14 14" stroke="#a46d51" strokeWidth="4" strokeLinecap="round"/>
    <rect x="393" y="42" width="88" height="62" rx="17" fill="#d4de95" stroke="#bac095" strokeWidth="2"/><path d="M414 73h46m-12-12l12 12-12 12" fill="none" stroke="#52745b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="393" y="196" width="88" height="62" rx="17" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M417 218h40m-40 13h31" stroke="#52745b" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="340" cy="75" r="8" fill="#52745b"/><circle cx="340" cy="225" r="8" fill="#52745b"/>
  </Art>;
}

function AboutArt() {
  return <Art title="A connected enterprise system map across people, applications, data, and AI">
    <path d="M260 150L122 79m138 71L398 79m-138 71-30 119m30-119 138 119M122 79l108 190m168-190L230 269" fill="none" stroke="#a8b397" strokeWidth="2"/>
    <rect x="198" y="103" width="124" height="94" rx="24" fill="#52745b"/><path d="M222 130h76M222 150h52M222 170h66" stroke="#d4de95" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="122" cy="79" r="38" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><circle cx="122" cy="79" r="14" fill="#d4de95"/><path d="M98 104c5-15 42-15 48 0" fill="#e4e9d7"/>
    <circle cx="398" cy="79" r="38" fill="#e4e9d7" stroke="#bac095" strokeWidth="2"/><rect x="380" y="64" width="36" height="28" rx="4" fill="#fffdf7" stroke="#52745b" strokeWidth="2"/><path d="M386 72h23M386 80h15" stroke="#7b8f74" strokeWidth="2"/>
    <circle cx="230" cy="269" r="28" fill="#d4de95" stroke="#bac095" strokeWidth="2"/><path d="M218 269h24m-12-12v24" stroke="#52745b" strokeWidth="2"/>
    <circle cx="398" cy="269" r="34" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M384 269h28M398 255v28" stroke="#52745b" strokeWidth="2"/>
  </Art>;
}

function ContactArt() {
  return <Art title="A project conversation organized around a workflow, systems, and an open decision">
    <rect x="57" y="46" width="406" height="207" rx="18" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M57 92h406" stroke="#bac095" strokeWidth="2"/><circle cx="82" cy="69" r="6" fill="#bac095"/><circle cx="103" cy="69" r="6" fill="#d4de95"/><circle cx="124" cy="69" r="6" fill="#52745b"/>
    <rect x="88" y="113" width="170" height="49" rx="16" fill="#e4e9d7"/><path d="M111 132h124M111 145h85" stroke="#66806b" strokeWidth="3" strokeLinecap="round"/>
    <rect x="268" y="175" width="158" height="49" rx="16" fill="#d4de95"/><path d="M291 194h109M291 207h70" stroke="#66806b" strokeWidth="3" strokeLinecap="round"/>
    <path d="M257 137c62 0 66 18 38 45" fill="none" stroke="#9aa988" strokeWidth="3" strokeDasharray="5 6"/><circle cx="300" cy="181" r="5" fill="#52745b"/>
    <path d="M410 122l24 62-25-17-17 24z" fill="#52745b"/><path d="M403 165l12-16" stroke="#f6f4ee" strokeWidth="2"/>
  </Art>;
}

const scenes: Record<ArtKind, Scene> = {
  services: { label: "CONNECTED SYSTEMS", note: "One workflow can cross information, agents, applications, and human decisions.", kind: "services" },
  governance: { label: "AUTHORIZATION RECORD", note: "Keep accountable ownership and technical limits visible around each agent.", kind: "governance" },
  microsoft: { label: "MICROSOFT AI STACK", note: "Trace permissions and evidence across the services in the selected workload.", kind: "microsoft" },
  delivery: { label: "FROM WORKFLOW TO HANDOVER", note: "Build a review point into the route from assessment to operation.", kind: "delivery" },
  insights: { label: "ENGINEERING QUESTIONS", note: "The notes connect architecture choices to authorization and operating decisions.", kind: "insights" },
  architecture: { label: "LAYERED ARCHITECTURE", note: "Separate the agent task, tool access, and data boundary in the design.", kind: "architecture" },
  assessment: { label: "CONFIGURATION REVIEW", note: "Compare intended use with actual permissions and available evidence.", kind: "assessment" },
  "agent-service": { label: "AGENT RESPONSIBILITY", note: "Technical owners and business sponsors have distinct responsibilities.", kind: "agent-service" },
  modernization: { label: "APPLICATION BRIDGE", note: "Use an API boundary to expose approved operations and preserve system rules.", kind: "modernization" },
  "modernization-article": { label: "MAKE THE BOUNDARY EXPLICIT", note: "Turn informal access into named operations with clear inputs, limits, and owners.", kind: "modernization-article" },
  platform: { label: "OPERATIONS CYCLE", note: "Release, observation, recovery, and handover stay connected over time.", kind: "platform" },
  remediation: { label: "FINDING TO VERIFIED CHANGE", note: "Move a confirmed issue through a controlled fix and a behavior check.", kind: "remediation" },
  schedule: { label: "SCHEDULE AUTHORITY", note: "A recurring trigger needs a reason, a responsible sponsor, and a review point.", kind: "schedule" },
  chain: { label: "DELEGATION CHAIN", note: "Trace the handoffs and the final effect of an orchestration.", kind: "chain" },
  authorization: { label: "ACTION BOUNDARY", note: "Test what an identity may do, and what the system must refuse.", kind: "authorization" },
  operating: { label: "GOVERNANCE FEEDBACK LOOP", note: "Connect policy, configuration, daily operation, evidence, and review.", kind: "operating" },
  privacy: { label: "TWO INFORMATION PATHS", note: "Website requests and email inquiries follow separate service paths.", kind: "privacy" },
  terms: { label: "WRITTEN ENGAGEMENT", note: "Scope, responsibilities, fees, and delivery terms are agreed separately.", kind: "terms" },
  accessibility: { label: "WAYS INTO THE CONTENT", note: "Different navigation and presentation modes meet at the same page content.", kind: "accessibility" },
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
