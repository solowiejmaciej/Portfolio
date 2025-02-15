import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TechnologyCard = ({ tech }) => (
  <Card className="dark:bg-gray-800">
    <CardHeader>
      <CardTitle className="flex flex-col items-center gap-4 dark:text-white">
        <tech.icon className="w-12 h-12 text-[#512bd4] dark:text-[#6d48ff]" />
        {tech.name}
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-wrap gap-2 justify-center">
      {tech.tools.map((tool, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-[#512bd4]/10 dark:bg-[#6d48ff]/20 text-[#512bd4] dark:text-[#6d48ff] rounded-full text-sm"
        >
          {tool}
        </span>
      ))}
    </CardContent>
  </Card>
);

export default TechnologyCard;
