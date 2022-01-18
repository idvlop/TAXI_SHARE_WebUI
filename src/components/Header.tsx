import { Person } from '../models/Person';
import './header.css';
export function Header({ person }: { person: Person } /* { title }: { title: string } */) {
  return (
    <div
      style={{ height: '98px', boxShadow: '3px 3px 19px -1px rgba(111, 108, 217, 0.5)' }}
      className="flex mx-auto justify-between items-center bg-white"
    >
      <div
        className="title ml-16 mt-4 font-normal text-5xl text-purple-600 self-start "
        style={{ fontFamily: 'Bauhaus' }}
      >
        Share Taxi
      </div>
      <div className="justify-end flex">
        <div className="flex mr-20 items-center mt-2 mb-2">
          <img src={person.image} alt="" className="h-20 w-20 rounded-full mr-4" />
          <div className="text-2xl row-span-2 flex-wrap">
            <div>{person.firstName}</div>
            <div>{person.secondName}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
