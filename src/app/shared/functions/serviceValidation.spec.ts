import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {handleError} from "./serviceValidation";

describe('fn handleError', () => {


    it('should return be created', () => {
        expect(handleError).toBeTruthy();
    });
    it('should send error status acording to enviroment', () => {
        const mockError: HttpErrorResponse = new HttpErrorResponse({status: 0, statusText: 'error'});

            const mockErrorMsg = throwError('Se ha producido un error 0 en el servidor');
            handleError(mockError).subscribe((value) => {
                expect(value).toBe(mockErrorMsg);
            });

    });
    it('should send error status 404', () => {
        const mockError: HttpErrorResponse = new HttpErrorResponse({status: 404, statusText: 'error'});

            const mockErrorMsg = throwError('Se ha producido un error 404 en el servidor');
            handleError(mockError).subscribe((value) => {
                expect(value).toBe(mockErrorMsg);
            });

    });
});
