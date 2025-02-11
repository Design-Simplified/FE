import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import clsxm from "@/lib/clsxm";
import Button from "./buttons/Button";

const Pagination = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={clsxm("mx-auto flex w-full justify-center", className)}
  >
    {children}
  </nav>
);

const PaginationContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <ul
    className={clsxm(
      "flex flex-row items-center gap-2 xl:gap-10 lg:gap-8 md:gap-6 sm:gap-4",
      className,
    )}
  >
    {children}
  </ul>
);

const PaginationItem = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <li className={clsxm("", className)}>{children}</li>;

type PaginationButtonProps = {
  isActive?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const PaginationButton = ({
  isActive,
  disabled,
  onClick,
  children,
}: PaginationButtonProps) => (
  <Button
    variant={isActive ? "green" : "white"}
    className={clsxm("h-9 w-9 flex items-center justify-center", {
      "opacity-50 cursor-not-allowed": disabled,
    })}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </Button>
);

const PaginationPrevious = ({
  disabled,
  onClick,
}: {
  disabled?: boolean;
  onClick?: () => void;
}) => (
  <PaginationButton disabled={disabled} onClick={onClick}>
    <ChevronLeft className="h-4 w-4" />
  </PaginationButton>
);

const PaginationNext = ({
  disabled,
  onClick,
}: {
  disabled?: boolean;
  onClick?: () => void;
}) => (
  <PaginationButton disabled={disabled} onClick={onClick}>
    <ChevronRight className="h-4 w-4" />
  </PaginationButton>
);

const PaginationEllipsis = () => (
  <span className="flex h-9 w-9 items-center justify-center">
    <MoreHorizontal className="h-4 w-4" />
  </span>
);

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
