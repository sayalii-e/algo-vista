"use client"

import { useState, useRef, useEffect } from "react"
import * as d3 from "d3"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { VisualizationContainer } from "@/components/ui/visualization-container"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ArrayPage() {
    const [array, setArray] = useState<number[]>([])
    const [value, setValue] = useState("")
    const [index, setIndex] = useState("")
    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState<number | null>(null)
    const [operation, setOperation] = useState<string | null>(null)
    const [operationIndex, setOperationIndex] = useState<number | null>(null)
    const svgRef = useRef<SVGSVGElement>(null)

    // Generate random array
    const generateArray = () => {
        const newArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1)
        setArray(newArray)
        setOperation(null)
        setOperationIndex(null)
        setSearchResult(null)
    }

    // Initialize array on component mount
    useEffect(() => {
        generateArray()
    }, [])

    // Insert element at index
    const handleInsert = () => {
        const numValue = Number.parseInt(value)
        const numIndex = Number.parseInt(index)

        if (isNaN(numValue)) {
            alert("Please enter a valid number")
            return
        }

        if (isNaN(numIndex) || numIndex < 0 || numIndex > array.length) {
            alert(`Please enter a valid index between 0 and ${array.length}`)
            return
        }

        const newArray = [...array]
        newArray.splice(numIndex, 0, numValue)

        setOperation("insert")
        setOperationIndex(numIndex)
        setArray(newArray)
        setValue("")
        setIndex("")

        // Reset operation highlight after 2 seconds
        setTimeout(() => {
            setOperation(null)
            setOperationIndex(null)
        }, 2000)
    }

    // Delete element at index
    const handleDelete = () => {
        const numIndex = Number.parseInt(index)

        if (isNaN(numIndex) || numIndex < 0 || numIndex >= array.length) {
            alert(`Please enter a valid index between 0 and ${array.length - 1}`)
            return
        }

        setOperation("delete")
        setOperationIndex(numIndex)

        // Show the element being deleted first, then remove it
        setTimeout(() => {
            const newArray = [...array]
            newArray.splice(numIndex, 1)
            setArray(newArray)
            setIndex("")

            // Reset operation highlight after deletion
            setTimeout(() => {
                setOperation(null)
                setOperationIndex(null)
            }, 1000)
        }, 1000)
    }

    // Search for element
    const handleSearch = () => {
        const numValue = Number.parseInt(searchValue)

        if (isNaN(numValue)) {
            alert("Please enter a valid number to search")
            return
        }

        setOperation("search")
        setOperationIndex(null)
        setSearchResult(null)

        // Animate search process
        let i = 0
        const searchInterval = setInterval(() => {
            setOperationIndex(i)

            if (array[i] === numValue) {
                clearInterval(searchInterval)
                setSearchResult(i)
                setSearchValue("")

                // Reset operation highlight after successful search
                setTimeout(() => {
                    setOperation(null)
                    setOperationIndex(null)
                }, 2000)
            } else if (i >= array.length - 1) {
                clearInterval(searchInterval)
                setSearchResult(-1)
                setSearchValue("")

                // Reset operation highlight after failed search
                setTimeout(() => {
                    setOperation(null)
                    setOperationIndex(null)
                }, 2000)
            } else {
                i++
            }
        }, 500)
    }

    // Visualize the array
    useEffect(() => {
        if (!svgRef.current) return

        const svg = d3.select(svgRef.current)
        const width = svgRef.current.clientWidth
        const height = svgRef.current.clientHeight
        const cellWidth = Math.min(80, width / array.length)
        const cellHeight = 60

        // Calculate total array width
        const totalArrayWidth = cellWidth * array.length
        // Center point for the array (horizontally)
        const startX = (width - totalArrayWidth) / 2

        svg.selectAll("*").remove()

        // Create a group for the entire array (for better centering)
        const arrayGroup = svg
            .append("g")
            .attr("transform", `translate(${startX}, 0)`)
            .attr("class", "array-container")

        // Create a group for each array element
        const cells = arrayGroup
            .selectAll("g.cell")
            .data(array)
            .enter()
            .append("g")
            .attr("class", "cell")
            .attr("transform", (_, i) => `translate(${i * cellWidth}, ${height / 2 - cellHeight / 2})`)

        // Add rectangle for each cell
        cells
            .append("rect")
            .attr("width", cellWidth - 4)
            .attr("height", cellHeight)
            .attr("rx", 4)
            .attr("fill", (_, i) => {
                if (operation === "insert" && i === operationIndex) return "#10b981"
                if (operation === "delete" && i === operationIndex) return "#ef4444"
                if (operation === "search" && i === operationIndex) return "#3b82f6"
                if (operation === "search" && searchResult !== null && i === searchResult) return "#10b981"
                return "#64748b"
            })
            .attr("stroke", "#334155")
            .attr("stroke-width", 1)

        // Add text for array values
        cells
            .append("text")
            .text((d) => d)
            .attr("x", cellWidth / 2 - 2)
            .attr("y", cellHeight / 2 + 5)
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .attr("font-size", "16px")

        // Add index labels
        cells
            .append("text")
            .text((_, i) => i)
            .attr("x", cellWidth / 2 - 2)
            .attr("y", cellHeight + 20)
            .attr("text-anchor", "middle")
            .attr("fill", "currentColor")
            .attr("font-size", "12px")
    }, [array, operation, operationIndex, searchResult])

    // Visualization component
    const visualization = (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-full flex justify-center">
                <svg ref={svgRef} width="100%" height="300" className="overflow-visible" />
            </div>

            <div className="mt-4 flex justify-center">
                {searchResult === -1 && (
                    <div className="p-2 bg-red-100 text-red-800 rounded text-center">
                        Element not found in the array
                    </div>
                )}
                {searchResult !== null && searchResult !== -1 && (
                    <div className="p-2 bg-green-100 text-green-800 rounded text-center">
                        Element found at index {searchResult}
                    </div>
                )}
            </div>
        </div>
    )

    // Controls component
    const controls = (
        <Tabs defaultValue="insert">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="insert">Insert</TabsTrigger>
                <TabsTrigger value="delete">Delete</TabsTrigger>
                <TabsTrigger value="search">Search</TabsTrigger>
            </TabsList>

            <TabsContent value="insert" className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="insert-value">Value</Label>
                        <Input
                            id="insert-value"
                            type="number"
                            placeholder="Enter value"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="insert-index">Index</Label>
                        <Input
                            id="insert-index"
                            type="number"
                            placeholder="Enter index"
                            value={index}
                            onChange={(e) => setIndex(e.target.value)}
                        />
                    </div>
                </div>
                <Button onClick={handleInsert} className="w-full">
                    Insert Element
                </Button>
            </TabsContent>

            <TabsContent value="delete" className="space-y-4 pt-4">
                <div className="space-y-2">
                    <Label htmlFor="delete-index">Index</Label>
                    <Input
                        id="delete-index"
                        type="number"
                        placeholder="Enter index to delete"
                        value={index}
                        onChange={(e) => setIndex(e.target.value)}
                    />
                </div>
                <Button onClick={handleDelete} variant="destructive" className="w-full">
                    Delete Element
                </Button>
            </TabsContent>

            <TabsContent value="search" className="space-y-4 pt-4">
                <div className="space-y-2">
                    <Label htmlFor="search-value">Value</Label>
                    <Input
                        id="search-value"
                        type="number"
                        placeholder="Enter value to search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
                <Button onClick={handleSearch} className="w-full">
                    Search Element
                </Button>
            </TabsContent>

            <div className="mt-4">
                <Button onClick={generateArray} variant="outline" className="w-full">
                    Generate New Array
                </Button>
            </div>
        </Tabs>
    )

    // Information component
    const info = (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Array Data Structure</h3>
            <p>
                An array is a collection of elements stored at contiguous memory locations, each identified by an index. It is
                one of the simplest and most widely used data structures.
            </p>
            <div className="space-y-2">
                <h4 className="font-medium">Time Complexity:</h4>
                <ul className="list-disc list-inside text-sm">
                    <li>Access: O(1) - Constant time access by index</li>
                    <li>Search: O(n) - Linear search in unsorted array</li>
                    <li>Insertion: O(n) - Need to shift elements</li>
                    <li>Deletion: O(n) - Need to shift elements</li>
                </ul>
            </div>
            <div className="space-y-2">
                <h4 className="font-medium">Common Operations:</h4>
                <ul className="list-disc list-inside text-sm">
                    <li>Insertion - Add an element at a given position</li>
                    <li>Deletion - Remove an element at a given position</li>
                    <li>Search - Find the position of an element</li>
                    <li>Traversal - Visit each element in the array</li>
                </ul>
            </div>
        </div>
    )

    // Code component
    const code = `// Array operations in JavaScript

// Insertion at index
function insertAt(arr, index, element) {
  // Create a copy of the array
  const result = [...arr];
  
  // Insert element at index
  result.splice(index, 0, element);
  
  return result;
}

// Deletion at index
function deleteAt(arr, index) {
  // Create a copy of the array
  const result = [...arr];
  
  // Remove element at index
  result.splice(index, 1);
  
  return result;
}

// Linear search
function linearSearch(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i; // Return index if found
    }
  }
  
  return -1; // Return -1 if not found
}

// Array traversal
function traverse(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}`

    return (
        <VisualizationContainer
            title="Array Data Structure"
            description="Visualize basic array operations: insertion, deletion, and searching"
            visualization={visualization}
            controls={controls}
            info={info}
            code={code}
        />
    )
}