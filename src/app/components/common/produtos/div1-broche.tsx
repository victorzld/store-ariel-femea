import { ComponentProps } from "react";

interface DivUmBrocheProps extends ComponentProps<'div'> { }

export function DivUmBroche(props: DivUmBrocheProps) {
    return (
        <div
            {...props}
            className="flex items-center md:pt-40 lg:pt-40 xl:pt-40 max-md:pt-20"
        />
    )
}