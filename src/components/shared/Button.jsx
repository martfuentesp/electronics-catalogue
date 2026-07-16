import styles from './Button.module.css'

export function Button({ as: Component = 'button', variant = 'primary', className, ...props }) {
  const variantClass = variant === 'secondary' ? styles.secondary : styles.primary
  const cn = className ? `${styles.base} ${variantClass} ${className}` : `${styles.base} ${variantClass}`

  return <Component className={cn} {...props} />
}
