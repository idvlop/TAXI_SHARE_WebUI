import { Stack, Box } from '@mui/material';
import tripItemVm from 'models/tripItemVm';

export default function SelectedCard({ item }: { item: tripItemVm }) {
  return (
    <Stack className="flex text-white mx-8 my-2">
      <Box className="flex justify-between items-center w-full text-lg">
        <div className="self-start">{item.title}</div>
        <div className="justify-end font-bold text-sm">
          {item.created.getHours() +
            ':' +
            item.created.getMinutes() +
            ', ' +
            item.created.getDate() +
            '.' +
            item.created.getMonth() +
            '.' +
            item.created.getFullYear()}
        </div>
      </Box>
      <div className="flex items-center mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          color={'#FFFFFF'}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>

        <div className="ml-2">{item.departurePointAddress}</div>
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
        <div className="ml-2">{item.arrivalPointAddress}</div>
      </div>
      <Box className="flex justify-start space-x-3 items-center w-full text-lg mt-2">
        <div className="flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            color={'#FFFFFF'}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="ml-2 ">
            {item.departureTime.getHours() + ':' + item.departureTime.getMinutes() + ' выезд'}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            color={'#FFFFFF'}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="ml-2 tracking-wide">
            {item.userCount}/{item.userLimit}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            color={'#FFFFFF'}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <div className="ml-2 tracking-wide">
            {item.overallCost}/{item.overallCost / item.userLimit}
          </div>
        </div>
      </Box>
    </Stack>
  );
}
