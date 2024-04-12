'use client';
import { Card, CardBody } from '@nextui-org/card';
import TeleTheme from '../TeleTheme';
import { Textarea } from '@nextui-org/input';
import { Button, Spinner } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NoteSchema, TypeNoteSchema } from '../../schema/note.schema';
import { useTelegram } from '../../providers/Telegram';
import { topicData } from '../../utils/topic';

export const NoteForm = ({
    noteName,
    id,
}: {
    noteName: string;
    id: string;
}) => {
    const { webApp } = useTelegram();
    const {
        handleSubmit,
        formState: { isSubmitting },
        register,
    } = useForm<TypeNoteSchema>({
        resolver: zodResolver(NoteSchema),
    });
    const onSubmit = async (data: TypeNoteSchema) => {
        webApp?.sendData(
            JSON.stringify({
                noteName,
                id,
                note: data.note,
            })
        );
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
                            Save Anonymously
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
                                {...register('note')}
                                maxRows={4}
                                isRequired
                                key={noteName}
                                variant="flat"
                                label={
                                    topicData.filter(
                                        (topic) => topic.noteName == noteName
                                    )[0]?.channelName
                                }
                                labelPlacement="outside"
                                placeholder={
                                    topicData.filter(
                                        (topic) => topic.noteName == noteName
                                    )[0]?.description
                                }
                                className="col-span-12 md:col-span-6 mb-6 font-bold"
                            />
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className={`font-bold w-full py-1 ${isSubmitting ? 'opacity-60' : ''}`}
                                color="primary"
                            >
                                {isSubmitting ? (
                                    <Spinner color="white" size="sm" />
                                ) : (
                                    'Save'
                                )}
                            </Button>
                        </form>
                    </CardBody>
                </Card>
            </main>
        </TeleTheme>
    );
};
