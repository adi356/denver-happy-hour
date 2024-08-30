import { FloatingNav } from "./ui/floating-navbar";

const FDD = () => {
    return(
        <section id="FDD" className="h-screen bg-blue-100 flex items-center justify-center relative">
            <FloatingNav
                navItems={[
                    { name: 'Featured Deals', link: '#FDD'},
                    { name: 'Neighborhoods', link: '#Neighborhoods'},
                    { name: 'Late Night', link: '#LateNight'},
                ]}
                />
        </section>
    )
}

export default FDD;