import styles from './project.module.scss';
import { useState } from 'react';
import { NeuehaasBody } from '@/public/fonts/fonts';
import Link from 'next/link';
import Cursor from '@/components/common/Cursor';
import ProjectTitle from './ProjectTitle';
import ProjectMedia from './ProjectMedia';

function Project({ title, description, link }) {
  const [active, setActive] = useState(false);

  return (
    <section className={`${styles.container} ${NeuehaasBody.className}`}>
      <Link scroll={false} href={link}>
        <ProjectMedia link={link} setActive={setActive} />
      </Link>

      <ProjectTitle title={title} description={description} />
      <Cursor active={active} />
    </section>
  );
}

export default Project;
