import { WorkflowScene } from "./WorkflowScene";

function sceneForPath(path: string) {
  if (path.includes("microsoft-ai") || path.includes("insight")) return 1;
  if (path.includes("service") || path.includes("agent") || path.includes("contact")) return 2;
  return 0;
}

export function PageHeroVisual({ path }: { path: string }) {
  const variant = sceneForPath(path);
  return <figure className="page-hero-visual">
    <figcaption><span><i aria-hidden="true" />A GOVERNED AI WORKFLOW</span><span className="page-hero-visual-index">0{variant + 1} / 03</span></figcaption>
    <div className="page-hero-art"><WorkflowScene variant={variant} /></div>
  </figure>;
}
