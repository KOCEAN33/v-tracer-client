'use client';

import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const AnswersSeparator = () => {
  return (
    <>
      <div className=" ">
        <div className="flex flex-row items-center justify-between">
          <div>
            <h2 className="mx-2 text-2xl font-semibold tracking-tight">
              Answers
            </h2>
          </div>

          <div className="mx-4 h-[1px] w-full bg-border"></div>

          <div>
            <div className=" flex flex-row items-center whitespace-nowrap text-sm">
              <p className="mx-2">Sorted by.</p>
              <div>
                <Select>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="추천 순(기본)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">추천 순</SelectItem>
                      <SelectItem value="banana">최신 순</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
