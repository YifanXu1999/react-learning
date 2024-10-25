
export default function DashboardLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <div>
            <h2>I am root Dashboard Layout</h2>
            {children}
        </div>
    );
}
