import { styled } from "@/styles/stitches.config";

export const UpperSection = styled("section", {
  height: "50vh",
  backgroundColor: "azure",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  gap: "0",
  //   flexDirection: "column",
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
});

export const LowerSection = styled("section", {
  //   height: "50vh",
  backgroundColor: "azure",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  gap: "0",
});

export const FirstBlock = styled("div", {
  flex: "0",
  padding: "20px",
  backgroundColor: "#94cbcb",
});

export const MiddleBlock = styled("div", {
  flex: "1.5",
  padding: "20px",
  backgroundColor: "azure",
  display: "flex",
  height: "100%",
  alignItems: "center",
});

export const LastBlock = styled("div", {
  flex: "1",
  padding: "20px",

  backgroundColor: "#94cbcb",
});

export const RotatedText = styled("p", {
  transform: "rotate(270deg)",
  display: "flex",
  height: "100%",
  alignItems: "center",
  fontSize: "1.75rem",
  fontWeight: "bold",
});
