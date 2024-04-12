import { EntranceActionValidate } from '../../actions/entrance.action';
import EntranceForm from '../../components/entrance/EntranceForm';
import { Submitted } from '../../components/entrance/Submitted';
import { entrance } from '../../services/entrance.service';

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
            const Entrance = await entrance.get(isExist?._id);
            return <Submitted status={Entrance?.approved} />;
        }
    }

    return <EntranceForm />;
}
