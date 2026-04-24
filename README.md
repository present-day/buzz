# @present-day/buzz

Cross-platform haptic and audio feedback library for web applications.

## Features

- 🎵 **WebAudio-based click sounds** with configurable intensity and gain
- 📳 **Haptic feedback** for mobile devices (iOS and Android)
- 🔧 **Cross-platform compatibility** (iOS, Android, web browsers)
- 🎛️ **Multiple feedback presets** (light, heavy, success, error, etc.)
- 💾 **User preference management** with pluggable storage
- 🚀 **Framework-agnostic** (works with React, Vue, vanilla JS)
- 📱 **iOS special handling** for optimal haptic feedback

## Installation

```bash
npm install @present-day/buzz
```

## Quick Start

```typescript
import { triggerInteractionFeedback, INTERACTION_FEEDBACK_PRESET } from '@present-day/buzz'

// Trigger light feedback (default)
triggerInteractionFeedback()

// Trigger specific preset
triggerInteractionFeedback({ preset: INTERACTION_FEEDBACK_PRESET.SUCCESS })

// Override individual settings
triggerInteractionFeedback({
  hapticEnabled: true,
  soundEnabled: false,
  preset: INTERACTION_FEEDBACK_PRESET.ERROR
})
```

## API Reference

### Core Functions

#### `triggerInteractionFeedback(options?)`

Triggers haptic and/or audio feedback based on the provided options.

```typescript
type TriggerInteractionFeedbackOptions = {
  preset?: InteractionFeedbackPreset
  hapticPreset?: HapticFeedbackPreset  
  soundPreset?: SoundFeedbackPreset
  hapticEnabled?: boolean
  soundEnabled?: boolean
  storageAdapter?: StorageAdapter
}
```

#### `cancelInteractionFeedback()`

Cancels any ongoing haptic feedback (if supported by the platform).

#### `isHapticFeedbackAvailable()`

Returns whether haptic feedback is available on the current device.

### Presets

Available presets for both haptic and sound feedback:

- `LIGHT` - Subtle feedback
- `MEDIUM` - Moderate feedback  
- `HEAVY` - Strong feedback
- `SUCCESS` - Positive action feedback
- `ERROR` - Error/failure feedback
- `WARNING` - Warning/caution feedback
- `SELECTION` - Item selection feedback
- `BUZZ` - Attention-grabbing feedback
- `NUDGE` - Gentle notification
- `SOFT` - Very light feedback
- `RIGID` - Sharp, precise feedback

### Preferences Management

```typescript
import { 
  getHapticFeedbackEnabled,
  setHapticFeedbackEnabled,
  getSoundFeedbackEnabled,
  setSoundFeedbackEnabled 
} from '@present-day/buzz'

// Get current preferences
const hapticEnabled = getHapticFeedbackEnabled()
const soundEnabled = getSoundFeedbackEnabled()

// Update preferences
setHapticFeedbackEnabled(false)
setSoundFeedbackEnabled(true)
```

### Custom Storage

By default, preferences are stored in `localStorage`. You can provide a custom storage adapter:

```typescript
import { LocalStorageAdapter, type StorageAdapter } from '@present-day/buzz'

class CustomStorageAdapter implements StorageAdapter {
  getItem(key: string): string | null {
    // Your custom storage logic
    return null
  }
  
  setItem(key: string, value: string): void {
    // Your custom storage logic
  }
}

const customStorage = new CustomStorageAdapter()

// Use with feedback
triggerInteractionFeedback({ 
  storageAdapter: customStorage 
})

// Use with preferences
getHapticFeedbackEnabled(true, customStorage)
setHapticFeedbackEnabled(true, customStorage)
```

## Platform Support

- **iOS Safari**: Uses hidden checkbox technique for haptic feedback
- **Android Chrome**: Uses Vibration API
- **Desktop browsers**: Audio feedback only (no haptic support)
- **WebAudio**: Supported in all modern browsers

## License

MIT