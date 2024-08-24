import { ACCOUNT_ERROR_TYPES } from "../constants/error-types.constants";
import { APIError } from "../models/api-error.model";
import * as util from './account-error.utils';

describe('Account Error Utils', () => {
    it('should return unknown error overlay when error has unmapped status code', () => {
        const error: APIError = {
            status: 500,
            error: { message: '' },
        };
        const accountResult = util.getAccountOverlayAndBannerError(
            error,
            ACCOUNT_ERROR_TYPES
        );
        expect(accountResult).toEqual(ACCOUNT_ERROR_TYPES['500']);
    });

    it('should return unknown error overlay when error has unmapped status code', () => {
        const error: APIError = {
            status: 401,
            error: { message: '' },
        };
        const accountResult = util.getAccountOverlayAndBannerError(
            error,
            ACCOUNT_ERROR_TYPES
        );
        expect(accountResult).toEqual(ACCOUNT_ERROR_TYPES['httpError']);
    });
})