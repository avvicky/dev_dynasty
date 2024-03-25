/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/CrD86KbRSjY
 */
import { Label } from "undefined/components/ui/label";
import { Input } from "undefined/components/ui/input";
import { Button } from "undefined/components/ui/button";

export function Feed() {
  return (
    <div className="bg-gray-50/90 border-t">
      <div className="container py-12">
        <div className="grid max-w-4xl gap-4 px-4 mx-auto text-center sm:gap-8 sm:px-6 lg:gap-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Route Finder
          </h2>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Enter your source and destination to find the best route.
          </p>
          <div className="mx-auto space-y-4 sm:w-[500px]">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
              <input placeholder="Enter your source" type="text" />
                {/* <Label htmlFor="source">Source</Label>
                <Input
                  id="source"
                  placeholder="Enter your source"
                  type="text"
                /> */}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="destination">Destination</Label>
                <Input
                  id="destination"
                  placeholder="Enter your destination"
                  type="text"
                />
              </div>
            </div>
            <Button size="lg">Find Route</Button>
          </div>
        </div>
      </div>
    </div>
  );
}