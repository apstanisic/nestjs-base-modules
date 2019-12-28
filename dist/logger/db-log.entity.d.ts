import { BaseEntity } from '../entities/base.entity';
import { BasicUserInfo, IUser } from '../entities/user.interface';
import { UUID, WithId } from '../types';
export declare class DbLog<T extends WithId = any> extends BaseEntity {
    action: 'update' | 'delete' | 'create' | string;
    reason?: string;
    executedBy: BasicUserInfo | IUser;
    executedById: UUID;
    initialValue?: T;
    changes: any;
    entityId: UUID;
    domainId?: UUID;
    private _newValue?;
    set newValue(value: T | undefined);
    _prepare(): void;
    throwError(): void;
}
