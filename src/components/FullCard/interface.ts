import { BaseComponentInterface } from 'components/interface';

export interface IFullCardProps extends BaseComponentInterface {
    text: string;
    image: string;
    stars?: number;
    hideText?: boolean;
}
