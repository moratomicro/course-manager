import { Injectable } from "@angular/core";
import { Package } from "./package";

@Injectable ({
    providedIn: 'root'
})
export class PackageService {
    retrieveAll(): Package[] {
        return PACKAGES;
    }
}

var PACKAGES: Package[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'November 2, 2021',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'November 4, 2021',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'November 8, 2021',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'November 16, 2021',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'November 25, 2021',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/animations.png',
    },
    {
        id: 6,
        name: 'Angular: Animations + Router',
        releaseDate: 'November 25, 2021',
        description: 'Angular: Animations - Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation. \nAngular: Router - Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 160,
        code: 'ONHPWY-10476',
        rating: 5,
        price: 100.00,
        imageUrl: '/assets/images/animations.png',
    }
];