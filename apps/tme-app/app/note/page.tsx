import { Suspense } from 'react';
import { Message } from '../../components/approve/Message';
import { NoteForm } from '../../components/note/NoteForm';
import { entrance } from '../../services/entrance.service';
import { identity } from '../../services/identity.service';
import Loading from '../../components/Loading';

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        chatId: string;
        userId: string;
        noteName: string;
        id: string;
    };
}): Promise<JSX.Element> {
    const { chatId, userId, noteName, id } = searchParams || {};

    if (chatId && userId && noteName && id) {
        const isExist = await identity.exist(chatId, userId);

        if (isExist) {
            const Entrance = await entrance.get(isExist._id);

            if (Entrance?.approved) {
                return (
                    <Suspense fallback={<Loading />}>
                        <NoteForm noteName={noteName} id={id} />
                    </Suspense>
                );
            }
        }
    }

    return (
        <Message
            message={{
                status: MessageStatus.Invalid,
                content: `Error`,
            }}
        />
    );
}

enum MessageStatus {
    Approved = 'success',
    Rejected = 'warning',
    Invalid = 'danger',
}
