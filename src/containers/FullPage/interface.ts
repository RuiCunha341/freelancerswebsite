import { ReactNode } from 'react';

export interface FullPageProps {
    children: ReactNode;
}

export const baseImagesToPreload: string[] = [
    'assets/banners/pixelatedTitleBanner.png',
    'assets/borders/dialogBox.png',
    'assets/borders/default_border.png',
    'assets/buttons/primarySquared.png',
    'assets/buttons/primary.png',
    'assets/buttons/secondary.png',
    'assets/cursor/cursor.png',
    'assets/loading/fire.png',
    'assets/sprites/guard_skill.png',
    'assets/sprites/melee_skill.png',
    'assets/sprites/potion_item.png',
    'assets/sprites/prayer_skill.png',
    'assets/sprites/slash_skill.png',
    'assets/sprites/sparkling_skill.png',
    'assets/icons/music.png',
    'assets/icons/noMusic.png',
    'assets/icons/next.png',
];
