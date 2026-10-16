export const serviceAnswers:Record<string,{question:string;answer:string}>={
  "governed-ai-architecture": {
    "question": "What does governed AI implementation include?",
    "answer": "We document the agent’s approved purpose, scope, prohibitions, accountable owner, and review conditions, then map the identity, data, and tool paths for the task. Implementation can include delegated or application access, API authorization, approval steps, failure handling, and activity records. We test whether the configured controls enforce the recorded decision."
  },
  "ai-governance-assessment": {
    "question": "What does an AI governance assessment review?",
    "answer": "We inspect how AI tools and agents are configured: which systems and information they reach, which identities and credentials they use, who owns them, and what activity is recorded. Findings identify the affected systems and evidence, then prioritize technical fixes."
  },
  "agent-governance": {
    "question": "How is agent governance different from a policy document?",
    "answer": "Agent governance records the business decision behind the configuration: the agent’s purpose, permitted scope, prohibitions, approving authority, accountable owner, and review conditions. The record connects that decision to identity, tool permissions, approval steps, tests, and a process for suspending or removing access when circumstances change."
  },
  "microsoft-ai-governance": {
    "question": "What does Microsoft AI governance cover?",
    "answer": "We trace the planned task through Microsoft 365 content permissions, Copilot Studio authentication and connectors, Entra identity, Power Platform environments, and relevant Purview controls. Applicable safeguards depend on your tenant configuration, licenses, and deployment model."
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
