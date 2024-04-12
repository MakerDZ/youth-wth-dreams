import { entrance } from '../../services/entrance.service';
import { identity } from '../../services/identity.service';

export const isApprovedUser = async (userId: string) => {
    const Identity = await identity.getByUserId(userId);
    if (Identity) {
        const Entrance = await entrance.get(Identity._id);
        if (Entrance?.approved) {
            return true;
        } else {
            return false;
        }
    }
    return false;
};
