import * as Toolbar from '@radix-ui/react-toolbar';
import {
  StrikethroughIcon,
  TextAlignLeftIcon,
  UnderlineIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
} from '@radix-ui/react-icons';

import HeadingList from './HeadingList';

export default function FontFormatGroup () {
  return (
    <Toolbar.ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
    <Toolbar.ToggleItem
    className="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 first:ml-0 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
    value="left"
    aria-label="Left aligned"
  >
    <HeadingList />
  </Toolbar.ToggleItem>
    <Toolbar.ToggleItem
    className="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 first:ml-0 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
    value="left"
    aria-label="Left aligned"
  >
    <FontItalicIcon />
  </Toolbar.ToggleItem>
  <Toolbar.ToggleItem
    className="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 first:ml-0 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
    value="center"
    aria-label="Center aligned"
  >
    <UnderlineIcon />
  </Toolbar.ToggleItem>
  <Toolbar.ToggleItem
    className="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 first:ml-0 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
    value="right"
    aria-label="Right aligned"
  >
    <StrikethroughIcon />
  </Toolbar.ToggleItem>
</Toolbar.ToggleGroup>
  )
}