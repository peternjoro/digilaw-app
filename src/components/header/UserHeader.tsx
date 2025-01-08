import Link from 'next/link';
import Image from 'next/image';
import { memo } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { IconChevronDown, IconSearch } from '@/app/_ui/icons';
import StaticData from '@/lib/data';

const SearchFor = StaticData.search_for;

//*Header for the protected user pages - only reload this component when its state changes
const UserHeader = memo(function UserHeader() {
    return (
        <div className="flex flex-col w-full bg-white border-b border-gray-300">
            <div className="flex mx-5 md:mx-12">
                <div className="flex w-full py-6 justify-between">
                    <div className="flex space-x-10 items-center">
                        <Link href={'/'} className="outline outline-black rounded outline-1 text-sm px-3 py-2">
                            Settings
                        </Link>
                        <div className="hidden md:flex space-x-2">
                            <select
                                id='search-for'
                                name='searchFor'
                                className="block cursor-pointer rounded-md text-[13px] outline-1 outline-black h-10 focus:border-0"
                                defaultValue=""
                                required
                                >
                                    <>
                                        <option value="" disabled>Search For</option>
                                        {SearchFor.map((asset,index) => {
                                            const key = asset.replace(/ /g,"_");
                                            return <option value={key} key={index+key}>{asset}</option>
                                        })}
                                    </>
                            </select>
                            <div className="relative">
                                <input
                                    id='search-text'
                                    name='searchText'
                                    className="peer block rounded-md py-[9px] pl-2 pr-9 text-[13px] outline-1 outline-black h-10 focus:border-0"
                                    placeholder='Search files, clients ...'
                                    />
                                <IconSearch className="absolute right-3 top-1/2 h-[19px] w-[19px] -translate-y-1/2 cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div className="rounded-full bg-slate-400 p-2">
                            <Image alt='User' src="/images/imgholder.png" width={10} height={10} style={{ height:'auto', width:'auto' }}/>
                        </div>
                        <Popover className="relative">
                            <PopoverButton className="focus-visible:outline-none">
                                <IconChevronDown size={18}/>
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                anchor={{ to: 'right' }}
                                className="flex flex-col z-50 rounded-md bg-whiteSnow mt-14 shadow-md transition duration-200 ease-in-out"
                                >
                                <div className="flex flex-col p-3 text-sm space-y-2">
                                    <div className="">
                                        <a href="/profile">My Profile</a>
                                    </div>
                                    <div className="">
                                        <a href="/engagement">Engagement</a>
                                    </div>
                                    <div className="">
                                        <a href="/security">Security</a>
                                    </div>
                                </div>
                                <hr/>
                                <div className="flex flex-col p-3 text-sm">
                                    <div className=''>
                                        <a href="/signout">Signout</a>
                                    </div>
                                </div>
                            </PopoverPanel>
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default UserHeader;