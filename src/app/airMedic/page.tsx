"use client"

import { TrendingUp } from "lucide-react"
import Image from 'next/image';
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { CombinedSection } from "@/components/3Dpin";
const chartData = [
  { month: "Endurance", desktop: 186, mobile: 80 },
  { month: "Range", desktop: 305, mobile: 200 },
  { month: "Size", desktop: 237, mobile: 120 },
  { month: "Performance", desktop: 73, mobile: 190 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig

export function airMedic() {
  return (
    
    <CombinedSection />
  
  )
}


export default airMedic;
