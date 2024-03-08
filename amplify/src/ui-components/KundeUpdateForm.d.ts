/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type KundeUpdateFormInputValues = {
    navn?: string;
    epost?: string;
    adresse?: string;
    postnr?: string;
    poststed?: string;
    telefon?: string;
};
export declare type KundeUpdateFormValidationValues = {
    navn?: ValidationFunction<string>;
    epost?: ValidationFunction<string>;
    adresse?: ValidationFunction<string>;
    postnr?: ValidationFunction<string>;
    poststed?: ValidationFunction<string>;
    telefon?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KundeUpdateFormOverridesProps = {
    KundeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    navn?: PrimitiveOverrideProps<TextFieldProps>;
    epost?: PrimitiveOverrideProps<TextFieldProps>;
    adresse?: PrimitiveOverrideProps<TextFieldProps>;
    postnr?: PrimitiveOverrideProps<TextFieldProps>;
    poststed?: PrimitiveOverrideProps<TextFieldProps>;
    telefon?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type KundeUpdateFormProps = React.PropsWithChildren<{
    overrides?: KundeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    kunde?: any;
    onSubmit?: (fields: KundeUpdateFormInputValues) => KundeUpdateFormInputValues;
    onSuccess?: (fields: KundeUpdateFormInputValues) => void;
    onError?: (fields: KundeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: KundeUpdateFormInputValues) => KundeUpdateFormInputValues;
    onValidate?: KundeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function KundeUpdateForm(props: KundeUpdateFormProps): React.ReactElement;
