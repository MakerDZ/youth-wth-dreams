'use client';
import { Button } from '@nextui-org/react';

export default function DecisionButton(): JSX.Element {
    return (
        <div className="h-auto space-x-2 flex flex-row">
            <Button
                type="submit"
                className={`font-bold w-full py-1 `}
                color="primary"
            >
                Approve
            </Button>
            <Button
                type="submit"
                className={`font-bold w-full py-1 bg-[#F5F6F7] text-black border-[1px] border-[#E5E7EA]`}
            >
                Reject
            </Button>
        </div>
    );
}
