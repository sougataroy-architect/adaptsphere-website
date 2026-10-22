import { useId } from "react";

type UseCaseWorkflowVisualProps = { variant: number };

const descriptions = [
  "An invoice is read and matched to a purchase order. A mismatch is sent to finance for review; payment remains under human control.",
  "An employee question passes through an identity and access check. Only permitted documents reach the answer, which includes citations.",
  "An agent sends a customer-note update through a scoped API. The approved update proceeds while a payment-release request is blocked.",
];

/** Applied workflow diagrams for the homepage use cases. These are examples, not client deployments. */
export function UseCaseWorkflowVisual({ variant }: UseCaseWorkflowVisualProps) {
  const id = useId().replace(/:/g, "");
  const arrow = `${id}-arrow`;
  const blockedArrow = `${id}-blocked-arrow`;

  return (
    <svg
      className={`use-case-visual use-case-visual-${variant}`}
      viewBox="0 0 600 300"
      role="img"
      aria-labelledby={`${id}-title ${id}-description`}
    >
      <title id={`${id}-title`}>{["Invoice exception review", "Permission-filtered knowledge answer", "Scoped application update"][variant]}</title>
      <desc id={`${id}-description`}>{descriptions[variant]}</desc>
      <defs>
        <marker id={arrow} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
          <path d="M0 0L9 4.5 0 9z" fill="#597760" />
        </marker>
        <marker id={blockedArrow} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
          <path d="M0 0L9 4.5 0 9z" fill="#bc7053" />
        </marker>
      </defs>

      {variant === 0 && <g fontFamily="inherit" strokeLinejoin="round">
        <text x="30" y="34" fill="#56705c" fontSize="13" fontWeight="700" letterSpacing="1.5">INVOICE EXCEPTION REVIEW</text>
        <text x="30" y="58" fill="#617264" fontSize="15">AI prepares the case; finance controls the decision.</text>

        <rect x="24" y="82" width="150" height="142" rx="15" fill="#fffdf8" stroke="#cbd5c6" strokeWidth="1.5" />
        <text x="42" y="107" fill="#75816e" fontSize="10" fontWeight="700" letterSpacing="1">INCOMING INVOICE</text>
        <path d="M42 121h112M42 153h53M42 171h69M42 189h42" stroke="#aab69f" strokeWidth="3" strokeLinecap="round" />
        <rect x="112" y="142" width="42" height="18" rx="5" fill="#f3e8d8" />
        <text x="133" y="155" textAnchor="middle" fill="#8a6340" fontSize="9" fontWeight="700">$4,820</text>
        <text x="42" y="210" fill="#667764" fontSize="11">Invoice + purchase order</text>

        <path d="M178 151h32" stroke="#78917c" strokeWidth="2.5" markerEnd={`url(#${arrow})`} />
        <rect x="218" y="82" width="164" height="142" rx="15" fill="#e7eee5" stroke="#91a58f" strokeWidth="1.5" />
        <text x="236" y="107" fill="#49644e" fontSize="10" fontWeight="700" letterSpacing="1">AI CHECKS</text>
        <text x="236" y="135" fill="#25372e" fontSize="15" fontWeight="700">Extract + match</text>
        <text x="236" y="160" fill="#526b58" fontSize="12">Vendor · PO · total</text>
        <path d="M236 172h127" stroke="#c4d1c0" />
        <circle cx="245" cy="194" r="7" fill="#c88758" />
        <text x="258" y="198" fill="#805d3c" fontSize="12" fontWeight="700">Amount differs</text>

        <path d="M386 151h32" stroke="#78917c" strokeWidth="2.5" markerEnd={`url(#${arrow})`} />
        <rect x="426" y="82" width="150" height="142" rx="15" fill="#fffdf8" stroke="#c9b27b" strokeWidth="1.5" />
        <text x="444" y="107" fill="#806a39" fontSize="10" fontWeight="700" letterSpacing="1">FINANCE REVIEW</text>
        <text x="444" y="136" fill="#25372e" fontSize="15" fontWeight="700">Resolve mismatch</text>
        <text x="444" y="158" fill="#617264" fontSize="12">Review source records</text>
        <rect x="444" y="177" width="112" height="27" rx="7" fill="#f2e8c9" />
        <text x="500" y="195" textAnchor="middle" fill="#715c32" fontSize="11" fontWeight="700">Person decides</text>

        <rect x="24" y="244" width="552" height="34" rx="9" fill="#f3eee2" />
        <circle cx="43" cy="261" r="6" fill="#bd8750" />
        <text x="58" y="265" fill="#65583f" fontSize="12" fontWeight="600">No payment is released by the extraction step.</text>
      </g>}

      {variant === 1 && <g fontFamily="inherit" strokeLinejoin="round">
        <text x="30" y="34" fill="#56705c" fontSize="13" fontWeight="700" letterSpacing="1.5">ANSWER FROM PERMITTED SOURCES</text>
        <text x="30" y="58" fill="#617264" fontSize="15">The employee’s access follows the answer all the way through.</text>

        <rect x="24" y="99" width="132" height="104" rx="15" fill="#fffdf8" stroke="#cbd5c6" strokeWidth="1.5" />
        <text x="42" y="124" fill="#75816e" fontSize="10" fontWeight="700" letterSpacing="1">EMPLOYEE ASKS</text>
        <text x="42" y="153" fill="#25372e" fontSize="14" fontWeight="700">“What is our</text>
        <text x="42" y="174" fill="#25372e" fontSize="14" fontWeight="700">leave policy?”</text>

        <path d="M160 151h27" stroke="#78917c" strokeWidth="2.5" markerEnd={`url(#${arrow})`} />
        <rect x="196" y="88" width="134" height="126" rx="15" fill="#e8edf0" stroke="#8ca5ad" strokeWidth="1.5" />
        <text x="214" y="113" fill="#486777" fontSize="10" fontWeight="700" letterSpacing="1">ACCESS CHECK</text>
        <text x="214" y="143" fill="#25372e" fontSize="14" fontWeight="700">Who is asking?</text>
        <text x="214" y="165" fill="#536b74" fontSize="12">Which files can</text>
        <text x="214" y="182" fill="#536b74" fontSize="12">they already open?</text>

        <path d="M334 143c13-18 16-35 28-35" fill="none" stroke="#78917c" strokeWidth="2.5" markerEnd={`url(#${arrow})`} />
        <path d="M334 165c13 18 16 35 28 35" fill="none" stroke="#bc7053" strokeWidth="2.5" strokeDasharray="5 5" markerEnd={`url(#${blockedArrow})`} />
        <rect x="370" y="76" width="107" height="73" rx="12" fill="#e8efe3" stroke="#8ba18c" strokeWidth="1.5" />
        <text x="386" y="99" fill="#49644e" fontSize="10" fontWeight="700" letterSpacing=".7">ALLOWED</text>
        <text x="386" y="120" fill="#25372e" fontSize="13" fontWeight="700">2 policy files</text>
        <text x="386" y="137" fill="#617264" fontSize="11">Search these</text>
        <rect x="370" y="166" width="107" height="73" rx="12" fill="#f5e9e2" stroke="#c99178" strokeWidth="1.5" />
        <text x="386" y="189" fill="#8b543f" fontSize="10" fontWeight="700" letterSpacing=".7">RESTRICTED</text>
        <text x="386" y="210" fill="#493931" fontSize="13" fontWeight="700">HR case files</text>
        <text x="386" y="227" fill="#805f51" fontSize="11">Keep out</text>

        <path d="M481 111h21" stroke="#78917c" strokeWidth="2.5" markerEnd={`url(#${arrow})`} />
        <rect x="510" y="82" width="68" height="128" rx="13" fill="#fffdf8" stroke="#cbd5c6" strokeWidth="1.5" />
        <text x="524" y="107" fill="#75816e" fontSize="9" fontWeight="700" letterSpacing=".5">ANSWER</text>
        <path d="M524 124h39M524 137h32M524 150h38" stroke="#9aaa91" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="522" y="166" width="44" height="25" rx="6" fill="#e8edf0" />
        <text x="544" y="182" textAnchor="middle" fill="#486777" fontSize="9" fontWeight="700">2 CITED</text>

        <rect x="24" y="255" width="554" height="24" rx="8" fill="#f2f0e7" />
        <text x="40" y="271" fill="#526b58" fontSize="11.5" fontWeight="600">Sources the employee cannot open never enter the answer.</text>
      </g>}

      {variant === 2 && <g fontFamily="inherit" strokeLinejoin="round">
        <text x="30" y="34" fill="#56705c" fontSize="13" fontWeight="700" letterSpacing="1.5">SCOPED SYSTEM ACTION</text>
        <text x="30" y="58" fill="#617264" fontSize="15">An API enforces the approved boundary before a system change.</text>

        <rect x="24" y="111" width="123" height="91" rx="15" fill="#fffdf8" stroke="#cbd5c6" strokeWidth="1.5" />
        <text x="42" y="138" fill="#75816e" fontSize="10" fontWeight="700" letterSpacing="1">AGENT REQUEST</text>
        <text x="42" y="166" fill="#25372e" fontSize="14" fontWeight="700">Update account</text>
        <text x="42" y="185" fill="#617264" fontSize="11">via approved API</text>

        <path d="M151 155h35" stroke="#78917c" strokeWidth="2.5" markerEnd={`url(#${arrow})`} />
        <rect x="195" y="84" width="174" height="149" rx="15" fill="#e7eee5" stroke="#91a58f" strokeWidth="1.5" />
        <text x="214" y="110" fill="#49644e" fontSize="10" fontWeight="700" letterSpacing="1">POLICY GATE</text>
        <text x="214" y="139" fill="#25372e" fontSize="14" fontWeight="700">Check operation</text>
        <rect x="214" y="153" width="135" height="26" rx="7" fill="#fffdf8" />
        <circle cx="228" cy="166" r="5" fill="#628368" />
        <text x="240" y="170" fill="#435b49" fontSize="11" fontWeight="600">write customer note</text>
        <rect x="214" y="188" width="135" height="26" rx="7" fill="#f5e9e2" />
        <circle cx="228" cy="201" r="5" fill="#bc7053" />
        <text x="240" y="205" fill="#815541" fontSize="11" fontWeight="600">release payment</text>

        <path d="M373 160c23-29 31-42 48-42" fill="none" stroke="#597760" strokeWidth="2.5" markerEnd={`url(#${arrow})`} />
        <path d="M373 194c23 24 31 44 48 44" fill="none" stroke="#bc7053" strokeWidth="2.5" strokeDasharray="5 5" markerEnd={`url(#${blockedArrow})`} />
        <rect x="425" y="76" width="151" height="81" rx="13" fill="#fffdf8" stroke="#8ba18c" strokeWidth="1.5" />
        <text x="443" y="101" fill="#49644e" fontSize="10" fontWeight="700" letterSpacing=".8">CUSTOMER RECORD</text>
        <text x="443" y="126" fill="#25372e" fontSize="14" fontWeight="700">Note updated</text>
        <text x="443" y="144" fill="#617264" fontSize="11">Allowed field only</text>
        <rect x="425" y="190" width="151" height="81" rx="13" fill="#f5e9e2" stroke="#c99178" strokeWidth="1.5" />
        <text x="443" y="215" fill="#8b543f" fontSize="10" fontWeight="700" letterSpacing=".8">PAYMENT SYSTEM</text>
        <text x="443" y="240" fill="#493931" fontSize="14" fontWeight="700">Request blocked</text>
        <text x="443" y="258" fill="#805f51" fontSize="11">Outside agent scope</text>

        <rect x="24" y="255" width="343" height="24" rx="8" fill="#f2f0e7" />
        <text x="40" y="271" fill="#526b58" fontSize="11.5" fontWeight="600">The application enforces what the agent may do.</text>
      </g>}
    </svg>
  );
}
