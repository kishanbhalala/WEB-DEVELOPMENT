import AdminHeadar from "@/components/adminHeadar";

export default function adminLayout({ children }) {
    return (
        <>
            <div>
                <AdminHeadar />
                {children}

                {/* <h1>components use admin na bne children ma header compo show kre  children =   {dashb} {profile}</h1> */}
            </div>
        </>
    )
}