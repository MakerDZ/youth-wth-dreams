'use client';
import HeatMap from '@uiw/react-heat-map';
import { useGetChatId } from '../../hooks/GetChatId';
import { useGetCommitHeapMap } from '../../hooks/GetCommitHeapmap';
import { useNoteFilter } from '../../hooks/NoteFilter';

export const CommitHeatMap = () => {
    const { filter } = useNoteFilter();
    const { chatId } = useGetChatId();
    const { data } = useGetCommitHeapMap(chatId as string);
    if (filter == 'commitment') {
        return (
            <div className="overflow-x-auto mt-6 text-white">
                <HeatMap
                    className="min-w-full "
                    weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
                    value={data ? data : []}
                    width={783}
                    startDate={new Date('2024/01/01')}
                    endDate={new Date('2025/02/02')}
                    rectSize={12}
                    legendCellSize={12}
                />
            </div>
        );
    }
    return <></>;
};
