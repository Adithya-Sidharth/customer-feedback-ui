# Resolve Git Merge Conflicts

## Files to Fix
- [x] src/components/theme-provider.tsx: Remove 'use client', use ThemeProviderProps from next-themes
- [x] src/components/ui/feature-card.tsx: Use @/ import path
- [x] src/components/ui/custom-card.tsx: Use @/ import path
- [x] src/components/ui/custom-button.tsx: Use @/ import and simpler cloneElement
- [x] src/components/layouts/top-bar.tsx: Use simpler version without router logic
- [x] src/components/layouts/sidebar.tsx: Remove 'use client', use updated hrefs
- [x] src/components/layouts/theme-toggle.tsx: Use local useTheme hook

## Followup Steps
- [x] Run dev server to verify no parsing errors
