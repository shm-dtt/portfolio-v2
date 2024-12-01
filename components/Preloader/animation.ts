export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.7, ease: [0.5, 0, 0.1, 1], delay: 0.1 },
  },
};

export const textmask = {
  initial: { y: "100%" },

  enter: (i: any) => ({
    y: "0",
    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i },
  }),
};
