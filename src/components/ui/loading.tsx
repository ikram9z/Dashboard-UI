import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const loadingVariants = cva("w-full animate-pulse", {
  variants: {
    variant: {
      default: "space-y-4",
      card: "space-y-3",
      table: "space-y-2",
      sidebar: "space-y-2",
    },
    size: {
      default: "",
      sm: "max-w-sm",
      lg: "max-w-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface LoadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingVariants> {
  rows?: number;
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, variant, size, rows = 3, ...props }, ref) => {
    const getSkeletonRows = () => {
      const skeletons = [];
      for (let i = 0; i < rows; i++) {
        let height = "h-4";
        if (variant === "card") height = i === 0 ? "h-7" : "h-4";
        if (variant === "table") height = "h-10";

        skeletons.push(
          <Skeleton
            key={i}
            className={cn(
              height,
              i === 0 && variant === "card" ? "w-[250px]" : "w-full",
            )}
          />,
        );
      }
      return skeletons;
    };

    return (
      <div
        ref={ref}
        className={cn(loadingVariants({ variant, size, className }))}
        {...props}
      >
        {getSkeletonRows()}
      </div>
    );
  },
);
Loading.displayName = "Loading";

const LoadingCard = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("rounded-lg border bg-card p-6", className)}
        {...props}
      >
        <Loading variant="card" rows={4} />
      </div>
    );
  },
);
LoadingCard.displayName = "LoadingCard";

const LoadingTable = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, rows = 5, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        <Skeleton className="h-10 w-full" />
        <Loading variant="table" rows={rows} />
      </div>
    );
  },
);
LoadingTable.displayName = "LoadingTable";

export { Loading, LoadingCard, LoadingTable, loadingVariants };
