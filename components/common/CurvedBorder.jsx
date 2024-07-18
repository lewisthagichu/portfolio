import { motion } from 'framer-motion';

function CurvedBorder({ height }) {
  return (
    <div className="curvedBorder">
      <motion.div style={{ height }} className="circleContainer">
        <div className="circle"></div>
      </motion.div>
    </div>
  );
}

export default CurvedBorder;
