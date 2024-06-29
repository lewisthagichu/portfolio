function Description() {
  const containerRef = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'end 0.7'],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: containerRef,
    offset: ['start 0.4', 'end 0.25'],
  });

  const h3Opacity = useSmoothOpacity(scrollYProgress1, [0.2, 1]);
  const divOpacity = useSmoothOpacity(scrollYProgress2, [0, 1]);

  return (
    <section className={styles.container}>
      <motion.h3 style={{ opacity: h3Opacity }}>ABOUT/</motion.h3>
      <div className={styles.wrapper}>
        <div ref={containerRef} className={styles.description}>
          {paragraphs.map((paragraph, paragraphIndex) => (
            <Paragraph
              key={paragraphIndex}
              paragraph={paragraph}
              progress={
                paragraphIndex === 0 ? scrollYProgress1 : scrollYProgress2
              }
            />
          ))}
        </div>
        <motion.div
          style={{ opacity: divOpacity }}
          className={styles.expertise}
        >
          <h5>EXPERTISE</h5>
          <div>
            {expertises.map((expertise, index) => (
              <p key={`exp_${index}`}>
                - <span>{expertise}</span>
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
