import { useEffect, useState } from 'react'

export function useInView(target: React.RefObject<Element | null>, options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = target.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setIsInView(entry.isIntersecting)
        }
      },
      { root: null, threshold: 0.2, rootMargin: '0px', ...options },
    )

    observer.observe(node)
    return () => observer.unobserve(node)
  }, [target, options?.root, options?.rootMargin, options?.threshold])

  return isInView
}


