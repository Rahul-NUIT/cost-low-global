/**
 * Keyless Google Maps embed — the `output=embed` endpoint needs no API key.
 * Swap for the Embed API with a key if usage limits become a concern.
 */
export default function GoogleMap({ address, title = 'Office location', className }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <div className={className}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-full min-h-[380px] w-full border-0 grayscale-[0.4] transition-[filter] duration-500 hover:grayscale-0 sm:min-h-[460px]"
      />
    </div>
  );
}
