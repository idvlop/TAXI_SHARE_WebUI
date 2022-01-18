import { Container, Grid } from '@mui/material';
import { MyGlobalContext } from 'components/globalContext';
import { Header } from 'components/Header';
import { ListTaxis } from 'components/ListOfTaxis';
import Login from 'components/Login';
import { Main } from 'components/main';
import { RideChat } from 'components/RideChat';
import { RideInfo } from 'components/RideInfo';
import { Person } from 'models/Person';
import tripItemVm from 'models/tripItemVm';
import { TripStatus } from 'models/tripStatus';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ApiWrapper from 'services/apiWrapper';

export const mockPersons: Person[] = [
  {
    firstName: 'Владимир',
    secondName: 'Старостенков',
    image: 'https://www.fakepersongenerator.com/Face/male/male2015108361367719.jpg',
  },
  {
    firstName: 'Елена',
    secondName: 'Дарцева',
    image: 'https://www.fakepersongenerator.com/Face/female/female20161025507904724.jpg',
  },
  {
    firstName: 'Денис',
    secondName: 'Смирнов',
    image: 'https://www.fakepersongenerator.com/Face/male/male20161086288760193.jpg',
  },
  {
    firstName: 'Петр',
    secondName: 'Седов',
    image: 'https://www.fakepersongenerator.com/Face/male/male1084821665802.jpg',
  },
  {
    firstName: 'Елена',
    secondName: 'Дерябина',
    image: 'https://www.fakepersongenerator.com/Face/female/female20161025679844299.jpg',
  },
];

export const mockListTaxiTrips: tripItemVm[] = /* await ApiWrapper.getTrips();  */ [
  {
    id: 1,
    guid: 'random guid',
    created: new Date(2020, 10, 10),
    status: TripStatus.Opened,
    title: 'ЖБИ-УРФУ',
    departureTime: new Date(2020, 10, 10),
    departurePointAddress: 'Сыромолотова 22',
    arrivalPointAddress: 'Мира 112',
    overallCost: 381,
    userCount: 2,
    userLimit: 4,
  },
  {
    id: 2,
    guid: 'random guid',
    created: new Date(2020, 10, 10),
    status: TripStatus.Opened,
    title: 'УрФУ-ЖБИ',
    departureTime: new Date(2020, 10, 11),
    departurePointAddress: 'Мира 112',
    arrivalPointAddress: 'Сыромолотова 22',
    overallCost: 444,
    userCount: 1,
    userLimit: 4,
  },
];

function App() {
  //TODO: тоже самое?

  const [allTrips, setAllTrips] = useState<tripItemVm[]>(mockListTaxiTrips);
  const [selectedTrip, setSelectedTrip] = useState<tripItemVm>();

  const updateTrip = (x: tripItemVm) => {
    if (x.id === -1) {
      setSelectedTrip(undefined);
    } else {
      setSelectedTrip(x);
    }
  };

  const deleteTrip = (x: number) => {
    setAllTrips(allTrips.filter((y) => y.id !== x));
    setSelectedTrip();
  };

  return (
    <MyGlobalContext.Provider
      value={{
        selectedTrip: selectedTrip,
        setTripItemSelected: updateTrip,
        deleteTripItemSelected: deleteTrip,
        allTrips: allTrips,
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="main" element={<Main />} />
      </Routes>
    </MyGlobalContext.Provider>
  );
}

export default App;
