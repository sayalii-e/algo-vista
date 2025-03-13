import Link from "next/link"
import { ArrowRight, Code, Database, GitBranch, LineChart, Network, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-3 max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Data Structures & Algorithms Visualizer
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Visualize and understand complex algorithms and data structures with interactive animations.
              </p>
            </div>
            <div>
              <Button asChild size="lg" className="mt-2">
                <Link href="#categories">
                  Explore Algorithms <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-3 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Algorithm Categories</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore different categories of data structures and algorithms
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
            {/* Data Structures Card */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Database className="mr-2 h-5 w-5" />
                  Data Structures
                </CardTitle>
                <CardDescription className="text-center">
                  Fundamental building blocks for organizing and storing data
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mx-auto max-w-xs">
                  <li>Arrays & Linked Lists</li>
                  <li>Stacks & Queues</li>
                  <li>Trees & Heaps</li>
                  <li>Graphs & Hash Tables</li>
                </ul>
              </CardContent>
              <CardFooter className="pt-2">
                <Button asChild className="w-full">
                  <Link href="/visualize/data-structures">
                    Explore Data Structures <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Sorting Algorithms Card */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <LineChart className="mr-2 h-5 w-5" />
                  Sorting Algorithms
                </CardTitle>
                <CardDescription className="text-center">
                  Methods for rearranging elements in a specific order
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mx-auto max-w-xs">
                  <li>Bubble, Selection & Insertion Sort</li>
                  <li>Merge & Quick Sort</li>
                  <li>Heap Sort</li>
                  <li>Radix & Counting Sort</li>
                </ul>
              </CardContent>
              <CardFooter className="pt-2">
                <Button asChild className="w-full">
                  <Link href="/visualize/sorting">
                    Explore Sorting Algorithms <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Searching Algorithms Card */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Search className="mr-2 h-5 w-5" />
                  Searching Algorithms
                </CardTitle>
                <CardDescription className="text-center">
                  Techniques for finding elements within data structures
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mx-auto max-w-xs">
                  <li>Linear Search</li>
                  <li>Binary Search</li>
                  <li>Jump Search</li>
                  <li>Interpolation Search</li>
                </ul>
              </CardContent>
              <CardFooter className="pt-2">
                <Button asChild className="w-full">
                  <Link href="/visualize/searching">
                    Explore Searching Algorithms <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Graph Algorithms Card */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Network className="mr-2 h-5 w-5" />
                  Graph Algorithms
                </CardTitle>
                <CardDescription className="text-center">
                  Algorithms for processing and analyzing graph structures
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mx-auto max-w-xs">
                  <li>BFS & DFS</li>
                  <li>Dijkstra's Algorithm</li>
                  <li>Kruskal's & Prim's Algorithm</li>
                  <li>Topological Sort</li>
                </ul>
              </CardContent>
              <CardFooter className="pt-2">
                <Button asChild className="w-full">
                  <Link href="/visualize/graph">
                    Explore Graph Algorithms <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Dynamic Programming Card */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Code className="mr-2 h-5 w-5" />
                  Dynamic Programming
                </CardTitle>
                <CardDescription className="text-center">
                  Method for solving complex problems by breaking them down
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mx-auto max-w-xs">
                  <li>Fibonacci Sequence</li>
                  <li>Longest Common Subsequence</li>
                  <li>Knapsack Problem</li>
                  <li>Matrix Chain Multiplication</li>
                </ul>
              </CardContent>
              <CardFooter className="pt-2">
                <Button asChild className="w-full">
                  <Link href="/visualize/dynamic-programming">
                    Explore Dynamic Programming <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Other Algorithms Card */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <GitBranch className="mr-2 h-5 w-5" />
                  Other Algorithms
                </CardTitle>
                <CardDescription className="text-center">Additional important algorithmic techniques</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mx-auto max-w-xs">
                  <li>Greedy Algorithms</li>
                  <li>Backtracking</li>
                  <li>Divide and Conquer</li>
                  <li>String Algorithms</li>
                </ul>
              </CardContent>
              <CardFooter className="pt-2">
                <Button asChild className="w-full">
                  <Link href="/visualize/other">
                    Explore Other Algorithms <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-3 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                What makes our algorithm visualizer special
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
            <div className="flex flex-col items-center space-y-3 border rounded-lg p-6 text-center">
              <div className="p-3 bg-primary/10 rounded-full">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Interactive Visualizations</h3>
              <p className="text-center text-muted-foreground">
                See algorithms in action with step-by-step interactive animations
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 border rounded-lg p-6 text-center">
              <div className="p-3 bg-primary/10 rounded-full">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Code Walkthrough</h3>
              <p className="text-center text-muted-foreground">Follow along with the code as the algorithm executes</p>
            </div>
            <div className="flex flex-col items-center space-y-3 border rounded-lg p-6 text-center">
              <div className="p-3 bg-primary/10 rounded-full">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Comprehensive Coverage</h3>
              <p className="text-center text-muted-foreground">
                Explore a wide range of data structures and algorithms
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}