import { ComponentProps } from "react";

interface ParagrafoUmBrocheProps extends ComponentProps<'p'> { }

export function ParagrafoUmBroche(props: ParagrafoUmBrocheProps) {
    return (
        <div
            {...props}
            className="mt-4 text-xl font-bold text-indigo-100"
        />
    )
}