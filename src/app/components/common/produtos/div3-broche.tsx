import { ComponentProps } from "react";

interface DivTresBrocheProps extends ComponentProps<'div'> { }

export function DivTresBroche(props: DivTresBrocheProps) {
    return (
        <div
            {...props}
            className="xl:bg-slate-50 xl:bg-opacity-5 xl:h-[700px] xl:my-auto rounded-lg shadow-lg"
        />
    )
}