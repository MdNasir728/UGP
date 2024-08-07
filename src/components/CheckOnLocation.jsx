import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { uttarPradeshDistricts } from "@/assets/data/districts";
import { districtData } from "@/assets/data/districtData";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Detail } from "@/assets/data/detail";
import { limit } from "@/assets/data/limit";

const formSchema = z.object({
  state: z.string({
    message: "",
  }),
  district: z.string({
    message: "",
  }),
});

const CheckOnLocation = () => {
  const [result, setResult] = useState();
  const form = useForm({ resolver: zodResolver(formSchema) });
  function onSubmit(data) {
    if (data.state) {
      const Result = districtData.filter(
        (district) => district.id == data.district
      );
      setResult(Result);
    }
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex justify-center w-full gap-6"
        >
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[300px] bg-[#262730]">
                      <SelectValue
                        aria-disabled="true"
                        placeholder="Select State"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border-2 border-white bg-[#0e1116] shadow-md text-white p-0 m-0">
                    <SelectGroup>
                      <SelectLabel>States</SelectLabel>
                      <SelectItem value="Uttar Pradesh">
                        Uttar Pradesh
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[300px] bg-[#262730]">
                      <SelectValue placeholder="Select District" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border-2 border-white bg-[#0e1116] shadow-md text-white p-0 m-0">
                    <SelectGroup>
                      <SelectLabel>Districts</SelectLabel>
                      {uttarPradeshDistricts.map((district) => (
                        <SelectItem key={district} value={district}>
                          {district}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-[8rem] gradient font-bold text-lg shadow-gray-400 hover:opacity-75"
          >
            Submit
          </Button>
        </form>
      </Form>

      <div className="my-12 mx-auto w-[70%] bg-[#323537] rounded-lg px-6 ">
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead>Parameter</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Limit</TableHead>
              <TableHead>Unit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {result?.map((data) =>
              data.data?.map((tbData) => (
                <Dialog key={tbData.label}>
                  <DialogTrigger asChild>
                    <TableRow>
                      <TableCell className="font-medium">
                        {tbData.label}
                      </TableCell>
                      <TableCell>{tbData.value}</TableCell>
                      <TableCell>{tbData.limit}</TableCell>
                      <TableCell>{tbData.unit}</TableCell>
                    </TableRow>
                    
                  </DialogTrigger>
                  <DialogContent className="bg-[#262730] text-white">
                    {Detail.filter((item) => item.title == tbData.label).map(
                      (detail) => (
                        <DialogHeader
                          key={detail.subtitle}
                          className="w-full h-full flex flex-col gap-2"
                        >
                          {console.log(detail)}
                          <DialogTitle>{detail.title}</DialogTitle>
                          <DialogDescription>
                            {detail.subtitle}
                          </DialogDescription>
                          <div>{detail.introduction}</div>
                        </DialogHeader>
                      )
                    )}
                  </DialogContent>
                </Dialog>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CheckOnLocation;
