import fs from 'fs';
import path from 'path';
import Case from '@/components/Case/Case';

function ProjectPage({ projectData }) {
  return <Case project={projectData} />;
}

export default ProjectPage;

// Generate the static paths for all video items
export async function getStaticPaths() {
  const dataDirectory = path.join(process.cwd(), 'public/data');
  const filenames = fs.readdirSync(dataDirectory);

  const paths = filenames.map((filename) => {
    const id = filename.replace('.json', '');
    return { params: { id } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Read the JSON file for the given post id
  const dataDirectory = path.join(process.cwd(), 'public/data');
  const filePath = path.join(dataDirectory, `${params.id}.json`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const projectData = JSON.parse(fileContents);

  return {
    props: {
      projectData: {
        ...projectData,
        src: `/media/work/${params.id}`,
      },
    },
  };
}
