import { ComponentProps } from "react";

interface H1UmBrocheProps extends ComponentProps<'h1'> { }

export function H1UmBroche(props: H1UmBrocheProps) {
    return (
        <div
            {...props}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-300 sm:text-4xl"
        />
    )
}