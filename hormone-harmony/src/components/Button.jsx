/**
 * Button Component
 * Uses design tokens for all styling
 * WCAG AA compliant
 */

export default function Button({
  children,
  variant = 'primary',
  size = 'base',
  onClick,
  href,
  className = '',
  ...props
}) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium transition-all
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-[var(--color-accent)] text-white
      hover:bg-[var(--color-accent-hover)]
      active:bg-[var(--color-accent-active)]
      focus:ring-[var(--color-accent)]
    `,
    secondary: `
      bg-[var(--color-primary)] text-white
      hover:bg-[var(--color-primary-hover)]
      active:bg-[var(--color-primary-active)]
      focus:ring-[var(--color-primary)]
    `,
    outline: `
      bg-transparent text-[var(--color-accent)] border-2 border-[var(--color-accent)]
      hover:bg-[var(--color-accent-pale)]
      active:bg-[var(--color-accent-light)]
      focus:ring-[var(--color-accent)]
    `,
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm rounded',
    base: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim().replace(/\s+/g, ' ');

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
