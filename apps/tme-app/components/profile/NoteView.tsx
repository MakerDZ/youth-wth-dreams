'use client';

import { useNoteFilter } from '../../hooks/NoteFilter';
import { useGetNotes } from '../../hooks/GetNotes';
import { useGetChatId } from '../../hooks/GetChatId';
import { useEffect } from 'react';
import { TimelineCard } from './TimelineCard';
import { NoteCard } from './NoteCard';
import { dateFormatter } from '../../utils/date-formatter';
import { Spinner } from '@nextui-org/spinner';

export const NoteView = () => {
    const { filter } = useNoteFilter();
    const { chatId } = useGetChatId();

    const { data, error, isLoading, refetch } = useGetNotes(
        chatId as string,
        filter == undefined ? 'commitment' : filter
    );

    useEffect(() => {
        refetch();
    }, [filter, refetch]);

    if (isLoading) {
        return (
            <div className="w-full mt-8 flex flex-row justify-center">
                <Spinner className="" label="Loading..." color="warning" />
            </div>
        );
    }

    if (error) {
        return <>Error</>;
    }

    return (
        <div className="w-full mt-8">
            {data.map((note: any) => {
                return (
                    <TimelineCard timeline={dateFormatter(note.createdAt)}>
                        {note.notes.map((note: any) => {
                            return <NoteCard note={note.note} />;
                        })}
                    </TimelineCard>
                );
            })}
        </div>
    );
};
