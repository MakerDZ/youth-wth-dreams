'use client';
import { Button } from '@nextui-org/react';
import { approvedAction, rejectedAction } from '../../actions/approval.action';
import { useAction } from 'next-safe-action/hooks';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface DecisionButton {
    chatId: string;
    accountId: string;
}

export const DecisionButton: React.FC<DecisionButton> = ({
    chatId,
    accountId,
}): JSX.Element => {
    const router = useRouter();
    const approved = useAction(approvedAction);
    const rejected = useAction(rejectedAction);
    useEffect(() => {
        if (approved.result.data == true || rejected.result.data == true) {
            toast.success('Action completed successfully.');
            router.refresh();
        }
    }, [approved.result, rejected.result]);

    if (approved.result.data == true || rejected.result.data == true) {
        return <></>;
    }

    return (
        <div className="h-auto space-x-2 flex flex-row">
            <Button
                type="submit"
                disabled={approved.status == 'executing'}
                className={`font-bold w-full py-1 ${approved.status == 'executing' ? 'opacity-60' : ''}`}
                color="primary"
                onClick={() => {
                    approved.execute({ chatId, accountId });
                }}
            >
                Approve
            </Button>
            <Button
                type="submit"
                disabled={approved.status == 'executing'}
                className={`font-bold w-full py-1 bg-[#F5F6F7] text-black border-[1px] border-[#E5E7EA] ${approved.status == 'executing' ? 'opacity-60' : ''}`}
                onClick={() => {
                    rejected.execute({ chatId, accountId });
                }}
            >
                Reject
            </Button>
        </div>
    );
};
