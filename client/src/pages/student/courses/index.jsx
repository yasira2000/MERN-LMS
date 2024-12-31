import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { filterOptions, sortOptions } from "@/config";
import { ArrowUpDownIcon } from "lucide-react";
import React, { useState } from "react";

export default function StudentViewCoursesPage() {
  const [sort, setSort] = useState("");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 ">All Courses</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <aside className="w-full md:w-64 space-y-4">
          <div className="p-4 space-y-4">
            {Object.keys(filterOptions).map((keyItem) => (
              <div className="p-4 space-y-4">
                <h3 className="font-bold mb-3">{keyItem.toUpperCase()}</h3>
                <div className="grid gap-2 mt-2">
                  {filterOptions[keyItem].map((option) => (
                    <Label className="flex font-medium items-center gap-3">
                      <Checkbox
                        checked={false}
                        onCheckedChange={() =>
                          handleFilterOnChange(keyItem, option.id)
                        }
                      />
                      {option.label}
                    </Label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
        <main className="flex-1">
          <div className="flex justify-end items-center mb-4 gap-5">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 p-5"
                >
                  <ArrowUpDownIcon className="h-4 w-4" />
                  <span className="text-[16px] font-medium">Sort By</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[180px]">
                <DropdownMenuRadioGroup
                  value={sort}
                  onValueChange={(value) => setSort(value)}
                >
                  {sortOptions.map((sortItem) => (
                    <DropdownMenuRadioItem
                      value={sortItem.id}
                      key={sortItem.id}
                    >
                      {sortItem.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </main>
      </div>
    </div>
  );
}
