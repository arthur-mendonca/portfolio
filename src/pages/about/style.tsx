import { styled } from "@/styles/stitches.config";

export const UpperSection = styled("section", {
  height: "50vh",
  backgroundColor: "azure",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  gap: "0",
  "@media(max-width: 768px)": {
    flexDirection: "column",
    height: "auto",
  },
});

export const FirstUpperBlock = styled("div", {
  flex: "1",
  padding: "20px",
  backgroundColor: "#94cbcb",
  display: "flex",
  height: "100%",
  alignItems: "center",
  fontWeight: "bold",
});

export const Greetings = styled("h3", {
  fontSize: "2rem",

  "@media(max-width: 768px)": {
    paddingTop: "2rem",
  },
});

export const MiddleUpperBlock = styled("div", {
  flex: "1.5",
  padding: "20px",
  backgroundColor: "azure",
  display: "flex",
  height: "100%",
  alignItems: "center",
  lineHeight: "1.5rem",
});

export const LastUpperBlock = styled("div", {
  flex: "0",
  padding: "20px",
  backgroundColor: "#94cbcb",
  "@media(max-width: 768px)": {
    display: "none",
  },
});

export const LowerSection = styled("section", {
  //   height: "50vh",
  backgroundColor: "azure",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  gap: "0",
  "@media(max-width: 768px)": {
    flexDirection: "column",
    height: "auto",
  },
});

export const FirstBlock = styled("div", {
  flex: "0",
  padding: "20px",
  backgroundColor: "#94cbcb",
  "@media(max-width: 768px)": {
    flex: "1",
  },
});

export const MiddleBlock = styled("div", {
  flex: "1.5",
  padding: "20px",
  backgroundColor: "azure",
  display: "flex",
  height: "100%",
  alignItems: "center",
  lineHeight: "1.5rem",
  "@media(max-width: 768px)": {
    flex: "1",
  },
});

export const LastBlock = styled("div", {
  flex: "1",
  padding: "20px",

  backgroundColor: "#94cbcb",
  "@media(max-width: 768px)": {
    display: "none",
  },
});

export const RotatedText = styled("p", {
  transform: "rotate(270deg)",
  display: "flex",
  height: "100%",
  alignItems: "center",
  fontSize: "1.75rem",
  fontWeight: "bold",

  "@media(max-width: 768px)": {
    transform: "rotate(0deg)",
  },
});
