import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

export const SiteHeader = dynamic(() => import("./site-header"), {
  loading: () => <Skeleton className="w-full h-14" />,
});
