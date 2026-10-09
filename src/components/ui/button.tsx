import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-orange-500 text-white shadow-[0_10px_30px_-10px_rgba(255,107,0,0.65)] hover:bg-orange-600 hover:shadow-[0_14px_36px_-10px_rgba(255,107,0,0.75)] active:translate-y-0",
        outline:
          "border border-navy-900/15 bg-white text-navy-800 hover:border-orange-500/60 hover:bg-orange-50 hover:text-navy-900",
        dark: "bg-navy-900 text-white hover:bg-navy-800",
        ghost: "text-slate-600 hover:bg-slate-900/5 hover:text-navy-900",
        wa: "bg-[#25D366] text-[#04231a] hover:brightness-105 shadow-[0_10px_30px_-12px_rgba(37,211,102,0.8)]",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-[15px]",
        lg: "h-13 px-8 text-base py-3.5",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
