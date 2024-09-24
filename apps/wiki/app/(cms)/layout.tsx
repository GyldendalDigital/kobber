import { cn } from "@/lib/utils";

export default function CMSLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-aubergine-25 min-h-screen  size-full antialiased transition-all")}>
        <div className="max-w-max-width min-w-min-width mx-auto ">{children}</div>
      </body>
    </html>
  );
}
