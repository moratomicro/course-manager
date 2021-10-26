import { Component } from "@angular/core";
import { Package } from "./package";
import { PackageService } from "./package.service";

@Component ({
    templateUrl: './package-list.component.html'
})
export class PackageListComponent {

    filteredPackages: Package[] = [];

    _packages: Package[] = [];

    _filterBy!: string;

    constructor(private packageService: PackageService) { }

    ngOnInit(): void {
        this._packages = this.packageService.retrieveAll();      
        this.filteredPackages = this._packages;  
    }
    
    set filter(value: string) {
        this._filterBy = value;

        this.filteredPackages = this._packages.filter((packages: Package) => packages.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}