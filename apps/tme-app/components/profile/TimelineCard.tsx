import { useSticky } from 'react-use-sticky';

export const TimelineCard = ({
    children,
    timeline,
}: {
    children: React.ReactNode;
    timeline: string;
}) => {
    const [Ref, sticky] = useSticky<any>();
    return (
        <section className="space-y-1 ">
            <div
                ref={Ref}
                className="sticky top-20 z-40 flex flex-row justify-start space-x-4 pl-[7px]"
            >
                <div className="flex flex-col">
                    <div className="flex flex-col justify-center h-5 w-5 bg-[#D0D7DE] mx-auto rounded-full">
                        <div className="w-3 h-3 rounded-full bg-white mx-auto"></div>
                    </div>
                    <div className="flex-1 border-dashed border-l-2 border-[#D0D7DE] mx-auto"></div>
                </div>
                <div
                    className={`h-auto min-w-9/12 py-1 px-2 rounded-full -mt-1 bg-white ${sticky ? 'border-1 border-[#E4E4E4] transition-all ease-in-out duration-300 transform translate-x-[5%]' : 'border-0 transition-all ease-in-out duration-300 transform translate-x-0'}`}
                >
                    {timeline}
                </div>
            </div>
            {children}
        </section>
    );
};
