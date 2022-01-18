export interface RideInfoDto {
  date: string;
  name: string;
  from: string;
  to: string;
  leaveTime: string;
  currentCount: number;
  maxCount: number;
  totalPrice: number;
  pricePerPerson: number;
}
