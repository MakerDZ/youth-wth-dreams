import { Card, CardBody } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import TeleTheme from '../TeleTheme';

export const Submitted = () => {
    return (
        <TeleTheme>
            <main className="h-screen w-full flex flex-col justify-center relative">
                <nav className="w-full py-7 absolute top-0">
                    <h1 className="text-center font-black lg:text-xl text-lg light:text-[#292929]">
                        Youth With Dreams
                    </h1>
                    <div className="flex flex-row justify-center">
                        <p className="text-center font-bold bg-gradient-to-r from-[#F49B0B] via-[#EA580C] to-[#EAAC09] inline-block text-transparent bg-clip-text">
                            Entrance Form
                        </p>
                    </div>
                </nav>
                <Card className="sm:max-w-[450px] w-4/5 mx-auto my-4 p-3">
                    <CardBody>
                        <Chip
                            className="text-white mx-auto mb-7"
                            color="warning"
                            variant="shadow"
                        >
                            Status : Pending
                        </Chip>
                        <p className="text-center text-[#636B74]">
                            Entrance Form ​လေးဖြည့်တာ​အောင်မြင်ပါတယ်။ Community
                            Facilitator များမှ qualify ပေး​ပြီးသောအခါတွင် invite
                            ​link ​လေးပြန်ပို့​ပေးပါမယ်။
                        </p>
                    </CardBody>
                </Card>
            </main>
        </TeleTheme>
    );
};
