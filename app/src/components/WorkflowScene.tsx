import { useId } from "react";

/** Original illustrations; all scenarios are examples, not client deployments. */
export function WorkflowScene({ variant = 0 }: { variant?: number }) {
  const id = useId().replace(/:/g, "");
  const captions = ["Documents become a reviewed draft", "Company knowledge becomes a sourced answer", "An approved action reaches your application"];
  return <><svg className="workflow-scene" viewBox="0 0 520 280" role="img" aria-labelledby={`${id}-title`}>
    <title id={`${id}-title`}>{captions[variant]}</title>
    <defs><linearGradient id={`${id}-paper`} x2="1" y2="1"><stop stopColor="#fffdf7"/><stop offset="1" stopColor="#e9eddf"/></linearGradient></defs>
    <ellipse cx="260" cy="244" rx="218" ry="19" fill="#d9dfcc" opacity=".5"/>
    <path className="scene-route" d="M115 134 C165 134 165 95 215 95 S300 95 325 134 S370 173 412 134" fill="none" stroke="#9aa988" strokeWidth="2" strokeDasharray="5 7"/>
    <g className="scene-source" stroke="#52745b" strokeWidth="1.7" strokeLinejoin="round">
      {variant === 0 ? <><path d="M48 77 L116 60 L142 79 L142 182 L74 199 L48 180 Z" fill="#bac095"/><path d="M63 63 L132 46 L158 65 L158 168 L89 185 L63 166 Z" fill={`url(#${id}-paper)`}/><path d="M132 46 V73 L158 65 M83 99 L136 86 M83 117 L136 104 M83 135 L121 126" fill="none"/></> : variant === 1 ? <><path d="M49 80 Q88 66 116 83 V183 Q88 166 49 181 Z" fill={`url(#${id}-paper)`}/><path d="M116 83 Q144 65 174 78 V179 Q144 168 116 183 Z" fill="#bac095"/><path d="M65 99 L100 101 M65 118 L100 121 M65 137 L100 140 M132 98 L159 95 M132 117 L159 114" fill="none"/></> : <><rect x="45" y="65" width="127" height="121" rx="12" fill={`url(#${id}-paper)`}/><path d="M45 92 H172 M63 110 H100 M63 129 H146 M63 148 H132" fill="none"/><circle cx="60" cy="79" r="3" fill="#52745b"/><circle cx="72" cy="79" r="3" fill="#bac095"/></>}
    </g>
    <g className="scene-engine" stroke="#52745b" strokeWidth="1.7">
      <path d="M218 78 L270 61 L311 86 V150 L261 170 L218 145 Z" fill="#bac095"/><path d="M218 78 L261 104 L311 86 M261 104 V170" fill="none"/>
      <path d="M261 79 L266 89 L277 92 L266 96 L261 107 L256 97 L245 93 L256 89 Z" fill="#f7f5ee" stroke="none"/>
      <circle cx="263" cy="204" r="19" fill="#f7f5ee"/><path d="M254 204 L261 211 L273 198" fill="none"/>
    </g>
    <g className="scene-result" stroke="#52745b" strokeWidth="1.7">
      <rect x="357" y="73" width="119" height="127" rx="13" fill={`url(#${id}-paper)`}/><path d="M357 99 H476" fill="none"/><circle cx="372" cy="86" r="3" fill="#52745b"/>
      <rect x="373" y="114" width="86" height="28" rx="6" fill="#d4de95" stroke="none"/><path d="M385 126 H444 M373 157 H450 M373 172 H435" fill="none"/>
      {variant === 1 && <><circle cx="457" cy="187" r="17" fill="#bac095"/><path d="M449 187 L455 193 L466 180" fill="none"/></>}
    </g>
    <g fill="#435a49" fontFamily="inherit" fontSize="14" textAnchor="middle"><text x="110" y="229">{["Source documents", "Company knowledge", "Existing system"][variant]}</text><text x="263" y="248">Human approval</text><text x="416" y="229">{["Reviewed draft", "Sourced answer", "Approved update"][variant]}</text></g>
  </svg><div className="scene-legend" aria-hidden="true"><span>{["Source documents", "Company knowledge", "Existing system"][variant]}</span><span>Human approval</span><span>{["Reviewed draft", "Sourced answer", "Approved update"][variant]}</span></div></>;
}

