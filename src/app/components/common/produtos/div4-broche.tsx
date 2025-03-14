import { ComponentProps } from "react";

interface DivQuatroBrocheProps extends ComponentProps<'div'> { }

export function DivQuatroBroche(props: DivQuatroBrocheProps) {
    return (
        <div
            {...props}
            className="md:flex xl:h-full xl:flex xl:items-center xl:justify-center xl:gap-10 overflow-hidden"
        />
    )
}