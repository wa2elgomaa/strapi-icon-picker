import React from 'react';
export interface IIconLibraryComponent {
    icons: string[];
    onSelectIcon: (newIcon: string) => void;
}
export declare const IconLibraryComponent: React.FC<IIconLibraryComponent>;
