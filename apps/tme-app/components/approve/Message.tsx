import { Card, CardBody } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';

enum MessageStatus {
    Approved = 'success',
    Rejected = 'warning',
    Invalid = 'danger',
}

interface Message {
    status: MessageStatus;
    content: string;
}

interface Props {
    message: Message;
}

export const Message: React.FC<Props> = ({ message }) => {
    return (
        <main className="h-screen w-full flex flex-col justify-center relative">
            <nav className="w-full py-7 absolute top-0">
                <h1 className="text-center font-black lg:text-xl text-lg light:text-[#292929]">
                    Youth With Dreams
                </h1>
                <div className="flex flex-row justify-center">
                    <p className="text-center font-bold bg-gradient-to-r from-[#F49B0B] via-[#EA580C] to-[#EAAC09] inline-block text-transparent bg-clip-text">
                        Entrance Form Approval
                    </p>
                </div>
            </nav>
            <Card className="sm:max-w-[450px] w-4/5 mx-auto my-4 p-3">
                <CardBody>
                    <Chip
                        className="text-white mx-auto mb-7"
                        color={message.status}
                        variant="shadow"
                    >
                        Status : {message.content}
                    </Chip>
                    {message.status == 'danger' ? (
                        <p className="text-center text-[#636B74]">
                            ဘာ တွေလာရှာ နေတာတုန်းဗျ။
                        </p>
                    ) : (
                        <p className="text-center text-[#636B74]">
                            ယခု Entrance Form ကို Approval လုပ်ပြီးသွားပါပြီ။
                        </p>
                    )}
                </CardBody>
            </Card>
        </main>
    );
};
