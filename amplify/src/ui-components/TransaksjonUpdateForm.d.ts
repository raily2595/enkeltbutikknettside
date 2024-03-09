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
export declare type TransaksjonUpdateFormInputValues = {
    betalingsmetode?: string;
    betalingsstatus?: string;
    total?: number;
};
export declare type TransaksjonUpdateFormValidationValues = {
    betalingsmetode?: ValidationFunction<string>;
    betalingsstatus?: ValidationFunction<string>;
    total?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransaksjonUpdateFormOverridesProps = {
    TransaksjonUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    betalingsmetode?: PrimitiveOverrideProps<TextFieldProps>;
    betalingsstatus?: PrimitiveOverrideProps<TextFieldProps>;
    total?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TransaksjonUpdateFormProps = React.PropsWithChildren<{
    overrides?: TransaksjonUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    transaksjon?: any;
    onSubmit?: (fields: TransaksjonUpdateFormInputValues) => TransaksjonUpdateFormInputValues;
    onSuccess?: (fields: TransaksjonUpdateFormInputValues) => void;
    onError?: (fields: TransaksjonUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TransaksjonUpdateFormInputValues) => TransaksjonUpdateFormInputValues;
    onValidate?: TransaksjonUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TransaksjonUpdateForm(props: TransaksjonUpdateFormProps): React.ReactElement;
