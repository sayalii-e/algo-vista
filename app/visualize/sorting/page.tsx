import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DataStructuresPage() {
    const dataStructures = [
        {
            id: "array",
            name: "Array",
            description: "A collection of elements stored at contiguous memory locations, each identified by an index.",
            operations: "Insertion, Deletion, Searching, Traversal",
        },
        {
            id: "linked-list",
            name: "Linked List",
            description:
                "A linear data structure where elements are not stored at contiguous locations but connected using pointers.",
            operations: "Insertion, Deletion, Traversal",
            types: "Singly, Doubly, Circular",
        },
        {
            id: "stack",
            name: "Stack",
            description: "A linear data structure that follows the Last In First Out (LIFO) principle.",
            operations: "Push, Pop, Peek",
        },
        {
            id: "queue",
            name: "Queue",
            description: "A linear data structure that follows the First In First Out (FIFO) principle.",
            operations: "Enqueue, Dequeue",
            types: "Simple, Circular, Priority, Deque",
        },
        {
            id: "tree",
            name: "Tree",
            description: "A hierarchical data structure with a root value and subtrees of children with a parent node.",
            types: "Binary Tree, Binary Search Tree, AVL Tree, Heap",
        },
        {
            id: "graph",
            name: "Graph",
            description: "A non-linear data structure consisting of nodes and edges connecting these nodes.",
            representations: "Adjacency Matrix, Adjacency List",
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
                    {dataStructures.map((dataStructure) => (
                        <Card key={dataStructure.id} className="flex flex-col">
                            <CardHeader className="text-center">
                                <CardTitle>{dataStructure.name}</CardTitle>
                                <CardDescription>
                                    {dataStructure.operations && `Operations: ${dataStructure.operations}`}
                                    {dataStructure.types && `Types: ${dataStructure.types}`}
                                    {dataStructure.representations && `Representations: ${dataStructure.representations}`}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground text-center">{dataStructure.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full">
                                    <Link href={`/visualize/data-structures/${dataStructure.id}`}>
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