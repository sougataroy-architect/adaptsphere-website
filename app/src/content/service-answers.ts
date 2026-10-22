export const serviceAnswers:Record<string,{question:string;answer:string}>={
  "governed-ai-architecture": {
    "question": "What does governed and secure AI implementation include?",
    "answer": "We document the agent’s approved purpose, scope, prohibitions, accountable owner, and review conditions, then map the identity, data, and tool paths for the task. Implementation can include delegated or application access, API authorization, approval steps, failure handling, and activity records. We test whether the configured controls enforce the recorded decision."
  },
  "ai-governance-assessment": {
    "question": "What does an AI governance and security assessment review?",
    "answer": "We compare intended use and governance decisions with how AI tools and agents are configured. We review which systems and information they reach, which identities and credentials they use, exposure to prompt injection or unsafe actions, who owns them, and what activity is recorded. Findings identify the affected systems and evidence, then prioritize practical security and governance fixes."
  },
  "agent-governance": {
    "question": "How do agent governance and security work together?",
    "answer": "Governance records the approved purpose, scope, prohibitions, decision owner, and review conditions. Security engineering enforces those decisions through identity and tool permissions, approval steps, misuse tests, and a process for suspending or removing access when circumstances change."
  },
  "microsoft-ai-governance": {
    "question": "What does Microsoft AI governance and security cover?",
    "answer": "We trace a planned task through Microsoft 365 content permissions, Copilot Studio authentication and connectors, Entra identity, Power Platform environments, and relevant Purview controls. We connect organizational approval and ownership to the safeguards configured in the tenant, then test the access and actions that matter for the workload. Applicable controls depend on your configuration, licenses, and deployment model."
  },
  "ai-integration-modernization": {
    "question": "Why modernize before connecting AI to legacy systems?",
    "answer": "A direct connection can bypass checks, approvals, or access rules elsewhere in an application. We improve the connection so it allows approved actions, checks permissions, and handles failures. The work can start with one workflow and does not require replacing every system."
  },
  "platform-engineering": {
    "question": "What does platform engineering include after launch?",
    "answer": "We maintain the application and the processes that keep it usable. Work can include system design, connections to other tools, content systems, releases, domain and hosting administration, testing, maintenance, and recovery instructions. We agree separately on any ongoing work after launch."
  },
  "governance-remediation": {
    "question": "What happens after an assessment identifies gaps?",
    "answer": "We turn assessment findings into agreed technical fixes. Each finding is linked to affected systems, a responsible owner, things the fix depends on, and tests. Work may change permissions, identities, system connections, ongoing management, or activity records. We document remaining risks and who will run and maintain the system at handover."
  }
};
