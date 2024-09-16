import { ReactNode } from "react";
import { TextCollection } from "./text-collection";

type ContentSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function ContentSection({ title, description, children }: ContentSectionProps) {
  return (
    <div className="grid gap-10">
      <TextCollection title={title} description={description} size="sm" />
      {children}
    </div>
  );
}
