'use client';

import { Card, CardBody } from '@nextui-org/card';
import { Button } from '@nextui-org/react';
import { Textarea } from '@nextui-org/input';
import { useAction } from 'next-safe-action/hooks';
import { useSearchParams } from 'next/navigation';
import { Spinner } from '@nextui-org/spinner';
import { useTelegram } from '../../providers/Telegram';
import { EntranceActionCreate } from '../../actions/entrance.action';
import {
    EntranceSchema,
    TypeEntranceSchema,
} from '../../schema/entrance.schema';
import TeleTheme from '../TeleTheme';
import { useAfterSubmit } from '../../hooks/afterSubmit';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function Entrance(): JSX.Element {
    const searchParams = useSearchParams();
    const chatId = searchParams && searchParams.get('chatId');
    const userId = searchParams && searchParams.get('userId');
    const { execute, result, status } = useAction(EntranceActionCreate);
    const { webApp } = useTelegram();
    const {
        handleSubmit,
        formState: { isSubmitting },
        register,
    } = useForm<TypeEntranceSchema>({
        resolver: zodResolver(EntranceSchema),
    });
    useAfterSubmit({
        success: result.data?.success,
        message: result.data?.message,
        webApp,
    });
    const onSubmit = async (data: TypeEntranceSchema) => {
        execute({
            ...data,
            UserId: userId!,
            ChatId: chatId!,
            QueryId: webApp?.initDataUnsafe.query_id!,
        });
    };

    return (
        <TeleTheme>
            <main className="w-full h-full">
                <nav className="w-full py-7">
                    <h1 className="text-center font-black lg:text-xl text-lg light:text-[#292929]">
                        Youth With Dreams
                    </h1>
                    <div className="flex flex-row justify-center">
                        <p className="text-center font-bold bg-gradient-to-r from-[#F49B0B] via-[#EA580C] to-[#EAAC09] inline-block text-transparent bg-clip-text">
                            Entrance Form
                        </p>
                    </div>
                </nav>
                <Card className="sm:max-w-[450px] w-4/5 mx-auto my-4 p-2">
                    <CardBody>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="w-full"
                        >
                            <Textarea
                                {...register('Dreams')}
                                maxRows={4}
                                isRequired
                                key="Dreams"
                                variant="flat"
                                label="Dreams"
                                labelPlacement="outside"
                                placeholder="သင့်မှာ ဘာ အိမ်မက်​တွေရှိခဲ့ဖူးပါသလဲ။"
                                className="col-span-12 md:col-span-6 mb-6 font-bold"
                            />
                            <Textarea
                                {...register('Executions')}
                                maxRows={4}
                                isRequired
                                key="Executions"
                                variant="flat"
                                label="Executions"
                                labelPlacement="outside"
                                placeholder="ဘယ်လိုမျိုး လက်​တွေ့အ​ကောင်အထည်​ဖော်ခဲ့ဖူးပါသလဲ။"
                                className="col-span-12 md:col-span-6 mb-6 font-bold"
                            />
                            <Textarea
                                {...register('Motivation')}
                                maxRows={4}
                                isRequired
                                key="Motivation"
                                variant="flat"
                                label="Motivation To Join"
                                labelPlacement="outside"
                                placeholder="အခု community ​လေးက​နေ ဘာ​တွေ​မျှော်လင့်ပါသလဲ။"
                                className="col-span-12 md:col-span-6 mb-6 font-bold"
                            />
                            <Button
                                type="submit"
                                disabled={isSubmitting || status == 'executing'}
                                className={`font-bold w-full py-1 ${isSubmitting || status == 'executing' ? 'opacity-60' : ''}`}
                                color="primary"
                            >
                                {isSubmitting || status == 'executing' ? (
                                    <Spinner color="white" size="sm" />
                                ) : (
                                    'Submit'
                                )}
                            </Button>
                        </form>
                    </CardBody>
                </Card>
            </main>
        </TeleTheme>
    );
}
