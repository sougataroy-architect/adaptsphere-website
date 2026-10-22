import Image from "next/image";
import styles from "./EditorialVisuals.module.css";

export type EditorialVisualSpec = {
  src: string;
  alt: string;
  label: string;
  title: string;
  caption: string;
};

const visuals = {
  workflowMap: {
    src: "/visuals/workflow-map-editorial-v1.webp",
    alt: "An operations analyst and engineer trace a delayed-order workflow across a printed system map.",
    label: "Current-state workflow",
    title: "Find the handoff that slows the work.",
    caption: "Map the task, information sources, and manual transitions before deciding what to automate.",
  },
  invoice: {
    src: "/visuals/invoice-exception-review-v1.webp",
    alt: "A finance reviewer and engineer inspect an invoice exception and a draft response before a person approves it.",
    label: "Document workflow",
    title: "Prepare an exception for review.",
    caption: "An agent can gather evidence and draft a case while payment authority remains with finance.",
  },
  knowledge: {
    src: "/visuals/knowledge-source-review-v1.webp",
    alt: "A knowledge manager checks source documents while an engineer reviews how an employee question is answered.",
    label: "Grounded answers",
    title: "Keep answers tied to approved sources.",
    caption: "Confirm the source, its access rules, and what the assistant should do when evidence is missing.",
  },
  apiControl: {
    src: "/visuals/api-control-design-v1.webp",
    alt: "An engineer reviews an API connection and its system boundary with an application owner.",
    label: "Agent authorization",
    title: "Connect tools inside an approved boundary.",
    caption: "Trace the identity, connector, and allowed operations back to the business owner’s decision.",
  },
  scopeWorkshop: {
    src: "/visuals/scope-design-workshop-v1.webp",
    alt: "A cross-functional team marks a workflow map and agrees which actions belong in the project scope.",
    label: "Engagement scope",
    title: "Turn a business need into a bounded engagement.",
    caption: "Agree on the task, systems, decision rights, dependencies, and evidence before implementation.",
  },
  architecture: {
    src: "/visuals/architecture-trust-boundary-v1.webp",
    alt: "An architect and engineer review an AI system diagram with a clearly marked trust boundary and approval point.",
    label: "Governed architecture",
    title: "Show where trust and control begin.",
    caption: "Make identities, data paths, connected tools, and human approval visible in the design.",
  },
  assessment: {
    src: "/visuals/assessment-control-evidence-v1.webp",
    alt: "A reviewer compares an access configuration with test results and recorded evidence during an AI control assessment.",
    label: "Governance assessment",
    title: "Tie a finding to evidence and an owner.",
    caption: "Separate the observed setting, the risk decision, the assigned action, and the proof of retest.",
  },
  owner: {
    src: "/visuals/agent-owner-authority-v1.webp",
    alt: "A business sponsor and engineer review an agent purpose, responsible owner, and scoped access together.",
    label: "Decision rights",
    title: "Name the person who authorizes the agent.",
    caption: "The sponsor approves purpose and limits; technical owners implement and verify the boundary.",
  },
  legacy: {
    src: "/visuals/legacy-api-boundary-v1.webp",
    alt: "An engineer and application owner trace a controlled API path between a legacy business system and a modern agent service.",
    label: "Integration modernization",
    title: "Bridge systems without bypassing their controls.",
    caption: "Keep legacy records behind a deliberate interface with explicit permissions and failure handling.",
  },
  operations: {
    src: "/visuals/release-operations-room-v1.webp",
    alt: "An operations team monitors a staged software release and reviews a rollback condition before handover.",
    label: "Platform operations",
    title: "Make release and recovery part of the design.",
    caption: "Connect deployment, monitoring, recovery, and ownership so the service can be operated safely.",
  },
  remediation: {
    src: "/visuals/remediation-retest-v1.webp",
    alt: "An engineer and reviewer verify that a corrected access control passes a repeat test.",
    label: "Governance remediation",
    title: "Retest the control after the change.",
    caption: "Close a finding only when the configuration and the expected behavior are both verified.",
  },
  contentPermissions: {
    src: "/visuals/microsoft-content-permissions-v1.webp",
    alt: "A Microsoft 365 administrator and content owner inspect SharePoint access before enabling a Copilot experience.",
    label: "Microsoft 365 Copilot",
    title: "Check who can reach the source content.",
    caption: "Copilot responses follow available content access; review overshared sites and relevant labels first.",
  },
  copilotStudio: {
    src: "/visuals/copilot-studio-environment-controls-v1.webp",
    alt: "A Copilot Studio maker and administrator review a connector flow and environment policy together.",
    label: "Copilot Studio",
    title: "Separate what makers can build from what can run.",
    caption: "Review connector policies, authentication, publishing rights, and development-to-production boundaries.",
  },
  entra: {
    src: "/visuals/entra-agent-identity-lifecycle-v1.webp",
    alt: "An identity administrator and business sponsor review an agent identity record and its lifecycle owner.",
    label: "Microsoft Entra",
    title: "Give each agent an accountable identity.",
    caption: "Establish who sponsors the identity, what permissions it needs, and how it will be reviewed or removed.",
  },
  purview: {
    src: "/visuals/purview-data-evidence-v1.webp",
    alt: "A data lead verifies a classification label and audit evidence for an AI-enabled workflow.",
    label: "Microsoft Purview",
    title: "Match data controls to the workload.",
    caption: "Check which sensitivity, retention, audit, and investigation controls apply to the data and licenses in scope.",
  },
  discovery: {
    src: "/visuals/delivery-discovery-workshop-v1.webp",
    alt: "A delivery team maps one business process and marks its information sources and human decision points.",
    label: "Discover",
    title: "Map the real workflow first.",
    caption: "Trace who does the work today, which systems they use, and where information or decisions change hands.",
  },
  verification: {
    src: "/visuals/delivery-staging-verification-v1.webp",
    alt: "An engineer and reviewer test an AI integration in a staging environment, checking both allowed and blocked actions.",
    label: "Verify",
    title: "Test the allowed path and the blocked path.",
    caption: "Exercise approvals, denied actions, revoked access, and expected failures before release.",
  },
  handover: {
    src: "/visuals/operations-handover-v1.webp",
    alt: "An engineer explains a monitoring checklist and runbook to the operations owner during service handover.",
    label: "Operate",
    title: "Leave the operating team with a usable runbook.",
    caption: "Record monitoring, maintenance, incident response, review responsibility, and access removal steps.",
  },
  team: {
    src: "/visuals/architecture-teamwork-v1.webp",
    alt: "An architect, engineer, and business owner collaboratively review an application map and human approval boundary.",
    label: "How we work",
    title: "Bring business authority and engineering together.",
    caption: "The design connects the task to the systems, identities, decisions, and operating owners involved.",
  },
  contact: {
    src: "/visuals/contact-consultation-v1.webp",
    alt: "A business operations leader describes a workflow to an AI engineer, who listens and takes notes beside a simple system map.",
    label: "First conversation",
    title: "Start with the work and the open decision.",
    caption: "A short, high-level workflow description is enough to agree on a useful first step.",
  },
} satisfies Record<string, EditorialVisualSpec>;

export const homeEditorialVisuals = [visuals.invoice, visuals.knowledge] as const;
export const homeUseCaseVisuals = [visuals.workflowMap, visuals.contentPermissions, visuals.apiControl] as const;
export const servicesEditorialVisuals = [visuals.scopeWorkshop] as const;
export const governanceEditorialVisual = visuals.owner;
export const microsoftEditorialVisuals = [visuals.contentPermissions, visuals.copilotStudio, visuals.entra, visuals.purview] as const;
export const deliveryEditorialVisuals = [visuals.workflowMap, visuals.discovery, visuals.verification, visuals.handover] as const;
export const aboutEditorialVisual = visuals.team;
export const contactEditorialVisual = visuals.contact;

export const serviceEditorialVisuals: Record<string, EditorialVisualSpec> = {
  "governed-ai-architecture": visuals.architecture,
  "ai-governance-assessment": visuals.assessment,
  "agent-governance": visuals.apiControl,
  "ai-integration-modernization": visuals.legacy,
  "platform-engineering": visuals.operations,
  "governance-remediation": visuals.remediation,
};

export function EditorialVisual({ item, compact = false }: { item: EditorialVisualSpec; compact?: boolean }) {
  return (
    <figure className={`${styles.card}${compact ? ` ${styles.compact}` : ""}`}>
      <div className={styles.image}>
        <Image src={item.src} alt={item.alt} width={1536} height={1024} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 560px" />
      </div>
      <figcaption>
        <span className={styles.label}>{item.label}</span>
        <h3>{item.title}</h3>
        <p>{item.caption}</p>
      </figcaption>
    </figure>
  );
}

export function EditorialVisualGrid({ items, columns = 2, label }: { items: readonly EditorialVisualSpec[]; columns?: 1 | 2 | 3 | 4; label: string }) {
  return (
    <div className={styles.grid} data-columns={columns} role="group" aria-label={label}>
      {items.map((item) => <EditorialVisual key={item.src} item={item} compact={columns > 2} />)}
    </div>
  );
}
