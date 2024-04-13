'use client';
import HeatMap from '@uiw/react-heat-map';
import ScrollContainer from 'react-indiana-drag-scroll';
import { topicData } from '../../utils/topic';

export const ProfileContent = () => {
    const value = [
        { date: '2016/01/11', count: 2 },
        { date: '2016/01/12', count: 20 },
        { date: '2016/01/13', count: 10 },
        ...[...Array(17)].map((_, idx) => ({
            date: `2016/02/${idx + 10}`,
            count: idx,
            content: '',
        })),
        { date: '2016/04/11', count: 2 },
        { date: '2016/05/01', count: 5 },
        { date: '2016/05/02', count: 5 },
        { date: '2016/05/04', count: 11 },
        { date: '2016/04/11', count: 2 },
        { date: '2016/06/01', count: 5 },
        { date: '2016/09/02', count: 5 },
        { date: '2016/12/04', count: 11 },
    ];

    return (
        <div className="xl:w-[700px] lg:w-[600px] h-[1000px] pt-8 ">
            <ScrollContainer className="flex bg-[#F4F4F5] transition-transform transform translate-x-5 space-x-3 h-auto p-1 rounded-xl sticky top-8 -ml-7 text-base">
                <div
                    className={`bg-white  border-1 border-[#D9D9D9] h-auto min-w-40 text-center rounded-xl py-1 hover:cursor-pointer`}
                >
                    Daily Progress
                </div>
                {topicData.map((topic) => {
                    return (
                        <div
                            className={`h-auto min-w-40 text-center rounded-xl py-1 hover:cursor-pointer`}
                        >
                            {topic.menuName}
                        </div>
                    );
                })}
            </ScrollContainer>
            <div className="overflow-x-auto mt-6">
                <HeatMap
                    className="min-w-full"
                    weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
                    value={value}
                    width={783}
                    startDate={new Date('2016/01/01')}
                    endDate={new Date('2017/02/02')}
                    rectSize={12}
                    legendCellSize={12}
                />
            </div>
        </div>
    );
};

// "bg-white text-[#0D0D0D]"
