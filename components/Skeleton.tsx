import { Skeleton as MUISkeleton } from "@mui/material";
import useLoading from "../lib/useLoading";

interface ISkeletonProps {
    multiline?: boolean;
    lineCount?: number;
    mask?: boolean;
    className?: string;
    children: React.ReactNode;
    variant?: "text" | "rectangular" | "rounded" | "circular";
}

export default function Skeleton({ multiline, mask, variant, lineCount, className, children }: ISkeletonProps) {
    const isLoaded = useLoading();

    if (mask) {
        return (
            <>
                {isLoaded ? (
                    <MUISkeleton className={className} animation="wave" variant={variant}>
                        {children}
                    </MUISkeleton>
                ) : (
                    children
                )}
            </>
        );
    }

    if (multiline) {
        return (
            <>
                {isLoaded ? (
                    <div>
                        {new Array(lineCount).fill(0).map((e, i) => (
                            <MUISkeleton key={i} className={`${className} last:w-3/4 last:mb-0`} animation="wave" variant={variant}></MUISkeleton>
                        ))}
                    </div>
                ) : (
                    children
                )}
            </>
        );
    }

    return <>{isLoaded ? <MUISkeleton className={className} animation="wave" variant={variant}></MUISkeleton> : children}</>;
}
