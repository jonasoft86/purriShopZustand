import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { Store } from '../types/store';
import { createCartSlice } from './cart-slice';

export const useStore = create<Store>()(
	devtools(
		persist(
			subscribeWithSelector(
				immer((...a) => ({
					...createCartSlice(...a),
				}))
			),
			{
				name: 'local-storage',
			}
		)
	)
);
