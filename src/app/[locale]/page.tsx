import { ThemeSwitch } from '@components/feature/ThemeSwitch';
import { Button } from '@components/ui/button';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <h1 className="text-black dark:text-white">{t('title')}</h1>
      <ThemeSwitch />
      <Button size="lg" isLoading variant="default">
        default lg
      </Button>
      <Button size="lg" variant="outline">
        destructive lg
      </Button>
      <Button size="lg" variant="secondary">
        destructive lg
      </Button>

      <Button size="lg" variant="link">
        destructive lg
      </Button>
      <Button size="lg" variant="ghost">
        destructive lg
      </Button>
    </main>
  );
}
