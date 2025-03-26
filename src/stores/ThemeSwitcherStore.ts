import {atom} from 'nanostores';
import Cookie from 'js-cookie';

export const theme = atom<'light' | 'dark'>(Cookie.get('theme') as ('light' | 'dark'));

export const toggleTheme = () => {
    if (theme.get() === 'light') {
        theme.set('dark');
        Cookie.set('theme', 'dark');
    } else {
        theme.set('light');
        Cookie.set('theme', 'light');
    }
};