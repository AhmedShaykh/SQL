"use client";
import { FC, useEffect, useState } from 'react';
import Button from './button';
import Image from './image';
import { useTheme } from 'next-themes';
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';

const Home: FC = () => {

    const { systemTheme, theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <main className='py-4 px-2'>
            <div className='flex justify-around'>
                <h1 className='text-4xl font-semibold'>
                    Next.JS 13 With Tailwind CSS
                </h1>

                {currentTheme === 'dark' ? (
                    <button
                        className="bg-black-700 hover:bg-black rounded-md border-purple-400 border-2 p-4"
                        onClick={() => setTheme('light')}
                    >
                        <BsMoonFill />
                    </button>
                ) : (
                    <button
                        className="bg-gray-100 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-300"
                        onClick={() => setTheme('dark')}
                    >
                        <BsFillSunFill />
                    </button>
                )}
            </div>

            <Button btn="Click Me" />
            <Image />
        </main>
    )
};

export default Home;