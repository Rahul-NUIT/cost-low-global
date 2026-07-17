import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const EnquiryContext = createContext(null);

/**
 * Holds the global enquiry drawer. `open(productName)` pre-fills the subject
 * so "Enquire Now" on any product card lands in a ready-to-send form.
 */
export function EnquiryProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState(null);

  const open = useCallback((productName = null) => {
    setProduct(productName);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, product, open, close }), [isOpen, product, open, close]);

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) throw new Error('useEnquiry must be used within an EnquiryProvider');
  return context;
}
