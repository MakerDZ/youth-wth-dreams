import { StringParam, useQueryParam, withDefault } from 'use-query-params';

export const useNoteFilter = () => {
    const [name, setName] = useQueryParam(
        'filter',
        withDefault(StringParam, 'commitment')
    );
    return {
        name,
        setName,
    };
};
