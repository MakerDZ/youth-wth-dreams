import { NextResponse } from 'next/server';
import { identity } from '../../../services/identity.service';
import { note } from '../../../services/note.service';
import { dbConnect } from '../../../lib/database';

interface QueryParams {
    id: string;
}

export async function GET(request: Request) {
    await dbConnect;
    const { searchParams } = new URL(request.url);
    const queryParams: Partial<QueryParams> = {
        id: searchParams.get('id') || undefined,
    };

    if (!queryParams.id) {
        throw new Error('Missing required query parameters');
    }

    try {
        const Identity = await identity.exist(queryParams.id, queryParams.id);
        if (!Identity) {
            throw new Error('Identity not found');
        }
        const notes = await note.getCommitHeatMap(Identity._id, 'commitment');

        if (notes == undefined) {
            throw new Error('No notes found');
        }
        return NextResponse.json(notes);
    } catch (error) {
        console.error('Error fetching notes:', error);
        throw new Error('Internal server error');
    }
}
