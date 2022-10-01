import { writable } from 'svelte/store';

export const editmode = writable(false);
export const saveinfo = writable(false);
export const user = writable();
