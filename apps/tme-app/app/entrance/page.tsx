import { Suspense } from 'react';
import { EntranceActionValidate } from '../../actions/entrance.action';
import EntranceForm from '../../components/entrance/EntranceForm';
import { Submitted } from '../../components/entrance/Submitted';
import { entrance } from '../../services/entrance.service';
import Loading from '../../components/Loading';

export default async function Page({
    searchParams,
}: {
    searchParams?: { chatId: string; userId: string };
}): Promise<JSX.Element> {
    if (searchParams?.chatId && searchParams.userId) {
        const isExist = await EntranceActionValidate(
            searchParams?.chatId,
            searchParams?.userId
        );
        if (isExist) {
            const Entrance = await entrance.get(isExist?._id);
            return (
                <Suspense fallback={<Loading />}>
                    <Submitted status={Entrance?.approved} />
                </Suspense>
            );
        }
    }

    return (
        <Suspense fallback={<Loading />}>
            <EntranceForm />
        </Suspense>
    );
}
