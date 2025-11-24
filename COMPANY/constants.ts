
import { Service, TeamMember } from './types';
import { CloudIcon, DatabaseIcon, ChartBarIcon, CodeBracketIcon, ShieldCheckIcon, ArrowPathIcon } from './components/IconComponents';

export const SERVICES: Service[] = [
  {
    title: 'Cloud Infrastructure (AWS/Azure)',
    description: 'Design, deployment, and management of scalable and resilient cloud environments on AWS and Azure.',
    icon: CloudIcon,
    skills: ['AWS', 'Azure', 'VPC', 'EC2', 'S3', 'Lambda']
  },
  {
    title: 'Data Engineering & Warehousing',
    description: 'Building robust data pipelines, data lakes, and warehouses with modern technologies like PostgreSQL and NewSQL.',
    icon: DatabaseIcon,
    skills: ['PostgreSQL', 'NewSQL', 'ETL', 'Data Lake', 'Schema Design']
  },
  {
    title: 'BI & Predictive Analytics',
    description: 'Transforming data into insights with powerful visualization tools and predictive modeling.',
    icon: ChartBarIcon,
    skills: ['Power BI', 'Tableau', 'Data Visualization', 'Predictive Analytics']
  },
  {
    title: 'DevOps & Automation',
    description: 'Implementing CI/CD pipelines and containerization to accelerate development and improve reliability.',
    icon: CodeBracketIcon,
    skills: ['CI/CD', 'Docker', 'Kubernetes', 'Automation']
  },
  {
    title: 'Cloud Security & IAM',
    description: 'Enforcing security best practices with robust Identity and Access Management and policy enforcement.',
    icon: ShieldCheckIcon,
    skills: ['IAM', 'Policy Enforcement', 'Network Security', 'Compliance']
  },
  {
    title: 'Cloud Migration & Integration',
    description: 'Seamlessly migrating existing infrastructure and applications to the cloud and integrating systems.',
    icon: ArrowPathIcon,
    skills: ['Migration Planning', 'System Integration', 'Hybrid Cloud']
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Mr. Kolade Adio',
    role: 'Senior Director',
    imageUrl: 'https://storage.googleapis.com/agent-tools-public-test-assets/kolade-adio.png'
  },
  {
    name: 'Miss Maya Adio',
    role: 'Co-Director',
    imageUrl: 'https://picsum.photos/seed/maya/400/400'
  },
  {
    name: 'Miss Meggy Adio',
    role: 'Co-Director',
    imageUrl: 'https://picsum.photos/seed/meggy/400/400'
  }
];