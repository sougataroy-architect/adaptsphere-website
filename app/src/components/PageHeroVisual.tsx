type HeroDiagram = {
  label: string;
  note: string;
  steps: [string, string, string, string];
};

const diagrams: Record<string, HeroDiagram> = {
  microsoft: {
    label: "MICROSOFT AI ACCESS PATH",
    note: "Follow the configured path from content to recorded activity.",
    steps: ["Content permissions", "Identity + credentials", "Agent tools + actions", "Audit + review"],
  },
  governance: {
    label: "AGENT AUTHORIZATION RECORD",
    note: "Business accountability and technical access answer different questions.",
    steps: ["Business sponsor", "Agent identity", "Permitted actions", "Review or disable"],
  },
  authorization: {
    label: "AGENT ACCESS BOUNDARY",
    note: "Identity and tool permissions define what the agent can attempt.",
    steps: ["Agent identity", "Delegated or app access", "Allowed tool actions", "Denied-action tests"],
  },
  architecture: {
    label: "GOVERNED AI ARCHITECTURE",
    note: "Connect the approved task to the identity, data, and operating controls.",
    steps: ["Business task", "Data boundary", "Approval gate", "Tested deployment"],
  },
  assessment: {
    label: "ASSESSMENT EVIDENCE PATH",
    note: "Compare intended use with configured access and observed behavior.",
    steps: ["Inventory systems", "Map permissions", "Test edge cases", "Prioritize findings"],
  },
  platform: {
    label: "PLATFORM OPERATIONS",
    note: "Document the release and recovery path alongside the application.",
    steps: ["Source + changes", "Release process", "Monitor operation", "Recover + hand over"],
  },
  remediation: {
    label: "CONTROL REMEDIATION",
    note: "Turn a finding into a tested change with a named operating owner.",
    steps: ["Confirmed finding", "Control change", "Verify behavior", "Assign review owner"],
  },
  about: {
    label: "ADAPTSPHERE DELIVERY MODEL",
    note: "Engineering work follows the customer's systems and operating constraints.",
    steps: ["Inspect systems", "Design boundaries", "Build integration", "Document operation"],
  },
  contact: {
    label: "FIRST PROJECT CONVERSATION",
    note: "Start with the workflow and clarify the useful next step together.",
    steps: ["Current workflow", "Systems involved", "Open question", "Useful first step"],
  },
  delivery: {
    label: "IMPLEMENTATION SEQUENCE",
    note: "Move from an existing workflow to a tested handover.",
    steps: ["Map the workflow", "Agree the boundary", "Build + integrate", "Test + hand over"],
  },
  schedule: {
    label: "SCHEDULED AGENT AUTHORITY",
    note: "A recurring trigger needs a current purpose and accountable sponsor.",
    steps: ["Approved purpose", "Named sponsor", "Bounded effect", "Review date"],
  },
  chain: {
    label: "MULTI-AGENT DELEGATION",
    note: "Review each handoff and the combined effect of the chain.",
    steps: ["Initiating request", "Orchestrator", "Delegated agents", "External effect"],
  },
  modernization: {
    label: "CONTROLLED SYSTEM INTEGRATION",
    note: "Expose deliberate operations while retaining application rules.",
    steps: ["Business workflow", "Approved API", "Validation + access", "Record + recovery"],
  },
  operating: {
    label: "GOVERNANCE IN OPERATION",
    note: "Connect each requirement to how the system and its operators enforce it.",
    steps: ["Policy requirement", "System setting", "Operating owner", "Review evidence"],
  },
  services: {
    label: "GOVERNED IMPLEMENTATION",
    note: "The engagement follows the workflow, its authority, and the systems it touches.",
    steps: ["Existing workflow", "Access + approval", "Integration work", "Verified handover"],
  },
  insight: {
    label: "RESEARCH TO ENGINEERING",
    note: "Each note connects an authorization question to a practical system control.",
    steps: ["Architecture", "Authorization", "Implementation", "Operations"],
  },
  privacy: {
    label: "INFORMATION PATHS",
    note: "Website requests and email inquiries follow separate service paths.",
    steps: ["Website request", "Hosting records", "Email inquiry", "Reply by email"],
  },
  terms: {
    label: "HOW AN ENGAGEMENT IS DEFINED",
    note: "Website descriptions are general; delivery terms are agreed in writing.",
    steps: ["General information", "Discuss requirements", "Written scope", "Agreed delivery"],
  },
  accessibility: {
    label: "ACCESSIBLE PAGE STRUCTURE",
    note: "Page content supports different ways to navigate and understand it.",
    steps: ["Semantic structure", "Keyboard access", "Visible focus", "Text + motion options"],
  },
  workflow: {
    label: "AI WORKFLOW",
    note: "Keep the authority and review steps visible in the system design.",
    steps: ["Source information", "Agent identity", "Human decision", "Recorded action"],
  },
};

function diagramForPath(path: string): HeroDiagram {
  if (path === "/privacy") return diagrams.privacy;
  if (path === "/terms") return diagrams.terms;
  if (path === "/accessibility") return diagrams.accessibility;
  if (path === "/microsoft-ai" || path.includes("microsoft-ai-governance")) return diagrams.microsoft;
  if (path === "/agent-governance" || path.includes("agent-governance")) return diagrams.governance;
  if (path === "/how-we-work") return diagrams.delivery;
  if (path === "/services") return diagrams.services;
  if (path === "/about") return diagrams.about;
  if (path === "/contact") return diagrams.contact;
  if (path === "/insights") return diagrams.insight;
  if (path.includes("authorize-the-schedule")) return diagrams.schedule;
  if (path.includes("authorize-the-agent-chain")) return diagrams.chain;
  if (path.includes("modernization")) return diagrams.modernization;
  if (path.includes("governance-that-survives")) return diagrams.operating;
  if (path.startsWith("/services/")) {
    if (path.includes("architecture")) return diagrams.architecture;
    if (path.includes("assessment")) return diagrams.assessment;
    if (path.includes("agent-governance")) return diagrams.governance;
    if (path.includes("integration")) return diagrams.modernization;
    if (path.includes("platform")) return diagrams.platform;
    if (path.includes("remediation")) return diagrams.remediation;
    return diagrams.services;
  }
  if (path.startsWith("/insights/")) return diagrams.authorization;
  return diagrams.about;
}

export function PageHeroVisual({ path }: { path: string }) {
  const diagram = diagramForPath(path);
  return <figure className="page-hero-visual" aria-label={diagram.label}>
    <figcaption><span><i aria-hidden="true" />{diagram.label}</span><span className="page-hero-visual-index">ILLUSTRATIVE</span></figcaption>
    <div className="page-hero-diagram">
      <svg className="page-hero-route" viewBox="0 0 400 128" preserveAspectRatio="none" aria-hidden="true">
        <path d="M50 64 H350" fill="none" stroke="#9aa988" strokeWidth="2" strokeDasharray="5 7" />
        {[50, 150, 250, 350].map((x) => <circle key={x} cx={x} cy="64" r="6" fill="#52745b" stroke="#f6f4ee" strokeWidth="3" />)}
      </svg>
      <ol className="page-hero-steps">{diagram.steps.map((step, index) => <li key={step}>
        <span className="page-hero-step-number">0{index + 1}</span>
        <span className="page-hero-step-label">{step}</span>
      </li>)}</ol>
    </div>
    <p className="page-hero-note">{diagram.note}</p>
  </figure>;
}
