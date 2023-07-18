import {
  PlusIcon,
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
} from '@radix-ui/react-icons';

export const CommandComponents = {
  'add-more': 'o-add-more-btn',
  'font-family': 'o-font-family-dropdown',
  'fore-color': 'o-fore-color-dropdown',
  'back-color': 'o-back-color-dropdown',
  'align-dropdown': 'o-align-dropdown',
  'align-group': 'o-align-group',
  'line-height': 'o-line-height-dropdown',
  'list-dropdown': 'o-list-dropdown',
  'indent-dropdown': 'o-indent-dropdown',
  'text-format-dropdown': 'o-text-format-dropdown',
  heading: 'o-heading-dropdown',
  link: 'o-link-btn',
  photo: 'o-photo-btn',
  table: 'o-table-btn',
  'link-off': 'o-link-off-btn',
  'link-open': 'o-link-open-btn',
  'link-edit': 'o-link-edit-btn',
}

export const DefaultToolbar = [
  {
    items: [
      {
        name: "addMore",
        icon: <PlusIcon /> 
      },
    ]
  },
  {
    items: [
      {
        name: 'bold',
        icon: <FontBoldIcon />
  'strike',
  'code',
      },
      {
        name: 'italic',
        icon: <FontItalicIcon />
      },
      {
        name: "underline",
        icon: <FontItalicIcon />
      },
      {
        name: "strike",
        icon: <FontStr
      }
    ]
  }
  'separator',
  
  'separator',
  'heading',
  'font-family',
  'fore-color',
  'back-color',
  'format_clear',
  'separator',
  'align-dropdown',
  'indent',
  'outdent',
  'line-height',
  'separator',
  'horizontal',
  'bullet_list',
  'ordered_list',
  'todo_list',
  'separator',
  'blockquote',
  'code_block',
  'link',
  'photo',
  'table',
  'separator',
  'undo',
  'redo',
  'separator',
  'print',
]