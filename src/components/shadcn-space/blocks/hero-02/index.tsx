import HeroSection from "@/components/shadcn-space/blocks/hero-02/hero"
import Navbar from "@/components/shadcn-space/blocks/hero-02/navbar";
import { NavLinkItem } from "@/components/shadcn-space/blocks/hero-02/navbar";

const Hero04Page = () => {

    const navData:NavLinkItem[] = [
        { name: 'Home', href: '#',isActive: true },
        { name: 'Properties', href: '#' ,isActive: false},
        { name: 'Blog', href: '#' ,isActive: false},
        { name: 'Contact', href: '#' ,isActive: false},
        { name: 'Docs', href: '#' ,isActive: false},
    ]
    return (
        <>
            <Navbar navData={navData} />
            <main className="-mt-20">
                <HeroSection />
            </main>
        </>
    )
}

export default Hero04Page