import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SortingPage() {
    const sortingAlgorithms = [
        {
            id: "bubble-sort",
            name: "Bubble Sort",
            description:
                "A simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.",
            complexity: "O(n²)",
        },
        {
            id: "selection-sort",
            name: "Selection Sort",
            description:
                "An in-place comparison sorting algorithm that divides the input list into two parts: a sorted sublist and an unsorted sublist.",
            complexity: "O(n²)",
        },
        {
            id: "insertion-sort",
            name: "Insertion Sort",
            description:
                "Builds the final sorted array one item at a time. It's much less efficient on large lists than more advanced algorithms.",
            complexity: "O(n²)",
        },
        {
            id: "merge-sort",
            name: "Merge Sort",
            description:
                "An efficient, stable, comparison-based, divide and conquer sorting algorithm that divides the input array into two halves.",
            complexity: "O(n log n)",
        },
        {
            id: "quick-sort",
            name: "Quick Sort",
            description: "An efficient, in-place sorting algorithm that uses divide and conquer strategy to sort elements.",
            complexity: "O(n log n) average, O(n²) worst case",
        },
        {
            id: "heap-sort",
            name: "Heap Sort",
            description: "A comparison-based sorting algorithm that uses a binary heap data structure to sort elements.",
            complexity: "O(n log n)",
        },
    ]

    return (
        <div className="container py-8 mx-auto flex justify-center">
            <div className="flex flex-col space-y-6 items-center max-w-6xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight">Data Structures</h1>
                    <p className="text-muted-foreground">Explore different data structures and their operations</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {sortingAlgorithms.map((algorithm) => (
                        <Card key={algorithm.id} className="flex flex-col">
                            <CardHeader className="text-center">
                                <CardTitle>{algorithm.name}</CardTitle>
                                <CardDescription>
                                    Time Complexity: {algorithm.complexity}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground text-center">{algorithm.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full">
                                    <Link href={`/visualize/sorting/${algorithm.id}`}>
                                        Visualize <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}