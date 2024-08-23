import { AppError } from "../models/app-error.model";

export const HINT_NO_ACCOUNT_FOUND: AppError = {
    class: 'ni ni-sm',
    title: 'No account found',
    overlayDescription: undefined,
    bannerMessage: undefined,
}

export const HINT_NO_BENE_FOUND: AppError = {
    class: 'ni ni-sm',
    title: 'No beneficiaries found',
    overlayDescription: undefined,
    bannerMessage: undefined,
}

export const BENE_ERROR_MESSAGE = 'There was a problem getting beneficiary information';

export const HINT_BENE_UNKNOWN_ERROR: AppError = {
    bannerMessage: BENE_ERROR_MESSAGE,
    class: 'alert alert-icon text-danger my-2 ml-n3'
}

export const BENE_ERROR_TYPES: Record<string, AppError> = {
    httpError: HINT_BENE_UNKNOWN_ERROR,
    '500': HINT_NO_BENE_FOUND,
}

export const ACCOUNT_ERROR_TYPES: Record<string, AppError> = {
    '500': HINT_NO_ACCOUNT_FOUND
}