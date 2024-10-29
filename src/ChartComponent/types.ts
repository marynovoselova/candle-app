export interface CandleChartData {
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
}

export type ChartResponse = Array<[
    number, string, string, string, string, string, number, string, number, string, string, string
]>;

export enum CryptoSymbol {
    Bitcoin = 'BTCUSDT',
    Ethereum = 'ETHUSDT',
}
