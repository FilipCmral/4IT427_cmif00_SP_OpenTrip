import { describe, it, expect } from 'vitest';
import { fetchPointsOfInterest } from '../../api/fetchPointsOfInterest';


describe('fetchPointsOfInterest', async () => {
  const praguePOIs = await fetchPointsOfInterest("Prague");
  it('Should return an array of points of interest for a valid city name', () => {
    expect(Array.isArray(praguePOIs)).toBe(true);
    expect(praguePOIs.length).toBeGreaterThan(0);
    expect(praguePOIs[0]).toHaveProperty('xid');
    expect(praguePOIs[0]).toHaveProperty('name');
    expect(praguePOIs[0]).toHaveProperty('kinds');
    expect(praguePOIs[0]).toHaveProperty('rate');
  });

  it('Should throw an error for an invalid city name', async () => {
    await expect(fetchPointsOfInterest("InvalidCityNameThatDoesNotExist")).rejects.toThrow(
      'Failed to fetch points of interest for city: InvalidCityNameThatDoesNotExist'
    );
  });
});