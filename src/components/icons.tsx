import {
  BoltIcon,
  ChatBubbleLeftRightIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  LightBulbIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import type { ComponentType, SVGProps } from 'react';

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Sparkles: SparklesIcon,
  LightBulb: LightBulbIcon,
  Headset: ChatBubbleOvalLeftEllipsisIcon,
  Bolt: BoltIcon,
  Chat: ChatBubbleLeftRightIcon
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Component = iconMap[name] ?? SparklesIcon;
  return <Component className={className} aria-hidden="true" />;
}
