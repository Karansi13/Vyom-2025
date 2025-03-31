"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, X } from "lucide-react"

interface EventsFilterProps {
  initialCategory?: string
  initialSearch?: string
}

export function EventsFilter({ initialCategory = "all", initialSearch = "" }: EventsFilterProps) {
  const [category, setCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState(initialSearch)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Update URL when filters change
    const params = new URLSearchParams()

    if (category && category !== "all") {
      params.set("category", category)
    }

    if (searchTerm) {
      params.set("search", searchTerm)
    }

    const queryString = params.toString()
    const url = queryString ? `${pathname}?${queryString}` : pathname

    router.push(url)
  }, [category, searchTerm, pathname, router])

  const handleCategoryChange = (value: string) => {
    setCategory(value)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const clearSearch = () => {
    setSearchTerm("")
  }

  return (
<div className="mb-8 space-y-4">
  <Tabs defaultValue={category} onValueChange={handleCategoryChange} className="w-full font-nav tracking-widest">
    <div className="overflow-x-auto">
      <TabsList className="flex bg-red-900/50 min-w-max space-x-4 lg:space-x-8 rounded-sm overflow-hidden">
        <TabsTrigger
          value="all"
          className="flex-1 px-8 py-4 text-center text-md font-semibold transition-all duration-300 ease-in-out
            data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:rounded-lg data-[state=active]:shadow-md"
        >
          All
        </TabsTrigger>
        <TabsTrigger
          value="technical"
          className="flex-1 px-8 py-4 text-center text-md font-semibold transition-all duration-300 ease-in-out
            data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:rounded-lg data-[state=active]:shadow-md"
        >
          Technical
        </TabsTrigger>
        <TabsTrigger
          value="cultural"
          className="flex-1 px-8 py-4 text-center text-md font-semibold transition-all duration-300 ease-in-out
            data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:rounded-lg data-[state=active]:shadow-md"
        >
          Cultural
        </TabsTrigger>
        <TabsTrigger
          value="sports"
          className="flex-1 px-8 py-4 text-center text-md font-semibold transition-all duration-300 ease-in-out
            data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:rounded-lg data-[state=active]:shadow-md"
        >
          Sports
        </TabsTrigger>
        <TabsTrigger
          value="esports"
          className="flex-1 px-8 py-4 text-center text-md font-semibold transition-all duration-300 ease-in-out
            data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:rounded-lg data-[state=active]:shadow-md"
        >
          E-Sports
        </TabsTrigger>
        <TabsTrigger
          value="funevents"
          className="flex-1 px-8 py-4 text-center text-md font-semibold transition-all duration-300 ease-in-out
            data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:rounded-lg data-[state=active]:shadow-md"
        >
          Fun Events
        </TabsTrigger>
        <TabsTrigger
          value="other"
          className="flex-1 px-8 py-4 text-center text-md font-semibold transition-all duration-300 ease-in-out
            data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:rounded-lg data-[state=active]:shadow-md"
        >
          OTHER
        </TabsTrigger>
      </TabsList>
    </div>
  </Tabs>





      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="pl-10 bg-red-900/30 border-red-700/30 focus:border-red-500"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
            onClick={clearSearch}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
      </div>
    </div>
  )
}

