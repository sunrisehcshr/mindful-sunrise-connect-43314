"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Types ---

interface BaseProps {
    className?: string;
    shimmer?: boolean;
}

interface SkeletonBlockProps extends BaseProps {
    width?: string | number;
    height?: string | number;
    rounded?: string;
}

interface SkeletonTextProps extends BaseProps {
    lines?: number;
    gap?: number;
}

interface SkeletonAvatarProps extends BaseProps {
    size?: number | string;
}

interface SkeletonButtonProps extends BaseProps {
    width?: string | number;
}

interface ShimmerOverlayProps {
    children: React.ReactNode;
    className?: string;
}

// --- Internal Helper: Base Animation ---

export const ShimmerEffect = () => (
    <motion.div
        className="absolute inset-0 -translate-x-full"
        initial={{ translateX: "-100%" }}
        animate={{ translateX: "100%" }}
        transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
        }}
        style={{
            background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
        }}
    />
);

// --- 1. Skeleton Block ---

export const SkeletonBlock = ({
    width = "100%",
    height = "100px",
    rounded = "rounded-xl",
    className = "",
    shimmer = true,
}: SkeletonBlockProps) => {
    return (
        <div
            className={`relative overflow-hidden bg-neutral-800/50 ${rounded} ${className}`}
            style={{ width, height }}
        >
            {shimmer && <ShimmerEffect />}
        </div>
    );
};

// --- 2. Skeleton Text ---

export const SkeletonText = ({
    lines = 3,
    gap = 12,
    className = "",
    shimmer = true,
}: SkeletonTextProps) => {
    return (
        <div className={`flex flex-col ${className}`} style={{ gap }}>
            {Array.from({ length: lines }).map((_, i) => (
                <SkeletonBlock
                    key={i}
                    height={14}
                    width={i === lines - 1 && lines > 1 ? "70%" : "100%"}
                    rounded="rounded-md"
                    shimmer={shimmer}
                />
            ))}
        </div>
    );
};

// --- 3. Skeleton Avatar ---

export const SkeletonAvatar = ({
    size = 48,
    className = "",
    shimmer = true,
}: SkeletonAvatarProps) => {
    return (
        <div className={`relative ${className}`}>
            <SkeletonBlock
                width={size}
                height={size}
                rounded="rounded-full"
                shimmer={shimmer}
            />
            <div className="absolute inset-0 rounded-full border border-white/5" />
        </div>
    );
};

// --- 4. Skeleton Card ---

export const SkeletonCard = ({ shimmer = true }: { shimmer?: boolean }) => {
    return (
        <div className="w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4">
            <SkeletonBlock
                height={180}
                rounded="rounded-xl"
                className="mb-4"
                shimmer={shimmer}
            />
            <SkeletonBlock
                height={24}
                width="60%"
                rounded="rounded-lg"
                className="mb-3"
                shimmer={shimmer}
            />
            <SkeletonText lines={2} shimmer={shimmer} />
        </div>
    );
};

// --- 5. Skeleton List Item ---

export const SkeletonListItem = ({ shimmer = true }: { shimmer?: boolean }) => {
    return (
        <div className="flex w-full max-w-sm items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900/30 p-4">
            <SkeletonAvatar size={48} shimmer={shimmer} />
            <div className="flex-1 space-y-2">
                <SkeletonBlock
                    height={16}
                    width="40%"
                    rounded="rounded-md"
                    shimmer={shimmer}
                />
                <SkeletonBlock
                    height={12}
                    width="85%"
                    rounded="rounded-md"
                    shimmer={shimmer}
                />
            </div>
        </div>
    );
};

// --- 6. Skeleton Button ---

export const SkeletonButton = ({
    width = 120,
    className = "",
    shimmer = true,
}: SkeletonButtonProps) => {
    return (
        <SkeletonBlock
            width={width}
            height={42}
            rounded="rounded-lg"
            className={`opacity-80 ${className}`}
            shimmer={shimmer}
        />
    );
};

// --- 7. Skeleton Input / Field ---

export const SkeletonInput = ({ shimmer = true }: { shimmer?: boolean }) => {
    return (
        <div className="w-full space-y-2">
            <SkeletonBlock
                width={80}
                height={12}
                rounded="rounded-md"
                shimmer={false}
            />
            <div className="relative">
                <SkeletonBlock
                    width="100%"
                    height={48}
                    rounded="rounded-xl"
                    shimmer={shimmer}
                />
            </div>
        </div>
    );
};

// --- 8. Shimmer Overlay (Wrapper) ---

export const SkeletonOverlay = ({ children, className = "" }: ShimmerOverlayProps) => {
    return (
        <div
            className={`relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 ${className}`}
        >
            <div className="relative z-10 p-6 opacity-30 blur-sm">{children}</div>
            <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-600 border-t-white" />
            </div>
            <ShimmerEffect />
        </div>
    );
};
