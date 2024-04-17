import { Suspense } from 'react';
import { DecisionButton } from '../../components/approve/DecisionButton';
import { Message } from '../../components/approve/Message';
import { entrance } from '../../services/entrance.service';
import { identity } from '../../services/identity.service';
import { decrypt } from '../../utils/encrypt-decrypt';
import { Card, CardBody } from '@nextui-org/card';
import { Textarea } from '@nextui-org/input';
import Loading from '../../components/Loading';

enum MessageStatus {
    Approved = 'success',
    Rejected = 'warning',
    Invalid = 'danger',
}

export default async function Page({
    searchParams,
}: {
    searchParams?: { id: string };
}): Promise<JSX.Element> {
    try {
        const accountId = decrypt(searchParams?.id ? searchParams.id : '');
        const Entrance = await entrance.get(accountId!);
        const Identity = await identity.getById(accountId!);
        const chatId = Identity?.platform.filter(
            (platform) => platform.name == 'telegram'
        )[0]?.chatId;

        if (Entrance && !Entrance.approved && Identity) {
            return (
                <Suspense fallback={<Loading />}>
                    <main className="w-full h-full">
                        <nav className="w-full py-7">
                            <h1 className="text-center font-black lg:text-xl text-lg light:text-[#292929]">
                                Youth With Dreams
                            </h1>
                            <div className="flex flex-row justify-center">
                                <p className="text-center font-bold bg-gradient-to-r from-[#F49B0B] via-[#EA580C] to-[#EAAC09] inline-block text-transparent bg-clip-text">
                                    Entrance Form Approval
                                </p>
                            </div>
                        </nav>
                        <Card className="sm:max-w-[450px] w-4/5 mx-auto my-4 p-2">
                            <CardBody>
                                <Textarea
                                    isReadOnly
                                    maxRows={4}
                                    key="Dreams"
                                    variant="flat"
                                    label="Dreams"
                                    labelPlacement="outside"
                                    defaultValue={Entrance.previousDreams}
                                    placeholder="သင့်မှာ ဘာ အိမ်မက်​တွေရှိခဲ့ဖူးပါသလဲ။"
                                    className="col-span-12 md:col-span-6 mb-6 font-bold"
                                />
                                <Textarea
                                    isReadOnly
                                    maxRows={4}
                                    key="Executions"
                                    variant="flat"
                                    label="Executions"
                                    labelPlacement="outside"
                                    defaultValue={Entrance.previousExecutions}
                                    placeholder="ဘယ်လိုမျိုး လက်​တွေ့အ​ကောင်အထည်​ဖော်ခဲ့ဖူးပါသလဲ။"
                                    className="col-span-12 md:col-span-6 mb-6 font-bold"
                                />
                                <Textarea
                                    isReadOnly
                                    maxRows={4}
                                    key="Motivation"
                                    variant="flat"
                                    label="Motivation To Join"
                                    labelPlacement="outside"
                                    defaultValue={Entrance.motivationToJoin}
                                    placeholder="အခု community ​လေးက​နေ ဘာ​တွေ​မျှော်လင့်ပါသလဲ။"
                                    className="col-span-12 md:col-span-6 mb-6 font-bold"
                                />
                                <DecisionButton
                                    accountId={accountId!}
                                    chatId={chatId!}
                                />
                            </CardBody>
                        </Card>
                    </main>
                </Suspense>
            );
        } else if (Entrance && Entrance.approved && Identity) {
            return (
                <Suspense fallback={<Loading />}>
                    <Message
                        message={{
                            status: MessageStatus.Approved,
                            content: 'Approved',
                        }}
                    />
                </Suspense>
            );
        }
        return (
            <Suspense fallback={<Loading />}>
                <Message
                    message={{
                        status: MessageStatus.Rejected,
                        content: 'Rejected',
                    }}
                />
            </Suspense>
        );
    } catch (error) {
        return (
            <Suspense fallback={<Loading />}>
                <Message
                    message={{
                        status: MessageStatus.Invalid,
                        content: 'Invalid Request',
                    }}
                />
            </Suspense>
        );
    }
}
