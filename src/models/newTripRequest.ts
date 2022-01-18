export default interface newTripRequest {
  title: string;
  departureTime: Date;
  departurePointAddress: string;
  arrivalPointAddress: string;
  overallCost: number;
  userCount: number;
  userLimit: number;
}
