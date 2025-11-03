import PublicFooter from "@/components/shared/PublicFooter";
import PublicNavbar from "@/components/shared/PublicNavbar";

const Commonlayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <PublicNavbar/>
            {children}
            <PublicFooter/>
        </>
    );
};

export default Commonlayout;