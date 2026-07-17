import {
  Award,
  BadgeDollarSign,
  ClipboardCheck,
  Clock,
  Earth,
  Eye,
  Globe2,
  Handshake,
  Heart,
  Mail,
  MapPin,
  Package,
  Phone,
  Search,
  ShieldCheck,
  Ship,
  Target,
  TrendingUp,
  Truck,
  Users,
} from 'lucide-react';

/**
 * Content data stores icons as names; this resolves them to components so the
 * data layer never imports React.
 */
const ICONS = {
  Award,
  BadgeDollarSign,
  ClipboardCheck,
  Clock,
  Earth,
  Eye,
  Globe2,
  Handshake,
  Heart,
  Mail,
  MapPin,
  Package,
  Phone,
  Search,
  ShieldCheck,
  Ship,
  Target,
  TrendingUp,
  Truck,
  Users,
};

/**
 * Resolve a data-layer icon name to its component.
 *
 * An unregistered name would otherwise fall back silently and render a
 * plausible-but-wrong icon, so dev builds warn. If you add an `icon:` to
 * `data/site.js`, import it above and add it to ICONS.
 */
export const getIcon = (name) => {
  const Icon = ICONS[name];
  if (!Icon && import.meta.env.DEV) {
    console.warn(`[icons] "${name}" is not registered in utils/icons.js — falling back to Globe2.`);
  }
  return Icon ?? Globe2;
};
