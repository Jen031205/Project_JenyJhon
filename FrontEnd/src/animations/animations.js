export const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const item = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};