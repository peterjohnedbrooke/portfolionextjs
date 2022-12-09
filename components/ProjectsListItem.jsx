import React from 'react'
import styles from "../styles/Home.module.scss"
import { useState } from 'react'

export default function ProjectsListItem({item, index}) {
  const { title, slug, image, content, link } = item.fields

  const [hasMoved, setHasMoved] = useState(true)

  const handleHover = (index) => {
    setHasMoved(!hasMoved)
    console.log(hasMoved)
  }

  return (
    <>
        <li key={index}  className={!!hasMoved ? `${styles.listItemMove}` : `${styles.listItem}`} onMouseEnter={(e) => handleHover(index)} onMouseLeave={(e) => handleHover(index)} key={index}>
            <a  href='#'>
                <h5  className={styles.textUpper}>{item.fields.title}</h5>
                <h5 className={!!hasMoved ? `${styles.textGradientMove}` : `${styles.textGradient}`}>{item.fields.title}</h5>
            </a> 
        </li>
    </>
  )
}
