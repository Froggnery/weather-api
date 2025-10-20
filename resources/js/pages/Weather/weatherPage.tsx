import { weather } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import axios from 'axios';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Weather',
        href: weather().url,
    },
];

export default function Weather() {
    const [data, setData] = useState();
    const [location, setlocation] = useState('');
    const searchLocation = (event: { key: string }) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data);
                console.log(response.data);
            });
            setlocation('');
        }
    };
    const API_KEY = 'd0e2a10085bc9611e4ac4c6b4ad60aa9';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

    return (
        <div className="relative h-full w-full bg-gradient-to-b from-blue-300 to-white py-2">
            <div className="flex p-4 text-center justify-center">
                <input
                    type="text"
                    className="w-[1000px] bg-white-600/100  rounded-3xl border-1 px-6 py-3 text-lg shadow-md placeholder:text-gray-400 focus:outline-none"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setlocation(e.target.value)}
                    onKeyDownCapture={searchLocation}
                />
            </div>
            <div className="grid h-full w-full grid-cols-4 gap-2 rounded-lg bg-white p-2">
                <div className="flex h-50 rounded-2xl bg-blue-300"></div>
                <div className="flex h-50 rounded-2xl bg-blue-300"></div>
                <div className="flex h-50 rounded-2xl bg-blue-300"></div>
                <div className="flex h-50 rounded-2xl bg-blue-300"></div>
                <div className="flex h-50 rounded-2xl bg-blue-300"></div>
                <div className="flex h-50 rounded-2xl bg-blue-300"></div>
            </div>
            <div>
                <button>Test Button</button>
            </div>
        </div>
    );
}
