import { Card, CardBody } from '@nextui-org/card';

export const NoteCard = ({ note }: { note: string }) => {
    return (
        <div className="flex flex-row justify-start space-x-5 pl-4">
            <div className="flex flex-col">
                <div className="flex-1 border-dashed border-l-2 border-[#D0D7DE] dark:border-[#5F6163] mx-auto"></div>
            </div>
            <div className="w-full h-auto py-5">
                <Card className="w-full  z-unset !important">
                    <CardBody>
                        <p>{note}</p>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};
