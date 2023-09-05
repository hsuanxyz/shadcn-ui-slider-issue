import { Inter } from 'next/font/google'
import {Slider} from "@/components/ui/slider";
import { Checkbox } from '@/components/ui/checkbox';
import {useState} from "react";
import {CheckedState} from "@radix-ui/react-checkbox";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [disabled, setDisabled] = useState<CheckedState>(false)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex items-center space-x-2 w-full">
        <Checkbox id="disabled" checked={disabled} onCheckedChange={setDisabled}/>
        <label
          htmlFor="disabled"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Disabled
        </label>
        <Slider disabled={!!disabled} defaultValue={[33]} max={100} step={1} />
      </div>
      
    </main>
  )
}
