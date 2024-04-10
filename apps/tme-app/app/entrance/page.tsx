import { EntranceActionValidate } from '../../actions/entrance.action';
import EntranceForm from '../../components/entrance/EntranceForm';
import { Submitted } from '../../components/entrance/Submitted';

export default async function async({
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
            return <Submitted />;
        }
    }

    return <EntranceForm />;
}
