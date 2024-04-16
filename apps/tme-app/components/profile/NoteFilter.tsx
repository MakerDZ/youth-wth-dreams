'use client';
import ScrollContainer from 'react-indiana-drag-scroll';
import { topicData } from '../../utils/topic';
import { useNoteFilter } from '../../hooks/NoteFilter';

export const NoteFilter = () => {
    const { filter, setFilter } = useNoteFilter();

    return (
        <ScrollContainer className="flex bg-[#F4F4F5] dark:bg-[#27272A] transition-transform transform translate-x-5 space-x-3 h-auto p-1 rounded-xl sticky top-8 -ml-7 text-base z-50">
            {topicData.map((topic) => {
                return (
                    <div
                        onClick={() => {
                            setFilter(topic.noteName);
                        }}
                        className={`h-auto min-w-40 text-center rounded-xl py-1 hover:cursor-pointer ${filter == topic.noteName ? 'bg-white dark:bg-[#3F3F46]  border-1 border-[#D9D9D9] dark:border-[#3F3F46]' : ''}`}
                    >
                        {topic.menuName}
                    </div>
                );
            })}
        </ScrollContainer>
    );
};
