import { StringParam, useQueryParam, withDefault } from 'use-query-params';

export const useNoteFilter = () => {
    const [filter, setFilter] = useQueryParam(
        'filter',
        withDefault(StringParam, 'commitment')
    );
    return {
        filter,
        setFilter,
    };
};
