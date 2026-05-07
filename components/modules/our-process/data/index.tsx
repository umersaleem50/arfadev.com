import Compass from "@/components/svgs/compass";
import Eye from "@/components/svgs/eye";
import Monitor from "@/components/svgs/monitor";
import PencilIcon from "@/components/svgs/pencil-icon";

export const featureTempData = [
  {
    icon: <PencilIcon className="w-16 h-16" />,
    content: (
      <p>
        We build landing pages that convert visitors into customers and drive
        sales.
      </p>
    ),
  },
  {
    icon: <Monitor className="w-16 h-16" />,
    content: (
      <p>
        We build dashboards and optimize SaaS onboarding to increase activation
        and retention.
      </p>
    ),
  },
  {
    icon: <Compass className="w-16 h-16" />,
    content: (
      <p>We optimize SaaS onboarding to increase activation and retention.</p>
    ),
  },
  {
    icon: <Eye className="w-16 h-16" />,
    content: (
      <p>On-page SEO for better visibility on search engines i.e. Google.</p>
    ),
  },
];
