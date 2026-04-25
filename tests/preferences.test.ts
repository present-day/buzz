import { describe, expect, it } from 'vitest'
import {
  getHapticFeedbackEnabled,
  getSoundFeedbackEnabled,
  setHapticFeedbackEnabled,
  setSoundFeedbackEnabled,
  type StorageAdapter,
} from '../src/preferences'

class MemoryStorage implements StorageAdapter {
  private readonly store = new Map<string, string>()

  getItem(key: string): string | null {
    return this.store.get(key) ?? null
  }

  setItem(key: string, value: string): void {
    this.store.set(key, value)
  }
}

describe('feedback preferences (storage adapter)', () => {
  it('round-trips haptic and sound flags independently', () => {
    const storage = new MemoryStorage()
    expect(getHapticFeedbackEnabled(true, storage)).toBe(true)
    expect(getSoundFeedbackEnabled(true, storage)).toBe(true)

    setHapticFeedbackEnabled(false, storage)
    setSoundFeedbackEnabled(true, storage)
    expect(getHapticFeedbackEnabled(true, storage)).toBe(false)
    expect(getSoundFeedbackEnabled(true, storage)).toBe(true)

    setSoundFeedbackEnabled(false, storage)
    expect(getSoundFeedbackEnabled(true, storage)).toBe(false)
  })
})
