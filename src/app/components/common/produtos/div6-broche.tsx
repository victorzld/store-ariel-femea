import { ComponentProps } from "react";

interface DivSeisBrocheProps extends ComponentProps<'div'> { }

export function DivSeisBroche(props: DivSeisBrocheProps) {
    return (
        <div
            {...props}
            className="p-8 max-md:bg-slate-50 max-md:bg-opacity-5 max-md:mt-5"
        />
    )
}