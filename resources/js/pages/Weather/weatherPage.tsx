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
            setlocation("");
        }
    };
    const API_KEY = 'd0e2a10085bc9611e4ac4c6b4ad60aa9';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

    return (
        <div className="relative h-full w-full bg-gradient-to-b from-blue-300 to-white py-2">
            <div className="p-4 text-center">
                <input
                    type="text"
                    className="bg-white-600/100 w-[700px] rounded-3xl border-1 px-6 py-3 text-lg shadow-md placeholder:text-gray-400 focus:outline-none"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setlocation(e.target.value)}
                    onKeyDownCapture={searchLocation}
                />
            </div>
             <div className='w-[500px] h-[500px] border-2 rounded-lg a bg-white shadow-lg mx-auto mt-10 relattive'> 
     
            </div>
        </div>
        
    );
}
