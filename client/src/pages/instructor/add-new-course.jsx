import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export default function AddNewCoursePage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold mb-5">Create a new Course</h1>
        <Button className="text-sm tracking-wider font-bold px-8">
          Submit
        </Button>
      </div>
      <Card> 
        <CardContent>
          <div className="container mx-auto p-4">
            <Tabs defaultValue="curriculum" className="space-y-4">
              <TabsList >
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="course-landing-page">
                  Course Landing Page
                </TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="curriculum">Curriculum</TabsContent>
              <TabsContent value="course-landing-page">
                Course Landing Page
              </TabsContent>
              <TabsContent value="settings">Settings</TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
