import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HeadingIcon, TriangleDownIcon, PilcrowIcon } from "@radix-ui/react-icons"

export default function HeadingList() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex" asChild> 
        <div>
          <HeadingIcon />
          <TriangleDownIcon />
          </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
      <DropdownMenuItem className="flex justify-between">
          <PilcrowIcon />
          <span>Paragraph</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
        <DropdownMenuItem className="flex justify-between"> 
          <span>H1</span>
          <span>Heading 1</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-between">
          <span>H2</span>
          <span>Heading 2</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-between">
          <span>H3</span>
          <span>Heading 3</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-between">
          <span>H4</span>
          <span>Heading 4</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
