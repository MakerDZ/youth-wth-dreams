'use client';
import ScrollContainer from 'react-indiana-drag-scroll';
import { topicData } from '../../utils/topic';
import { useNoteFilter } from '../../hooks/NoteFilter';

export const NoteFilter = () => {
    const { name, setName } = useNoteFilter();

    return (
        <ScrollContainer className="flex bg-[#F4F4F5] transition-transform transform translate-x-5 space-x-3 h-auto p-1 rounded-xl sticky top-8 -ml-7 text-base z-50">
            {topicData.map((topic) => {
                return (
                    <div
                        onClick={() => {
                            setName(topic.noteName);
                        }}
                        className={`h-auto min-w-40 text-center rounded-xl py-1 hover:cursor-pointer ${name == topic.noteName ? 'bg-white  border-1 border-[#D9D9D9]' : ''}`}
                    >
                        {topic.menuName}
                    </div>
                );
            })}
        </ScrollContainer>
    );
};
