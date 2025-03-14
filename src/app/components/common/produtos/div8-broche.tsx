import { ComponentProps } from "react";

interface DivOitoBrocheProps extends ComponentProps<'div'> { }

export function DivOitoBroche(props: DivOitoBrocheProps) {
    return (
        <div
            {...props}
            className="mt-4 space-y-6"
        />
    )
}