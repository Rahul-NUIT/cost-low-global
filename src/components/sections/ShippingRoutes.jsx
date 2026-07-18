import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import worldMap from '../../assets/images/world-map.webp';
import { exportDestinations, importExportPage, shippingOrigin } from '../../data/site';

/**
 * Geographic bounds of world-map.webp — an equirectangular (plate carrée) plate
 * cropped to a latitude band, so both axes stay linear. These must be updated
 * together with the image if it is ever re-cropped.
 */
const MAP = { latTop: 84.06, latBottom: -59.94, lonLeft: -180, lonRight: 180 };

/** Aspect follows from the bounds: 360° wide over 144° tall = 2.5. */
const MAP_ASPECT = (MAP.lonRight - MAP.lonLeft) / (MAP.latTop - MAP.latBottom);
const VIEWBOX_H = 100 / MAP_ASPECT;

const project = ({ lat, lon }) => ({
  x: ((lon - MAP.lonLeft) / (MAP.lonRight - MAP.lonLeft)) * 100,
  y: ((MAP.latTop - lat) / (MAP.latTop - MAP.latBottom)) * 100,
});

/**
 * The dots sit in CSS percentage space; the SVG overlay is only VIEWBOX_H tall,
 * so a y percentage must be scaled into viewBox units or the arcs drift off
 * their pins.
 */
const vbY = (percent) => (percent / 100) * VIEWBOX_H;

const ORIGIN = project(shippingOrigin);

/** Quadratic arc from origin to destination, bowed above the higher of the two. */
const arc = (to) => {
  const midX = (ORIGIN.x + to.x) / 2;
  const peakY = vbY(Math.min(ORIGIN.y, to.y)) - VIEWBOX_H * 0.15;
  return `M ${ORIGIN.x} ${vbY(ORIGIN.y)} Q ${midX} ${peakY} ${to.x} ${vbY(to.y)}`;
};

export default function ShippingRoutes() {
  const destinations = exportDestinations.map((d) => ({ ...d, ...project(d) }));

  return (
    <Section tone="surface" className="border-b border-line">
      <Reveal>
        <p className="eyebrow mb-8">{importExportPage.routes.eyebrow}</p>
        <h2 className="mb-12 max-w-3xl text-display-sm text-balance sm:text-display">
          {importExportPage.routes.title}
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="relative w-full border border-line bg-canvas">
          {/* Padding-top is the inverse of the map aspect, so the plate matches
              the image exactly — nothing is cropped and the projection holds. */}
          <div className="relative w-full" style={{ paddingTop: `${100 / MAP_ASPECT}%` }}>
            {/* The plate is faint light-grey line art; a contrast bump darkens
                the coastlines so the map reads clearly, while it still sits
                behind the red route arcs and pins. */}
            <img
              src={worldMap}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-80 [filter:contrast(1.4)_brightness(0.92)]"
            />

            <svg
              viewBox={`0 0 100 ${VIEWBOX_H}`}
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full"
            >
              {destinations.map((destination, index) => (
                <motion.path
                  key={destination.country}
                  d={arc(destination)}
                  fill="none"
                  stroke="var(--color-brand)"
                  strokeWidth="0.25"
                  strokeDasharray="1 1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.7 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, delay: index * 0.1, ease: 'easeInOut' }}
                />
              ))}
            </svg>

            <div
              className="absolute"
              style={{ left: `${ORIGIN.x}%`, top: `${ORIGIN.y}%`, transform: 'translate(-50%,-50%)' }}
            >
              <span className="block h-3 w-3 rounded-full bg-accent-deep ring-4 ring-accent/30" />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-medium text-ink">
                {shippingOrigin.label}
              </span>
            </div>

            {destinations.map((destination) => (
              <div
                key={destination.country}
                className="group absolute"
                style={{
                  left: `${destination.x}%`,
                  top: `${destination.y}%`,
                  transform: 'translate(-50%,-50%)',
                }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
                </span>
                {/* The Gulf ports sit close together, so the hovered label lifts
                    above its neighbours. */}
                <span className="pointer-events-none absolute left-1/2 top-4 z-10 -translate-x-1/2 whitespace-nowrap bg-canvas px-1 text-[9px] font-medium text-ink opacity-0 transition-opacity group-hover:opacity-100">
                  {destination.country}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* The map is decorative; this list is the accessible form of the same data. */}
      <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {exportDestinations.map((destination, index) => (
          <Reveal as="li" key={destination.country} delay={(index % 3) * 0.05}>
            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
              <span className="text-ink">{destination.country}</span>
              <span className="text-xs text-muted">{destination.port}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
