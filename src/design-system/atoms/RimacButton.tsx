import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type CommonProps = {
  intent?: "dark" | "primary";
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

type RimacButtonProps = ButtonProps | AnchorProps;

function buildClassNames({ intent, fullWidth }: { intent: "dark" | "primary"; fullWidth?: boolean }) {
  const base = [
    "inline-flex items-center justify-center select-none",
    "font-bold text-white",
    "cursor-pointer",
    "md:transition-opacity md:duration-200 md:hover:opacity-80",
    fullWidth ? "w-full" : "",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/30",
  ];

  if (intent === "dark") {
    base.push(
      "bg-[#03050F]", 
      "rounded-[40px]", 
      "px-[40px]", 
      "py-[18px] md:py-[20px]",
      "text-[18px] md:text-[20px]",
      "leading-[20px] md:leading-[24px]",
      "w-full md:w-auto"
    );
  } else {
    base.push("bg-[#FF1C44]", "rounded-[32px]", "px-[32px]", "py-[14px]", "text-[18px]", "leading-[20px]");
  }

  return base.filter(Boolean).join(" ");
}

const RimacButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, RimacButtonProps>(function RimacButton(
  { intent = "dark", fullWidth, className, children, href, ...rest },
  ref
) {
  const classes = [buildClassNames({ intent, fullWidth }), className].filter(Boolean).join(" ");

  if (href) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...buttonProps} type={buttonProps.type ?? "button"}>
      {children}
    </button>
  );
});

export default RimacButton;


