import styles from './projectCard.module.scss';

function ProjectCard() {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <motion.div style={{ y }} className={styles.image}>
          <Image src={bg} alt="image" />
        </motion.div>
        {/* <div className="overlay"></div> */}

        <div className={styles.video}>
          <div className={styles.videoContainer}>
            <motion.div
              style={{ y: videoHeight, background: color }}
              className={styles.inner}
            >
              {/* <Image
                  src={`/images/${src}`}
                  fill
                  sizes="90vw"
                  alt="image"
                  placeholder="blur"
                  blurDataURL={`/images/${src}`}
                /> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
