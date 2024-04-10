import { useForm } from 'react-hook-form';
import { EntranceSchema, TypeEntranceSchema } from '../schema/entrance.schema';
import { zodResolver } from '@hookform/resolvers/zod';

const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
} = useForm<TypeEntranceSchema>({ resolver: zodResolver(EntranceSchema) });

export { register, handleSubmit, errors, isSubmitting };
