import tripItemVm from 'models/tripItemVm';
import { TripStatus } from 'models/tripStatus';
import React, { useContext, createContext } from 'react';

export type GlobalContext = {
  selectedTrip: tripItemVm | undefined;
  allTrips: tripItemVm[] | undefined;
  setTripItemSelected: (tripItem: tripItemVm) => void;
  deleteTripItemSelected: (id: number) => void;
};

export const MyGlobalContext = createContext<GlobalContext>({
  selectedTrip: {} as tripItemVm,
  allTrips: [] as tripItemVm[],
  setTripItemSelected: () => {},
  deleteTripItemSelected: () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);
