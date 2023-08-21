import { useEffect, useState } from 'react';
import { UseLocalStorageResponse } from './types';

function getStorageValue<T>(key: string, defaultValue: T): T {
	const value = localStorage.getItem(key);

	if (value) {
		return JSON.parse(value);
	}

	return defaultValue;
}

export function useLocalStorage<T>(key: string, defaultValue: T): UseLocalStorageResponse<T> {
	const [value, setValue] = useState<T>(() => getStorageValue<T>(key, defaultValue));

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}
