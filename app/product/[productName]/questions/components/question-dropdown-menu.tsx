import { useState } from 'react';
import { MoreVertical } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const QuestionDropdownMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative ">
      <div className="flex  flex-row gap-3 pr-2">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center justify-center gap-2 pl-1.5 transition">
              <div className="h-15 w-15 rounded-full">
                <button className="inline-flex h-[35px] w-[35px] items-center justify-center rounded-full outline-none hover:bg-gray-300 hover:dark:bg-gray-800">
                  <MoreVertical color="#373737" size="20" />
                </button>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[100px] ">
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">
                신고
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                수정
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-red-600">
                삭제
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
