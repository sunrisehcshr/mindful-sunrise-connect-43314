import { SkeletonBlock, SkeletonText, SkeletonAvatar, SkeletonCard, SkeletonListItem, SkeletonButton, SkeletonInput, SkeletonOverlay } from "@/components/ui/classic-skeleton";

export default function Classic() {
    return (
        <div className="min-h-screen bg-neutral-950 p-8 text-neutral-200 sm:p-20">
            <div className="mx-auto max-w-6xl">
                <header className="mb-16 max-w-2xl">
                    <h1 className="mb-4 text-4xl font-semibold tracking-tight text-white">
                        Loading States
                    </h1>
                    <p className="text-lg text-neutral-500">
                        A set of elegant, production-ready skeleton components with subtle,
                        high-performance shimmer animations.
                    </p>
                </header>

                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

                    {/* 1. Basic Blocks */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                            01. Shapes
                        </h3>
                        <div className="space-y-4 rounded-2xl border border-neutral-800/50 bg-neutral-900/20 p-6">
                            <SkeletonBlock height={64} width="100%" />
                            <div className="flex gap-4">
                                <SkeletonBlock height={64} width={64} rounded="rounded-2xl" />
                                <SkeletonBlock height={64} width={64} rounded="rounded-full" />
                            </div>
                        </div>
                    </div>

                    {/* 2. Text Variations */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                            02. Text Content
                        </h3>
                        <div className="space-y-6 rounded-2xl border border-neutral-800/50 bg-neutral-900/20 p-6">
                            <SkeletonText lines={1} />
                            <SkeletonText lines={4} gap={8} />
                        </div>
                    </div>

                    {/* 3. Avatars */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                            03. Avatars
                        </h3>
                        <div className="flex items-center gap-4 rounded-2xl border border-neutral-800/50 bg-neutral-900/20 p-6">
                            <SkeletonAvatar size={48} />
                            <SkeletonAvatar size={64} />
                            <SkeletonAvatar size={32} />
                        </div>
                    </div>

                    {/* 4. Button & Inputs */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                            04. Controls
                        </h3>
                        <div className="space-y-6 rounded-2xl border border-neutral-800/50 bg-neutral-900/20 p-6">
                            <SkeletonInput />
                            <div className="flex gap-3 pt-2">
                                <SkeletonButton width="50%" />
                                <SkeletonButton width="50%" />
                            </div>
                        </div>
                    </div>

                    {/* 5. List Items */}
                    <div className="space-y-4 sm:col-span-2">
                        <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                            05. List Groups
                        </h3>
                        <div className="space-y-4">
                            <SkeletonListItem />
                            <SkeletonListItem />
                        </div>
                    </div>

                    {/* 6. Cards */}
                    <div className="space-y-4 sm:col-span-2">
                        <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                            06. Cards
                        </h3>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <SkeletonCard />
                            <SkeletonCard />
                        </div>
                    </div>

                    {/* 7. Overlay / Loading State */}
                    <div className="space-y-4 sm:col-span-2 lg:col-span-4">
                        <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                            07. Loading Overlay
                        </h3>
                        <SkeletonOverlay className="h-48 w-full">
                            <div className="flex items-start gap-6">
                                <div className="h-32 w-32 rounded-xl bg-neutral-800" />
                                <div className="space-y-4 pt-2">
                                    <div className="h-6 w-64 rounded bg-neutral-800" />
                                    <div className="h-4 w-48 rounded bg-neutral-800" />
                                    <div className="h-4 w-full max-w-md rounded bg-neutral-800" />
                                    <div className="h-4 w-full max-w-sm rounded bg-neutral-800" />
                                </div>
                            </div>
                        </SkeletonOverlay>
                    </div>
                </div>
            </div>
        </div>
    );
}
