import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { PointOfInterestCard } from '../../components/PointOfInterestCard';

describe('PointOfInterestCard', () => {
  it('renders the point of interest details correctly', () => {
    const pointOfInterest = {
      id: '1',
      name: 'Test Point of Interest',
      kinds: 'museum',
      rate: "3"
    };

    render(<PointOfInterestCard {...pointOfInterest} />);

    expect(screen.getByText('Test Point of Interest')).toBeInTheDocument();
    expect(screen.getByText('museum')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});