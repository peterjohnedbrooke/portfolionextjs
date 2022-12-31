import React from 'react'
import styles from "../styles/Home.module.scss"
import { useState } from 'react'
import Link from 'next/link'

export default function ProjectsListItem({item, index}) {
  const { title, slug, image, content, link } = item.fields

  const [hasMoved, setHasMoved] = useState(false)

  const handleHover = (index) => {
    setHasMoved(!hasMoved)
  }

  return (
    <>
        <li key={index} className={!!hasMoved ? `${styles.listItemMove}` : `${styles.listItem}`} onMouseEnter={(e) => handleHover(index)} onMouseLeave={(e) => handleHover(index)}>
            <Link href={"projects/" + slug}>
                <h2 className={styles.textUpper}>{item.fields.title}</h2>
                <h2 className={!!hasMoved ? `${styles.textGradientMove}` : `${styles.textGradientStatic}`}>{item.fields.title}</h2>
            </Link> 
        </li>
    </>
  )
}
