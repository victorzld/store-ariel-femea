import { Metadata } from "next";
import CategoryMenu from "../../components/category-menu";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Hero from "../../components/hero";
import ProductGrid from "../../components/product-grid";

export default function Home() {
    return (
        <div className="">
            <Hero />
            <ProductGrid />
        </div>
    )
}