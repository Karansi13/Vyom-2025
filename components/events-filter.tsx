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
  const [category, setCategory] = useState(initialCategory)
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
      <Tabs defaultValue={category} onValueChange={handleCategoryChange} className="w-full">
        <TabsList className="grid grid-cols-4 mb-4 bg-green-900/50">
          <TabsTrigger value="all" className="data-[state=active]:bg-amber-600">
            All
          </TabsTrigger>
          <TabsTrigger value="technical" className="data-[state=active]:bg-amber-600">
            Technical
          </TabsTrigger>
          <TabsTrigger value="cultural" className="data-[state=active]:bg-amber-600">
            Cultural
          </TabsTrigger>
          <TabsTrigger value="sports" className="data-[state=active]:bg-amber-600">
            Sports
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="pl-10 bg-green-900/30 border-amber-700/30 focus:border-amber-500"
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

