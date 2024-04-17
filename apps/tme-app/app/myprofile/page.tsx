import { ProfileLayout } from '../../components/profile/LayoutWrapper';
import { ProfileContent } from '../../components/profile/ProfileContent';
import { ProfileInfo } from '../../components/profile/ProfileInfo';
import TeleTheme from '../../components/TeleTheme';

export default async function async(): Promise<JSX.Element> {
    return (
        <TeleTheme>
            <ProfileLayout>
                <ProfileInfo />
                <ProfileContent />
            </ProfileLayout>
        </TeleTheme>
    );
}
