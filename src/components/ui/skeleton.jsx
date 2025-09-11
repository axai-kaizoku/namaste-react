import { cn } from "../../utils/utils";

export const Skeleton = ({ className }) => {
  return <div className={cn("animate-pulse w-30 h-20 bg-accent", className)} />;
};
