import { useTranslations } from 'next-intl';
import ThemeSwitch from '@/components/feature/ThemeSwitch';
export default function Home() {
	const t = useTranslations('HomePage');

	return (
		<main className="flex min-h-screen flex-col items-center gap-5 p-24">
			<h1 className="text-black dark:text-white">{t('title')}</h1>
			<ThemeSwitch />
		</main>
	);
}
