export declare class MenuItem {
    title: string;
    link: string;
    icon: string;
}


export const MENU_ITEMS: MenuItem[] = [
    {
        title: 'Product',
        icon: 'navigation-2-outline',
        link: '/',
    },
    {
        title: 'Trash',
        icon: 'fa-trash',
        link: '/trash',
    }
]