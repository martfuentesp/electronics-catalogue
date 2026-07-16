import styles from './SectionHeading.module.css'

export function SectionHeading({ title, subtitle, action }) {
  return (
    <div className={styles.heading}>
      <div>
        <h2 className={styles.title}>{title}</h2>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </div>
      {action ? <div className={styles.action}>{action}</div> : null}
    </div>
  )
}
