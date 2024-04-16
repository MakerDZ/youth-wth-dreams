import { NextResponse } from 'next/server';
import { identity } from '../../../services/identity.service';
import { note } from '../../../services/note.service';

interface QueryParams {
    filter: string;
    id: string;
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const queryParams: Partial<QueryParams> = {
        filter: searchParams.get('filter') || undefined,
        id: searchParams.get('id') || undefined,
    };

    if (!queryParams.id || !queryParams.filter) {
        throw new Error('Missing required query parameters');
    }

    try {
        const Identity = await identity.exist(queryParams.id, queryParams.id);
        if (!Identity) {
            throw new Error('Identity not found');
        }
        const notes = await note.getSorted(Identity._id, queryParams.filter);

        if (notes == undefined) {
            console.log('No notes found.');
            throw new Error('No notes found');
        }
        return NextResponse.json(notes);
    } catch (error) {
        console.error('Error fetching notes:', error);
        throw new Error('Internal server error');
    }
}
