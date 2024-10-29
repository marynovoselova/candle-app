import React, { useState, memo } from 'react';
import { AdvancedChart } from 'react-tradingview-embed';

import { CryptoSymbol } from './types';
import './ChartComponent.css';

const ChartComponent: React.FC = () => {
    const [selectedSymbol, setSelectedSymbol] = useState<CryptoSymbol>(CryptoSymbol.Bitcoin);

    const handleSymbolChange = (symbol: CryptoSymbol) => {
        setSelectedSymbol(symbol);
    };

    return (
        <div className='chart-container'>
            <div className='chart-buttons'>
                <button className='chart-button' onClick={() => handleSymbolChange(CryptoSymbol.Bitcoin)}>Bitcoin</button>
                <button className='chart-button' onClick={() => handleSymbolChange(CryptoSymbol.Ethereum)}>Ethereum</button>
            </div>
            <AdvancedChart
                widgetProps={{
                    symbol: selectedSymbol,
                    theme: 'dark',
                    interval: 'D',
                    style: '1',
                    locale: 'en',
                    toolbar_bg: '#f1f3f6',
                    hide_side_toolbar: false,
                    save_image: false,
                    hide_top_toolbar: true,
                }}
                widgetPropsAny={{
                    width: '100%',
                    overrides: {
                        'mainSeriesProperties.candleStyle.upColor': '#4caf50',
                        'mainSeriesProperties.candleStyle.downColor': '#f44336',
                        'paneProperties.background': '#131722',
                        'paneProperties.vertGridProperties.color': '#363c4e',
                        'paneProperties.horzGridProperties.color': '#363c4e',
                        'scalesProperties.textColor': '#AAA',
                    },
                }}
            />
        </div>
    );
};

export default memo(ChartComponent);
