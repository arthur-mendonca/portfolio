import { styled } from "@/styles/stitches.config";

export const ProjectsPageWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(350px, 2fr))",
  gridGap: "20px",
  padding: "2rem 1rem",
  maxWidth: "900px",
  margin: "0 auto",

  "@mobile": {
    padding: "2rem",
  },
});

export const styles = {
  borderRadius: "10px",
  backgroundColor: "#b4cfcf",
  padding: "20px",
};
