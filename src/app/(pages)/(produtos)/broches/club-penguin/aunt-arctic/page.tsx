import { Metadata } from "next";
import PinOne from "./page-ping";

export const metadata: Metadata = {
    title: "Broche - Aunt Arctic",
};

export default function PagePinOne() {
    return (
        <div>
            <PinOne />
        </div>
    )
}