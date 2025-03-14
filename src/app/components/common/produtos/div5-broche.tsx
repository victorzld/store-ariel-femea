import { ComponentProps } from "react";

interface DivCincoBrocheProps extends ComponentProps<'div'> { }

export function DivCincoBroche(props: DivCincoBrocheProps) {
    return (
        <div
            {...props}
            className="xl:w-[600px] 2xl:w-[600px] lg:w-[400px] md:w-[300px] max-md:w-[300px] mx-auto"
        />
    )
}