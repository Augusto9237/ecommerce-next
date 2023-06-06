'use client'
import * as Collapsible from '@radix-ui/react-collapsible';
import clsx from 'clsx';
import { useContext, useState } from 'react';
import { ContextGlobals } from '../context/contextGlobals';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

export function CollapsibleCategories() {
    const { sidebarState, categories } = useContext(ContextGlobals);
    const [open, setOpen] = useState(false);
    return (
        <Collapsible.Root className='w-full' open={open} onOpenChange={setOpen}>
            <Collapsible.Trigger className={clsx("flex flex-1 w-full items-center justify-between text-base font-medium pl-3 p-2 hover:bg-background-100", {
                'hidden': sidebarState === false,
                'flex': sidebarState === true
            })}>
                <span>Categorias</span>
                {open ? <FiChevronDown size={18} className="text-detailsPrimary-100" /> :
                    <FiChevronRight size={18} className="text-detailsPrimary-100" />
                }
            </Collapsible.Trigger>

            <Collapsible.Content className='flex flex-col px-3 gap-2'>
                {categories?.categories?.edges.map((category) => (
                    <Link href={``}>
                        {category.node.name}
                    </Link>
                ))}
            </Collapsible.Content>
        </Collapsible.Root>
    );
}