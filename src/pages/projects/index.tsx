import { Project } from "@/components/Project";
import { styles } from "./style";
import { ProjectsPageWrapper } from "./style";

const ProjectsPage = (): JSX.Element => {
  return (
    <ProjectsPageWrapper>
      <Project customStyles={styles} />
    </ProjectsPageWrapper>
  );
};

export { ProjectsPage };
