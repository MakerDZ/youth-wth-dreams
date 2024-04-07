'use client';

import { useTheme } from 'next-themes';
import { useTelegram } from '../../providers/Telegram';
import { Card, CardBody } from '@nextui-org/card';
import { Button } from '@nextui-org/react';
import { Textarea } from '@nextui-org/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    EntranceSchema,
    TypeEntranceSchema,
} from '../../validations/entrance.validation';
import { entranceAction } from '../../actions/entrance.action';
import { useAction } from 'next-safe-action/hooks';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Spinner } from '@nextui-org/spinner';

export default function Entrance(): JSX.Element {
    const searchParams = useSearchParams();
    const chatId = searchParams.get('chatId');
    const userId = searchParams.get('userId');
    console.log(chatId);
    const { execute, result, status } = useAction(entranceAction);
    const { webApp } = useTelegram();
    const { setTheme } = useTheme();
    setTheme(webApp?.colorScheme!);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<TypeEntranceSchema>({ resolver: zodResolver(EntranceSchema) });

    useEffect(() => {}, [result]);

    const onSubmit = async (data: TypeEntranceSchema) => {
        execute({ ...data, UserId: userId!, ChatId: chatId! });
    };

    return (
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
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
    );
}
