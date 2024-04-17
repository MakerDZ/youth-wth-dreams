import { Spinner } from '@nextui-org/spinner';

export default function Loading() {
    return (
        <div className="w-full h-screen flex flex-col justify-center">
            <Spinner className="mx-auto" label="Loading..." color="warning" />
        </div>
    );
}
