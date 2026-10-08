"use client";
import { useRef, useState } from "react";
import { services, serviceHref } from "@/content/services";
import { ArrowRight, Check, Layers, ShieldCheck, Workflow, Fingerprint, Network, Settings, Wrench } from "lucide-react";
import { ButtonLink } from "./UI";
const icons = [Layers, ShieldCheck, Fingerprint, Workflow, Network, Settings, Wrench];
export function ServiceExplorer() {
 const [selected,setSelected]=useState(0);
 const tabs=useRef<(HTMLButtonElement|null)[]>([]);
 return <div className="service-explorer"><div role="tablist" aria-label="Explore engagements" aria-orientation="vertical" className="service-picker">
 {services.map((service,index)=><button key={service.slug} ref={element=>{tabs.current[index]=element;}} role="tab" id={"engagement-tab-"+index} aria-controls={"engagement-panel-"+index} aria-selected={selected===index} tabIndex={selected===index?0:-1} onClick={()=>setSelected(index)} onPointerEnter={event=>{if(event.pointerType==="mouse")setSelected(index);}} onKeyDown={event=>{let next=index;if(event.key==="ArrowDown")next=(index+1)%services.length;else if(event.key==="ArrowUp")next=(index+services.length-1)%services.length;else if(event.key==="Home")next=0;else if(event.key==="End")next=services.length-1;else return;event.preventDefault();setSelected(next);tabs.current[next]?.focus();}}><span className="service-picker-number">0{index+1}</span><span>{service.title}</span><ArrowRight size={18} aria-hidden="true"/></button>)}
 </div><div className="service-stage">{services.map((service,index)=>{const Icon=icons[index];return <section key={service.slug} role="tabpanel" id={"engagement-panel-"+index} aria-labelledby={"engagement-tab-"+index} hidden={selected!==index} tabIndex={0} className="service-scene"><div className="service-scene-art" aria-hidden="true"><span className="scene-orbit orbit-one"/><span className="scene-orbit orbit-two"/><Icon size={76} strokeWidth={1}/><span className="scene-index">0{index+1}</span></div><p className="eyebrow">{service.short}</p><h3>{service.title}</h3><p>{service.summary}</p><h4>What you leave with</h4><ul>{service.deliver.map(deliverable=><li key={deliverable}><Check size={16} aria-hidden="true"/>{deliverable}</li>)}</ul><ButtonLink href={serviceHref(service)}>Explore this engagement</ButtonLink></section>;})}</div></div>;
}
