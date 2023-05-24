'use client'
import React from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import { FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';

const RADIO_ITEMS = ['Andy', 'Benoît', 'Luis'];
const CHECK_ITEMS = ['Always Show Bookmarks Bar', 'Always Show Full URLs'];

export function NavigationBarCategories() {
    const [checkedSelection, setCheckedSelection] = React.useState([CHECK_ITEMS[1]]);
    const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

    return (
        <Menubar.Root className="flex max-h-[69px] relative p-4 justify-center bg-background-50 border-y-[1px] border-border-100 border-solid">
            <div className='flex flex-1 max-w-[1200px] text-base gap-4'>
                <Menubar.Menu>
                    <Menubar.Trigger className="p-2 outline-none select-none text-detailsPrimary-100 font-medium rounded-md flex items-center justify-between gap-2 bg-detailsPrimary-100/5 data-[highlighted]:bg-detailsPrimary-100/5 data-[state=open]:bg-detailsPrimary-100 data-[state=open]:text-background-50 group">
                        <div className='text-detailsSecondary-100 group:text-background-50 group-data-[state=open]:text-background-50 '>Categoria 1</div>
                        <FiChevronDown size={18} className='mt-[1px]'/>
                    </Menubar.Trigger>
                    <Menubar.Portal>
                        <Menubar.Content
                            className="min-w-[220px] bg-background-50 rounded-md p-2 shadow-lg [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                            align="start"
                            sideOffset={16}
                            alignOffset={-3}
                        >
                            <Menubar.Item className="group text-base leading-none flex items-center p-2 relative select-none outline-none hover:bg-detailsPrimary-100/10 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                <Link href='/'>
                                    Teste
                                </Link>
                            </Menubar.Item>
                        </Menubar.Content>
                    </Menubar.Portal>
                </Menubar.Menu>

                <Menubar.Menu>
                    <Menubar.Trigger className="p-2 outline-none select-none text-detailsPrimary-100 font-medium rounded-md flex items-center justify-between gap-2 bg-detailsPrimary-100/5 data-[highlighted]:bg-detailsPrimary-100/5 data-[state=open]:bg-detailsPrimary-100 data-[state=open]:text-background-50 group">
                        <div className='text-detailsSecondary-100 group:text-background-50 group-data-[state=open]:text-background-50 '>Categoria 2</div>
                        <FiChevronDown size={18} className='mt-[1px]'/>
                    </Menubar.Trigger>
                    <Menubar.Portal>
                        <Menubar.Content
                            className="min-w-[220px] bg-background-50 rounded-md p-2 shadow-lg [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                            align="start"
                            sideOffset={16}
                            alignOffset={-3}
                        >
                            <Menubar.Item className="group text-base leading-none flex items-center p-2 relative select-none outline-none hover:bg-detailsPrimary-100/10 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                <Link href='/'>
                                    Teste
                                </Link>
                            </Menubar.Item>
                        </Menubar.Content>
                    </Menubar.Portal>
                </Menubar.Menu>

                <Menubar.Menu>
                    <Menubar.Trigger className="p-2 outline-none select-none text-detailsPrimary-100 font-medium rounded-md flex items-center justify-between gap-2 bg-detailsPrimary-100/5 data-[highlighted]:bg-detailsPrimary-100/5 data-[state=open]:bg-detailsPrimary-100 data-[state=open]:text-background-50 group">
                        <div className='text-detailsSecondary-100 group:text-background-50 group-data-[state=open]:text-background-50 '>Categoria 3</div>
                        <FiChevronDown size={18} className='mt-[1px]'/>
                    </Menubar.Trigger>
                    <Menubar.Portal>
                        <Menubar.Content
                            className="min-w-[220px] bg-background-50 rounded-md p-2 shadow-lg [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                            align="start"
                            sideOffset={16}
                            alignOffset={-3}
                        >
                            <Menubar.Item className="group text-base leading-none flex items-center p-2 relative select-none outline-none hover:bg-detailsPrimary-100/10 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                <Link href='/'>
                                    Teste
                                </Link>
                            </Menubar.Item>
                        </Menubar.Content>
                    </Menubar.Portal>
                </Menubar.Menu>
                <Menubar.Menu>
                    <Menubar.Trigger className="p-2 outline-none select-none text-detailsPrimary-100 font-medium rounded-md flex items-center justify-between gap-2 bg-detailsPrimary-100/5 data-[highlighted]:bg-detailsPrimary-100/5 data-[state=open]:bg-detailsPrimary-100 data-[state=open]:text-background-50 group">
                        <div className='text-detailsSecondary-100 group:text-background-50 group-data-[state=open]:text-background-50 '>Categoria 4</div>
                        <FiChevronDown size={18} className='mt-[1px]'/>
                    </Menubar.Trigger>
                    <Menubar.Portal>
                        <Menubar.Content
                            className="min-w-[220px] bg-background-50 rounded-md p-2 shadow-lg [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                            align="start"
                            sideOffset={16}
                            alignOffset={-3}
                        >
                            <Menubar.Item className="group text-base leading-none flex items-center p-2 relative select-none outline-none hover:bg-detailsPrimary-100/10 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                <Link href='/'>
                                    Teste
                                </Link>
                            </Menubar.Item>
                        </Menubar.Content>
                    </Menubar.Portal>
                </Menubar.Menu>
            </div>
        </Menubar.Root>
    );
};
