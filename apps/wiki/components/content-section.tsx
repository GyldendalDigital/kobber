import { ReactNode } from "react";
import { TextCollection } from "./text-collection";

type ContentSectionProps = {
  heading: string;
  ingress?: string;
  children: ReactNode;
};

export function ContentSection({ heading, ingress, children }: ContentSectionProps) {
  return (
    <div className="grid gap-16">
      <TextCollection heading={heading} ingress={ingress} size="sm" />
      {children}
    </div>
  );
}
