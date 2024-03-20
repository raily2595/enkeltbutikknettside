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
export declare type TransaksjonCreateFormInputValues = {
    betalingsmetode?: string;
    betalingsstatus?: string;
    total?: number;
};
export declare type TransaksjonCreateFormValidationValues = {
    betalingsmetode?: ValidationFunction<string>;
    betalingsstatus?: ValidationFunction<string>;
    total?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransaksjonCreateFormOverridesProps = {
    TransaksjonCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    betalingsmetode?: PrimitiveOverrideProps<TextFieldProps>;
    betalingsstatus?: PrimitiveOverrideProps<TextFieldProps>;
    total?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TransaksjonCreateFormProps = React.PropsWithChildren<{
    overrides?: TransaksjonCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TransaksjonCreateFormInputValues) => TransaksjonCreateFormInputValues;
    onSuccess?: (fields: TransaksjonCreateFormInputValues) => void;
    onError?: (fields: TransaksjonCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TransaksjonCreateFormInputValues) => TransaksjonCreateFormInputValues;
    onValidate?: TransaksjonCreateFormValidationValues;
} & React.CSSProperties>;
export default function TransaksjonCreateForm(props: TransaksjonCreateFormProps): React.ReactElement;
