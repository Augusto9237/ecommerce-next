'use client'
import * as Collapsible from '@radix-ui/react-collapsible';
import clsx from 'clsx';
import { useContext } from 'react';
import { ContextGlobals } from '../context/contextGlobals';
import { FiChevronRight } from 'react-icons/fi';

export function CollapsibleCategories() {
    const { sidebarState } = useContext(ContextGlobals);
    return (
        <Collapsible.Root>
            <Collapsible.Trigger className={clsx("items-center  justify-between  text-base font-medium pl-3 p-2 hover:bg-background-100", {
                'hidden': sidebarState === false,
                'flex': sidebarState === true
            })}>
                <button className='flex flex-1 flex-row w-full'>
                    <span>Categorias</span>
                    <FiChevronRight size={18} className="mt-[2px] text-detailsPrimary-100" />
                </button>
            </Collapsible.Trigger>

            <Collapsible.Content>
                <span>teste</span>
            </Collapsible.Content>
        </Collapsible.Root>
    );
}