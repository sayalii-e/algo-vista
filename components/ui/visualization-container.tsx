import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface VisualizationContainerProps {
    title: string
    description: string
    visualization: React.ReactNode
    code: React.ReactNode
    info: React.ReactNode
    controls: React.ReactNode
}

export function VisualizationContainer({
    title,
    description,
    visualization,
    code,
    info,
    controls,
}: VisualizationContainerProps) {
    return (
        <div className="container py-8">
            <div className="flex flex-col space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
                    <p className="text-muted-foreground">{description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Visualization</CardTitle>
                            <CardDescription>Visual representation of the algorithm</CardDescription>
                        </CardHeader>
                        <CardContent className="min-h-[400px]">{visualization}</CardContent>
                    </Card>

                    <div className="flex flex-col gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Controls</CardTitle>
                                <CardDescription>Adjust parameters and control execution</CardDescription>
                            </CardHeader>
                            <CardContent>{controls}</CardContent>
                        </Card>

                        <Tabs defaultValue="info" className="flex-1">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="info">Information</TabsTrigger>
                                <TabsTrigger value="code">Code</TabsTrigger>
                            </TabsList>
                            <TabsContent value="info" className="border rounded-md mt-2 p-4 min-h-[300px]">
                                {info}
                            </TabsContent>
                            <TabsContent value="code" className="border rounded-md mt-2 p-4 min-h-[300px]">
                                <pre className="overflow-auto text-sm">{code}</pre>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

