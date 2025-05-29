"use client";

import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  description,
  icon: Icon,
  children,
  className,
  defaultOpen = false,
}) => {
  return (
    <Card className={cn("overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300", className)}>
      <Accordion type="single" collapsible defaultValue={defaultOpen ? "item-1" : undefined}>
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="p-6 hover:no-underline focus:no-underline">
            <div className="flex items-center space-x-4 text-left w-full">
              {Icon && <Icon className="h-8 w-8 text-primary flex-shrink-0" />}
              <div className="flex-grow">
                <CardTitle className="text-xl font-semibold">{title}</CardTitle>
                {description && <CardDescription className="text-sm mt-1">{description}</CardDescription>}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <CardContent className="pt-0 pb-6">
              {children}
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default ExpandableCard;
