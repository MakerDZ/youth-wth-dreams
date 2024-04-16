import { NoteFilter } from './NoteFilter';
import { CommitHeatMap } from './CommitHeatMap';
import { NoteView } from './NoteView';

export const ProfileContent = () => {
    return (
        <div className="xl:w-[700px] lg:w-[600px] h-auto pt-8 ">
            <NoteFilter />
            <CommitHeatMap />
            <NoteView />
        </div>
    );
};
