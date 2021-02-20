import { InfectadosPorRegiao } from './infectados-por-regiao.interfaces';

export interface Dados {
    version: number,
    country: string,
    lastUpdatedAtApify: string,
    historyData: string,
    readMe: string,
    tested: string,
    recovered: string,
    lastUpdatedAtSource: string,
    infected: number,
    deceased: number,
    infectedByRegion: Array<InfectadosPorRegiao>,
}