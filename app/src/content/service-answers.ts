export const serviceAnswers:Record<string,{question:string;answer:string}>={
  "governed-ai-architecture": {
    "question": "What does governed AI implementation include?",
    "answer": "Governed AI implementation connects a defined business workload to a technical architecture and an operating model. The scope can include agent identity, source permissions, APIs, approval gates, exception handling, evidence, and ownership. The controls are designed alongside the integration, then checked with allowed and denied scenarios."
  },
  "ai-governance-assessment": {
    "question": "What does an AI governance assessment review?",
    "answer": "An AI governance assessment examines how AI is used and authorized in the actual environment. It reviews agents and applications, connected data, permissions, accountable owners, deployment processes, and evidence. The useful output is a prioritized set of findings linked to systems and decisions, with a clear path into remediation."
  },
  "agent-governance": {
    "question": "How is agent governance different from a policy document?",
    "answer": "Agent governance defines the authority under which an agent operates. It connects an identity to approved actions, resources, owners, review gates, and a retirement process. A policy states the requirement; implementation identifies which permission, configuration, interface, and operating procedure enforce it."
  },
  "microsoft-ai-governance": {
    "question": "What does Microsoft AI governance cover?",
    "answer": "Microsoft AI governance begins with the workload and the tenant. It examines how identity, source access, agent actions, environments, data protection, and operational evidence fit together. Applicable controls depend on the products, licenses, deployment model, and configuration in scope."
  },
  "ai-integration-modernization": {
    "question": "Why modernize before connecting AI to legacy systems?",
    "answer": "A direct connection may bypass validation, approvals, or access decisions enforced elsewhere in an application. Modernization establishes a deliberate interface for approved actions, with authorization and failure handling at the boundary. The scope can begin with one workflow; it does not require replacing every system."
  },
  "platform-engineering": {
    "question": "What does platform engineering include after launch?",
    "answer": "Platform engineering covers the application and the processes that keep it usable. An engagement can include architecture, integrations, content infrastructure, deployment, domain and hosting operations, verification, maintenance, and recovery guidance. Ongoing work is defined explicitly rather than assumed to be included with a launch."
  },
  "governance-remediation": {
    "question": "What happens after an assessment identifies gaps?",
    "answer": "Governance remediation turns findings into agreed implementation changes. Each finding is linked to affected systems, an accountable owner, dependencies, and verification scenarios. Work may change permissions, identities, integrations, lifecycle processes, or evidence collection. Remaining risks and operating responsibilities are documented at handover."
  }
};
