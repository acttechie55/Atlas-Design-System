import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    /**
     * Variable to hold our setting.
     */
    public navExpanded: boolean;
    public navExpandedMobile: boolean;

    public toggle(): void {

        this.navExpanded = !this.navExpanded;
        console.log('hello')

    }

    public toggleMobile(): void {

        this.navExpandedMobile = !this.navExpandedMobile;
        console.log('hello')

    }
}
