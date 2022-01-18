import { TripStatus } from './tripStatus';

export default interface tripItemVm {
  id: number;
  guid: string;
  created: Date;
  status: TripStatus;
  title: string;
  departureTime: Date;
  departurePointAddress: string;
  arrivalPointAddress: string;
  overallCost: number;
  userCount: number;
  userLimit: number;
}
