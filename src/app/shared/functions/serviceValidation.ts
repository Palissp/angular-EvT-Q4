import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';


export function handleError(error: HttpErrorResponse) {
        return throwError(`Se ha producido un error ${error.status} en el servidor`);
}
