'use client';

import { TimelineCard } from './TimelineCard';
import { NoteCard } from './NoteCard';

export const NoteView = () => {
    const note = `Make beautiful websites regardless of
    your design experience.Make beautiful
    websites regardless of your design
    experience.Make beautiful websites
    regardless of your design
    experience.Make beautiful websites
    regardless of your design experience.`;

    return (
        <div className="w-full mt-8">
            <TimelineCard timeline="4April2024">
                <NoteCard note={note} />
                <NoteCard note={note} />
                <NoteCard note={note} />
            </TimelineCard>
            <TimelineCard timeline="3April2024">
                <NoteCard note={note} />
                <NoteCard note={note} />
                <NoteCard note={note} />
            </TimelineCard>
            <TimelineCard timeline="2April2024">
                <NoteCard note={note} />
                <NoteCard note={note} />
                <NoteCard note={note} />
            </TimelineCard>
            <TimelineCard timeline="1April2024">
                <NoteCard note={note} />
                <NoteCard note={note} />
                <NoteCard note={note} />
            </TimelineCard>
        </div>
    );
};
