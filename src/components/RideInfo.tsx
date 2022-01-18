import { mockPersons } from 'App';
import { Person } from 'models/Person';
import { useContext } from 'react';
import { MyGlobalContext } from './globalContext';
import { RideInfoDto } from './RiderInfoDto';

interface RideInfoData extends RideInfoDto {
  author: Person;
  coRiders: Person[];
}

const author: Person = {
  firstName: 'Владимир ',
  secondName: 'Старостенков',
  image: 'none',
};

export function RideInfo() {
  const { selectedTrip, setTripItemSelected, deleteTripItemSelected } = useContext(MyGlobalContext);
  const mockData: RideInfoData[] = [
    {
      date: '20:32 21.12.21',
      name: 'ЖБИ - УРФУ',
      from: 'Сыромолотова 22',
      to: 'Мира 112',
      leaveTime: '20:38',
      currentCount: 2,
      maxCount: 4,
      pricePerPerson: 127,
      totalPrice: 381,
      author: author,
      coRiders: [mockPersons[0], mockPersons[1], mockPersons[2]],
    },
    {
      date: '20:32 21.12.21',
      name: 'ЖБИ - УРФУ',
      from: 'Сыромолотова 22',
      to: 'Мира 112',
      leaveTime: '20:38',
      currentCount: 1,
      maxCount: 4,
      pricePerPerson: 127,
      totalPrice: 381,
      author: author,
      coRiders: [mockPersons[2]],
    },
  ];
  let authorNumber = 0;
  if (selectedTrip?.id == 2) {
    authorNumber = 2;
  }

  return (
    <div className="ml-8 mr-16" style={{ height: '85%' }}>
      <div className="text-2xl font-bold mt-8 ">Информация о поездке</div>
      <div className="flex mt-4">
        <img src={mockPersons[authorNumber].image} alt="" className="h-16 w-16 rounded-full mr-4" />
        <div>
          <div className="text-lg font-bold">
            {mockPersons[authorNumber].firstName + ' ' + mockPersons[authorNumber].secondName}
          </div>
          <div className="text-lg ">Создатель поездки</div>
        </div>
      </div>
      <div className="mt-4 text-lg">
        Время создания поездки -{' '}
        {selectedTrip.created.getHours() + ':' + selectedTrip.departureTime.getMinutes()}
      </div>
      <div className="flex items-center mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          color={'#6F6CD9'}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="bg-indigo-600"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        <div className="flex text-base">
          <div className="ml-2">Откуда</div>
          <div className="ml-2 text-gray-400">{selectedTrip.departurePointAddress}</div>
        </div>
      </div>
      <div className="flex items-center mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          color="#FFAE03"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
        <div className="flex text-base">
          <div className="ml-2">Куда</div>
          <div className="ml-2 text-gray-400">{selectedTrip?.arrivalPointAddress}</div>
          {/* <div className="flex justify-end w-full">Показать на карте</div> */}
        </div>
      </div>
      <div className="grid grid-cols-3  gap-2 mt-4 text-base text-center">
        <div className="rounded-xl grid justify-items-center">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="">
              {selectedTrip.departureTime.getHours() +
                ':' +
                selectedTrip.departureTime.getMinutes()}
            </div>
          </div>
          <div className="">время</div>
        </div>
        <div className="rounded-xl grid justify-items-center">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="tracking-wide">
              {selectedTrip.userCount}/{selectedTrip.userLimit}
            </div>
          </div>

          <div>мест занято</div>
        </div>
        <div className="rounded-xl grid justify-items-center">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <div className="tracking-wide">
              {selectedTrip.overallCost / selectedTrip.userLimit}Р
            </div>
          </div>

          <div>на человека</div>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-lg">Информация о попутчиках</div>
        {mockData[authorNumber == 0 ? 0 : 1].coRiders.map((x, y) => {
          return (
            <div key={y} className="flex mt-2 items-center mb-2">
              <img src={x.image} alt="" className="h-10 w-10 rounded-full mr-2" />
              <div>
                <div className="text-base">{x.firstName + ' ' + x.secondName}</div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="w-full text-white text-xl flex justify-center py-2 rounded-xl mb-0"
        style={{ background: '#D8394C' }}
        onClick={() => {
          deleteTripItemSelected(selectedTrip?.id);
        }}
      >
        <div>Удалить поездку</div>
      </button>
    </div>
  );
}
