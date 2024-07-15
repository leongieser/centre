'use client';

import useIsMounted from '@/hooks/useIsMounted';
import { useTheme } from 'next-themes';

const ThemeSwitch = () => {
  const mounted = useIsMounted();
  const { theme, setTheme } = useTheme();

  if (!mounted) {
    return null;
  }

  return (
    <select value={theme} onChange={e => setTheme(e.target.value)}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
};

export { ThemeSwitch };
