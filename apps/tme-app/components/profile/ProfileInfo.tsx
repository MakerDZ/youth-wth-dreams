import Avatar from 'boring-avatars';
import { getRandomColor } from '../../utils/randomColor';
import { faker } from '@faker-js/faker';

export const ProfileInfo = () => {
    const randomColors = Array.from({ length: 5 }, () => getRandomColor());
    return (
        <div className="lg:max-w-[420px] lg:sticky top-0 lg:h-screen pt-8">
            <Avatar
                size={120}
                name={faker.internet.userName()}
                variant="beam"
                colors={randomColors}
            />
            <h1 className="font-black text-3xl mt-9">
                {faker.internet.userName()}
            </h1>
            <p className="light:text-[#636363] text-lg mt-4 w-11/12">
                I joined Youth With Dreams to create a personal journal about my
                progress towards my dreams and to network with like-minded
                individuals.
            </p>
        </div>
    );
};
