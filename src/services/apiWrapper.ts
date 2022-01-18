import axios from 'axios';
import newTripRequest from 'models/newTripRequest';
import tripItemVm from 'models/tripItemVm';
import { Endpoints } from 'static/endpoints';

const axiosInstance = axios.create({
  baseURL: `${process.env.TEST_ENV}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default class ApiWrapper {
  public static async getTrips(): Promise<tripItemVm[]> {
    return await axiosInstance
      .get(Endpoints.GetTripsAsync)
      .then((res): tripItemVm[] => {
        return res.data;
      })
      .catch((e) => {
        throw { error: e };
      });
  }

  public static async getTripDetails(guid: string): Promise<tripItemVm> {
    return await axiosInstance
      .get(Endpoints.GetTripDetailsAsync + guid)
      .then((res): tripItemVm => {
        return res.data;
      })
      .catch((e) => {
        throw { error: e };
      });
  }

  public static async archiveTrip(guid: string): Promise<any> {
    return await axiosInstance
      .post(Endpoints.ArchiveTripAsync + guid + '/remove')
      .then((res): any => {
        return res.data;
      })
      .catch((e) => {
        throw { error: e };
      });
  }

  public static async createTrip(tripRequest: newTripRequest): Promise<any> {
    return await axiosInstance
      .post(Endpoints.CreateTripAsync, tripRequest)
      .then((res): any => {
        return res.data;
      })
      .catch((e) => {
        throw { error: e };
      });
  }
}
