'use client';
import HeatMap from '@uiw/react-heat-map';

export const CommitHeatMap = () => {
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
        <div className="overflow-x-auto mt-6 text-white">
            <HeatMap
                className="min-w-full "
                weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
                value={value}
                width={783}
                startDate={new Date('2016/01/01')}
                endDate={new Date('2017/02/02')}
                rectSize={12}
                legendCellSize={12}
            />
        </div>
    );
};
