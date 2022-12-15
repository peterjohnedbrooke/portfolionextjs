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
                <h5  className={styles.textUpper}>{item.fields.title}</h5>
                <h5 className={!!hasMoved ? `${styles.textGradientMove}` : `${styles.textGradient}`}>{item.fields.title}</h5>
            </Link> 
        </li>
    </>
  )
}
