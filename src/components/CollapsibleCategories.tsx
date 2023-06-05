'use client'
import * as Collapsible from '@radix-ui/react-collapsible';
import clsx from 'clsx';
import { useContext } from 'react';
import { ContextGlobals } from '../context/contextGlobals';
import { FiChevronRight } from 'react-icons/fi';

export function CollapsibleCategories() {
    const { sidebarState } = useContext(ContextGlobals);
    return (
        <Collapsible.Root className='w-full'>
            <Collapsible.Trigger className={clsx("flex flex-1 w-full items-center   text-base font-medium pl-3 p-2 hover:bg-background-100", {
                'hidden': sidebarState === false,
                'flex': sidebarState === true
            })}>
                <button className='flex flex-1 flex-row w-full items-center justify-between'>
                    <span>Categorias</span>
                    <FiChevronRight size={18} className="mt-[2px] text-detailsPrimary-100" />
                </button>
            </Collapsible.Trigger>

            <Collapsible.Content className='px-2'>
                <span>teste</span>
            </Collapsible.Content>
        </Collapsible.Root>
    );
}