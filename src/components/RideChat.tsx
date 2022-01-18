import { Stack, Box, Grid } from '@mui/material';
import { mockPersons } from 'App';
import { useContext } from 'react';
import { message } from '../models/message';
import { MyGlobalContext } from './globalContext';

//TODO: по идее надо сделать словарь с id со всеми поездками и просто при клике сетать сюда selectedTrip, после чего заполучать список из этого словаря

export function RideChat() {
  const mockData: message[][] = [
    [
      {
        type: 'system',
        user: mockPersons[0].firstName + ' ' + mockPersons[0].secondName,
        event: 'created',
        date: '',
        content: '',
        img: mockPersons[0].image,
      },
      {
        type: 'system',
        user: mockPersons[1].firstName + ' ' + mockPersons[1].secondName,
        event: 'joined',
        date: '',
        content: '',
        img: mockPersons[1].image,
      },
      {
        type: 'system',
        user: mockPersons[2].firstName + ' ' + mockPersons[2].secondName,
        event: 'joined',
        date: '',
        content: '',
        img: mockPersons[2].image,
      },
      {
        type: 'message',
        user: mockPersons[1].firstName + ' ' + mockPersons[1].secondName,
        event: 'message',
        date: '20:32',
        content: 'Во сколько планируешь выезжать?',
        img: mockPersons[1].image,
      },
      {
        type: 'message',
        user: mockPersons[1].firstName + ' ' + mockPersons[1].secondName,
        event: 'message',
        date: '20:37',
        content: 'Почему игнор?',
        img: mockPersons[1].image,
      },
      {
        type: 'message',
        user: mockPersons[0].firstName + ' ' + mockPersons[0].secondName,
        event: 'message',
        date: '20:38',
        content: 'Сорре, давай через полчаса тогда',
        img: mockPersons[0].image,
      },
      {
        type: 'message',
        user: mockPersons[0].firstName + ' ' + mockPersons[0].secondName,
        event: 'message',
        date: '20:38',
        content: 'У центрального входа',
        img: mockPersons[0].image,
      },
    ],
    [
      {
        type: 'system',
        user: mockPersons[2].firstName + ' ' + mockPersons[2].secondName,
        event: 'created',
        date: '',
        content: '',
        img: mockPersons[0].image,
      },
    ],
  ];

  const { selectedTrip, setTripItemSelected, deleteTripItemSelected } = useContext(MyGlobalContext);

  return (
    <div className="ml-16 mt-8" style={{ height: '85%' }}>
      <div className="text-2xl font-bold mb-4 mt-1">С меги на ботанику</div>

      <Box
        className="p-4 rounded-lg"
        style={{
          background: '#FAFAFE',
          border: '1px solid rgba(111, 108, 217, 0.1)',

          boxShadow: '0px 1px 15px rgba(0, 0, 0, 0.1)',
          borderRadius: '16px',
          height: '100%',
        }}
      >
        <div className="text-lg  font-bold mb-1 ml-6">Чат поездки</div>
        <div
          className="mx-4 rounded-lg"
          style={{
            border: '2px solid #6F6CD9',
          }}
        />
        <div
          className="grid content-end"
          style={{ fontFamily: 'Verdana', height: '90%', maxHeight: '90%' }}
        >
          {selectedTrip &&
            mockData.at(selectedTrip.id - 1)?.map((x, y) => {
              const prevEl = mockData?.at(selectedTrip.id - 1)[y - 1];
              const nextEl = mockData?.at(selectedTrip.id - 1)[y + 1];
              return (
                <div className="mb-2" key={y}>
                  {x.type == 'system' ? (
                    <div className="flex justify-center text-sm font-bold ">
                      {x.event == 'created' ? (
                        <div className="text-indigo-500">{x.user + ' создал поездку'}</div>
                      ) : (
                        <></>
                      )}
                      {x.event == 'joined' ? (
                        <div className="text-indigo-500">{x.user + ' тоже едет!'}</div>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <div className="mt-3 flex items-center ">
                      {mockData.at(selectedTrip.id - 1)?.length - 1 == y ||
                      nextEl.user != x.user ? (
                        <img src={x.img} alt="" className="h-7 w-7 rounded-full mr-2" />
                      ) : (
                        <div className="h-7 w-7 mr-2"></div>
                      )}
                      <div className="px-4 rounded-xl" style={{ background: '#DEDDF2' }}>
                        {prevEl.type == 'system' || x.user != prevEl.user ? (
                          <div className="font-base font-bold">{x.user}</div>
                        ) : (
                          <></>
                        )}
                        <div className="my-1.5 text-sm">{x.content}</div>
                        {prevEl.type == 'system' || x.user != prevEl.user ? (
                          <div
                            className="text-xs flex justify-end w-full"
                            style={{ color: '#7C7C7C' }}
                          >
                            {x.date}
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </Box>
    </div>
  );
}
