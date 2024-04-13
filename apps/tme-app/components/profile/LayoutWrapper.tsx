export const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="xl:w-[70rem] lg:w-[55rem] md:w-6/12 sm:w-7/12 w-8/12  h-auto mx-auto lg:flex lg:flex-row relative lg:space-x-1">
            {children}
        </main>
    );
};
