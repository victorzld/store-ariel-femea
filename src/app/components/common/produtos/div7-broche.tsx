import { ComponentProps } from "react";

interface DivSeteBrocheProps extends ComponentProps<'div'> { }

export function DivSeteBroche(props: DivSeteBrocheProps) {
    return (
        <div
            {...props}
            className="uppercase tracking-wide text-sm text-slate-300/80 font-semibold"
        />
    )
}