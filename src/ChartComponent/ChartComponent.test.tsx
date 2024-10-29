import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChartComponent from './ChartComponent';
import { CryptoSymbol } from './types';

jest.mock('react-tradingview-embed', () => ({
    AdvancedChart: ({ widgetProps }: { widgetProps: { symbol: string } }) => (
        <div>{widgetProps.symbol}</div>
    ),
}));

describe('ChartComponent', () => {
    test('renders correctly with initial values', () => {
        render(<ChartComponent />);
        expect(screen.getByText(/Bitcoin/i)).toBeInTheDocument();
        expect(screen.getByText(/Ethereum/i)).toBeInTheDocument();
        expect(screen.getByText(CryptoSymbol.Bitcoin)).toBeInTheDocument();
    });

    test('changes the chart symbol when buttons are clicked', () => {
        render(<ChartComponent />);
        fireEvent.click(screen.getByText(/Ethereum/i));
        expect(screen.getByText(CryptoSymbol.Ethereum)).toBeInTheDocument();
    });
});
