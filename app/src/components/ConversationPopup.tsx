"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ArrowUpRight } from "lucide-react";

export function ConversationPopup() {
  return <Dialog.Root>
    <Dialog.Trigger className="text-link popup-trigger">Start a conversation<ArrowUpRight size={16} aria-hidden="true"/></Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="conversation-overlay"/>
      <Dialog.Content className="conversation-popup">
        <Dialog.Close className="conversation-close" aria-label="Close conversation invitation"><X size={22} aria-hidden="true"/></Dialog.Close>
        <div className="conversation-art" role="img" aria-label="Two colleagues reviewing a business workflow together." style={{backgroundImage:"url('/visuals/contact-conversation-v2.webp')"}}>
          <span className="conversation-photo-label" aria-hidden="true"><i aria-hidden="true"/>A WORKING SESSION</span>
          <div className="conversation-brief">
            <p>Bring the parts that shape the decision</p>
            <ol>
              <li><span>01</span>Workflow</li>
              <li><span>02</span>Systems</li>
              <li><span>03</span>Open question</li>
            </ol>
          </div>
        </div>
        <div className="conversation-copy">
          <p className="eyebrow">A practical starting point</p>
          <Dialog.Title>What are you working on?</Dialog.Title>
          <Dialog.Description>Describe the business task, the systems an agent would touch, and any open questions about its identity, permissions, approved actions, or owner. We can agree on a useful first step.</Dialog.Description>
          <a className="conversation-action" href="mailto:info@adaptsphere.ai?subject=AdaptSphere%20project%20conversation">Email AdaptSphere<ArrowUpRight size={18} aria-hidden="true"/></a>
          <p className="conversation-note">info@adaptsphere.ai</p>
          <Dialog.Close className="conversation-later">Continue exploring</Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
