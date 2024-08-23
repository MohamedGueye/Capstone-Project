import { HttpErrorResponse } from "@angular/common/http";
import { AppError } from "../models/app-error.model";

export const getAccountOverlayAndBannerError = (
    error: HttpErrorResponse,
    type: Record<string, AppError>
) => {
    if(type[error?.status]) {
        return type[error?.status];
    }
    return type['httpError']
}