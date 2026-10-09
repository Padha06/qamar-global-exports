import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * The client-supplied brand logo (emblem + QAMAR GLOBAL EXPORT wordmark).
 * Rendered exactly as provided — do not alter the artwork.
 */
export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/qamar-logo.png"
      alt="Qamar Global Exports"
      width={802}
      height={762}
      priority={priority}
      sizes="240px"
      className={cn("h-12 w-auto object-contain", className)}
    />
  );
}
