import { HttpErrorResponse } from "@angular/common/http";
import { AppError } from "../models/app-error.model";
import { APIError } from "../models/api-error.model";

export const getAccountOverlayAndBannerError = (
    error: HttpErrorResponse | APIError,
    type: Record<string, AppError>
) => {
    if(type[error?.status]) {
        return type[error?.status];
    }
    return type['httpError'];
}