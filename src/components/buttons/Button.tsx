import * as React from "react";
import { IconType } from "react-icons";
import { ImSpinner } from "react-icons/im";
import { LucideIcon } from "lucide-react";

import clsxm from "@/lib/clsxm";

const ButtonVariant = [
  "blue",
  "green",
  "yellow",
  "white",
  "outline",
  "ghost",
  "grey",
] as const;
const ButtonSize = ["sm", "base", "lg"] as const;

type ButtonProps = {
  isLoading?: boolean;
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  leftIcon?: IconType | LucideIcon;
  rightIcon?: IconType | LucideIcon;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = "blue",
      size = "base",
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref,
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={clsxm(
          "inline-flex items-center justify-center rounded-lg font-medium",
          "focus:outline-none focus-visible:ring",
          "shadow-sm",
          "transition-colors duration-75",
          //#region  //*=========== Size ===========
          [
            size === "lg" && [
              "min-h-[2.75rem] px-3.5 md:min-h-[3rem]",
              "text-base",
            ],
            size === "base" && [
              "min-h-[2.25rem] px-3 md:min-h-[2.5rem]",
              "text-sm md:text-base",
            ],
            size === "sm" && [
              "min-h-[1.75rem] px-2 md:min-h-[2rem]",
              "text-xs md:text-sm",
            ],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === "blue" && [
              "bg-blue-500 text-white",
              "border border-blue-600",
              "hover:bg-blue-600 hover:text-white",
              "active:bg-blue-700",
              "disabled:bg-blue-700",
              "focus-visible:ring-blue-400",
            ],
            variant === "green" && [
              "bg-[#525B44] text-white",
              "border border-[#414834]",
              "hover:bg-[#414834] hover:text-white",
              "active:bg-[#373d2b]",
              "disabled:bg-[#373d2b]",
              "focus-visible:ring-[#677155]",
            ],
            variant === "white" && [
              "bg-white text-[#525B44]",
              "hover:bg-slate-300 hover:text-[#687357]",
              "active:bg-slate-400",
              "disabled:bg-slate-400",
              "focus-visible:ring-slate-500",
            ],
            variant === "yellow" && [
              "bg-yellow-500 text-white",
              "border border-yellow-500",
              "hover:bg-yellow-600 hover:text-white",
              "active:bg-yellow-700",
              "disabled:bg-yellow-700",
              "focus-visible:ring-yellow-400",
            ],
            variant === "outline" && [
              "text-white",
              "border border-white",
              "hover:bg-inherit/80 focus-visible:ring-gray-400 active:bg-slate-500 disabled:bg-slate-500",
            ],
            variant === "ghost" && [
              "text-neutral-500",
              "shadow-none",
              "hover:bg-neutral-50 focus-visible:ring-neutral-400 active:bg-neutral-100 disabled:bg-neutral-100",
            ],
            variant === "grey" && [
              "bg-[#D9D9D9B2] text-black",
              "hover:bg-gray-100 hover:text-black/50",
              "active:bg-gray-700",
              "disabled:bg-gray-700",
              "focus-visible:ring-gray-400",
            ],
          ],
          //#endregion  //*======== Variants ===========
          "disabled:cursor-not-allowed",
          isLoading &&
            "relative text-transparent transition-none hover:text-transparent disabled:cursor-wait",
          className,
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
              {
                "text-white": ["blue", "green", "red", "yellow"].includes(
                  variant,
                ),
                "text-blue-500": ["outline", "ghost"].includes(variant),
              },
            )}
          >
            <ImSpinner size={18} className="animate-spin" />
          </div>
        )}
        {LeftIcon && (
          <div
            className={clsxm([
              size === "lg" && "mr-3",
              size === "base" && "mr-2",
              size === "sm" && "mr-1",
            ])}
          >
            <LeftIcon
              size="1em"
              className={clsxm("text-base", leftIconClassName)}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div
            className={clsxm([
              size === "lg" && "ml-3",
              size === "base" && "ml-2",
              size === "sm" && "ml-1",
            ])}
          >
            <RightIcon
              size="1em"
              className={clsxm("text-base", rightIconClassName)}
            />
          </div>
        )}
      </button>
    );
  },
);

export default Button;
