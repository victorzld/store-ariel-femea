import { ComponentProps } from "react";

interface ParagrafoDoisBrocheProps extends ComponentProps<'p'> { }

export function ParagrafoDoisBroche(props: ParagrafoDoisBrocheProps) {
    return (
        <div
            {...props}
            className="mt-2 text-lime-500"
        />
    )
}