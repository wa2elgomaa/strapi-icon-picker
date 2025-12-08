import React from 'react';
import { type InputProps } from '@strapi/strapi/admin';
import * as ReactIcons from '../../all';
type IconPickerProps = InputProps & {
    labelAction?: React.ReactNode;
};
export type IReactIcon = keyof typeof ReactIcons;
declare const ReactIconsSelector: ({ hint, disabled, labelAction, label, name, required, ...props }: InputProps & IconPickerProps) => import("react/jsx-runtime").JSX.Element;
export default ReactIconsSelector;
