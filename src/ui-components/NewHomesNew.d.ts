/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HomeCardProps } from "./HomeCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewHomesNewOverridesProps = {
    NewHomesNew?: PrimitiveOverrideProps<CollectionProps>;
    HomeCard?: HomeCardProps;
} & EscapeHatchProps;
export declare type NewHomesNewProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => HomeCardProps;
} & {
    overrides?: NewHomesNewOverridesProps | undefined | null;
}>;
export default function NewHomesNew(props: NewHomesNewProps): React.ReactElement;
