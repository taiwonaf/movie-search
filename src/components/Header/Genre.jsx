import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";

const initialGenre = [{ id: 0, name: "Genre" }];

const Genre = ({ setQuery }) => {
  const [selected, setSelected] = useState(initialGenre[0]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    axios.get(process.env.REACT_APP_GENRE_URL).then((res) => {
      setGenres(res.data.genres);
    });
  }, []);
  useEffect(() => {
    setQuery((prev) => ({ ...prev, genre: selected.id }));
  }, [selected]);
  return (
    <div className="md:max-w-[200px] w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate text-[#121212]">
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="absolute mt-[10px] w-full overflow-scroll rounded-md bg-white p-1 text-base shadow-lg ring-1 ring-black z-[99999] ring-opacity-5 focus:outline-none sm:text-sm">
              {genres.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none px-[15px] py-[10px] ${
                      active ? "bg-[#121212] text-white-900" : "text-[#121212]"
                    }`
                  }
                  value={person}>
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}>
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Genre;
