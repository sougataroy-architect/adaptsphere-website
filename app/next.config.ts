import type { NextConfig } from "next";
const config: NextConfig = {
 poweredByHeader:false, reactStrictMode:true,
 async headers(){return [{source:"/:path*",headers:[
 {key:"X-Content-Type-Options",value:"nosniff"},
 {key:"X-Frame-Options",value:"DENY"},
 {key:"Referrer-Policy",value:"strict-origin-when-cross-origin"},
 {key:"Permissions-Policy",value:"camera=(), microphone=(), geolocation=(), payment=()"},
 {key:"Content-Security-Policy",value:"object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'; frame-src 'none'"}]}];},
 async redirects(){return [
{source:"/ai-solutions",destination:"/services",permanent:true},
{source:"/copilot-azure-ai-agents",destination:"/microsoft-ai",permanent:true},
{source:"/ai-solutions/use-cases",destination:"/services",permanent:true},
{source:"/ai-automation-workflow",destination:"/services/ai-integration-modernization",permanent:true},
{source:"/ai-strategy-roadmap",destination:"/services/governed-ai-architecture",permanent:true},
{source:"/ai-implementation",destination:"/services/governed-ai-architecture",permanent:true},
{source:"/dashboard",destination:"/services/platform-engineering",permanent:true},
{source:"/features",destination:"/services",permanent:true},
{source:"/support-faq",destination:"/how-we-work",permanent:true},
{source:"/blog",destination:"/insights",permanent:true},
{source:"/fix-permission-gaps-before-copilot-finds-them",destination:"/microsoft-ai",permanent:true},
{source:"/copilot-control-system-for-smbs-4-steps-to-stop-oversharing-in-microsoft-365",destination:"/microsoft-ai",permanent:true},
{source:"/category/microsoft-365-copilot",destination:"/microsoft-ai",permanent:true},
{source:"/category/security-and-governance",destination:"/agent-governance",permanent:true},
{source:"/category/playbooks-and-templates",destination:"/insights",permanent:true},

 {source:"/start-here",destination:"/how-we-work",permanent:true},
 {source:"/security",destination:"/agent-governance",permanent:true},
 {source:"/usecase",destination:"/services",permanent:true},
 {source:"/services/microsoft-copilot-ai",destination:"/microsoft-ai",permanent:true},
 {source:"/services/automation-workflows",destination:"/services/ai-integration-modernization",permanent:true},
 {source:"/services/ai-strategy-roadmap",destination:"/services/governed-ai-architecture",permanent:true},
 {source:"/services/ai-use-cases",destination:"/services",permanent:true}
 ];}
};
export default config;
