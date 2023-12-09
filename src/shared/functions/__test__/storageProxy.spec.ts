import AsyncStorage from '@react-native-async-storage/async-storage';
import { getItemStorage, removeItemStorage, setItemStorage } from '../storageProxy';
import { describe, expect, it, vi } from 'vitest';

describe('storageProxy', () => {
  const mockReturn = 'abc';
  const mockKey = 'key';

  it('should set item in storage', () => {
    AsyncStorage.setItem = vi.fn(() => Promise.resolve());
    setItemStorage(mockKey, 'value');

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(mockKey, 'value');
  });

  it('should item in storage', async () => {
    AsyncStorage.getItem = vi.fn(() => Promise.resolve(mockReturn));
    const returnProxy = await getItemStorage(mockKey);

    expect(returnProxy).toEqual(mockReturn);
  });

  it('should call remove item in storage', async () => {
    AsyncStorage.removeItem = vi.fn(() => Promise.resolve());
    removeItemStorage(mockKey);

    expect(AsyncStorage.removeItem).toHaveBeenCalledWith(mockKey);
  });
});
