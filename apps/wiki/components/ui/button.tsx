import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center duration-500 justify-center whitespace-nowrap rounded-8 text-[15px] font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7155F0] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#DC134F] hover:bg-[#ee2a65] text-white",
        primaryDark: "bg-black hover:bg-black text-white",
        default: "bg-[#FDF9F9] text-aubergine-750 hover:bg-aubergine-50",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        dropdown: "bg-aubergine-50 text-aubergine-750 hover:bg-aubergine-25",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-[#532D37] underline-offset-4 hover:underline ",
        menu: "text-[#532D37] hover:bg-aubergine-25 underline-offset-4",
        info: "text-button/text/color/informative/main/primrary/fallback",
      },
      size: {
        default: "h-[44px] px-14 ",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
