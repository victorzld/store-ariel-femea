import { ComponentProps } from "react";

interface DivDoisBrocheProps extends ComponentProps<'div'> { }

export function DivDoisBroche(props: DivDoisBrocheProps) {
    return (
        <div
            {...props}
            className="max-md:px-4 mx-auto px-12 py-8"
        />
    )
}