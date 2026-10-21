import styles from "./VisualArtifacts.module.css";

type Kind = "flow" | "gate" | "layers" | "cycle" | "matrix" | "network" | "compare" | "record" | "timeline";
export type ArtifactSpec = {
  title: string;
  caption: string;
  kind: Kind;
  labels: readonly string[];
  center?: string;
  details?: readonly string[];
  groups?: readonly [string, string];
};

const ink = ["#31586b", "#52745b", "#8b6823", "#765b8e", "#a45f48"];
const fills = ["#e2edf1", "#e8ebd8", "#f5eacc", "#eae2f2", "#f1dfd5"];

function wrap(label: string, max = 13) {
  const lines: string[] = [];
  let line = "";
  for (const word of label.split(/\s+/)) {
    if (line && `${line} ${word}`.length > max) { lines.push(line); line = word; }
    else line = line ? `${line} ${word}` : word;
  }
  if (line) lines.push(line);
  return lines;
}

function SvgLabel({ label, x, y, max = 13, anchor = "middle", size = 13, color = "#26332e" }: { label: string; x: number; y: number; max?: number; anchor?: "middle" | "start" | "end"; size?: number; color?: string }) {
  const lines = wrap(label, max);
  const firstY = y - ((lines.length - 1) * 9);
  return <text x={x} y={firstY} textAnchor={anchor} style={{ fontSize: size, fill: color }}>{lines.map((line, i) => <tspan key={`${line}-${i}`} x={x} dy={i ? 18 : 0}>{line}</tspan>)}</text>;
}

function Diagram({ item }: { item: ArtifactSpec }) {
  const labels = item.labels.slice(0, 5);
  const colors = labels.map((_, i) => ink[i % ink.length]);
  const aria = `${item.title}: ${labels.join(", ")}`;

  if (item.kind === "flow") {
    const xs = labels.map((_, i) => 60 + i * (360 / Math.max(labels.length - 1, 1)));
    return <svg viewBox="0 0 480 210" role="img" aria-label={aria}>
      {xs.slice(0, -1).map((x, i) => <g key={`link-${i}`}><path d={`M${x + 20} 63H${xs[i + 1] - 22}`} fill="none" stroke="#b9c5ba" strokeWidth="2"/><path d={`M${xs[i + 1] - 29} 58l7 5-7 5`} fill="none" stroke="#7c9180" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g>)}
      {labels.map((label, i) => <g key={`${label}-${i}`}><circle cx={xs[i]} cy="63" r="20" fill={fills[i % fills.length]} stroke={colors[i]} strokeWidth="2"/><text x={xs[i]} y="67" textAnchor="middle" fontSize="11" fill={colors[i]}>{String(i + 1).padStart(2, "0")}</text><SvgLabel label={label} x={xs[i]} y={109} max={12}/></g>)}
    </svg>;
  }

  if (item.kind === "cycle") {
    const xs = labels.map((_, i) => 60 + i * (360 / Math.max(labels.length - 1, 1)));
    const first = xs[0] ?? 42;
    const last = xs.at(-1) ?? 438;
    return <svg viewBox="0 0 480 210" role="img" aria-label={aria}>
      {xs.slice(0, -1).map((x, i) => <path key={`link-${i}`} d={`M${x + 16} 58H${xs[i + 1] - 16}`} stroke="#b9c5ba" strokeWidth="2"/>)}
      <path d={`M${last} 79 C${last} 160 ${first} 160 ${first} 79`} fill="none" stroke="#9aaa95" strokeWidth="2" strokeDasharray="5 5"/>
      {labels.map((label, i) => <g key={`${label}-${i}`}><circle cx={xs[i]} cy="58" r="17" fill={fills[i % fills.length]} stroke={colors[i]} strokeWidth="2"/><text x={xs[i]} y="62" textAnchor="middle" fontSize="10" fill={colors[i]}>{String(i + 1).padStart(2, "0")}</text><SvgLabel label={label} x={xs[i]} y={100} max={11} size={12}/></g>)}
      <text x="240" y="187" textAnchor="middle" fontSize="10" letterSpacing="1.5" fill="#58645c">REVIEW LOOP</text>
    </svg>;
  }

  if (item.kind === "layers") return <svg viewBox="0 0 480 220" role="img" aria-label={aria}>
    {labels.map((label, i) => { const y = 20 + i * 39; return <g key={`${label}-${i}`}><rect x="67" y={y} width="346" height="30" rx="3" fill={fills[i % fills.length]}/><rect x="67" y={y} width="4" height="30" fill={colors[i]}/><text x="88" y={y + 19} textAnchor="start" fontSize="13" fill="#26332e">{String(i + 1).padStart(2, "0")}</text><text x="119" y={y + 19} textAnchor="start" fontSize="14">{label}</text></g>; })}
  </svg>;

  if (item.kind === "record") return <svg viewBox="0 0 480 220" role="img" aria-label={aria}>
    <text x="76" y="20" textAnchor="start" fontSize="10" letterSpacing="1.5" fill="#58645c">RECORD FIELDS</text>
    <path d="M76 29H404" stroke="#bfc8bc" strokeWidth="1"/>
    {labels.map((label, i) => { const y = 53 + i * (145 / Math.max(labels.length - 1, 1)); return <g key={`${label}-${i}`}><circle cx="84" cy={y - 4} r="4" fill={colors[i]}/><text x="101" y={y} textAnchor="start" fontSize="14">{label}</text><path d={`M101 ${y + 13}H${i % 2 ? 330 : 372}`} stroke="#d9ded5" strokeWidth="1"/></g>; })}
  </svg>;

  if (item.kind === "network") {
    const nodes = [[111, 50], [369, 50], [111, 157], [369, 157]] as const;
    return <svg viewBox="0 0 480 220" role="img" aria-label={aria}>
      {nodes.slice(0, labels.length).map(([x, y], i) => <line key={`edge-${i}`} x1="240" y1="105" x2={x} y2={y} stroke="#b8c4b6" strokeWidth="2"/>)}
      {labels.map((label, i) => { const [x, y] = nodes[i]; return <g key={`${label}-${i}`}><circle cx={x} cy={y} r="12" fill={fills[i % fills.length]} stroke={colors[i]} strokeWidth="2"/><SvgLabel label={label} x={x} y={y + 31} max={12} size={12}/></g>; })}
      <circle cx="240" cy="105" r="34" fill="#52745b"/><SvgLabel label={item.center ?? "SHARED CONTROL"} x={240} y={109} max={11} size={11} color="#ffffff"/>
    </svg>;
  }

  if (item.kind === "timeline") return <svg viewBox="0 0 480 220" role="img" aria-label={aria}>
    <path d="M46 110H434" stroke="#b9c5ba" strokeWidth="2"/>
    {labels.map((label, i) => { const x = 46 + i * (388 / Math.max(labels.length - 1, 1)); const above = i % 2 === 0; const labelY = above ? 48 : 174; const lineTop = above ? 72 : 126; const lineBottom = above ? 96 : 150; return <g key={`${label}-${i}`}><circle cx={x} cy="110" r="10" fill={fills[i % fills.length]} stroke={colors[i]} strokeWidth="2"/><text x={x} y="113" textAnchor="middle" fontSize="8" fill={colors[i]}>{String(i + 1).padStart(2, "0")}</text><path d={`M${x} ${lineTop}V${lineBottom}`} stroke={colors[i]} strokeWidth="1.5"/><SvgLabel label={label} x={x} y={labelY} max={12} size={12}/></g>; })}
  </svg>;

  if (item.kind === "gate") {
    const xs = [72, 240, 408];
    return <svg viewBox="0 0 480 210" role="img" aria-label={aria}>
      <rect x="218" y="25" width="44" height="144" rx="3" fill="#eef1ea"/>
      <text x="240" y="20" textAnchor="middle" fontSize="9" letterSpacing="1.2" fill="#636b2f">CONTROL BOUNDARY</text>
      <path d="M82 67H398" stroke="#b9c5ba" strokeWidth="2"/>
      {labels.slice(0, 3).map((label, i) => <g key={`${label}-${i}`}><circle cx={xs[i]} cy="67" r={i === 1 ? 20 : 17} fill={i === 1 ? "#52745b" : fills[i]} stroke={i === 1 ? "#52745b" : colors[i]} strokeWidth="2"/><text x={xs[i]} y="71" textAnchor="middle" fontSize="10" fill={i === 1 ? "#fff" : colors[i]}>{String(i + 1).padStart(2, "0")}</text><SvgLabel label={label} x={xs[i]} y={119} max={12} size={12}/></g>)}
    </svg>;
  }

  if (item.kind === "compare") {
    const first = labels.slice(0, 2);
    const second = labels.slice(2);
    const drawPath = (parts: string[], y: number, title: string, colorsForPath: string[]) => {
      const step = 264 / Math.max(parts.length - 1, 1);
      const xs = parts.map((_, i) => 175 + i * step);
      return <g key={title}><text x="18" y={y + 4} textAnchor="start" fontSize="10" letterSpacing="1" fill="#58645c">{title.toUpperCase()}</text>{xs.slice(0, -1).map((x, i) => <path key={`edge-${i}`} d={`M${x + 16} ${y}H${xs[i + 1] - 16}`} stroke="#b9c5ba" strokeWidth="2"/>)}{parts.map((part, i) => <g key={`${part}-${i}`}><circle cx={xs[i]} cy={y} r="15" fill={fills[(i + (y > 100 ? 2 : 0)) % fills.length]} stroke={colorsForPath[i]} strokeWidth="2"/><SvgLabel label={part} x={xs[i]} y={y + 32} max={12} size={11}/></g>)}</g>;
    };
    return <svg viewBox="0 0 480 220" role="img" aria-label={aria}>
      {drawPath(first, 63, item.groups?.[0] ?? "PATH A", colors.slice(0, 2))}
      {drawPath(second, 151, item.groups?.[1] ?? "PATH B", colors.slice(2))}
    </svg>;
  }

  if (item.kind === "matrix") return <svg viewBox="0 0 480 250" role="img" aria-label={aria}>
    <text x="88" y="20" textAnchor="start" fontSize="10" letterSpacing="1.2" fill="#58645c">{item.center ?? "AREA"}</text>
    <text x="246" y="20" textAnchor="start" fontSize="10" letterSpacing="1.2" fill="#58645c">{item.groups?.[0] ?? "RESPONSIBILITY"}</text>
    {labels.map((label, i) => { const y = 58 + i * (165 / Math.max(labels.length - 1, 1)); return <g key={`${label}-${i}`}><path d={`M76 ${y + 19}H406`} stroke="#d9ded5" strokeWidth="1"/><text x="82" y={y} textAnchor="start" fontSize="11" fill={colors[i]}>{String(i + 1).padStart(2, "0")}</text><text x="111" y={y} textAnchor="start" fontSize="13">{label}</text><SvgLabel label={item.details?.[i] ?? "Scoped separately"} x={260} y={y} max={23} anchor="start" size={12}/></g>; })}
  </svg>;

  return null;
}

export function VisualArtifact({ item, compact = false, className = "" }: { item: ArtifactSpec; compact?: boolean; className?: string }) {
  return <figure className={`${styles.artifact} ${compact ? styles.compact : ""} ${className}`}><figcaption><strong>{item.title}</strong><span>{item.caption}</span></figcaption><Diagram item={item}/></figure>;
}

export function VisualArtifactGrid({ items, label }: { items: readonly ArtifactSpec[]; label?: string }) {
  return <div className={styles.grid} aria-label={label}>{items.map((item, i) => <VisualArtifact key={`${item.title}-${i}`} item={item}/>)}</div>;
}

const services: Record<string, readonly ArtifactSpec[]> = {
  "governed-ai-architecture": [
    { title: "From intent to permitted tool", caption: "Each step narrows the route from a business request to an authorized operation.", kind: "flow", labels: ["Work need", "Agent", "Tool scope", "Approved change"] },
    { title: "Keep the trust boundaries visible", caption: "Model, application identity, connectors, and business records have separate control owners.", kind: "layers", labels: ["Business rules", "API boundary", "Agent runtime", "Model"] },
  ],
  "ai-governance-assessment": [
    { title: "Compare intent with configuration", caption: "The assessment traces policy claims to settings, observed behavior, and evidence.", kind: "flow", labels: ["Intended use", "Configuration", "Observed result", "Finding"] },
    { title: "Rank findings by what they affect", caption: "Separate the exposed resource, the control gap, the decision owner, and the verification step.", kind: "record", labels: ["Resource", "Gap", "Owner", "Retest"] },
  ],
  "agent-governance": [
    { title: "Authority travels with the agent", caption: "Purpose and approval must match identity, tools, allowed effects, and review conditions.", kind: "gate", labels: ["Approved purpose", "Identity", "Allowed action"] },
    { title: "Review when the authority changes", caption: "Ownership changes, new tools, incidents, or retirement should reopen the authorization decision.", kind: "cycle", labels: ["Approve", "Operate", "Review", "Change", "Retire"] },
  ],
  "ai-integration-modernization": [
    { title: "Put business rules at the interface", caption: "The integration checks identity and validates the requested operation before records change.", kind: "gate", labels: ["Agent request", "API checks", "Business record"] },
    { title: "Design for failure and recovery", caption: "A safe integration defines what happens when access, validation, or a downstream system fails.", kind: "timeline", labels: ["Request", "Validate", "Commit", "Log", "Recover"] },
  ],
  "platform-engineering": [
    { title: "A release is a controlled path", caption: "Changes move through reviewable environments before production operation.", kind: "flow", labels: ["Develop", "Review", "Test", "Release"] },
    { title: "Operations owns the recovery route", caption: "Monitoring, rollback, incident response, and handover belong in the operating plan.", kind: "cycle", labels: ["Observe", "Diagnose", "Recover", "Learn"] },
  ],
  "governance-remediation": [
    { title: "Close the finding with evidence", caption: "An agreed fix is complete when its owner can show the changed control and a passing retest.", kind: "timeline", labels: ["Finding", "Decision", "Fix", "Retest", "Close"] },
    { title: "Separate ownership of decision and change", caption: "Business authority chooses the response; technical owners implement it; reviewers confirm evidence.", kind: "matrix", center: "RESPONSIBILITY", groups: ["PART IN THE DECISION", ""], labels: ["Business owner", "IT implementer", "Risk reviewer", "Evidence"], details: ["Decides the business response", "Changes the technical control", "Challenges and verifies", "Shows what changed and passed"] },
  ],
};

export function ServiceArtifacts({ slug }: { slug: string }) { return <VisualArtifactGrid items={services[slug] ?? []} label="Engagement diagrams"/>; }
export function ServiceArtifactAt({ slug, index }: { slug: string; index: number }) { const item = services[slug]?.[index]; return item ? <VisualArtifact item={item}/> : null; }

const articleEntries: Record<string, readonly ArtifactSpec[]> = {
  "authorize-the-schedule-that-runs-the-agent": [
    { title: "A run log cannot approve a schedule", caption: "The event record describes what ran; authority also needs an approver and a review trigger.", kind: "record", labels: ["Run history", "Approval record", "Owner", "Next review"] },
    { title: "Add the trigger to the authority record", caption: "Include the time or event, intended effect, accountable owner, and stop condition.", kind: "record", labels: ["Trigger", "Purpose", "Effect", "Owner"] },
    { title: "Owner departure must reach active triggers", caption: "Offboarding should expose unattended schedules for a new decision before they continue.", kind: "flow", labels: ["Owner leaves", "Find triggers", "Suspend", "Reapprove"] },
  ],
  "authorize-the-agent-chain": [
    { title: "The final effect belongs to the whole chain", caption: "A chain can combine retrieval, interpretation, and external action across multiple agents.", kind: "flow", labels: ["Request", "Retrieve", "Decide", "Act"] },
    { title: "Record shared authority once", caption: "Identify the initiator, composition approver, combined scope, and owner of the outcome.", kind: "record", labels: ["Initiator", "Approver", "Combined scope", "Owner"] },
    { title: "Test each handoff and the final effect", caption: "A constrained edge between agents is as important as the permissions of each component.", kind: "gate", labels: ["Agent A", "Scoped handoff", "Agent B"] },
  ],
  "agent-authorization-before-autonomy": [
    { title: "Different actions require different authority", caption: "Read, change, and send each have different consequences and should be scoped separately.", kind: "matrix", center: "ACTION", groups: ["AUTHORITY / CONTROL", ""], labels: ["Read", "Change", "Send", "Approve"], details: ["Information access", "Record mutation", "External effect", "Decision right"] },
    { title: "Make authority traceable to an identity", caption: "Tie the business owner and technical maintainer to the identity and tools they govern.", kind: "flow", labels: ["Owner", "Identity", "Tool", "Evidence"] },
    { title: "Test allowed and denied paths", caption: "Include revoked access, missing dependencies, unexpected input, and approval-required actions.", kind: "matrix", center: "TEST RESULT", groups: ["EXPECTED OUTCOME", ""], labels: ["Allowed", "Denied", "Revoked", "Failure"], details: ["Permitted action proceeds", "Unapproved action stops", "Former access stops working", "Safe response and record"] },
    { title: "Ownership changes reopen review", caption: "Sponsor departure or a changed workflow should trigger a fresh access decision.", kind: "cycle", labels: ["Sponsor", "Review", "Continue", "Remove"] },
  ],
  "modernization-is-an-ai-control": [
    { title: "A direct database link skips the rule boundary", caption: "The connection may work while bypassing the application’s validation and approval rules.", kind: "compare", groups: ["DIRECT CONNECTION", "RULE-PRESERVING PATH"], labels: ["Agent", "Database", "Agent", "Validated API", "Business record"] },
    { title: "Expose only deliberate operations", caption: "A narrow interface validates identity and request before calling the legacy system.", kind: "gate", labels: ["Agent", "Validated API", "Legacy app"] },
    { title: "Preserve validation and transaction rules", caption: "Check business invariants, approval points, and rollback behavior before automation.", kind: "layers", labels: ["Approval", "Validation", "Transaction", "System"] },
    { title: "Modernize one recoverable slice", caption: "Scope the workflow, denied-action tests, recovery plan, and separate development assistance from runtime AI.", kind: "timeline", labels: ["Scope", "Build", "Test", "Recover", "Expand"] },
  ],
  "governance-that-survives-deployment": [
    { title: "Turn a policy sentence into an operating control", caption: "Link the requirement to a setting, named owner, procedure, and retained record.", kind: "flow", labels: ["Requirement", "Setting", "Owner", "Evidence"] },
  { title: "A configured safeguard still needs an operator", caption: "Access review, incident action, and ownership transfer keep the setting effective over time.", kind: "network", center: "SAFEGUARD", labels: ["Configuration", "Review", "Incident", "Operator"] },
    { title: "Keep evidence that answers a question", caption: "Record what acted, under which authority, on which resource, and with what result.", kind: "record", labels: ["Identity", "Authority", "Resource", "Outcome"] },
    { title: "Changes reopen the governance decision", caption: "New data, tools, models, and purposes can alter exposure and should trigger review.", kind: "cycle", labels: ["Current scope", "Change", "Reassess", "Approve"] },
  ],
};

const insightOverview: Record<string, ArtifactSpec> = {
  "authorize-the-schedule-that-runs-the-agent": { title: "A schedule extends an agent’s authority through time", caption: "Review who approved the trigger, what it can do unattended, and when it should stop.", kind: "cycle", labels: ["Approve", "Schedule", "Run", "Review"] },
  "authorize-the-agent-chain": { title: "The composed workflow has a combined effect", caption: "Follow the request across delegated agents and stop at the actual business change.", kind: "flow", labels: ["Request", "Agent A", "Agent B", "External effect"] },
  "agent-authorization-before-autonomy": { title: "Autonomy begins inside a named boundary", caption: "Purpose, identity, permitted actions, approval, and evidence belong in one review path.", kind: "gate", labels: ["Purpose", "Identity", "Action"] },
  "modernization-is-an-ai-control": { title: "The application interface carries the business rules", caption: "A narrow API can validate an AI request before the legacy application changes a record.", kind: "layers", labels: ["Agent request", "API rules", "App logic", "Record"] },
  "governance-that-survives-deployment": { title: "Governance connects policy to daily operations", caption: "A requirement lives through a configured setting, an operating owner, and reviewable evidence.", kind: "flow", labels: ["Policy", "Setting", "Operator", "Evidence"] },
};
export function InsightArtifactAt({ slug, index }: { slug: string; index: number }) { const item = articleEntries[slug]?.[index]; return item ? <VisualArtifact item={item}/> : null; }
export function InsightOverview({ slug }: { slug: string }) { const item = insightOverview[slug]; return item ? <VisualArtifact item={item}/> : null; }

const microsoft: readonly ArtifactSpec[] = [
  { title: "Content permission is the first boundary", caption: "A Copilot response can reflect the signed-in user’s access to connected content.", kind: "flow", labels: ["User access", "SharePoint", "Retrieval", "Response"] },
  { title: "Environment policy shapes agent capability", caption: "Copilot Studio and Power Platform policy can restrict connectors, channels, knowledge, and makers.", kind: "layers", labels: ["Tenant", "Environment", "Agent", "Connector"] },
  { title: "Translate the decision into evidence", caption: "A RACI owner approves the boundary; admins configure it; logs and tests support review.", kind: "flow", labels: ["Business owner", "Admin", "Control", "Evidence"] },
];
export function MicrosoftArtifacts() { return <VisualArtifactGrid items={microsoft} label="Microsoft governance diagrams"/>; }

const about: readonly ArtifactSpec[] = [
  { title: "Start with a working business process", caption: "The workflow and existing systems determine the useful place for AI.", kind: "flow", labels: ["People", "Applications", "Information", "AI option"] },
  { title: "Implementation joins four kinds of work", caption: "Architecture connects business rules, identity, integrations, and operations.", kind: "network", center: "AI DELIVERY", labels: ["Architecture", "Identity", "Integration", "Operations"] },
];
export function AboutArtifacts() { return <VisualArtifactGrid items={about} label="How AdaptSphere works diagrams"/>; }
export function AboutArtifactAt({ index }: { index: number }) { const item = about[index]; return item ? <VisualArtifact item={item}/> : null; }

const delivery: readonly ArtifactSpec[] = [
  { title: "1 · Map", caption: "Record the workflow, systems, identities, and open questions.", kind: "network", center: "WORKFLOW", labels: ["Workflow", "Data", "Identity", "Actions"] },
  { title: "2 · Design", caption: "Decide how access, tools, approvals, and ownership fit together.", kind: "layers", labels: ["Purpose", "Identity", "Tools", "Owner"] },
  { title: "3 · Implement", caption: "Configure the agreed integration and verify both allowed and blocked paths.", kind: "gate", labels: ["Request", "Control", "System"] },
  { title: "4 · Handover", caption: "Leave the team with operating instructions, recovery steps, and review owners.", kind: "record", labels: ["Runbook", "Monitor", "Recover", "Review"] },
];
export function DeliveryArtifacts() { return <VisualArtifactGrid items={delivery} label="Delivery stages"/>; }
export function DeliveryArtifactAt({ index }: { index: number }) { const item = delivery[index]; return item ? <VisualArtifact item={item} compact/> : null; }
