import { weather } from '@/routes';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Weather',
        href: weather().url,
    },
];

export default function Weather() {
    return (
        <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <div>
                <header className="mb-4">
                    <h1 className="text-2xl font-bold">
                        Welcome to Weather API
                    </h1>
                    <p className="text-muted-foreground">
                        Get started by exploring the features and capabilities
                        of the Weather API.
                    </p>
                </header>
            </div>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3"></div>
        </div>
    );
}
